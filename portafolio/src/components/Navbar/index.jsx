import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export function Navbar({ state }) {
  const currentUrl = useLocation();
  const [currentGalleryName, setCurrentGalleryName] = useState('');
  const getUriString = () => {
    const galleryNameRegExp = /([a-z]+)/g;
    const newGalleryName = galleryNameRegExp.test(currentUrl.pathname)
    && currentUrl.pathname.match(galleryNameRegExp)[3];
    return newGalleryName;
  };

  useEffect(() => {
    setCurrentGalleryName(getUriString());
  }, [currentUrl]);

  return (
    <nav className="navbar">
      {state.map((galleryItem) => (
        <Link
          to={`/image-portafolio/martirosell/${galleryItem.galleryName}`}
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
