import React from 'react';
import PropTypes from 'prop-types';
import './aboutMe.css';

export function AboutMe({ artist }) {
  return (
    <section id="aboutMe" className="about-me">
      <div className="about-me__text-box">
        <article className="text-box">
          <p className="text-box__context">{artist.aboutMe.p1}</p>
          <p className="text-box__context">{artist.aboutMe.p2}</p>
          <p className="text-box__context">{artist.aboutMe.p3}</p>
        </article>
        <article className="text-box">
          <p className="text-box__contact">{artist.contact.phone}</p>
          <p className="text-box__contact">{artist.contact.mail}</p>
          <p className="text-box__contact">{artist.contact.instagram}</p>
          <p className="text-box__contact">{artist.contact.linkedin}</p>
          <p className="text-box__contact">{artist.contact.behance}</p>
          <p className="text-box__contact">{artist.contact.vimeo}</p>
        </article>
      </div>
      <img className="about-me__portrait" src={artist.photo} alt="marti rosell's portrait" />
    </section>
  );
}

AboutMe.propTypes = {
  artist: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    contact: PropTypes.arrayOf(
      PropTypes.shape({}).isRequired
    ),
    aboutMe: PropTypes.arrayOf(
      PropTypes.shape({})
    ).isRequired
  }).isRequired
};

export default AboutMe;
