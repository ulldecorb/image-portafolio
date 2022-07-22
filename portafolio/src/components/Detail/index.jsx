import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import './detail.css';

export function Detail({ state }) {
  const { skillgallery, collection } = useParams();
  const [detail, setDetail] = React.useState('');

  const getDetail = () => {
    const newGallery = state.find((galleryItem) => galleryItem.skillName === skillgallery);
    const newDetail = newGallery.skillCollection
      .find((detailItem) => detailItem.galleryName === collection);
    setDetail(newDetail);
  };

  React.useEffect(() => {
    getDetail();
  }, []);

  return detail === ''
    ? <p>404 detail not found</p>
    : (
      <>
        <nav className="detail__navbar">
          <p className="navbar__cover">Cover</p>
          <p className="navbar__gallery">Gallery</p>
          <p className="navbar__related">Related</p>
        </nav>
        <section
          className="detail__info-box"
        >
          <h3 className="info-box__discipline">{detail.discipline}</h3>
          <h2 className="info-box__title">{detail.galleryName.toUpperCase()}</h2>
        </section>
        <section
          className="detail__cover"
          style={{ backgroundImage: `url("${detail.galleryCollection[0].imageUrl}")` }}
        />
        <section className="detail__gallery">
          {detail.galleryCollection.map((detailItem) => (
            <article
              className="gallery"
              key={detailItem.imageName}
            >
              <img
                src={detailItem.imageUrl}
                className="gallery__thumbnail"
                alt={detailItem.imageName}
              />
            </article>
          ))}
        </section>
        <section className="gallery__related">
          <p className="related__title">{detail.galleryName}</p>
          <p className="related__discipline">{detail.discipline}</p>
          <p className="related__sinopsi">{detail.sinopsi}</p>
          <p className="related__date">{detail.data}</p>
          <p className="related__description">{detail.description}</p>
        </section>
      </>
    );
}

Detail.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Detail;
