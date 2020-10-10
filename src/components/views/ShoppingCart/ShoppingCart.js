import React from 'react';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';

import { CartProductList } from '../../features/CartProductList/CartProductList';

import styles from './ShoppingCart.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Component extends React.Component {

  static propTypes = {
    cartProducts: PropTypes.array,
  }

  render() {
    const { cartProducts } = this.props;

    return(
      <Paper>
        <Typography className={styles.title} gutterBottom variant="h3" component="h1">
          Cart
        </Typography>
        <CartProductList cartProducts={cartProducts} />
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
