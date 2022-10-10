import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import './detail.css';
import { AboutMe } from '../AboutMe';

export function Detail({ state, artist }) {
  const { galleryParam, detailParam } = useParams();
  const [detail, setDetail] = useState('');
  const [activeViewer, setActiveViewer] = useState(false);
  const [activeInfoBox, setActiveInfoBox] = useState(false);
  const [viewerImageUrl, setViewerImageUrl] = useState('');

  const [coverNavbarFocus, setCoverScrollFocus] = useState(true);
  const [galleryNavbarFocus, setGalleryScrollFocus] = useState(false);
  console.log(galleryNavbarFocus);
  const [aboutMeNavbarFocus, setAboutMeScrollFocus] = useState(false);

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
    const aboutMe = document.getElementById('aboutMe').offsetTop;

    if (scrollPosition < gallery) {
      setCoverScrollFocus(true);
      setGalleryScrollFocus(false);
      setAboutMeScrollFocus(false);
    }
    if (scrollPosition >= gallery - 1
      && scrollPosition < aboutMe) {
      setCoverScrollFocus(false);
      setGalleryScrollFocus(true);
      setAboutMeScrollFocus(false);
    }
    if (scrollPosition >= aboutMe - 1) {
      setCoverScrollFocus(false);
      setGalleryScrollFocus(false);
      setAboutMeScrollFocus(true);
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

        <section className="detail__header">
          <h3 className="header__discipline">{aboutMeNavbarFocus ? '' : detail.discipline}</h3>
          <h2 className={coverNavbarFocus
            ? 'header__title'
            : 'header__title header__title--reduced'}
          >
            {aboutMeNavbarFocus
              ? 'ABOUT ME'
              : detail.detailName.toUpperCase()}
          </h2>
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
            +
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

        {detail.video
          ? (
            <section
              className="detail__cover--video"
              id="cover"
            >
              <iframe
                src={`${detail.video}?background=true`}
                title="vimeo-player"
                className="cover__video"
                width="640"
                height="360"
                frameBorder="0"
                allowFullScreen
              />
            </section>
          )
          : (
            <section
              className="detail__cover"
              id="cover"
              style={{ backgroundImage: `url("${detail.detailCollection[0].imageUrl}")` }}
            />
          )}

        {/* {detail.video
          && (
          <section id="video" className="detail__video">
            <iframe
              src={`${detail.video}?autoplay=1&loop=1&autopause=0`}
              title="vimeo-player"
              className="video"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            />
          </section>
          )} */}
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
                backgroundImage: `url("${detailItem.thumbnail}")`
              }}
              key={detailItem.imageName}
            />
          ))}
        </section>
        <AboutMe artist={artist} />
      </main>
    );
}

Detail.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  artist: PropTypes.shape({
  }).isRequired
};

export default Detail;
