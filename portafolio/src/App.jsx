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
import { AboutMe } from './components/AboutMe';
import './App.css';

function App() {
  const [state, setState] = useState(State);
  const [artist, setArtist] = useState({});

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
            path="/image-portafolio"
            element={
              <Landing state={state} />
              }
          />
          <Route
            path="/image-portafolio/about"
            element={
              <AboutMe artist={artist} />
              }
          />
          <Route
            path="/image-portafolio/:galleryParam"
            element={
              <Gallery state={state} />
              }
          />
          <Route
            path="/image-portafolio/:galleryParam/:detailParam"
            element={
              <Detail state={state} artist={artist} />
              }
          />
        </Routes>
        <Footer artist={artist} />
      </div>
    </Router>
  );
}

export default App;
