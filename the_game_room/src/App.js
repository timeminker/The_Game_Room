import React from 'react'
import axios from 'axios'
import './App.css'
import Connect4 from './components/connect4.js'
import Memory from './components/memory'
import Trivia from './components/trivia.js'
import {useState, useEffect} from 'react'

function App() {
  const [view, setView] = useState('main')
  // const [trivia, setTrivia] = useState([])


// VIEWS
  const connectView = () => {
    if (view === 'main') {
      setView('connect4')
    } else {
      setView('main')
    }
  }

  const memoryView = () => {
    if (view === 'main') {
      setView('memory')
    } else {
      setView('main')
    }
  }

  const triviaView = () => {
    if (view === 'main') {
      setView('trivia')
    } else {
      setView('main')
    }
  }


  //TRIVIA
  // const [numOfQuestions, setNumOfQuestions] = useState(5)
  // const [difficulty, setDifficulty] = useState('easy')
  //
  // const getTrivia = () => {
  //   axios.get(`https://the-trivia-api.com/api/questions?limit=${numOfQuestions}&difficulty=${difficulty}`).then((response) => {
  //     setTrivia(response.data)
  //   })
  // }
  //
  // const submitNumber = () => {
  //   setNumOfQuestions()
  // }
  //
  // const submitDifficulty = () => {
  //   setDifficulty()
  // }

  // USEEFFECT
  useEffect(() => {
    // getTrivia()
  }, [])

  return (
    <>

      {view === 'main' ?
        <div className="main-page">
          <p className="welcome">Welcome to</p>
          <h1 className="main-title">The Game Room!</h1>
          <br/>
          <p className="welcome">Where you can play all of your favorite (but not all) games!</p>
          <br/>
          <h2>You can choose from the following games:</h2>
          <div className='container'>
            <div className='card clickable' onClick={connectView}>
              <img src="Logo.png"/>
              <p>Connect 4</p>
            </div>
            <div className='card'>
              <img src="pngwing.com.png" id="rotate"/>
              <p>Tic Tac Toe</p>
            </div>
            <div className='card'>
              <img src="pngwing.com.png" id="rotate"/>
              <p>Checkers</p>
            </div>
            <div className='card clickable' onClick={memoryView}>
              <img src="memory.png"/>
              <p>Memory</p>
            </div>
            <div className='card'>
              <img src="pngwing.com.png" id="rotate"/>
              <p>Battleship</p>
            </div>
            <div className='card clickable' onClick={triviaView}>
              <img src="trivia.png"/>
              <p>Trivia</p>
            </div>
            <div className='card'>
              <img id="rotate" src="pngwing.com.png"/>
              <p>Dodging/Asteroid/Frogger</p>
            </div>
            <div className='card'>
              <img id="rotate" src="pngwing.com.png"/>
              <p>Hangman</p>
            </div>
          </div>
          <br/>
          <h2>To Do (eventually):</h2>
          <ul>
            <li>Minesweeper</li>
            <li>Pong</li>
          </ul>
        </div>
      : null}

      {view === 'memory' ?
        <Memory connectView={memoryView}/>
      : null}

      {view === 'connect4' ?
        <Connect4 connectView={connectView}/>
      : null}



      {view === 'trivia' ?
        <Trivia triviaView={triviaView}/>
      : null}
    </>
  );
}

export default App;


// <ul>
//   <li onClick={connectView} className='card'>Connect 4</li>
//   <li className='card'>Tic Tac Toe</li>
//   <li className='card'>Checkers</li>
//   <li onClick={memoryView} className='card'>Memory</li>
//   <li className='card'>Battleship</li>
//   <li onClick={triviaView} className='card'>Trivia</li>
//   <li className='card'>Dodging/Asteroid/Frogger</li>
//   <li className='card'>Hangman</li>
// </ul>
