import React from 'react';
import PropTypes from 'prop-types';
import './navbar.css';

// export function Navbar({ skill, state }) {
export function Navbar({ state, setMainGallery }) {
// export function Navbar({ skill }) {

  const navBarHandler = (e, galleryName) => {
    e.preventDefault();
    const newGallery = state.find((skill) => skill.skillName === galleryName);
    console.log('newGallery: ', newGallery);
    setMainGallery(newGallery);
  };

  return (
    <nav className="navbar">
      {/* <h3>{skill.skillName}</h3> */}
      {state.map((skillItem) => (
        <button
          onClick={(e) => navBarHandler(e, skillItem.skillName)}
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
  setMainGallery: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired
  ).isRequired
};

export default Navbar;
