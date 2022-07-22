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
          <a
            href="#cover"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Cover</p>
            <span className="navbar-box__selected-box" />
          </a>
          <a
            href="#gallery"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Gallery</p>
            <span className="navbar-box__selected-box" />
          </a>
          <a
            href="#related"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Related</p>
            <span className="navbar-box__selected-box" />
          </a>
        </nav>
        <section className="detail__info-box">
          <h3 className="info-box__discipline">{detail.discipline}</h3>
          <h2 className="info-box__title">{detail.galleryName.toUpperCase()}</h2>
        </section>
        <section
          id="cover"
          className="detail__cover"
          style={{ backgroundImage: `url("${detail.galleryCollection[0].imageUrl}")` }}
        />
        <section
          id="gallery"
          className="detail__gallery"
        >
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
        <section
          id="related"
          className="detail__related"
        >
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
