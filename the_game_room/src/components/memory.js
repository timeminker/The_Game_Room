import React from 'react'
import { useState, useEffect } from 'react'

const Memory = (props) => {

    const [colorShapeCombos, setColorShapeCombos] = useState([])

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
    const shapes = ['circle', 'square', 'triangle', 'rectangle', 'horizontal-equals', 'vertical-equals']
    let combosTemp = []
    let combos = []

    const randomize = () => {
        for (let i = 1; i <= 4; i++) {
            const randomColorIndex = Math.floor(Math.random() * colors.length)
            const randomShapeIndex = Math.floor(Math.random() * shapes.length)
            const comboAlreadyExists = combosTemp.find(element => element[0] === colors[randomColorIndex] && element[1] === shapes[randomShapeIndex])
            if (comboAlreadyExists) {
                console.log('already in there')
                i--
            } else {
                console.log('not in there')
                combosTemp.push([colors[randomColorIndex], shapes[randomShapeIndex]])
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let tempCombo of combosTemp) {
                combos.push(tempCombo)
            }
        }
        for (let i = 0; i < 5; i++) {
            combos.sort((a, b) => 0.5 - Math.random())
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
                        <div className={'memory-square' + ' ' + combo[0] + " " + combo[1]}></div>
                    )
                })}
            </div>
            <button onClick={props.connectView}>Go Back</button>
        </>
    )
}

export default Memory