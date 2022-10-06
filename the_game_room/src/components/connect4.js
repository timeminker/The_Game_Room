import React from 'react'
import {useState} from 'react'

  const Connect4 = (props) => {

  const [playerTurn, setPlayerTurn] = useState(1)
  const [color, setColor] = useState('red')
  const [gameState, setGameState] = useState(true)
  const [highlightCell, setHighlightCell] = useState("")
  const [winStreak, setWinStreak] = useState([0 , 0])
  const [winner, setWinner] = useState(false)
  const [opponent, setOpponent] = useState(false)
  const [dificulty, setDifficulty] = useState("")
  const [columns, setColumns] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ])

  const opponentChoice = (choice) => {
    setOpponent(choice)
  }

  const level = (choice) => {
    setOpponent("Computer")
    setDifficulty(choice)
  }

  const columnHover = (number) =>{
    if(gameState){
      let cell = 0
      for(let j = 0; j<6; j++){
        if(columns[number][j] == 'yellow' || columns[number][j] == 'red' ){
          cell++
        }
      }
      if(cell <= 5){
          setHighlightCell(number + "" + cell)
      }else{
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
    }else {
      setWinStreak([ 0 , winStreak[1]+1])
    }
  }

  const columnClick = (number) => {
    if(gameState){
      if(columns[number].length < 6){
        setPlayerTurn(playerTurn+1)
        if(playerTurn % 2 == 0){
          setColor('red')
        }else{
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
          setWinner(true)
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
          setWinner(true)
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
          setWinner(true)
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
          setWinner(true)
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

    const returnToMain = () =>{
      props.connectView()
      clear()
      setWinStreak([0,0])
    }

    const returnToBoard = () =>{
      setWinner(false)
    }

    return (
      <>
        {!opponent?
          <div className="opponent-choice">
            <div>
              <h1 onClick={()=>{opponentChoice("Player")}}>Player VS Player</h1>
            </div>
            <div>
              <h1 onClick={()=>{opponentChoice("Mode")}}>Player VS Computer</h1>
            </div>
          </div>
        : ""}
        {opponent === "Mode"?
          <div className="difficulty">
            <div>
              <h1 onClick={()=>{level('Random')}}>Random</h1>
            </div>
            <div>
              <h1 onClick={()=>{level('Easy')}}>Easy</h1>
            </div>
            <div>
              <h1 onClick={()=>{level('Hard')}}>Hard</h1>
            </div>
          </div>
        : ""}
        {opponent === "Player" || opponent === "Computer"?
        <div>
          <div className="player">
            <div>
              <h1 style={{color:playerTurn % 2 != 0? 'lightgreen' : ""}}>Player 1</h1>
              <h2>Win Streak : {winStreak[0]}</h2>
            </div>
            <div>
              <h1 style={{color:playerTurn % 2 == 0? 'lightgreen' : ""}}>{opponent === 'Player'? 'Player 2' : 'Computer'}</h1>
              <h2>Win Streak : {winStreak[1]}</h2>
            </div>
          </div>
          {!winner?
          <div>
            <h1>Turn : {playerTurn}</h1>
            <div className="Connect4numbers">
              <div className="Connect4Button">
                  <button onMouseOut={clearHighlight} onMouseOver={()=>{columnHover(0)}} onClick={()=>{columnClick(0)}} className = "C">1</button>
              </div>
              <div className="Connect4Button">
                  <button onMouseOut={clearHighlight} onMouseOver={()=>{columnHover(1)}} onClick={()=>{columnClick(1)}}className = "C">2</button>
              </div>
              <div className="Connect4Button">
                  <button onMouseOut={clearHighlight} onMouseOver={()=>{columnHover(2)}} onClick={()=>{columnClick(2)}}className = "C">3</button>
              </div>
              <div className="Connect4Button">
                  <button onMouseOut={clearHighlight} onMouseOver={()=>{columnHover(3)}} onClick={()=>{columnClick(3)}}className = "C">4</button>
              </div>
              <div className="Connect4Button">
                  <button onMouseOut={clearHighlight} onMouseOver={()=>{columnHover(4)}} onClick={()=>{columnClick(4)}}className = "C">5</button>
              </div>
              <div className="Connect4Button">
                  <button onMouseOut={clearHighlight} onMouseOver={()=>{columnHover(5)}} onClick={()=>{columnClick(5)}}className = "C">6</button>
              </div>
              <div className="Connect4Button">
                  <button onMouseOut={clearHighlight} onMouseOver={()=>{columnHover(6)}} onClick={()=>{columnClick(6)}}className = "C">7</button>
              </div>
            </div>
            <div className="Connect4">
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '05' && playerTurn % 2 != 0 ? 'red' : highlightCell === '05' && playerTurn % 2 == 0 ? 'yellow' : '' }}
                >
                  <div style={{backgroundColor: columns[0][5] === 'red' ? 'red' : columns[0][5] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '15' && playerTurn % 2 != 0 ? 'red' : highlightCell === '15' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[1][5] === 'red' ? 'red' : columns[1][5] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '25' && playerTurn % 2 != 0 ? 'red' : highlightCell === '25' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[2][5] === 'red' ? 'red' : columns[2][5] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '35' && playerTurn % 2 != 0 ? 'red' : highlightCell === '35' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[3][5] === 'red' ? 'red' : columns[3][5] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '45' && playerTurn % 2 != 0 ? 'red' : highlightCell === '45' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[4][5] === 'red' ? 'red' : columns[4][5] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '55' && playerTurn % 2 != 0 ? 'red' : highlightCell === '55' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[5][5] === 'red' ? 'red' : columns[5][5] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '65' && playerTurn % 2 != 0 ? 'red' : highlightCell === '65' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[6][5] === 'red' ? 'red' : columns[6][5] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '04' && playerTurn % 2 != 0 ? 'red' : highlightCell === '04' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[0][4] === 'red' ? 'red' : columns[0][4] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '14' && playerTurn % 2 != 0 ? 'red' : highlightCell === '14' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[1][4] === 'red' ? 'red' : columns[1][4] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '24' && playerTurn % 2 != 0 ? 'red' : highlightCell === '24' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[2][4] === 'red' ? 'red' : columns[2][4] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '34' && playerTurn % 2 != 0 ? 'red' : highlightCell === '34' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[3][4] === 'red' ? 'red' : columns[3][4] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '44' && playerTurn % 2 != 0 ? 'red' : highlightCell === '44' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[4][4] === 'red' ? 'red' : columns[4][4] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '54' && playerTurn % 2 != 0 ? 'red' : highlightCell === '54' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[5][4] === 'red' ? 'red' : columns[5][4] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '64' && playerTurn % 2 != 0 ? 'red' : highlightCell === '64' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[6][4] === 'red' ? 'red' : columns[6][4] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '03' && playerTurn % 2 != 0 ? 'red' : highlightCell === '03' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[0][3] === 'red' ? 'red' : columns[0][3] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '13' && playerTurn % 2 != 0 ? 'red' : highlightCell === '13' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[1][3] === 'red' ? 'red' : columns[1][3] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '23' && playerTurn % 2 != 0 ? 'red' : highlightCell === '23' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[2][3] === 'red' ? 'red' : columns[2][3] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '33' && playerTurn % 2 != 0 ? 'red' : highlightCell === '33' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[3][3] === 'red' ? 'red' : columns[3][3] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '43' && playerTurn % 2 != 0 ? 'red' : highlightCell === '43' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[4][3] === 'red' ? 'red' : columns[4][3] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '53' && playerTurn % 2 != 0 ? 'red' : highlightCell === '53' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[5][3] === 'red' ? 'red' : columns[5][3] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '63' && playerTurn % 2 != 0 ? 'red' : highlightCell === '63' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[6][3] === 'red' ? 'red' : columns[6][3] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '02' && playerTurn % 2 != 0 ? 'red' : highlightCell === '02' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[0][2] === 'red' ? 'red' : columns[0][2] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '12' && playerTurn % 2 != 0 ? 'red' : highlightCell === '12' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[1][2] === 'red' ? 'red' : columns[1][2] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '22' && playerTurn % 2 != 0 ? 'red' : highlightCell === '22' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[2][2] === 'red' ? 'red' : columns[2][2] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '32' && playerTurn % 2 != 0 ? 'red' : highlightCell === '32' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[3][2] === 'red' ? 'red' : columns[3][2] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '42' && playerTurn % 2 != 0 ? 'red' : highlightCell === '42' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[4][2] === 'red' ? 'red' : columns[4][2] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '52' && playerTurn % 2 != 0 ? 'red' : highlightCell === '52' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[5][2] === 'red' ? 'red' : columns[5][2] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '62' && playerTurn % 2 != 0 ? 'red' : highlightCell === '62' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[6][2] === 'red' ? 'red' : columns[6][2] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '01' && playerTurn % 2 != 0 ? 'red' : highlightCell === '01' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[0][1] === 'red' ? 'red' : columns[0][1] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '11' && playerTurn % 2 != 0 ? 'red' : highlightCell === '11' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[1][1] === 'red' ? 'red' : columns[1][1] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '21' && playerTurn % 2 != 0 ? 'red' : highlightCell === '21' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[2][1] === 'red' ? 'red' : columns[2][1] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '31' && playerTurn % 2 != 0 ? 'red' : highlightCell === '31' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[3][1] === 'red' ? 'red' : columns[3][1] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '41' && playerTurn % 2 != 0 ? 'red' : highlightCell === '41' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[4][1] === 'red' ? 'red' : columns[4][1] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '51' && playerTurn % 2 != 0 ? 'red' : highlightCell === '51' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[5][1] === 'red' ? 'red' : columns[5][1] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '61' && playerTurn % 2 != 0 ? 'red' : highlightCell === '61' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[6][1] === 'red' ? 'red' : columns[6][1] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '00' && playerTurn % 2 != 0 ? 'red' : highlightCell === '00' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[0][0] === 'red' ? 'red' : columns[0][0] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '10' && playerTurn % 2 != 0 ? 'red' : highlightCell === '10' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[1][0] === 'red' ? 'red' : columns[1][0] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '20' && playerTurn % 2 != 0 ? 'red' : highlightCell === '20' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[2][0] === 'red' ? 'red' : columns[2][0] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '30' && playerTurn % 2 != 0 ? 'red' : highlightCell === '30' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[3][0] === 'red' ? 'red' : columns[3][0] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '40' && playerTurn % 2 != 0 ? 'red' : highlightCell === '40' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[4][0] === 'red' ? 'red' : columns[4][0] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '50' && playerTurn % 2 != 0 ? 'red' : highlightCell === '50' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[5][0] === 'red' ? 'red' : columns[5][0] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
                <div className="Connect4cell" style={{backgroundColor: highlightCell === '60' && playerTurn % 2 != 0 ? 'red' : highlightCell === '60' && playerTurn % 2 == 0 ? 'yellow' : '' }}>
                  <div style={{backgroundColor: columns[6][0] === 'red' ? 'red' : columns[6][0] === 'yellow' ? 'yellow' : ''}} ></div>
                </div>
            </div>
            <div className="Connect4Button buttonCenter">
                <button  onClick={clear}>Clear Board</button>
                <button  onClick={returnToMain}>Back to main page</button>
            </div>
          </div>
          : ""}
        </div>
        : ""}


        {winner?
        <div>
          <h1>player {playerTurn % 2 != 0? '1' : '2' } wins!</h1>
          <div className="Connect4Button buttonCenter">
            <button onClick={returnToBoard}>Return to Board</button>
          </div>
        </div>
        : "" }
      </>
    )
  }

export default Connect4
