import React from 'react'
import axios from 'axios'
import './App.css'
import Main from './components/main.js'
import Connect4 from './components/connect4.js'
import Memory from './components/memory'
import Trivia from './components/trivia.js'
import {useState, useEffect} from 'react'

function App() {
  const [view, setView] = useState('main')

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
  const [numOfQuestions, setNumOfQuestions] = useState(6)
  const [difficulty, setDifficulty] = useState('easy')
  const [numOfPlayers, setNumOfPlayers] = useState(1)
  const [trivia, setTrivia] = useState([])

  const getTrivia = () => {
    axios.get(`https://the-trivia-api.com/api/questions?limit=${numOfQuestions}&difficulty=${difficulty}`).then((response) => {
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
        <Main connectView={connectView} triviaView={triviaView} memoryView={memoryView}/>
      : null}

      {view === 'memory' ?
        <Memory connectView={memoryView}/>
      : null}

      {view === 'connect4' ?
        <Connect4 connectView={connectView}/>
      : null}

      {view === 'trivia' ?
        <Trivia triviaView={triviaView} trivia={trivia} numOfQuestions={numOfQuestions} setNumOfQuestions={setNumOfQuestions} difficulty={difficulty} setDifficulty={setDifficulty} getTrivia={getTrivia} setNumOfPlayers={setNumOfPlayers} numOfPlayers={numOfPlayers}/>
      : null}
    </>
  );
}

export default App;
