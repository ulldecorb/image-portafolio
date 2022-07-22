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
        <section
          className="detail__info-box"
          style={{ backgroundImage: `url("${detail.galleryCollection[0].imageUrl}")` }}
        >
          <h3 className="info-box__discipline">{detail.discipline}</h3>
          <h2 className="info-box__title">{detail.galleryName.toUpperCase()}</h2>
        </section>
        <p>{detail.galleryName}</p>
        <p>{detail.galleryCollection[0].imageName}</p>
      </>
    );
}

Detail.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default Detail;
