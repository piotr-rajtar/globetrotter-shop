import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

const Component = () => (
  <div className={styles.root}>

    <a className={styles.link} href='https://www.facebook.com/'>
      <FacebookIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://www.instagram.com/'>
      <InstagramIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://www.youtube.com/'>
      <YouTubeIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://twitter.com/'>
      <TwitterIcon className={styles.icon} />
    </a>

  </div>
);

// Component.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
