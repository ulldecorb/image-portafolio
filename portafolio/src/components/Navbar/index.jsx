import React, { useState, useEffect } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './navbar.css';

export function Navbar({ state }) {
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
    <nav className="navbar">
      {state.map((galleryItem) => (
        <Link
          to={`/${galleryItem.galleryName}`}
          type="button"
          className={`${galleryItem.galleryName}` === currentGalleryName ? 'navbar__handler navbar__handler--focus' : 'navbar__handler'}
          key={`nav-handler-${galleryItem.galleryName}`}
        >
          {galleryItem.galleryName}
        </Link>
      ))}
    </nav>
  );
}

Navbar.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Navbar;
