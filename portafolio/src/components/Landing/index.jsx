import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './landing.css';

export function Landing({ state }) {
  return (
    <header className="landing">
      <img src={logo} className="landing__logo" alt="logo" />
      <section className="landing__skill-box">
        {state.map((skill) => (
          <Link
            className="skill-box"
            to={`/${skill.skillName}`}
            style={{ textDecoration: 'none' }}
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
              {skill.skillCollection[2] && (
              <img
                src={skill.skillCollection[2].galleryCollection[0].imageUrl}
                className="skill-box__thumbnail"
                alt="logo"
              />
              )}
            </div>
          </Link>
        ))}
      </section>
    </header>
  );
}

Landing.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Landing;
