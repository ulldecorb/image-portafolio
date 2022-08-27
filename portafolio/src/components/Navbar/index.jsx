import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

export function Navbar({ state }) {
  const currentUrl = useLocation();
  const [currentGallery, setCurrentGallery] = useState('');

  const getCurrentGallery = () => currentUrl.pathname;
  useEffect(() => {
    setCurrentGallery(getCurrentGallery());
  });

  return (
    <nav className="navbar">
      {state.map((galleryItem) => (
        <Link
          to={`/${galleryItem.galleryName}`}
          type="button"
          className={`/${galleryItem.galleryName}` === currentGallery ? 'navbar__handler--focus' : 'navbar__handler'}
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
