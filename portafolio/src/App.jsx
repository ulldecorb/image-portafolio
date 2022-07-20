import React, { useEffect, useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
// import { Detail } from './components/Detail';
import { Artist, State } from './constants/projects';
import logo from './logo.svg';
import './style/App.css';

function App() {
  const [state, setState] = useState([]);
  const [artist, setArtist] = useState({});
  const [mainGallery, setMainGallery] = useState(State[0]);

  useEffect(() => {
    setState(State);
    setArtist(Artist);
    setMainGallery(State[0]);
  }, []);

  const handleHome = (e, skillTitle) => {
    e.preventDefault();
    const newGallery = state.find((skill) => skill.skillName === skillTitle);
    setMainGallery(newGallery);
  };

  return (
  // <Router>
    <div className="App">
      {/* <Routes> */}
      <Navbar state={state} setMainGallery={setMainGallery} />
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        <section className="App__skill-box">
          {state.map((skill) => (
            <button type="button" onClick={(e) => handleHome(e, skill.skillName)} className="skill-box" key={`link-${skill.skillName}`}>
              <h3 className="skill-box__title">{skill.skillName}</h3>
              <div className="skill-box__thumbnail-box">
                <img src={skill.skillCollection[0].galleryCollection[0].imageUrl} className="skill-box__thumbnail" alt="logo" />
                <img src={skill.skillCollection[1].galleryCollection[0].imageUrl} className="skill-box__thumbnail" alt="logo" />
              </div>
            </button>
          ))}
        </section>
        {/* <Route
              path="/detail"
              element={
                <Detail skill={mainGallery} />
              }
            /> */}
        <Home skill={mainGallery} />
        <Footer artist={artist} />
      </header>
      {/* </Routes> */}
    </div>
  // </Router>
  );
}

export default App;
