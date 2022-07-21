import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

export function Landing({ state, setMainGallery }) {
  const handleHome = (e, skillTitle) => {
    e.preventDefault();
    const newGallery = state.find((skill) => skill.skillName === skillTitle);
    setMainGallery(newGallery);
  };

  return (
    <header className="App__header">
      <img src={logo} className="App__logo" alt="logo" />
      <section className="App__skill-box">
        {state.map((skill) => (
          <button
            type="button"
            onClick={(e) => handleHome(e, skill.skillName)}
            className="skill-box"
            key={`link-${skill.skillName}`}
          >
            <h3 className="skill-box__title">{skill.skillName}</h3>
            <div className="skill-box__thumbnail-box">
              <img
                src={skill.skillCollection[0].galleryCollection[0].imageUrl}
                className="skill-box__thumbnail"
                alt="logo"
              />
              <img
                src={skill.skillCollection[1].galleryCollection[0].imageUrl}
                className="skill-box__thumbnail"
                alt="logo"
              />
            </div>
          </button>
        ))}
      </section>
    </header>
  );
}

Landing.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  setMainGallery: PropTypes.func.isRequired
};

export default Landing;
