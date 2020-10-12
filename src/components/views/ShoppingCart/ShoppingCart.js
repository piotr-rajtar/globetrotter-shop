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
        <Typography className={styles.title} gutterBottom variant="h3" component="h1">
          Your cart is empty. Pick something what helps you GlobeTrotting.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={styles.button}
          component={NavLink}
          exact to={`/`}
        >
          Go back to mainpage
        </Button>
      </Paper>
    );
  }

  noEmptyCart() {
    const { cartProducts } = this.props;

    return(
      <Paper>
        <Typography className={styles.title} gutterBottom variant="h3" component="h1">
          Cart
        </Typography>
        <CartProductList cartProducts={cartProducts} />

        <Typography className={styles.title} gutterBottom variant="h4" component="h1">
          Total cost:{this.totalCost()}$
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={styles.button}
          component={NavLink}
          exact to={`/order`}
        >
          Order Summary
        </Button>
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
