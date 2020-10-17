import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ShopLogo.module.scss';

import PublicIcon from '@material-ui/icons/Public';
import Button from '@material-ui/core/Button';

const Component = () => (
  <span className={styles.root}>
    <Button className={styles.link} component={Link} to={`/`}>
      <PublicIcon className={styles.icon} />
    </Button>
    <h1 className={styles.title}>The GlobeTrotter</h1>
  </span>
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
  Component as ShopLogo,
  // Container as ShopLogo,
  Component as ShopLogoComponent,
};
