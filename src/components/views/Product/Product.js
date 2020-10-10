import React from 'react';
import PropTypes from 'prop-types';

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

class Component extends React.Component {

  state = {
    orderData: {
      finalPrice: 0,
      quantity: 0,
    },
  }

  static propTypes = {
    product: PropTypes.object,
    addCartProduct: PropTypes.func,
  }

  handleChange = (event) => {
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

  addToCart = () => {
    const { orderData } = this.state;
    const { product, addCartProduct } = this.props;

    const cartProduct = {};

    if(orderData.price !== 0) {
      cartProduct.photo = product.photo[0];
      cartProduct.name = product.name;
      cartProduct.quantity = orderData.quantity;
      cartProduct.price = orderData.finalPrice;
      cartProduct.comment = '';

      addCartProduct(cartProduct);
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

            <ProductCounter handleChange={this.handleChange} increase={this.increaseProductQuantity} decrease={this.decreaseProductQuantity} quantity={orderData.quantity} />

            <Typography>
              Price: {orderData.finalPrice}$
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.addToCart}>Add to cart</Button>
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
