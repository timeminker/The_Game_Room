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
  const [color, setColor] = useState('red')

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

  // CONNECT4


  const columns = [[],[],[],[],[],[],[]]

  const currentTurn = () => {
    setPlayerTurn(playerTurn+1)
  }

  const columnClick = (column, number) => {
    // if(playerTurn % 2 === 0){
    //   setColor('red')
    // } else {
    //   setColor('blue')
    // }
    // setPlayerTurn(playerTurn+1)
    // if(column[0] !== 1){
    //   numbers.splice(number+34,1,color)
    // }
    // console.log(numbers)
  }

  //TRIVIA API CALLS
  const getTrivia = () => {
    axios.get('https://the-trivia-api.com/api/questions?limit=5&difficulty=easy').then((response) => {
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
          <div>
            <div className="Connect4numbers">
              <div onClick={()=>{columnClick()}} className = "Connect4column">1</div>
              <div onClick={()=>{columnClick()}}className = "Connect4column">2</div>
              <div onClick={()=>{columnClick()}}className = "Connect4column">3</div>
              <div onClick={()=>{columnClick()}}className = "Connect4column">4</div>
              <div onClick={()=>{columnClick()}}className = "Connect4column">5</div>
              <div onClick={()=>{columnClick()}}className = "Connect4column">6</div>
              <div onClick={()=>{columnClick()}}className = "Connect4column">7</div>
            </div>
            <div className="Connect4">
                    <Connect4 connectView={connectView} playerTurn={playerTurn} currentTurn={currentTurn}/>
            </div>
          </div>: null}

      {view === 'trivia' ?
        <Trivia triviaView={triviaView} trivia={trivia} getTrivia={getTrivia}/>
      : null}

    </>
  );
}

export default App;
