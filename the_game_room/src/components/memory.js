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
            const comboAlreadyExists = combosTemp.find(element => element.color === colors[randomColorIndex] && element.shape === shapes[randomShapeIndex])
            if (comboAlreadyExists) {
                console.log('already exists')
                i--
            } else {
                console.log('does not exist')
                combosTemp.push({color: colors[randomColorIndex], shape: shapes[randomShapeIndex], overturned: false})
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let tempCombo of combosTemp) {
                combos.push({...tempCombo, index: combos.length})
            }
        }
        for (let i = 0; i < 5; i++) {
            combos.sort((a, b) => 0.5 - Math.random())
        }
        setColorShapeCombos(combos)
    }

    const handleClick = (comboToChange) => {
        let index = colorShapeCombos.indexOf(comboToChange)
        let temp = [...colorShapeCombos]
        temp[index].overturned = true
        setColorShapeCombos(temp)
    }

    useEffect(() => {
        randomize()
    }, [])

    return (
        <>
            <h1>Memory</h1>
            <div className='memory-board'>
                {colorShapeCombos?.map((combo) => {
                    return (
                        combo.overturned === true?
                            <div className={combo.color + " " + combo.shape}>{combo.shape}</div>
                        : <div className='memory-square' onClick={() => handleClick(combo)}></div>
                    )
                })}
            </div>
            <button onClick={props.connectView}>Go Back</button>
        </>
    )
}

export default Memory
