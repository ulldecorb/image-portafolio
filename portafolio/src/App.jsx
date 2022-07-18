import React from 'react';
import { Artist, State } from './constants/projects';
import logo from './logo.svg';
import './style/App.css';

function App() {
  const [state, setState] = React.useState([]);
  // const [galleryList, setGalleryList] = React.useState([]);

  // const getGallery = () => {
  //   const newList = State.map((skill) => {
  //     const innerNewList = {
  //       title: skill.skillName,
  //       thumbnailUrl: [
  //         skill.skillCollection[0].galleryCollection[0].imageUrl || null,
  //         skill.skillCollection[1].galleryCollection[0].imageUrl || null
  //       ]
  //     };
  //     console.log('innerNewList', innerNewList);
  //     return innerNewList;
  //   });

  //   setGalleryList(newList);
  // };

  React.useEffect(() => {
    setState(State);
  }, []);

  return (
    <div className="App">
      <header className="App__header">
        <img src={logo} className="App__logo" alt="logo" />
        {state.map((skill) => (
          <section className="App__skill-box" key={`link-${skill.skillName}`}>
            <h3 className="skill-box__title">{skill.skillName}</h3>
            <div className="skill-box__thumbnail-box">
              <img src={skill.skillCollection[0].galleryCollection[0].imageUrl} className="skill-box__thumbnail" alt="logo" />
              <img src={skill.skillCollection[1].galleryCollection[0].imageUrl} className="skill-box__thumbnail" alt="logo" />
            </div>
          </section>
        ))}
        <footer className="App__footer">
          <h1 className="footer__title">{Artist.artistName}</h1>
          <h2 className="footer__title">Art & Design portofolio</h2>
        </footer>
      </header>
    </div>
  );
}

export default App;
