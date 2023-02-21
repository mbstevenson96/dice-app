import React, { useState } from "react";
import Box from "../Box/Box";
import style from './BoxDisplay.module.css'

const BoxDisplay = ({ numBoxes }) => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  
  const [color, setColor] = useState(randomColor)

  const boxes = Array.from({length: numBoxes})
  
  function chooseColor(){
    let newColor = colors[Math.floor(Math.random() * colors.length)]
    
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)]
    } while (newColor === color)

    setColor(newColor)
  }

  return ( 
    <>
    <div className={style.boxContainer}>
      {boxes.map(()=>(
        <Box color={color} chooseColor={chooseColor} colors={colors} />
      ))}
    </div>
    </>
  );
}

export default BoxDisplay;
