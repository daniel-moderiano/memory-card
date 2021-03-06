import './styles/reset.css';
import './styles/App.css';

import mario from './images/mario.png';
import bowser from './images/bowser.png';
import diddy from './images/diddy.png';
import fox from './images/fox.png';
import ike from './images/ike.png';
import isabelle from './images/isabelle.png';
import link from './images/link.png';
import luigi from './images/luigi.png';
import peach from './images/peach.png';
import wario from './images/wario.png';
import joker from './images/joker.png';
import dk from './images/dk.png';

import { Card } from './components/Card';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Scoreboard } from './components/Scoreboard';


function App() {

  const [characters, setCharacters] = useState({
    mario: {
      id: nanoid(),
      clicked: false,
      src: mario,
    },
    'donkey kong': {
      id: nanoid(),
      clicked: false,
      src: dk,
    },
    bowser: {
      id: nanoid(),
      clicked: false,
      src: bowser,
    },
    'diddy kong': {
      id: nanoid(),
      clicked: false,
      src: diddy,
    },
    fox: {
      id: nanoid(),
      clicked: false,
      src: fox,
    },
    ike: {
      id: nanoid(),
      clicked: false,
      src: ike,
    },
    isabelle: {
      id: nanoid(),
      clicked: false,
      src: isabelle,
    },
    luigi: {
      id: nanoid(),
      clicked: false,
      src: luigi,
    },
    link: {
      id: nanoid(),
      clicked: false,
      src: link,
    },
    peach: {
      id: nanoid(),
      clicked: false,
      src: peach,
    },
    wario: {
      id: nanoid(),
      clicked: false,
      src: wario,
    },
    joker: {
      id: nanoid(),
      clicked: false,
      src: joker,
    }
  });

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Optionally handle the scenario where the player successfully 'completes' the game 
  useEffect(() => {
    if (currentScore === (Object.keys(characters)).length) {
      alert('Max score reached, well done! Press any character card to restart');
    }
  });

  const markCharacterAsClicked = (characterName) => {
    setCharacters({
      ...characters, 
      [characterName]: { ...characters[characterName], clicked: true } });
  }

  const markAllCharactersAsUnclicked = () => {
    const newState = { ...characters };
    Object.keys(characters).forEach((character) => newState[character].clicked = false);
    setCharacters(newState);
  }

  const calculateBestScore = () => {
    if (currentScore >= bestScore) {
      setBestScore(bestScore + 1);
    }
  }

  const handleCardClick = (characterName) => {
    if (characters[characterName].clicked) {
      setCurrentScore(0);
      markAllCharactersAsUnclicked();
    } else {
      markCharacterAsClicked(characterName);
      setCurrentScore(currentScore + 1);
      calculateBestScore();
    }
  }

  // From Mike Bostock https://bost.ocks.org/mike/shuffle - implementation of Fisher Yates Shuffle in JS
  function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

    }
    return array;
  }

  // Randomly shuffle the characters in the state. Because this function is returned by App.js, it will be re-rendered/run on each click, enabling shuffling of cards on each click
  const shuffleCharacterCards = () => {
    const shuffledCharacters = shuffleArray(Object.keys(characters));
    
    return shuffledCharacters.map((character) => (<Card key={characters[character].id} name={character} handleClick={handleCardClick} src={characters[character].src} />));
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Memory Game</h1>
        <Scoreboard best={bestScore} current={currentScore}/>
      </header>
      <main className="main">
        <div className="instructions">Increase your score by clicking on an image, but if you click the same image twice, it's game over!</div>
        <div className="container">
          {shuffleCharacterCards()}
        </div>
      </main>
    </div>
  );
}

export default App;
