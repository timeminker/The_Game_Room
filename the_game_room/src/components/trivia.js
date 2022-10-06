import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

const Trivia = (props) => {
  let [view, setView] = useState('wantToPlay')
  let [questionNumber, setQuestionNumber] = useState(0)
  let [score, setScore] = useState(0)

  const submitNumber = () => {
    props.setNumOfQuestions()
  }

  const submitDifficulty = () => {
    props.setDifficulty()
  }

  let answers = [props.trivia[questionNumber].incorrectAnswers[0], props.trivia[questionNumber].incorrectAnswers[1], props.trivia[questionNumber].incorrectAnswers[2], props.trivia[questionNumber].correctAnswer]

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  let shuffled = shuffleArray(answers)

  const checkAnswer = (answer, event) => {
    event.preventDefault()
    if (questionNumber <= props.numOfQuestions-2) {
      if (answer == props.trivia[questionNumber].correctAnswer) {
        console.log(answer)
        // setQuestionNumber(questionNumber+1)
        setScore(score+10)
        setView('correct')
        console.log(questionNumber);
      } else {
        console.log('WRONG');
        // setQuestionNumber(questionNumber+1)
        setView('wrong')
        console.log(questionNumber);
      }
    } else {
      if (answer == props.trivia[questionNumber].correctAnswer) {
        setScore(score+10)
        setView('gameOver')
      } else {
        setView('gameOver')
      }

    }
  }

  const playTrivia = () => {
    props.getTrivia()
    setView('readyToPlay')
  }

  const playAgain = () => {
    setView('wantToPlay')
    setScore(0)
    setQuestionNumber(0)
  }

  const nextQuestion = () => {
    setQuestionNumber(questionNumber+1)
    setView('readyToPlay')
  }

  return (
    <>
      {view === 'wantToPlay' ?
        <div className="settings">
        <br/>
          <form>
            <label>Choose number of questions:</label>
            <select value={props.numOfQuestions} onChange={(e) => {
              props.setNumOfQuestions(e.target.value)
            }}>
              <option value="6">5</option>
              <option value="11">10</option>
              <option value="21">20</option>
            </select>

          </form>
          <form>
            <label>Choose difficulty:</label>
            <select value={props.difficulty} onChange={(e) => {
              props.setDifficulty(e.target.value)
            }}>
              <option value="easy">EASY</option>
              <option value="medium">MEDIUM</option>
              <option value="hard">HARD</option>
            </select>

          </form>
          <h1>Are you ready to play trivia?</h1>
          <button className="dropbtn" onClick={playTrivia}>Yes!</button>
          <button className="dropbtn" onClick={props.triviaView}>No!</button>
        </div>
      : null}

      {view === 'readyToPlay' ?
        <div className='trivia-body'>
        <h1>Trivia</h1>
        <br/>
        <h1>Your Score: {score}</h1>
        <br/>
        <p>Category: {props.trivia[questionNumber].category}</p>
        <h2>Question: {props.trivia[questionNumber].question}</h2>
        <br/>
        {answers.map((answer) => {
          return (
            <>
              <button className="dropbtn" onClick={(event) => {
                checkAnswer(answer, event)
              }} key={answer.id}>{answer}</button>
            </>
          )
        })}
        <br/>
        <br/>
        <button className="dropbtn" onClick={props.triviaView}>Go Back</button>
      </div>
    : null}

    {view === 'gameOver' ?
    <div>
      <h1>GAME OVER</h1>
      <br/>
      <br/>
      <h4>Your score was {score} points.</h4>
      <br/>
      <h2>{score === (props.numOfQuestions * 10) ? `Perfect Score! You answered all ${props.numOfQuestions} questions correctly!` : score === 0 ? `You\'re a big dummy, you got 0/${props.numOfQuestions} correct.` : score / (props.numOfQuestions * 10) > .5 ? `Great Job! Almost all right! ${score/10}/${props.numOfQuestions} correct!` : score / (props.numOfQuestions * 10) < .5 ? `You didn\'t do well, only ${score/10}/${props.numOfQuestions} correct. 🤷` : null}</h2>
      <br/>
      <button className="dropbtn" onClick={playAgain}>Play Again</button>
      <button className="dropbtn" onClick={props.triviaView}>Return to Main Menu</button>
    </div>
    : null}

    {view === 'correct' ?
    <div className="modal">
      <h1>Correct!</h1>
      <br/>
      <h2>'{props.trivia[questionNumber].correctAnswer}' was the correct answer!</h2>
      <br/>
      <h2>Your score is now {score} points.</h2>
      <br/>
      <button className="dropbtn" onClick={nextQuestion}>Next Question</button>
    </div>
    :null}

    {view === 'wrong' ?
    <div  className="modal">
      <h1>Incorrect!</h1>
      <br/>
      <h2>Sorry, the correct answer was '{props.trivia[questionNumber].correctAnswer}'</h2>
      <br/>
      <h2>Your score is {score} points.</h2>
      <br/>
      <button className="dropbtn" onClick={nextQuestion}>Next Question</button>
    </div>
    :null}
    </>
  )
}

export default Trivia
