import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import logo from '../../logo.svg';
import './landing.css';

export function Landing({ state }) {
  return (
    <main className="landing">
      {/* <img src={logo} className="landing__logo" alt="logo" /> */}
      <img src="https://i.ibb.co/k6Kq8XY/LightW.png" className="landing__logo" alt="logo" />
      <img src="https://i.ibb.co/k6Kq8XY/LightW.png" className="landing__logo" alt="logo" />
      <img src="https://i.ibb.co/k6Kq8XY/LightW.png" className="landing__logo" alt="logo" />
      <img src="https://i.ibb.co/k6Kq8XY/LightW.png" className="landing__logo" alt="logo" />
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
                style={{ backgroundImage: `url("${galleryItem.galleryCollection[0].detailCollection[0].imageUrl}")` }}
              />
              <span
                className="skill-box__thumbnail"
                style={{ backgroundImage: `url("${galleryItem.galleryCollection[1].detailCollection[0].imageUrl}")` }}
              />
              {galleryItem.galleryCollection[2] && (
              <span
                className="skill-box__thumbnail"
                style={{ backgroundImage: `url("${galleryItem.galleryCollection[2].detailCollection[0].imageUrl}")` }}
              />
              )}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

Landing.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Landing;
