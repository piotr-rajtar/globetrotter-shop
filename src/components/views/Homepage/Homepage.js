import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';

import { ProductList } from '../../features/ProductList/ProductList';

import styles from './Homepage.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Component extends React.Component {

  static propTypes = {
    products: PropTypes.array,
  }

  render() {
    const { products } = this.props;

    return(
      <Paper>
        <Grid container>

          <Grid item xs={12} className={styles.gridContainer} justify='center'>
            <Typography
              className={styles.title}
              gutterBottom
              variant='h3'
              component='h1'
            >
              Pick something what helps you GlobeTrotting
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <ProductList products={products} />
          </Grid>

        </Grid>


      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
