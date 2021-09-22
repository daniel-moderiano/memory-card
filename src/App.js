import './styles/App.css';
import './styles/reset.css';

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
      </main>
    </div>
  );
}

export default App;
