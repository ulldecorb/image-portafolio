import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { Detail } from './components/Detail';
import { Artist, State } from './constants/projects';
import './App.css';

function App() {
  const [state, setState] = useState(State);
  const [artist, setArtist] = useState({});
  const [expandFooter, setExpandFooter] = useState(false);

  useEffect(() => {
    setState(State);
    setArtist(Artist);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar state={state} />
        <Routes>
          <Route
            path="/"
            element={
              <Landing state={state} />
              }
          />
          <Route
            path="/:galleryParam"
            element={
              <Gallery state={state} />
              }
          />
          <Route
            path="/:galleryParam/:detailParam"
            element={
              <Detail state={state} artist={artist} setExpandFooter={setExpandFooter} />
              }
          />
        </Routes>
        <Footer artist={artist} expandFooter={expandFooter} />
      </div>
    </Router>
  );
}

export default App;
