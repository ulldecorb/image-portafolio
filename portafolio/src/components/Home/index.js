import React from 'react';
import PropTypes from 'prop-types';

export function Home({ skill }) {
  console.log('Home skill: ', skill);
  return (
    <section className="home">
      {/* {thumbnail.map((galleryItem) => ( */}
      <article className="home-article" key="home">
        <img
          className="home__thumbnail"
          src={skill.skillCollection[0].galleryCollection[0].imageUrl}
          alt={skill.skillCollection[0].galleryCollection[0].imageName}
        />
      </article>
      {/* ))} */}
      <p>{skill.skillName}</p>
    </section>
  );
}

Home.propTypes = {
  skill: PropTypes.shape({
    skillName: PropTypes.string,
    skillCollection: PropTypes.arrayOf(
      PropTypes.shape({
        galleryCollection: PropTypes.arrayOf(
          PropTypes.shape({
            imageName: PropTypes.string,
            imageUrl: PropTypes.string
          })
        )
      })
    )
  }).isRequired
};

export default Home;
