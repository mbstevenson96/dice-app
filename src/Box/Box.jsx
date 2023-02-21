import { useState } from "react";
import style from './Box.module.css'

const Box = (props) => {

  const {colors} = props

  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  
  const [color, setColor] = useState(randomColor)

  function chooseColor(){
    let newColor = colors[Math.floor(Math.random() * colors.length)]
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)]
    } while (newColor === color)
    setColor(newColor)
  }
  
  return ( 
      <div onClick={() => chooseColor()} className={style.Box} style={{ backgroundColor: color }} />
  );
}

export default Box;
