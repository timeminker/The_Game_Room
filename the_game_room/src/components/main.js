import React from 'react'

const Main = (props) => {

  return (
    <>
    <div className="main-page">
      <p className="welcome">Welcome to</p>
      <h1 className="main-title">The Game Room!</h1>
      <br/>
      <p className="welcome">Where you can play all of your favorite (but not all) games!</p>
      <br/>
      <h2>You can choose from the following games:</h2>
      <div className='container'>
        <div className='card clickable' onClick={props.connectView}>
          <img className="main-icon" src="Logo.png"/>
          <p>Connect 4</p>
        </div>
        <div className='card'>
          <img className="main-icon" src="pngwing.com.png"/>
          <p>Tic Tac Toe</p>
        </div>
        <div className='card'>
          <img className="main-icon" src="pngwing.com.png"/>
          <p>Checkers</p>
        </div>
        <div className='card clickable' onClick={props.memoryView}>
          <img className="main-icon" src="memory.png"/>
          <p>Memory</p>
        </div>
        <div className='card'>
          <img className="main-icon" src="pngwing.com.png"/>
          <p>Battleship</p>
        </div>
        <div className='card clickable' onClick={props.triviaView}>
          <img className="main-icon" src="trivia.png"/>
          <p>Trivia</p>
        </div>
        <div className='card'>
          <img className="main-icon" src="pngwing.com.png"/>
          <p>Dodging/Asteroid/Frogger</p>
        </div>
        <div className='card'>
          <img className="main-icon" src="pngwing.com.png"/>
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
    </>
  )
}

export default Main
