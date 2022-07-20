import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Artist, State } from './constants/projects';
import logo from './logo.svg';
import './style/App.css';

function App() {
  const [state, setState] = useState([]);
  const [mainGallery, setMainGallery] = useState(State[0]);

  useEffect(() => {
    setState(State);
    setMainGallery(State[1]);
  }, []);

  const handleHome = (e, skillTitle) => {
    e.preventDefault();
    const newGallery = state.find((skill) => skill.skillName === skillTitle);
    setMainGallery(newGallery);
  };

  return (
    <div className="App">
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
        <Navbar state={state} />
        <Home skill={mainGallery} />
        <footer className="App__footer">
          <h1 className="footer__title">{Artist.artistName}</h1>
          <h2 className="footer__title">Art & Design portofolio</h2>
        </footer>
      </header>
    </div>
  );
}

export default App;
