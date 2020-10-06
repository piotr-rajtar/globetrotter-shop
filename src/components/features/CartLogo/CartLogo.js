import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartLogo.module.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

const Component = () => (
  <div className={styles.root}>
    <Button className={styles.link} component={Link} to={`/cart`}>
      <ShoppingCartIcon className={styles.icon} />
    </Button>
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
  Component as CartLogo,
  // Container as CartLogo,
  Component as CartLogoComponent,
};
