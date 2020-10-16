import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { CartProduct } from '../CartProduct/CartProduct';

import styles from './CartProductList.module.scss';

import Grid from '@material-ui/core/Grid';

const Component = ({cartProducts}) => (

  <Grid
    container
    direction='column'
    justify='center'
    alignItems='center'
  >

    {cartProducts.map(cartProduct => (
      <Grid key={cartProduct.id} item className={styles.itemContainer}>

        <CartProduct {...cartProduct} />

      </Grid>
    ))}
  </Grid>

);

Component.propTypes = {
  cartProducts: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartProductList,
  // Container as CartProductList,
  Component as CartProductListComponent,
};
