import React from "react";
import style from './Box.module.css'

const Box = ({ chooseColor, color }) => {

  function handleClick(e) {
    chooseColor()
  }
  
  return ( 
    <>
      <div onClick={() => handleClick()} className={style.Box} style={{ backgroundColor: color }}></div>
    </>
  );
}

export default Box;
