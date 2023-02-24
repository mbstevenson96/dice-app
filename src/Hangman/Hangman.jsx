import { useState } from "react";
import styles from "./Hangman.module.css"
import img0 from "../HangmanAssests/0.jpg";
import img1 from "../HangmanAssests/1.jpg";
import img2 from "../HangmanAssests/2.jpg";
import img3 from "../HangmanAssests/3.jpg";
import img4 from "../HangmanAssests/4.jpg";
import img5 from "../HangmanAssests/5.jpg";
import img6 from "../HangmanAssests/6.jpg";

const Hangman = () => {

  const [maxWrong, setMaxWrong] = useState(6)
  const [images, setImages] = useState([img0, img1, img2, img3, img4, img5, img6])

  const [nRight, setNRight] = useState(0)
  const [nWrong, setNWrong] = useState(0)
  const [guessed, setGuessed] = useState(new Set())
  const [answer, setAnswer] = useState('apple')

  function guessedWord() {
    return answer
      .split("")
      .map(ltr => (guessed.has(ltr) ? ltr : "_"));
  }

  function handleGuess(evt) {
    let ltr = evt.target.value;
    setGuessed(guessed.add(ltr))
    setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1))
    setNRight(nRight + (answer.includes(ltr) ? 1 : 0))

    // this.setState(st => ({
    //   guessed: st.guessed.add(ltr),
    //   nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    // }));
  }

  function generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  return ( 
    <div className={styles.Hangman}>
      <h1>Hangman</h1>
      <img src={images[nWrong]} alt='images' />
      <p>Guessed: {nWrong}</p>
      <p className='Hangman-word'>{guessedWord()}</p>
      <p className='Hangman-btns'>{generateButtons()}</p>
    </div>
  );
}

export default Hangman;