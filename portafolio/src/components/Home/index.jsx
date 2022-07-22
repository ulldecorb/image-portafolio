import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import './home.css';

export function Home({ state }) {
  const { skillgallery } = useParams();
  const [gallery, setGallery] = React.useState('');

  const getGallery = () => {
    const newGallery = state.find((skillItem) => skillItem.skillName === skillgallery);
    return newGallery;
  };

  React.useEffect(() => {
    setGallery(getGallery());
  });

  return gallery === ''
    ? (<h3>404 Not page found</h3>)
    : (
      <section className="home">
        {gallery.skillCollection.map((galleryItem) => (
          <Link
            to={`/${gallery.skillName}/${galleryItem.galleryName}`}
            className="home__article"
            key={`home-${galleryItem.galleryCollection[0].imageName}`}
          >
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
          </Link>
        ))}
      </section>
    );
}

Home.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired
  // skill: PropTypes.shape({
  //   skillName: PropTypes.string,
  //   skillCollection: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       galleryCollection: PropTypes.arrayOf(
  //         PropTypes.shape({
  //           imageName: PropTypes.string,
  //           imageUrl: PropTypes.string
  //         })
  //       )
  //     })
  //   )
  // }).isRequired
};

export default Home;
