import React from 'react';
import './App.css';
import Counter from './Components/counter';
import logo from './logo.svg'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hi prajjwal
        </a>
        <div className="Counter">
        <button> CLick ME</button>
      </div>
      </header>
      <div id="root"></div>
      <Counter/>
      <button>Click ME</button>
    </div>
  );
}

export default App;
