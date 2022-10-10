import React from 'react';
import {
  HashRouter,
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
  return (
    <HashRouter basename="/martirosell">
      <div className="App">
        <Navbar state={State} />
        <Routes>
          <Route
            path="/"
            element={
              <Landing state={State} />
              }
          />
          <Route
            path="/about"
            element={
              <AboutMe artist={Artist} />
              }
          />
          <Route
            path="/:galleryParam"
            element={
              <Gallery state={State} />
              }
          />
          <Route
            path="/:galleryParam/:detailParam"
            element={
              <Detail state={State} artist={Artist} />
              }
          />
        </Routes>
        <Footer artist={Artist} />
      </div>
    </HashRouter>
  );
}

export default App;
