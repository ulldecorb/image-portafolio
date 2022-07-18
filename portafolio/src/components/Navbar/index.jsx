import React from 'react';
import PropTypes from 'prop-types';

export function Navbar({ galleriesList }) {
  return (
    <nav>
      {galleriesList.map((gallery) => (
        <h3>{gallery}</h3>
      ))}
    </nav>

  );
}

Navbar.PropTypes = {
  galleriesList: PropTypes.arrayOf(
    PropTypes.String.isRequired
  )
};

export default Navbar;
