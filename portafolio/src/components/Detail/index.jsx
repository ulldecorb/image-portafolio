import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import './detail.css';

export function Detail({ state }) {
  const { galleryParam, detailParam } = useParams();
  const [detail, setDetail] = useState('');
  const [activeViewer, setActiveViewer] = useState(false);
  const [activeInfoBox, setActiveInfoBox] = useState(false);
  const [viewerImageUrl, setViewerImageUrl] = useState('');

  const [coverNavbarFocus, setCoverScrollFocus] = useState(true);
  const [galleryNavbarFocus, setGalleryScrollFocus] = useState(false);
  const [relatedNavbarFocus, setRelatedScrollFocus] = useState(false);

  const getDetail = () => {
    const newGallery = state.find((galleryItem) => galleryItem.galleryName === galleryParam);
    const newDetail = newGallery.galleryCollection
      .find((detailItem) => detailItem.detailName === detailParam);
    setDetail(newDetail);
  };

  useEffect(() => {
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

  const toggleInfoBox = (e) => {
    e.preventDefault();
    setActiveInfoBox(!activeInfoBox);
  };

  const handleScroll = (event) => {
    const scrollPosition = event.currentTarget.scrollTop;
    const gallery = document.getElementById('gallery').offsetTop;
    const related = document.getElementById('related').offsetTop;

    if (scrollPosition < gallery) {
      setCoverScrollFocus(true);
      setGalleryScrollFocus(false);
      setRelatedScrollFocus(false);
    }
    if (scrollPosition >= gallery - 1
      && scrollPosition < related) {
      setCoverScrollFocus(false);
      setGalleryScrollFocus(true);
      setRelatedScrollFocus(false);
    }
    if (scrollPosition >= related - 1) {
      setCoverScrollFocus(false);
      setGalleryScrollFocus(false);
      setRelatedScrollFocus(true);
    }
  };

  return detail === ''
    ? <p>404 Page not found</p>
    : (
      <main
        className="detail"
        id="detail"
        onScroll={handleScroll}
      >
        <nav className="detail__navbar">
          <a
            style={{ textDecoration: 'none' }}
            href="#cover"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Cover</p>
            <span className={coverNavbarFocus ? 'navbar-box__selected-box navbar-box__selected-box--focused' : 'navbar-box__selected-box'} />
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="#gallery"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Gallery</p>
            <span className={galleryNavbarFocus ? 'navbar-box__selected-box navbar-box__selected-box--focused' : 'navbar-box__selected-box'} />
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="#related"
            className="navbar-box"
          >
            <p className="navbar-box__title-section">Related</p>
            <span className={relatedNavbarFocus ? 'navbar-box__selected-box navbar-box__selected-box--focused' : 'navbar-box__selected-box'} />
          </a>
        </nav>

        <section className={coverNavbarFocus ? 'detail__header' : 'detail__header detail__header--reduced'}>
          <h3 className="header__discipline">{detail.discipline}</h3>
          <h2 className={coverNavbarFocus ? 'header__title' : 'header__title header__title--reduced'}>{detail.detailName.toUpperCase()}</h2>
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

        <section className="detail__info-box-toggle">
          <button
            className={
              activeInfoBox
                ? 'info-box-toggle info-box-toggle--close'
                : 'info-box-toggle'
            }
            type="button"
            aria-label="open info box-toggle"
            style={{ textDecoration: 'none' }}
            onClick={(e) => toggleInfoBox(e)}
          >
            +
          </button>
        </section>

        <section
          className={activeInfoBox ? 'detail__info-box' : 'detail__info-box--hidden'}
          onClick={(e) => toggleInfoBox(e)}
          onKeyDown={(e) => toggleInfoBox(e)}
          role="button"
          tabIndex={0}
        >
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
          </article>
        </section>

        <section
          className="detail__cover"
          id="cover"
          style={{ backgroundImage: `url("${detail.detailCollection[0].imageUrl}")` }}
        />

        <section id="gallery" className="detail__gallery">
          {detail.detailCollection.map((detailItem) => (

            <button
              className="gallery-detail"
              id={detailItem.imageName}
              aria-label={`open ${detailItem.imageName}image`}
              type="button"
              onClick={(e) => openViewer(e, detailItem.imageUrl)}
              style={{
                textDecoration: 'none',
                backgroundImage: `url("${detailItem.imageUrl}")`
              }}
              key={detailItem.imageName}
            >
              {/* <img
                src={detailItem.imageUrl}
                className="gallery-detail__thumbnail"
                alt={detailItem.imageName}
              /> */}
            </button>

          ))}
        </section>

        <section id="related" className="detail__related">
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
