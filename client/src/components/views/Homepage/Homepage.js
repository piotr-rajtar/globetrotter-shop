import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAllProducts, getAllProductsRequest } from '../../../redux/productsRedux';
import { Loader } from '../../features/Loader/Loader';

import { ProductList } from '../../features/ProductList/ProductList';

import styles from './Homepage.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Component extends React.Component {

  static propTypes = {
    products: PropTypes.array,
    getAllProductsRequest: PropTypes.func,
  }

  async componentDidMount() {
    const { getAllProductsRequest } = this.props;

    await getAllProductsRequest();

  }

  render() {
    const { products } = this.props;

    if(!products) return(<Loader />);

    return(
      <Paper>
        <Grid container  className={styles.gridContainer} justify='center'>

          <Grid item xs={12}>
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

const mapDispatchToProps = dispatch => ({
  getAllProductsRequest: () => dispatch(getAllProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
