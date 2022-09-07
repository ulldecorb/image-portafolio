import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer.css';

export function Footer({ artist }) {
  return (
    <footer className="footer">
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <h1 className="footer__title">{artist.artistName}</h1>
      </Link>
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <h2 className="footer__title">{artist.portafolioType}</h2>
      </Link>
    </footer>
  );
}

Footer.propTypes = {
  artist: PropTypes.shape({
    artistName: PropTypes.string,
    portafolioType: PropTypes.string
  }).isRequired
};

export default Footer;
