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
            <button onMouseOut={props.clearHighlight} onMouseOver={()=>{props.columnHover(0)}} onClick={()=>{props.columnClick(0)}} className = "C">1</button>
          </div>
          <div className="Connect4Button">
            <button onMouseOut={props.clearHighlight} onMouseOver={()=>{props.columnHover(1)}} onClick={()=>{props.columnClick(1)}}className = "C">2</button>
          </div>
          <div className="Connect4Button">
            <button onMouseOut={props.clearHighlight} onMouseOver={()=>{props.columnHover(2)}} onClick={()=>{props.columnClick(2)}}className = "C">3</button>
          </div>
          <div className="Connect4Button">
            <button onMouseOut={props.clearHighlight} onMouseOver={()=>{props.columnHover(3)}} onClick={()=>{props.columnClick(3)}}className = "C">4</button>
          </div>
          <div className="Connect4Button">
            <button onMouseOut={props.clearHighlight} onMouseOver={()=>{props.columnHover(4)}} onClick={()=>{props.columnClick(4)}}className = "C">5</button>
          </div>
          <div className="Connect4Button">
            <button onMouseOut={props.clearHighlight} onMouseOver={()=>{props.columnHover(5)}} onClick={()=>{props.columnClick(5)}}className = "C">6</button>
          </div>
          <div className="Connect4Button">
            <button onMouseOut={props.clearHighlight} onMouseOver={()=>{props.columnHover(6)}} onClick={()=>{props.columnClick(6)}}className = "C">7</button>
          </div>
        </div>
        <div className="Connect4">
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '05' ? 'yellow' : ''}}
          >
            <div style={{backgroundColor: props.columns[0][5] === 'red' ? 'red' : props.columns[0][5] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '15' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[1][5] === 'red' ? 'red' : props.columns[1][5] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '25' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[2][5] === 'red' ? 'red' : props.columns[2][5] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '35' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[3][5] === 'red' ? 'red' : props.columns[3][5] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '45' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[4][5] === 'red' ? 'red' : props.columns[4][5] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '55' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[5][5] === 'red' ? 'red' : props.columns[5][5] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '65' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[6][5] === 'red' ? 'red' : props.columns[6][5] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '04' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[0][4] === 'red' ? 'red' : props.columns[0][4] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '14' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[1][4] === 'red' ? 'red' : props.columns[1][4] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '24' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[2][4] === 'red' ? 'red' : props.columns[2][4] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '34' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[3][4] === 'red' ? 'red' : props.columns[3][4] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '44' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[4][4] === 'red' ? 'red' : props.columns[4][4] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '54' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[5][4] === 'red' ? 'red' : props.columns[5][4] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '64' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[6][4] === 'red' ? 'red' : props.columns[6][4] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '03' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[0][3] === 'red' ? 'red' : props.columns[0][3] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '13' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[1][3] === 'red' ? 'red' : props.columns[1][3] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '23' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[2][3] === 'red' ? 'red' : props.columns[2][3] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '33' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[3][3] === 'red' ? 'red' : props.columns[3][3] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '43' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[4][3] === 'red' ? 'red' : props.columns[4][3] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '53' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[5][3] === 'red' ? 'red' : props.columns[5][3] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '63' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[6][3] === 'red' ? 'red' : props.columns[6][3] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '02' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[0][2] === 'red' ? 'red' : props.columns[0][2] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '12' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[1][2] === 'red' ? 'red' : props.columns[1][2] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '22' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[2][2] === 'red' ? 'red' : props.columns[2][2] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '32' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[3][2] === 'red' ? 'red' : props.columns[3][2] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '42' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[4][2] === 'red' ? 'red' : props.columns[4][2] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '52' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[5][2] === 'red' ? 'red' : props.columns[5][2] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '62' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[6][2] === 'red' ? 'red' : props.columns[6][2] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '01' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[0][1] === 'red' ? 'red' : props.columns[0][1] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '11' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[1][1] === 'red' ? 'red' : props.columns[1][1] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '21' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[2][1] === 'red' ? 'red' : props.columns[2][1] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '31' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[3][1] === 'red' ? 'red' : props.columns[3][1] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '41' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[4][1] === 'red' ? 'red' : props.columns[4][1] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '51' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[5][1] === 'red' ? 'red' : props.columns[5][1] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '61' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[6][1] === 'red' ? 'red' : props.columns[6][1] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '00' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[0][0] === 'red' ? 'red' : props.columns[0][0] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '10' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[1][0] === 'red' ? 'red' : props.columns[1][0] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '20' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[2][0] === 'red' ? 'red' : props.columns[2][0] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '30' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[3][0] === 'red' ? 'red' : props.columns[3][0] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '40' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[4][0] === 'red' ? 'red' : props.columns[4][0] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '50' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[5][0] === 'red' ? 'red' : props.columns[5][0] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
          <div className="Connect4cell" style={{backgroundColor: props.highlightCell === '60' ? 'yellow' : ''}}>
            <div style={{backgroundColor: props.columns[6][0] === 'red' ? 'red' : props.columns[6][0] === 'yellow' ? 'yellow' : ''}} ></div>
          </div>
        </div>
        <button onClick={props.clear}>Clear Board</button>
        <button onClick={props.connectView}>Back to main page</button>
      </>
    )
  }

export default Connect4
