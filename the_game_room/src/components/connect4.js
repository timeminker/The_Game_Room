import React from 'react'
import {useState} from 'react'

  const Connect4 = (props) => {

  const [color, setColor] = useState('blank')

    return (
      <>
        <h1>{props.playerTurn % 2 != 0 ? 'Player 1' : 'Player 2'} </h1>
        <h1>Turn:{props.playerTurn}</h1>
        <div className="Connect4numbers">
          <div className="Connect4Button">
            <button onClick={()=>{props.columnClick(0)}} className = "C">1</button>
          </div>
          <div className="Connect4Button">
            <button onClick={()=>{props.columnClick(1)}}className = "C">2</button>
          </div>
          <div className="Connect4Button">
            <button onClick={()=>{props.columnClick(2)}}className = "C">3</button>
          </div>
          <div className="Connect4Button">
            <button onClick={()=>{props.columnClick(3)}}className = "C">4</button>
          </div>
          <div className="Connect4Button">
            <button onClick={()=>{props.columnClick(4)}}className = "C">5</button>
          </div>
          <div className="Connect4Button">
            <button onClick={()=>{props.columnClick(5)}}className = "C">6</button>
          </div>
          <div className="Connect4Button">
            <button onClick={()=>{props.columnClick(6)}}className = "C">7</button>
          </div>
        </div>
        <div className="Connect4">
          <div style={{backgroundColor: props.columns[0][5] === 'red' ? 'red' : props.columns[0][5] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[1][5] === 'red' ? 'red' : props.columns[1][5] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[2][5] === 'red' ? 'red' : props.columns[2][5] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[3][5] === 'red' ? 'red' : props.columns[3][5] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[4][5] === 'red' ? 'red' : props.columns[4][5] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[5][5] === 'red' ? 'red' : props.columns[5][5] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[6][5] === 'red' ? 'red' : props.columns[6][5] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[0][4] === 'red' ? 'red' : props.columns[0][4] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[1][4] === 'red' ? 'red' : props.columns[1][4] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[2][4] === 'red' ? 'red' : props.columns[2][4] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[3][4] === 'red' ? 'red' : props.columns[3][4] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[4][4] === 'red' ? 'red' : props.columns[4][4] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[5][4] === 'red' ? 'red' : props.columns[5][4] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[6][4] === 'red' ? 'red' : props.columns[6][4] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[0][3] === 'red' ? 'red' : props.columns[0][3] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[1][3] === 'red' ? 'red' : props.columns[1][3] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[2][3] === 'red' ? 'red' : props.columns[2][3] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[3][3] === 'red' ? 'red' : props.columns[3][3] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[4][3] === 'red' ? 'red' : props.columns[4][3] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[5][3] === 'red' ? 'red' : props.columns[5][3] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[6][3] === 'red' ? 'red' : props.columns[6][3] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[0][2] === 'red' ? 'red' : props.columns[0][2] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[1][2] === 'red' ? 'red' : props.columns[1][2] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[2][2] === 'red' ? 'red' : props.columns[2][2] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[3][2] === 'red' ? 'red' : props.columns[3][2] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[4][2] === 'red' ? 'red' : props.columns[4][2] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[5][2] === 'red' ? 'red' : props.columns[5][2] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[6][2] === 'red' ? 'red' : props.columns[6][2] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[0][1] === 'red' ? 'red' : props.columns[0][1] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[1][1] === 'red' ? 'red' : props.columns[1][1] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[2][1] === 'red' ? 'red' : props.columns[2][1] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[3][1] === 'red' ? 'red' : props.columns[3][1] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[4][1] === 'red' ? 'red' : props.columns[4][1] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[5][1] === 'red' ? 'red' : props.columns[5][1] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[6][1] === 'red' ? 'red' : props.columns[6][1] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[0][0] === 'red' ? 'red' : props.columns[0][0] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[1][0] === 'red' ? 'red' : props.columns[1][0] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[2][0] === 'red' ? 'red' : props.columns[2][0] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[3][0] === 'red' ? 'red' : props.columns[3][0] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[4][0] === 'red' ? 'red' : props.columns[4][0] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[5][0] === 'red' ? 'red' : props.columns[5][0] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
          <div style={{backgroundColor: props.columns[6][0] === 'red' ? 'red' : props.columns[6][0] === 'blue' ? 'blue' : ''}} className="Connect4cell"></div>
        </div>
        <button onClick={props.clear}>Clear Board</button>
      </>
    )
  }

export default Connect4
