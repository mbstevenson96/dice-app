import React from "react";
import style from './Box.module.css'

const Box = ({ chooseColor, color }) => {

  // const handleClick = (event) => {
  //   event.target.preventDefault()
  //   event.target.chooseColor()
  //   console.log('this div was clicked')
  // }
  
  return ( 
    <>
      <div onClick={(e)=> chooseColor()} className={style.Box} style={{ backgroundColor: color }}></div>
    </>
  );
}

export default Box;
