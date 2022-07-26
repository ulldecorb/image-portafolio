import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import './gallery.css';

export function Gallery({ state }) {
  const { galleryParam } = useParams();
  const [gallery, setGallery] = React.useState('');

  const getGallery = () => {
    const newGallery = state.find((galleryItem) => galleryItem.galleryName === galleryParam);
    return newGallery;
  };

  React.useEffect(() => {
    setGallery(getGallery());
  });

  return gallery === ''
    ? (<h3>404 Page not found</h3>)
    : (
      <section className="gallery">
        {gallery.galleryCollection.map((detailItem) => (
          <Link
            to={`/${galleryParam}/${detailItem.detailName}`}
            className="gallery__article"
            key={`gallery-${detailItem.detailCollection[0].imageName}`}
          >
            <div className="gallery__info-box">
              <h3 className="info-box__title">{detailItem.detailName.toUpperCase()}</h3>
              <p className="info-box__discipline">{detailItem.discipline}</p>
              <p className="info-box__year">
                Year
                {' '}
                {detailItem.date}
              </p>
            </div>
            <img
              className="gallery__thumbnail"
              src={detailItem.detailCollection[0].imageUrl}
              alt={detailItem.detailCollection[0].imageName}
            />
          </Link>
        ))}
      </section>
    );
}

Gallery.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      galleryName: PropTypes.string,
      galleryCollection: PropTypes.arrayOf(
        PropTypes.shape({
          detailCollection: PropTypes.arrayOf(
            PropTypes.shape({
              imageName: PropTypes.string,
              imageUrl: PropTypes.string
            })
          )
        })
      )
    })
  ).isRequired
};

export default Gallery;
