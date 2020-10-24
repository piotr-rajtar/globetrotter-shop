import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { IMAGES_URL } from '../../../config';

import styles from './PhotoGallery.module.scss';

import Carousel from 'react-bootstrap/Carousel';

const Component = ({images}) => (
  <Carousel className={styles.root}>
    {images.map(image => (
      <Carousel.Item key={uniqid()}>
        <img
          className='d-block w-100'
          src={`${IMAGES_URL}/${image}`}
          alt="slide"
        />
      </Carousel.Item>
    ))}
  </Carousel>
);

Component.propTypes = {
  images: PropTypes.array,
};

export {
  Component as PhotoGallery,
  Component as PhotoGalleryComponent,
};
