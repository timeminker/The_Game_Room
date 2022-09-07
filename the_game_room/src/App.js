import React from 'react';
import './App.css';
import Connect4 from './components/connect4.js'
import Memory from './components/memory'
import {useState, useEffect} from 'react'

function App() {
  const [view, setView] = useState('main')


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

  useEffect(() => {
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
        <li onClick={connectView}>Connect 4</li>
        <li>Tic Tac Toe</li>
        <li>Checkers</li>
        <li onClick={memoryView}>Memory</li>
        <li>Battleship</li>
        <li>Trivia</li>
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
      {view === 'connect4' ?
        <Connect4 connectView={connectView}/>
      : null}
      {view === 'memory' ?
        <Memory connectView={memoryView}/>
      : null}
    </>
  );
}

export default App;
