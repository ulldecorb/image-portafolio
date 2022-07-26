import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import './detail.css';

export function Detail({ state }) {
  const { galleryParam, detailParam } = useParams();
  const [detail, setDetail] = React.useState('');
  const [activeViewer, setActiveViewer] = React.useState(false);
  const [viewerImageUrl, setViewerImageUrl] = React.useState('');

  const getDetail = () => {
    const newGallery = state.find((galleryItem) => galleryItem.galleryName === galleryParam);
    const newDetail = newGallery.galleryCollection
      .find((detailItem) => detailItem.detailName === detailParam);
    setDetail(newDetail);
  };

  React.useEffect(() => {
    getDetail();
  }, []);

  const openViewer = (e, selectedImageUrl) => {
    e.preventDefault();
    setViewerImageUrl(selectedImageUrl);
    setActiveViewer(true);
  };

  const closeViewer = (e) => {
    e.preventDefault();
    setActiveViewer(false);
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
          <h2 className="info-box__title">{detail.detailName.toUpperCase()}</h2>
        </section>
        <section id="viewer" className={activeViewer ? 'detail__viewer' : 'detail__viewer--hidden'}>
          <img
            id="viewerImage"
            className="viewer__image"
            src={viewerImageUrl}
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
          style={{ backgroundImage: `url("${detail.detailCollection[0].imageUrl}")` }}
        />
        <section
          id="gallery"
          className="detail__gallery"
        >
          {detail.detailCollection.map((detailItem) => (

            <button
              id={detailItem.imageName}
              aria-label={`open ${detailItem.imageName}image`}
              type="button"
              onClick={(e) => openViewer(e, detailItem.imageUrl)}
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
