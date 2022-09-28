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
      clear()
      setWinStreak([0,0])
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
  const [gameState, setGameState] = useState(true)
  const [highlightCell, setHighlightCell] = useState("")
  const [winStreak, setWinStreak] = useState([0 , 0])
  const [columns, setColumns] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ])

  const columnHover = (number) =>{
    if(gameState){
      let cell = 0
      for(let j = 0; j<6; j++){
        if(columns[number][j] == 'yellow' || columns[number][j] == 'red' ){
          cell++
        }
      } if(cell <= 5){
          setHighlightCell(number + "" + cell)
        } else{
          setHighlightCell("")
        }
    }
  }

  const clearHighlight = () =>{
    setHighlightCell("")
  }

  const checkWinStreak = () =>{
    if(playerTurn % 2 != 0){
      setWinStreak([winStreak[0]+1 , 0])
    } else {
      setWinStreak([ 0 , winStreak[1]+1])
    }
  }

  const columnClick = (number) => {
    if(gameState){
      if(columns[number].length < 6){
        setPlayerTurn(playerTurn+1)
          if(playerTurn % 2 == 0){
            setColor('red')
          } else{
            setColor('yellow')
          }
        columns[number].push(color)
      }
    columnHover(number)
    checkWin()
    }
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
          setGameState(false)
          setHighlightCell("")
          setPlayerTurn(columns[0].length+columns[1].length+columns[2].length+columns[3].length+columns[4].length+columns[5].length+columns[6].length)
          checkWinStreak()
        }
      }
    }
  }

  const checkHorizontal = () =>{
    for(let i = 0; i<=3; i++){
      for(let j = 0; j<columns.length;j++){
        if(columns[i][j] == color && columns[i+1][j] == color && columns[i+2][j] == color && columns[i+3][j] == color ){
          console.log(color + ' wins!')
          setGameState(false)
          setHighlightCell("")
          setPlayerTurn(columns[0].length+columns[1].length+columns[2].length+columns[3].length+columns[4].length+columns[5].length+columns[6].length)
          checkWinStreak()
        }
      }
    }
  }

  const leftDiagnol = () =>{
    for(let i = 0; i <= 3; i++){
      for(let j = 0; j <= 2;j++){
        if(columns[i][j] == color && columns[i+1][j+1] == color && columns[i+2][j+2] == color && columns[i+3][j+3] == color){
          console.log(color + ' wins!')
          setGameState(false)
          setHighlightCell("")
          setPlayerTurn(columns[0].length+columns[1].length+columns[2].length+columns[3].length+columns[4].length+columns[5].length+columns[6].length)
          checkWinStreak()
        }
      }
    }
  }

  const rightDiagnol = () =>{
    for(let i = columns.length-1;i >= 3;i--){
      for(let j = 0; j<=2; j++){
        if(columns[i][j] == color && columns[i-1][j+1] == color && columns[i-2][j+2] == color && columns[i-3][j+3] == color){
          console.log(color + ' wins!')
          setGameState(false)
          setHighlightCell("")
          setPlayerTurn(columns[0].length+columns[1].length+columns[2].length+columns[3].length+columns[4].length+columns[5].length+columns[6].length)
          checkWinStreak()
          }
        }
      }
    }

    const clear = () =>{
      setColumns([
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ])
      setGameState(true)
      setPlayerTurn(1)
      setColor('red')
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
        <Connect4 connectView={connectView} playerTurn={playerTurn} columnClick={columnClick} columns={columns} clear={clear} columnHover={columnHover} highlightCell={highlightCell} clearHighlight={clearHighlight} winStreak={winStreak}/>
      : null}



      {view === 'trivia' ?
        <Trivia triviaView={triviaView} trivia={trivia} getTrivia={getTrivia} numOfQuestions={numOfQuestions} difficulty={difficulty} setNumOfQuestions={setNumOfQuestions} setDifficulty={setDifficulty}/>
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
