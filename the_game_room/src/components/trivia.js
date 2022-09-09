import React from 'react'

const Trivia = (props) => {
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

  return (
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
            <button>{answer}</button>
          </>
        )
      })}
      <br/>
      <button onClick={props.triviaView}>Go Back</button>
    </div>
  )
}

export default Trivia
