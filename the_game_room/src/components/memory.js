import React from 'react'

const Memory = (props) => {
  return (
    <>
      <h1>Memory</h1>
      <div className='memory-board'>
        <div className='memory-square' id='memory-square-1'></div>
        <div className='memory-square' id='memory-square-2'></div>
        <div className='memory-square' id='memory-square-3'></div>
        <div className='memory-square' id='memory-square-4'></div>
      </div>
      <button onClick={props.connectView}>Go Back</button>
    </>
  )
}

export default Memory