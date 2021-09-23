import './styles/App.css';
import './styles/reset.css';
import { Card } from './components/Card';

function App() {




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
          <Card char={'Cloud'}/>
          {/* Each card should be a reused component 'card' with an image, name, and background */}
        </div>
      </main>
    </div>
  );
}

export default App;
