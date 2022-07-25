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
        {state.map((galleryItem) => (
          <Link
            className="skill-box"
            to={`/${galleryItem.galleryName}`}
            style={{ textDecoration: 'none' }}
            key={`link-${galleryItem.galleryName}`}
          >
            <h3 className="skill-box__title">{galleryItem.galleryName.toUpperCase()}</h3>
            <div className="skill-box__thumbnail-box">
              <img
                src={galleryItem.galleryCollection[0].detailCollection[0].imageUrl}
                className="skill-box__thumbnail"
                alt="logo"
              />
              <img
                src={galleryItem.galleryCollection[1].detailCollection[0].imageUrl}
                className="skill-box__thumbnail"
                alt="logo"
              />
              {galleryItem.galleryCollection[2] && (
              <img
                src={galleryItem.galleryCollection[2].detailCollection[0].imageUrl}
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
