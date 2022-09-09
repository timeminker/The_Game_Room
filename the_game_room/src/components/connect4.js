import React from 'react'
import {useState} from 'react'

  const Connect4 = (props) => {

  const [color, setColor] = useState('blank')

  const processTurn = () => {
    if(color === 'blank'){
      props.currentTurn()
      if(props.playerTurn % 2 === 0){
        setColor('red')
      } else {
        setColor('blue')
      }
    }
  }

    return (
      <>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>
        <div style={{backgroundColor: color === 'red' ? 'red' : color === 'blue' ? 'blue' : ''}}  onClick={processTurn}  className="Connect4cell"></div>


      </>
    )
  }

export default Connect4
