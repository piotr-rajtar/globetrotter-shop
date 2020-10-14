import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { addCartProduct } from '../../../redux/cartRedux';
import { formInputNumberParser } from '../../../utils';

import { PhotoGallery } from '../../features/PhotoGallery/PhotoGallery';
import { ProductCounter } from '../../features/ProductCounter/ProductCounter';

import styles from './Product.module.scss';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';

class Component extends React.Component {

  state = {
    orderData: {
      finalPrice: 0,
      quantity: 0,
      comment: '',
    },
  }

  static propTypes = {
    product: PropTypes.object,
    addCartProduct: PropTypes.func,
  }

  handleQuantityChange = (event) => {
    const { orderData } = this.state;
    const { value, id } = event.target;
    const { product } = this.props;

    const parsedValue = formInputNumberParser(value);
    const finalPrice = parsedValue * product.price;

    this.setState({
      orderData: {
        ...orderData,
        [id]: parsedValue,
        finalPrice: finalPrice,
      },
    });
  }

  handleCommentChange = (event) => {
    const { orderData } = this.state;
    const { value } = event.target;

    this.setState({
      orderData: {
        ...orderData,
        'comment': value,
      },
    });
  }


  decreaseProductQuantity = () => {
    const { orderData } = this.state;
    const { product } = this.props;

    if (orderData.quantity === 0) {
      return;
    }

    const newQuantity = orderData.quantity - 1;
    const finalPrice = newQuantity * product.price;

    this.setState({
      orderData: {
        ...orderData,
        quantity: newQuantity,
        finalPrice: finalPrice,
      },
    });
  }

  increaseProductQuantity = () => {
    const { orderData } = this.state;
    const { product } = this.props;

    if (orderData.quantity === 999) {
      return;
    }

    const newQuantity = orderData.quantity + 1;
    const finalPrice = newQuantity * product.price;

    this.setState({
      orderData: {
        ...orderData,
        quantity: newQuantity,
        finalPrice: finalPrice,
      },
    });
  }

  clearProductFormData() {
    this.setState({
      orderData: {
        finalPrice: 0,
        quantity: 0,
        comment: '',
      },
    });
  }

  addToCart = () => {
    const { orderData } = this.state;
    const { product, addCartProduct } = this.props;

    const cartProduct = {};

    if(orderData.finalPrice !== 0) {
      cartProduct.id = uniqid();
      cartProduct.photo = product.photo[0];
      cartProduct.name = product.name;
      cartProduct.quantity = orderData.quantity;
      cartProduct.finalPrice = orderData.finalPrice;
      cartProduct.comment = orderData.comment;
      cartProduct.price = product.price;
      cartProduct.productId = product.id;

      addCartProduct(cartProduct);
      alert('Product added to the cart');
      this.clearProductFormData();
    }
    else {
      alert('Please pick at least one product');
    }
  }

  render() {
    const { product } = this.props;
    const { orderData } = this.state;
    console.log(this.state);
    return(
      <Paper>
        <Card>
          <CardContent>
            <Typography>
              {product.name}
            </Typography>
            <Typography>
              {product.description}
            </Typography>

            <PhotoGallery images={product.photo} />

            <ProductCounter
              handleChange={this.handleQuantityChange}
              increase={this.increaseProductQuantity}
              decrease={this.decreaseProductQuantity}
              quantity={orderData.quantity}
            />

            <TextField
              id='comment'
              label='Comment'
              variant='outlined'
              multiline
              rowsMax={4}
              inputProps={{
                maxLength: 100,
              }}
              className={styles.commentField}
              value={orderData.comment}
              onChange={this.handleCommentChange}
            />

            <Typography>
              Price: {orderData.finalPrice}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant='contained'
              size='large'
              color='primary'
              onClick={this.addToCart}
              className={styles.button}
              startIcon={<AddShoppingCartIcon />}
            >
              Add to cart
            </Button>
            <Button
              variant='contained'
              size='large'
              color='primary'
              component={NavLink}
              exact to={`/`}
              className={styles.button}
              startIcon={<HomeIcon />}
            >
              GO BACK TO HOMEPAGE
            </Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addCartProduct: cartProduct => dispatch(addCartProduct(cartProduct)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
