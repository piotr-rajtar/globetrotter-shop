import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
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
  }

  handleChange = (event) => {
    const { orderData } = this.state;
    const { value, id } = event.target;

    const parsedValue = formInputNumberParser(value);

    this.setState({
      orderData: {
        ...orderData,
        [id]: parsedValue,
      },
    });
  }

  decreaseProductQuantity = () => {
    const { orderData } = this.state;

    if (orderData.quantity === 0) {
      return;
    }

    this.setState({
      orderData: {
        ...orderData,
        quantity: orderData.quantity - 1,
      },
    });
  }

  increaseProductQuantity = () => {
    const { orderData } = this.state;

    if (orderData.quantity === 999) {
      return;
    }

    this.setState({
      orderData: {
        ...orderData,
        quantity: orderData.quantity + 1,
      },
    });
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
              Price: {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>Add to cart</Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
