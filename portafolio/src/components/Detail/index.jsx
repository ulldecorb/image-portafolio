import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import './detail.css';

export function Detail({ state }) {
  const { galleryParam, detailParam } = useParams();
  const [detail, setDetail] = React.useState('');
  const [activeViewer, setActiveViewer] = React.useState(false);
  const [activeInfoBox, setActiveInfoBox] = React.useState(false);
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

  const openInfoBox = (e) => {
    e.preventDefault();
    setActiveInfoBox(true);
  };

  const closeInfoBox = (e) => {
    e.preventDefault();
    setActiveInfoBox(false);
  };

  return detail === ''
    ? <p>404 Page not found</p>
    : (
      <main className="detail">
        <nav className="detail__navbar">
          <a
            style={{ textDecoration: 'none' }}
            href="#cover"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Cover</p>
            <span className="navbar-box__selected-box" />
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="#gallery"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Gallery</p>
            <span className="navbar-box__selected-box" />
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="#related"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Related</p>
            <span className="navbar-box__selected-box" />
          </a>
        </nav>
        <section className="detail__header">
          <h3 className="header__discipline">{detail.discipline}</h3>
          <h2 className="header__title">{detail.detailName.toUpperCase()}</h2>
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
            aria-label="close viewer"
            className="viewer__close-button"
            style={{ textDecoration: 'none' }}
            onClick={(e) => closeViewer(e)}
          >
            X

          </button>
        </section>

        <section className="detail__open-info-box">
          <button
            type="button"
            aria-label="open info box"
            style={{ textDecoration: 'none' }}
            onClick={(e) => openInfoBox(e)}
            className="open-info-box"
          >
            +
          </button>
        </section>

        <section className={activeInfoBox ? 'detail__info-box' : 'detail__info-box--hidden'}>
          <article className="info-box">
            <p className="info-box__text">
              <strong>Project:  </strong>
              {detail.detailName}
            </p>
            <p className="info-box__text">
              <strong>Discipline:  </strong>
              {detail.discipline}
            </p>
            <p className="info-box__text">
              <strong>Sinopsis:  </strong>
              {detail.sinopsi}
            </p>
            <p className="info-box__text">
              <strong>Date:  </strong>
              {detail.date}
            </p>
            <button
              type="button"
              onClick={(e) => closeInfoBox(e)}
              aria-label="close info box"
              style={{ textDecoration: 'none' }}
              className="info-box__close-handler"
            >
              +
            </button>
          </article>
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
              className="gallery-detail"
              style={{ textDecoration: 'none' }}
              key={detailItem.imageName}
            >
              <img
                src={detailItem.imageUrl}
                className="gallery-detail__thumbnail"
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
          <p className="related__infobox">{detail.infobox}</p>
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
