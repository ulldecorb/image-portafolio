import React from 'react';
import PropTypes from 'prop-types';

export function Footer({ artist }) {
  return (
    <footer className="App__footer">
      <h1 className="footer__title">{artist.artistName}</h1>
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
