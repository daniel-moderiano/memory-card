import './styles/reset.css';
import './styles/App.css';

import { Card } from './components/Card';
import { useState } from 'react';
import { nanoid } from 'nanoid';


function App() {

  const [characters, setCharacters] = useState({
    cloud: {
      id: nanoid(),
      clicked: false,
    },
    mario: {
      id: nanoid(),
      clicked: false,
    },
    kirby: {
      id: nanoid(),
      clicked: false,
    },
    'donkey kong': {
      id: nanoid(),
      clicked: false,
    },
    richter: {
      id: nanoid(),
      clicked: false,
    }
  });

  Object.keys(characters).forEach((character) => {
    console.log(`${character} has id ${characters[character].id}`);
  })

  const [currentScore, setCurrentScore] = useState(0);

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

  const incrementCurrentScore = () => setCurrentScore(currentScore + 1);

  const resetCurrentScore = () => setCurrentScore(0);

  const handleCardClick = (characterName) => {
    if (characters[characterName].clicked) {
      resetCurrentScore();
      markAllCharactersAsUnclicked();
    } else {
      markCharacterAsClicked(characterName);
      incrementCurrentScore();
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

  const charactersToRender = () => {
    return Object.keys(characters).map((character) => (<Card key={characters[character].id} name={character} handleClick={handleCardClick}/>));
  }


  const shuffleCharacterCards = () => {
    const shuffledCharacters = shuffleArray(Object.keys(characters));
    console.log(shuffledCharacters);
    
    return shuffledCharacters.map((character) => (<Card key={characters[character].id} name={character} handleClick={handleCardClick}/>));
  }


  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Memory Game</h1>
        <div className="scoreboard">
          {/* Component to display current score */}
          {/* Component to display best score - may be combined with above? */}
        </div>
      </header>
      <main className="main">
        <div className="instructions">Increase your score by clicking on an image, but if you click the same image twice, it's game over!</div>
        <div className="container">
          {/* Use container display grid to layout cards */}
          {charactersToRender()}
          {shuffleCharacterCards()}
          {/* Each card should be a reused component 'card' with an image, name, and background */}
        </div>
      </main>
    </div>
  );
}

export default App;
