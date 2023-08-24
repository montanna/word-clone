import React from "react";
import {checkGuess} from '../../game-helpers';

function GameInput({guess, setGuess, guesses, setGuesses, answer}) {
  let alphabet = "QWERTYUIOP_ASDFGHJKL_ZXCVBNM".split('_');
  let row1 = alphabet[0].split('');
  let row2 = alphabet[1].split('');
  let row3 = alphabet[2].split('');
  return(
    <>
      <form 
        className="guess-input-wrapper"
        onSubmit={
          event =>{
            event.preventDefault();
            const newGuess = guess;
            setGuesses([...guesses, newGuess]);
            setGuess("");
          }
        }
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
          id="guess-input" 
          type="text" 
          pattern="[A-Za-z]{5}"
          title="Must be 5 letters" 
          value={guess} 
          onChange={
            event => { setGuess(event.target.value.toUpperCase()); }
        }/>
        <div className="keyboard">
          <div className="row">
        {
          row1.map((keyLetter)=>{
            let keyStatus = "";
            if(guesses){
              let i = 0;
              for(i=0; i < guesses.length; i++){
                let checkedGuess = checkGuess(guesses[i], answer);
                let j = 0;
                
                if(checkedGuess){
                  for(j = 0; j < checkedGuess.length; j++){
                    if(checkedGuess[j].letter === keyLetter) keyStatus = checkedGuess[j].status;
                  }
                }
              }
            }
            
            return(
            <span key={keyLetter} className={keyStatus + " cell"} >{keyLetter}</span>
          )})
        }
        </div>
        <div className="row">
        {
          row2.map((keyLetter)=>{
            let keyStatus = "";
            if(guesses){
              let i = 0;
              for(i=0; i < guesses.length; i++){
                let checkedGuess = checkGuess(guesses[i], answer);
                let j = 0;
                
                if(checkedGuess){
                  for(j = 0; j < checkedGuess.length; j++){
                    if(checkedGuess[j].letter === keyLetter) keyStatus = checkedGuess[j].status;
                  }
                }
              }
            }
            
            return(
            <span key={keyLetter} className={keyStatus + " cell"} >{keyLetter}</span>
          )})
        }
        </div>
        <div className="row">
        {
          row3.map((keyLetter)=>{
            let keyStatus = "";
            if(guesses){
              let i = 0;
              for(i=0; i < guesses.length; i++){
                let checkedGuess = checkGuess(guesses[i], answer);
                let j = 0;
                
                if(checkedGuess){
                  for(j = 0; j < checkedGuess.length; j++){
                    if(checkedGuess[j].letter === keyLetter) keyStatus = checkedGuess[j].status;
                  }
                }
              }
            }
            
            return(
            <span key={keyLetter} className={keyStatus + " cell"} >{keyLetter}</span>
          )})
        }
        </div>
        </div>
      </form>
    </>
  );
}

export default GameInput;
