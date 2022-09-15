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

  const playTrivia = () => {
    props.getTrivia()
    setView('readyToPlay')
  }

  const submitNumber = () => {
    props.setNumOfQuestions()
  }

  const submitDifficulty = () => {
    props.setDifficulty()
  }

  return (
    <>
      {view === 'wantToPlay' ?
      <div>
      <br/>
        <form onSubmit={submitNumber}>
          <label>Choose number of questions:</label>
          <select>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={submitDifficulty}>
          <label>Choose difficulty:</label>
          <select>
            <option value="easy">EASY</option>
            <option value="medium">MEDIUM</option>
            <option value="hard">HARD</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
        <h1>Are you ready to play trivia?</h1>
        <button className="dropbtn" onClick={playTrivia}>Yes!</button>
        <button className="dropbtn" onClick={props.triviaView}>No!</button>
      </div>
      : null }

      {view === 'readyToPlay' ?
        <div classNameName='trivia-body'>
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
