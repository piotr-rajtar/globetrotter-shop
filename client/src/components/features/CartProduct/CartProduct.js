import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { removeCartProduct, updateCartProduct } from '../../../redux/cartRedux';
import { formInputNumberParser } from '../../../utils';

import { ProductCounter } from '../ProductCounter/ProductCounter';

import styles from './CartProduct.module.scss';

import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


class Component extends React.Component {

  state = {
    cartProductData: {
      finalPrice: this.props.finalPrice,
      quantity: this.props.quantity,
      comment: this.props.comment,
    },
  }

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    quantity: PropTypes.number,
    finalPrice: PropTypes.number,
    price: PropTypes.number,
    comment: PropTypes.string,
    removeCartProduct: PropTypes.func,
    updateCartProduct: PropTypes.func,
    productId: PropTypes.string,
  }

  removeFromCart = () => {
    const { id, removeCartProduct } = this.props;

    removeCartProduct(id);
  }

  handleQuantityChange = (event) => {
    const { cartProductData } = this.state;
    const { value, id } = event.target;
    const { price, updateCartProduct } = this.props;

    const parsedValue = formInputNumberParser(value);
    const finalPrice = parsedValue * price;

    this.setState({
      cartProductData: {
        ...cartProductData,
        finalPrice: finalPrice,
        [id]: parsedValue,
      },
    });

    const cartProduct = {};

    cartProduct.id = this.props.id;
    cartProduct.key = id;
    cartProduct.value = parsedValue;
    cartProduct.finalPrice = finalPrice;

    updateCartProduct(cartProduct);
  }

  handleCommentChange = (event) => {
    const { cartProductData } = this.state;
    const { value } = event.target;
    const { updateCartProduct, id } = this.props;

    this.setState({
      cartProductData: {
        ...cartProductData,
        'comment': value,
      },
    });

    const cartProduct = {};

    cartProduct.id = id;
    cartProduct.key = 'comment';
    cartProduct.value = value;

    updateCartProduct(cartProduct);
  }

  increaseCartProductQuantity = () => {
    const { cartProductData } = this.state;
    const { price, id, updateCartProduct } = this.props;

    if(cartProductData.quantity === 999) {
      return;
    }

    const newQuantity = cartProductData.quantity + 1;
    const finalPrice = newQuantity * price;

    this.setState({
      cartProductData: {
        ...cartProductData,
        quantity: newQuantity,
        finalPrice: finalPrice,
      },
    });

    const cartProduct = {};

    cartProduct.id = id;
    cartProduct.key = 'quantity';
    cartProduct.value = newQuantity;
    cartProduct.finalPrice = finalPrice;

    updateCartProduct(cartProduct);
  }

  decreaseCartProductQuantity = () => {
    const { cartProductData } = this.state;
    const { price, id, updateCartProduct } = this.props;

    if(cartProductData.quantity === 1) {
      return;
    }

    const newQuantity = cartProductData.quantity - 1;
    const finalPrice = newQuantity * price;

    this.setState({
      cartProductData: {
        ...cartProductData,
        quantity: newQuantity,
        finalPrice: finalPrice,
      },
    });

    const cartProduct = {};

    cartProduct.id = id;
    cartProduct.key = 'quantity';
    cartProduct.value = newQuantity;
    cartProduct.finalPrice = finalPrice;

    updateCartProduct(cartProduct);
  }

  render() {
    const { productId, name, photo } = this.props;
    const { cartProductData } = this.state;

    return(
      <Grid container>

        <Grid item xs={1} className={styles.iconContainer}>
          <IconButton onClick={this.removeFromCart}>
            <DeleteIcon className={styles.icon} />
          </IconButton>
        </Grid>

        <Grid item xs={2} className={styles.cartItem}>
          <ButtonBase
            className={styles.imageContainer}
            component={NavLink}
            exact to={`/product/${productId}`}
          >
            <img className={styles.image} src={photo} alt='product' />
          </ButtonBase>
        </Grid>

        <Grid item xs={3} className={styles.productNameContainer}>
          <Typography className={styles.productName} variant='h6'>
            {name}
          </Typography>
        </Grid>

        <Grid  item xs container direction='column' className={styles.cartFormFields}>

          <Grid item xs className={styles.formFieldLine}>
            <ProductCounter
              handleChange={this.handleQuantityChange}
              quantity={cartProductData.quantity}
              increase={this.increaseCartProductQuantity}
              decrease={this.decreaseCartProductQuantity}
            />
          </Grid>

          <Grid item xs className={styles.formFieldLine}>
            <TextField
              id='comment'
              label='Comment'
              variant='outlined'
              multiline
              rows={1}
              rowsMax={4}
              inputProps={{
                maxLength: 100,
              }}
              className={styles.commentField}
              value={cartProductData.comment}
              onChange={this.handleCommentChange}
            />
          </Grid>

        </Grid>

        <Grid item xs={1} className={styles.priceContainer}>
          <Typography className={styles.price} variant='h6'>
            {cartProductData.finalPrice}$
          </Typography>
        </Grid>

      </Grid>
    );
  }
}







// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  removeCartProduct: id => dispatch(removeCartProduct(id)),
  updateCartProduct: updatedCartProduct => dispatch(updateCartProduct(updatedCartProduct)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as CartProduct,
  Container as CartProduct,
  Component as CartProductComponent,
};




