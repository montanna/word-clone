import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Banner({guesses, answer}) {
  return <>
    {
      guesses.length === NUM_OF_GUESSES_ALLOWED || guesses[guesses.length - 1] === answer
      ? <div class={guesses[guesses.length - 1] === answer  ? "happy banner" : "sad banner"}>
        <h1>
          {
            guesses[guesses.length - 1] === answer ? "You win! Got it in " + guesses.length + " guesses." : "Sorry, the correct answer is " + answer
          }
        </h1>
        <button onClick={()=>{window.location.reload();}}>Play again?</button>
      </div> 
      : ''
    }
  </>;
}

export default Banner;
