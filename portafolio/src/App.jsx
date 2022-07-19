import React from 'react';
import { Artist, State } from './constants/projects';
import logo from './logo.svg';
import './style/App.css';

function App() {
  const [state, setState] = React.useState([]);
  const [mainGallery, setMainGallery] = React.useState(State[0].skillName);

  React.useEffect(() => {
    setState(State);
  }, []);

  const handleHome = (e, skillTitle) => {
    e.preventDefault();
    setMainGallery(skillTitle);
  };

  console.log('mainGallery: ', mainGallery);

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
        <footer className="App__footer">
          <h1 className="footer__title">{Artist.artistName}</h1>
          <h2 className="footer__title">Art & Design portofolio</h2>
        </footer>
      </header>
    </div>
  );
}

export default App;
