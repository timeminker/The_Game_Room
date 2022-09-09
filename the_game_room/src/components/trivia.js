import React from 'react'
import {useState} from 'react'

const Trivia = (props) => {
  let [view, setView] = useState('wantToPlay')

  let questionNumber = 0
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
    if (answer == props.trivia[questionNumber].correctAnswer) {
      console.log(answer)
      questionNumber++
      console.log(questionNumber);
    } else {
      console.log('WRONG');
      questionNumber++
      console.log(questionNumber);
    }
  }

  const changeView = () => {
    setView('readyToPlay')
  }

  return (
    <>
      {view === 'wantToPlay' ?
      <div>
        <h1>Are you ready to play trivia?</h1>
        <button onClick={changeView}>Yes!</button>
        <button onClick={props.triviaView}>No!</button>
      </div>
      : null }

      {view === 'readyToPlay' ?
        <div className='trivia-body'>
        <h1>Trivia</h1>
        <br/>
        <br/>
        <p>Category: {props.trivia[questionNumber].category}</p>
        <h2>Question: {props.trivia[questionNumber].question}</h2>
        <br/>
        <p>{answers}</p>
        {answers.map((answer) => {
          return (
            <>
              <button onClick={(event) => {
                checkAnswer(answer, event)
              }}>{answer}</button>
            </>
          )
        })}
        <br/>
        <button onClick={props.triviaView}>Go Back</button>
      </div>
      : null}
    </>
  )
}

export default Trivia
