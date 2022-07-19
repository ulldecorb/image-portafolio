import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

// export function Navbar({ skill, state }) {
export function Navbar({ state }) {
// export function Navbar({ skill }) {
  return (
    <nav className="navbar">
      {/* <h3>{skill.skillName}</h3> */}
      {state.map((skillItem) => (
        <button
          type="button"
          className="navbar__handler"
          key={`nav-handler-${skillItem.skillName}`}
        >
          {skillItem.skillName}

        </button>
      ))}
    </nav>
  );
}

Navbar.propTypes = {
  // skill: PropTypes.shape({
  //   skillName: PropTypes.string.isRequired
  // }).isRequired
  state: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired
  ).isRequired
};

export default Navbar;
