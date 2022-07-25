import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.css';

export function Navbar({ state }) {
  return (
    <nav className="navbar">
      {state.map((galleryItem) => (
        <Link
          to={`/${galleryItem.galleryName}`}
          type="button"
          className="navbar__handler"
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
    PropTypes.shape({}).isRequired
  ).isRequired
};

export default Navbar;
