import React from 'react';
import PropTypes from 'prop-types';
import './home.css';

export function Home({ skill }) {
  console.log('Home skill: ', skill);

  return (
    <section className="home">
      {skill.skillCollection.map((galleryItem) => (
        <article className="home-article" key={`home-${galleryItem.galleryCollection[0].imageName}`}>
          <p>{galleryItem.skillName}</p>
          <img
            className="home__thumbnail"
            src={galleryItem.galleryCollection[0].imageUrl}
            alt={galleryItem.galleryCollection[0].imageName}
          />
        </article>
      ))}
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
