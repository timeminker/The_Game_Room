import React from 'react'
import axios from 'axios'
import './App.css'
import Connect4 from './components/connect4.js'
import Memory from './components/memory'
import Trivia from './components/trivia.js'
import {useState, useEffect} from 'react'

function App() {
  const [view, setView] = useState('main')
  const [trivia, setTrivia] = useState([])
  const [playerTurn, setPlayerTurn] = useState(1)


// VIEWS
  const connectView = () => {
    numbers.map((connectNumbers)=>{
  })
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

  // CONNECT4
  const numbers = [1 , 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39 ,40, 41 ,42 ]

  const currentTurn = () => {
    setPlayerTurn(playerTurn+1)
  }

  //TRIVIA API CALLS
  const getTrivia = () => {
    axios.get('https://the-trivia-api.com/api/questions?limit=1&difficulty=easy').then((response) => {
      setTrivia(response.data)
    })
  }

  // USEEFFECT
  useEffect(() => {
    getTrivia()
  }, [])

  return (
    <>

      {view === 'main' ?
        <div>
        <h1>Hello World!</h1>
      <br/>
      <p>Welcome to The Game Room! Where you can play all of your favorite (not all) games!</p>
      <br/>
      <h2>You can choose from the following games:</h2>
      <ul>
        <li onClick={connectView} className='clickable'>Connect 4</li>
        <li>Tic Tac Toe</li>
        <li>Checkers</li>
        <li onClick={memoryView} className='clickable'>Memory</li>
        <li>Battleship</li>
        <li onClick={triviaView} className='clickable'>Trivia</li>
        <li>Dodging/Asteroid/Frogger</li>
        <li>Hangman</li>
      </ul>
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
          <div class="Connect4">
            <div class="Connect4numbers">
              <div class = "Connect4column">1</div>
              <div class = "Connect4column">2</div>
              <div class = "Connect4column">3</div>
              <div class = "Connect4column">4</div>
              <div class = "Connect4column">5</div>
              <div class = "Connect4column">6</div>
              <div class = "Connect4column">7</div>
            </div>
            {numbers.map((connectNumbers)=>{
              return(
                  <Connect4 connectView={connectView} connectNumbers={connectNumbers} playerTurn={playerTurn} currentTurn={currentTurn}/>
              )
            })}
          </div> : null}

      {view === 'trivia' ?
        <Trivia triviaView={triviaView} trivia={trivia}/>
      : null}

    </>
  );
}

export default App;
