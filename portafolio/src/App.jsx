import React from 'react';
import { Artist } from './constants/projects';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{Artist.artistName}</h2>
        <h2>Art & Design portofolio</h2>
      </header>
    </div>
  );
}

export default App;
