import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './footer.css';

export function Footer({ artist }) {
  const currentUrl = useLocation();
  const [currentGalleryName, setCurrentGalleryName] = useState('');

  const checkUri = () => (currentUrl.pathname === '/');
  const getUriSGalleryName = () => {
    if (checkUri()) return null;
    const galleryNameRegExp = /([a-z]+)/i;
    const newGalleryName = galleryNameRegExp.exec(currentUrl.pathname)[0];
    return newGalleryName;
  };

  useEffect(() => {
    setCurrentGalleryName(getUriSGalleryName());
  }, [currentUrl]);

  return (
    <footer className={currentGalleryName === 'about' ? 'footer footer--dark-theme' : 'footer'}>
      <Link
        to="/about"
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
