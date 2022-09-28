import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

const Trivia = (props) => {
  let [view, setView] = useState('wantToPlay')
  let [questionNumber, setQuestionNumber] = useState(0)
  let [score, setScore] = useState(0)
  const [trivia, setTrivia] = useState([])

  const [numOfQuestions, setNumOfQuestions] = useState(5)
  const [difficulty, setDifficulty] = useState('easy')

  const getTrivia = () => {
    axios.get(`https://the-trivia-api.com/api/questions?limit=${numOfQuestions}&difficulty=${difficulty}`).then((response) => {
      setTrivia(response.data)
    })
  }

  const submitNumber = () => {
    setNumOfQuestions()
  }

  const submitDifficulty = () => {
    setDifficulty()
  }

  let answers = [trivia[questionNumber].incorrectAnswers[0], trivia[questionNumber].incorrectAnswers[1], trivia[questionNumber].incorrectAnswers[2], trivia[questionNumber].correctAnswer]

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
    if (questionNumber <= numOfQuestions-2) {
      if (answer == trivia[questionNumber].correctAnswer) {
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
      setView('gameOver')
    }
  }

  const playTrivia = () => {
    getTrivia()
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

  useEffect(() => {
    getTrivia()
  }, [])

  return (
    <>
      {view === 'wantToPlay' ?
        <div>
        <br/>
          <form>
            <label>Choose number of questions:</label>
            <select value={numOfQuestions} onChange={(e) => {
              setNumOfQuestions(e.target.value)
            }}>
              <option value="6">5</option>
              <option value="11">10</option>
              <option value="21">20</option>
            </select>

          </form>
          <form>
            <label>Choose difficulty:</label>
            <select value={difficulty} onChange={(e) => {
              setDifficulty(e.target.value)
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
        <p>Category: {trivia[questionNumber].category}</p>
        <h2>Question: {trivia[questionNumber].question}</h2>
        <br/>
        <p>{answers}</p>
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
        <button onClick={props.triviaView}>Go Back</button>
      </div>
    : null}

    {view === 'gameOver' ?
    <div>
      <h1>GAME OVER</h1>
      <br/>
      <br/>
      <h4>Your score was {score} pounts. Great job!</h4>
      <br/>
      <br/>
      <button className="dropbtn" onClick={playAgain}>Play Again</button>
      <button className="dropbtn" onClick={props.triviaView}>Return to Main Menu</button>
    </div>
    : null}

    {view === 'correct' ?
    <div>
      <h1>Correct!</h1>
      <br/>
      <h2>'{trivia[questionNumber].correctAnswer}' was the correct answer!</h2>
      <br/>
      <h2>Your score is now {score} points.</h2>
      <br/>
      <button className="dropbtn" onClick={nextQuestion}>Next Question</button>
    </div>
    :null}

    {view === 'wrong' ?
    <div>
      <h1>Incorrect!</h1>
      <br/>
      <h2>Sorry, the correct answer was '{trivia[questionNumber].correctAnswer}'</h2>
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


// <div className="dropdown">
//   <button className="dropbtn" onChange={submitNumber}>SELECT NUMBER OF QUESTIONS</button>
//     <div className="dropdown-content">
//       <a value="5">5</a>
//       <a value="10">10</a>
//       <a value="20">20</a>
//     </div>
// </div>
// <br/>
// <br/>
// <div className="dropdown">
//   <button className="dropbtn" onChange={submitDifficulty}>SELECT DIFFICULTY</button>
//     <div className="dropdown-content">
//       <a value="easy">EASY</a>
//       <a value="medium">MEDIUM</a>
//       <a value="hard">HARD</a>
//     </div>
// </div>

// {view === 'wantToPlay' ?
// <div>
// <br/>
//   <form onSubmit={submitNumber}>
//     <label>Choose number of questions:</label>
//     <select>
//       <option value="5">5</option>
//       <option value="10">10</option>
//       <option value="20">20</option>
//     </select>
//     <input type="submit" value="Submit" />
//   </form>
//   <form onSubmit={submitDifficulty}>
//     <label>Choose difficulty:</label>
//     <select>
//       <option value="easy">EASY</option>
//       <option value="medium">MEDIUM</option>
//       <option value="hard">HARD</option>
//     </select>
//     <input type="submit" value="Submit" />
//   </form>
//   <h1>Are you ready to play trivia?</h1>
//   <button className="dropbtn" onClick={playTrivia}>Yes!</button>
//   <button className="dropbtn" onClick={triviaView}>No!</button>
// </div>
// : null }
//
// {view === 'readyToPlay' ?
//
// : null}
