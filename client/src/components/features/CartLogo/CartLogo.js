import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAllCartProducts, getCartProductsRequest } from '../../../redux/cartRedux';

import styles from './CartLogo.module.scss';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

class Component extends React.Component {

  static propTypes = {
    cartProducts: PropTypes.array,
    getCartProducts: PropTypes.func,
  }

  componentDidMount() {
    const { getCartProducts } = this.props;

    getCartProducts();
  }

  cartProductCounter() {
    const { cartProducts } = this.props;

    return cartProducts? cartProducts.length : 0;
  }

  render() {
    return(
      <div className={styles.root}>
        <Button className={styles.link} component={Link} to={`/cart`}>
          <ShoppingCartIcon className={styles.icon} />
        </Button>
        <span className={styles.productCounter}>{this.cartProductCounter()}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: getAllCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
  getCartProducts: () => dispatch(getCartProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as CartLogo,
  Component as CartLogoComponent,
};
