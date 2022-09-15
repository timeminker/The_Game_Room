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
  const [playerTurn, setPlayerTurn] = useState(1)
  const [color, setColor] = useState('red')
  const [columns, setColumns] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ])

  const columnClick = (number) => {
    if(columns[number].length < 6){
      setPlayerTurn(playerTurn+1)
        if(playerTurn % 2 == 0){
          setColor('red')
        } else{
          setColor('blue')
        }
      columns[number].push(color)
    } checkWin()
  }

  const checkWin = () => {
    checkVertical()
    checkHorizontal()
    leftDiagnol()
    rightDiagnol()
  }

  const checkVertical = () =>{
    for(let i = 0; i<columns.length; i++){
      for(let j = 0; j <= 2; j++){
        if(columns[i][j] == color && columns[i][j+1] == color && columns[i][j+2] == color && columns[i][j+3] == color){
          console.log(color + ' wins!')
        }
      }
    }
  }

  const checkHorizontal = () =>{
    for(let i = 0; i<=3; i++){
      for(let j = 0; j<columns.length;j++){
        if(columns[i][j] == color && columns[i+1][j] == color && columns[i+2][j] == color && columns[i+3][j] == color ){
          console.log(color + ' wins!')
        }
      }
    }
  }

  const leftDiagnol = () =>{
    for(let i = 0; i <= 3; i++){
      for(let j = 0; j <= 2;j++){
        if(columns[i][j] == color && columns[i+1][j+1] == color && columns[i+2][j+2] == color && columns[i+3][j+3] == color){
          console.log(color + ' wins!')
        }
      }
    }
  }

    const rightDiagnol = () =>{
      for(let i = columns.length-1;i >= 3;i--){
        for(let j = 0; j<=2; j++){
          if(columns[i][j] == color && columns[i-1][j+1] == color && columns[i-2][j+2] == color && columns[i-3][j+3] == color){
            console.log(color + ' wins!')
          }
        }
      }
    }
  //TRIVIA
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
        <Connect4 connectView={connectView} playerTurn={playerTurn} columnClick={columnClick} columns={columns}/>
      : null}



      {view === 'trivia' ?
        <Trivia triviaView={triviaView} trivia={trivia} getTrivia={getTrivia} numOfQuestions={numOfQuestions} difficulty={difficulty} setNumOfQuestions={setNumOfQuestions} setDifficulty={setDifficulty}/>
      : null}
    </>
  );
}

export default App;
