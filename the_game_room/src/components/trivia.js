import React from 'react'

const Trivia = (props) => {
  return (
    <div className='trivia-body'>
      <h1>Trivia</h1>
      <br/>
      <br/>
      <p>Category: {props.trivia.category}</p>
      <h2>Question: {props.trivia.question}</h2>
      <br/>
      <button onClick={props.triviaView}>Go Back</button>
    </div>
  )
}

export default Trivia
