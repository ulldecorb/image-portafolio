import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './navbar.css';

// export function Navbar({ skill, state }) {
// export function Navbar({ state, setMainGallery }) {
export function Navbar({ state }) {
// export function Navbar({ skill }) {

  // const navBarHandler = (e, galleryName) => {
  //   e.preventDefault();
  //   const newGallery = state.find((skill) => skill.skillName === galleryName);
  //   setMainGallery(newGallery);
  // };

  return (
    <nav className="navbar">
      {state.map((skillItem) => (
        <Link
          to={`/${skillItem.skillName}`}
          // onClick={(e) => navBarHandler(e, skillItem.skillName)}
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
  // skill: PropTypes.shape({
  //   skillName: PropTypes.string.isRequired
  // }).isRequired
  // setMainGallery: PropTypes.func.isRequired,
  state: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired
  ).isRequired
};

export default Navbar;
