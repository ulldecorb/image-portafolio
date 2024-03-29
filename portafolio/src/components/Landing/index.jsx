import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './landing.css';

export function Landing({ state }) {
  return (
    <main className="landing">
      <img src="https://i.ibb.co/XW6Bsfg/LightW.png" className="landing__logo" alt="logo" />
      <section className="landing__skill-box">
        {state.map((galleryItem) => (
          <Link
            className="skill-box"
            to={`/${galleryItem.galleryName}`}
            style={{ textDecoration: 'none' }}
            key={`link-${galleryItem.galleryName}`}
          >
            <h2 className="skill-box__title">{galleryItem.galleryName.toUpperCase()}</h2>
            <div className="skill-box__thumbnail-box">
              <span
                className="skill-box__thumbnail"
                style={{ backgroundImage: `url("${galleryItem.galleryCollection[0].detailCollection[0].thumbnail}")` }}
              />
              <span
                className="skill-box__thumbnail"
                style={{ backgroundImage: `url("${galleryItem.galleryCollection[1].detailCollection[0].thumbnail}")` }}
              />
              {galleryItem.galleryCollection[2] && (
              <span
                className="skill-box__thumbnail"
                style={{ backgroundImage: `url("${galleryItem.galleryCollection[2].detailCollection[0].thumbnail}")` }}
              />
              )}
            </div>
          </Link>
        ))}
      </section>
      <Link
        to="/about"
        style={{ textDecoration: 'none' }}
      >
        <h2 className="landing__about-link">ABOUT ME</h2>
      </Link>
    </main>
  );
}

Landing.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Landing;
