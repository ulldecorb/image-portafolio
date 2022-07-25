import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import './detail.css';

export function Detail({ state }) {
  const { skillgallery, collection } = useParams();
  const [detail, setDetail] = React.useState('');
  const [activeViewer, setActiveViewer] = React.useState(false);

  const getDetail = () => {
    const newGallery = state.find((galleryItem) => galleryItem.skillName === skillgallery);
    const newDetail = newGallery.skillCollection
      .find((detailItem) => detailItem.galleryName === collection);
    setDetail(newDetail);
  };

  React.useEffect(() => {
    getDetail();
  }, []);

  const openViewer = (e) => {
    e.preventDefault();
    setActiveViewer(true);
    console.log('say hello');
  };

  const closeViewer = (e) => {
    e.preventDefault();
    setActiveViewer(false);
    console.log('say bye');
  };
  return detail === ''
    ? <p>404 detail not found</p>
    : (
      <main className="detail">
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
        <section id="viewer" className={activeViewer ? 'detail__viewer' : 'detail__viewer--hidden'}>
          <img
            className="viewer__image"
            src="https://helios-i.mashable.com/imagery/articles/008mlMlr0cEjIUKunxTdVYo/hero-image.fill.size_1248x702.v1623390847.jpg"
            alt="foto"
          />
          <button
            type="button"
            aria-label="Mute volume"
            className="viewer__close-button"
            onClick={(e) => closeViewer(e)}
          >
            X

          </button>
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

            <button
              id={detailItem.imageName}
              aria-label="Mute volume"
              type="button"
              onClick={(e) => openViewer(e)}
              className="gallery"
              key={detailItem.imageName}
            >
              <img
                src={detailItem.imageUrl}
                className="gallery__thumbnail"
                alt={detailItem.imageName}
              />
            </button>

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
      </main>
    );
}

Detail.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Detail;
