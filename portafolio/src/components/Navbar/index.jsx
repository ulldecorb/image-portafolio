import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.css';

export function Navbar({ state }) {
  return (
    <nav className="navbar">
      {state.map((skillItem) => (
        <Link
          to={`/${skillItem.skillName}`}
          type="button"
          className="navbar__handler"
          key={`nav-handler-${skillItem.skillName}`}
        >
          {skillItem.skillName}
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
