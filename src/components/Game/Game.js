import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from '../GameInput';
import GuessGrid from '../GuessGrid';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  
  return <>
    <GuessGrid guesses={guesses} answer={answer}/>
    <GameInput guess={guess} setGuess={setGuess} guesses={guesses} setGuesses={setGuesses} answer={answer}/>
    <Banner guesses={guesses} answer={answer}/>
  </>;
}

export default Game;
