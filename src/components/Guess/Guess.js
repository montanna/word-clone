import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({guess, answer}) {
  let guessArray = [];
  if(guess) guessArray = guess.split('');
  let checkedGuesses = checkGuess(guess, answer);
  return <>
    {
    range(5).map(
      (num) => (
        <span 
          className={checkedGuesses ? checkedGuesses[num].status + " cell" : "cell"} 
          key={num}
        > 
          {guessArray.length > 0 ? guessArray[num] : ''}
        </span>
      )
    ) 
    }
  </>;
}

export default Guess;
