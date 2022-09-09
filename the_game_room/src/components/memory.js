import React from 'react'
import { useState, useEffect } from 'react'

const Memory = (props) => {

    const [colorShapeCombos, setColorShapeCombos] = useState([])

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
    const shapes = ['circle', 'square', 'triangle', 'rectangle', 'horizontal-equals', 'vertical-equals']
    const combos = []

    const randomize = () => {
        for (let i = 1; i <= 15; i++) {
            const randomColorIndex = Math.floor(Math.random() * colors.length)
            const randomShapeIndex = Math.floor(Math.random() * shapes.length)
            if (combos[colors[randomColorIndex]] === shapes[randomShapeIndex]) {
                i--
            } else {
                combos.push({[colors[randomColorIndex]]: shapes[randomShapeIndex]})
            }
        }
        setColorShapeCombos(combos)
    }

    useEffect(() => {
        randomize()
    }, [])

    return (
        <>
            <h1>Memory</h1>
            <div className='memory-board'>
                {colorShapeCombos.map((combo) => {
                    return (
                        <div className='memory-square' id={combo}></div>
                    )
                })}
            </div>
            <button onClick={props.connectView}>Go Back</button>
        </>
    )
}

export default Memory