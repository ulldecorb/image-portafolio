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
          <a href={`tel:${artist.contact.phone.split('').filter((item) => item !== ' ').join('')}`} target="_blank" className="text-box__contact-box" rel="noreferrer">
            <img className="contact-box__icon" src="https://i.ibb.co/VS2zKZW/Telf.png" alt="phone icon" />
            <p className="contact-box__contact">{artist.contact.phone}</p>
          </a>
          <a href="mailto:martirosellc@gmail.com" target="_blank" className="text-box__contact-box" rel="noreferrer">
            <img className="contact-box__icon" src="https://i.ibb.co/r3b3xDy/Mail.png" alt="mail icon" />
            <p className="contact-box__contact">{artist.contact.mail}</p>
          </a>
          <a href="https://www.instagram.com/martirosell/" target="_blank" className="text-box__contact-box" rel="noreferrer">
            <img className="contact-box__icon" src="https://i.ibb.co/zNxQsGV/Instagram.png" alt="instagram icon" />
            <p className="contact-box__contact">{artist.contact.instagram}</p>
          </a>
          <a href="https://www.linkedin.com/in/martirosell/" target="_blank" className="text-box__contact-box" rel="noreferrer">
            <img className="contact-box__icon" src="https://i.ibb.co/d05C0jq/Linkedin.png" alt="linkedin icon" />
            <p className="contact-box__contact">{artist.contact.linkedin}</p>
          </a>
          <a href="https://www.behance.net/martirosell/" target="_blank" className="text-box__contact-box" rel="noreferrer">
            <img className="contact-box__icon" src="https://i.ibb.co/DKj3xhZ/Behance.png" alt="behance icon" />
            <p className="contact-box__contact">{artist.contact.behance}</p>
          </a>
          <a href="https://vimeo.com/martirosell/" target="_blank" className="text-box__contact-box" rel="noreferrer">
            <img className="contact-box__icon" src="https://i.ibb.co/jf40kvM/Vimeo.png" alt="vimeo icon" />
            <p className="contact-box__contact">{artist.contact.vimeo}</p>
          </a>
        </article>
      </div>
      <img className="about-me__portrait" src={artist.photo} alt="marti rosell's portrait" />
    </section>
  );
}

AboutMe.propTypes = {
  artist: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      adress: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      instagram: PropTypes.string.isRequired,
      linkedin: PropTypes.string.isRequired,
      behance: PropTypes.string.isRequired,
      vimeo: PropTypes.string.isRequired
    }),
    aboutMe: PropTypes.shape({
      p1: PropTypes.string,
      p2: PropTypes.string,
      p3: PropTypes.string
    }).isRequired
  }).isRequired
};

export default AboutMe;
