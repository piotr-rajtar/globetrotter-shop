import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';

import { CartProductList } from '../../features/CartProductList/CartProductList';

import styles from './ShoppingCart.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
import Grid from '@material-ui/core/Grid';

class Component extends React.Component {

  static propTypes = {
    cartProducts: PropTypes.array,
  }

  render() {
    const { cartProducts } = this.props;

    return cartProducts.length !== 0? this.noEmptyCart() : this.emptyCart();
  }

  totalCost() {
    const { cartProducts } = this.props;

    let totalCost = 0;

    cartProducts.map(cartProduct => totalCost += cartProduct.finalPrice);

    return totalCost;
  }

  emptyCart() {

    return(
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={styles.title}
              gutterBottom
              variant='h3'
              component='h1'
            >
              Your cart is empty. Pick something what helps you GlobeTrotting.
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.buttonEmptyCartContainer}>
            <Button
              variant='contained'
              size='large'
              color='primary'
              className={styles.button}
              component={NavLink}
              exact to={`/`}
              startIcon={<HomeIcon />}
            >
              HOMEPAGE
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  noEmptyCart() {
    const { cartProducts } = this.props;

    return(
      <Paper>
        <Grid container className = {styles.gridContainer}>

          <Grid item xs={12}>
            <Typography
              className={styles.title}
              gutterBottom
              variant='h3'
              component='h1'
            >
              CART
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <CartProductList cartProducts={cartProducts} />
          </Grid>

          <Grid itex xs={12} className={styles.totalCostContainer}>
            <Typography
              className={styles.totalCost}
              gutterBottom
              variant='h4'
              component='span'
            >
              Total cost:{this.totalCost()}$
            </Typography>
          </Grid>

          <Grid item container className={styles.buttonsContainer}>

            <Grid item xs={6} className={styles.buttonHomepage}>
              <Button
                variant='contained'
                size='large'
                color='primary'
                className={styles.button}
                component={NavLink}
                exact to={`/`}
                startIcon={<HomeIcon />}
              >
                HOMEPAGE
              </Button>
            </Grid>

            <Grid item xs={6} className={styles.buttonOrderSummary}>
              <Button
                variant='contained'
                size='large'
                color='primary'
                className={styles.button}
                component={NavLink}
                exact to={`/order`}
                startIcon={<ViewListIcon />}
              >
                ORDER SUMMARY
              </Button>
            </Grid>

          </Grid>

        </Grid>

      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: getAllCartProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ShoppingCart,
  Container as ShoppingCart,
  Component as ShoppingCartComponent,
};
