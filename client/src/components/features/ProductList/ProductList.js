import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { ProductBox } from '../ProductBox/ProductBox';

import styles from './ProductList.module.scss';

import Grid from '@material-ui/core/Grid';

const Component = ({ products }) => (

  <Grid
    container
    className={styles.root}
    direction='row'
    justify='space-between'
    alignItems='center'
  >

    {products.map(product => (
      <Grid key={product._id} item>

        <ProductBox {...product} />

      </Grid>
    ))}
  </Grid>

);

Component.propTypes = {
  products: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductList,
  // Container as ProductList,
  Component as ProductListComponent,
};
