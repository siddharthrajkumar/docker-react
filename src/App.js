import luffy from './luffy.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={luffy} className="App-logo" alt="logo" />
        <p>
          Monkey D Luffy
        </p>
        <a
          className="App-link"
          href="https://en.wikipedia.org/wiki/One_Piece"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gomu Gomu Noooooooo!
        </a>
      </header>
    </div>
  );
}

export default App;
