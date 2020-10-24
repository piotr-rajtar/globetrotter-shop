import React from 'react';
import PropTypes from 'prop-types';

import { ProductBox } from '../ProductBox/ProductBox';

import styles from './ProductList.module.scss';

import Grid from '@material-ui/core/Grid';

const Component = ({ products }) => (

  <Grid
    container
    className={styles.root}
    direction='row'
    justify='space-around'
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

export {
  Component as ProductList,
  Component as ProductListComponent,
};
