import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer.css';

export function Footer({ artist, expandFooter }) {
  return (
    <footer className={expandFooter ? 'footer footer--reduced' : 'footer'}>
      <Link
        to="/"
        style={{ textDecoration: 'none' }}
      >
        <h1 className="footer__title">{artist.artistName}</h1>
      </Link>
      <h2 className="footer__title">{artist.portafolioType}</h2>
    </footer>
  );
}

Footer.propTypes = {
  artist: PropTypes.shape({
    artistName: PropTypes.string,
    portafolioType: PropTypes.string
  }).isRequired,
  expandFooter: PropTypes.bool.isRequired
};

export default Footer;
