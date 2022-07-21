import React from 'react';
import { useParams } from 'react-router';

export function Detail() {
  const { skillgallery, collection } = useParams();
  return (
    <>
      <p>{skillgallery}</p>
      <p>{collection}</p>
    </>
  );
}

export default Detail;
