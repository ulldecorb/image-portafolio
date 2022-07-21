import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Footer({ artist }) {
  return (
    <footer className="App__footer">
      <Link to="/">
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
  }).isRequired
};

export default Footer;
