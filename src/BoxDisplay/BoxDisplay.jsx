import Box from "../Box/Box";
import style from './BoxDisplay.module.css'

const BoxDisplay = ({ numBoxes }) => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
  
  return ( 
    <div className={style.boxContainer}>
      {Array.from({length: numBoxes}).map((box, idx)=>(
        <Box colors={colors} key={'box-instance-' + (idx)}/>
      ))}
    </div>
  );
}

export default BoxDisplay;