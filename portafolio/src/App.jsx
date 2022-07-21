import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { Detail } from './components/Detail';
import { Artist, State } from './constants/projects';
import './App.css';

function App() {
  const [state, setState] = useState(State);
  const [artist, setArtist] = useState({});
  const [mainGallery, setMainGallery] = useState(State[0]);

  useEffect(() => {
    setState(State);
    setArtist(Artist);
    setMainGallery(State[0]);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar state={state} setMainGallery={setMainGallery} />
        <Routes>
          <Route
            path="/"
            element={
              <Landing state={state} setMainGallery={setMainGallery} />
              }
          />
          <Route
            path="/:skillgallery"
            element={
              <Home state={state} skill={mainGallery} />
              }
          />
          <Route
            path="/:skillgallery/:collection"
            element={
              <Detail />
              }
          />
          {/* <Home skill={mainGallery} /> */}
        </Routes>
        <Footer artist={artist} />
      </div>
    </Router>
  );
}

export default App;
