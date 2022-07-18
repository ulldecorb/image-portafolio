import React from 'react';
import { Artist } from './constants/projects';
import logo from './logo.svg';
import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <footer className="App__footer">
          <h1 className="footer__title">{Artist.artistName}</h1>
          <h2 className="footer__title">Art & Design portofolio</h2>
        </footer>
      </header>
    </div>
  );
}

export default App;
