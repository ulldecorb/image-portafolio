import React from 'react';
import PropTypes from 'prop-types';
import './home.css';

export function Home({ skill }) {
  return (
    <section className="home">
      {skill.skillCollection.map((galleryItem) => (
        <article className="home__article" key={`home-${galleryItem.galleryCollection[0].imageName}`}>
          <div className="home__info-box">
            <h3 className="info-box__title">{galleryItem.galleryName.toUpperCase()}</h3>
            <p className="info-box__discipline">{galleryItem.discipline}</p>
            <p className="info-box__year">
              Year:
              {' '}
              {galleryItem.data}
            </p>
          </div>
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
