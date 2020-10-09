import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PhotoGallery.module.scss';

import Carousel from 'react-bootstrap/Carousel';

const Component = ({images}) => (
  <Carousel className={styles.root}>
    {images.map(image => (
      <Carousel.Item key={image}>
        <img
          className='d-block w-100'
          src={image}
          alt="slide"
        />
      </Carousel.Item>
    ))}
  </Carousel>
);

Component.propTypes = {
  images: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PhotoGallery,
  // Container as PhotoGallery,
  Component as PhotoGalleryComponent,
};
