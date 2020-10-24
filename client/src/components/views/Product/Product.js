import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Loader } from '../../features/Loader/Loader';
import uniqid from 'uniqid';

import { connect } from 'react-redux';
import { getProductById, getProductByIdRequest } from '../../../redux/productsRedux';
import { addCartProductRequest } from '../../../redux/cartRedux';
import { formInputNumberParser } from '../../../utils';

import { PhotoGallery } from '../../features/PhotoGallery/PhotoGallery';
import { ProductCounter } from '../../features/ProductCounter/ProductCounter';

import styles from './Product.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';

class Component extends React.Component {

  state = {
    orderData: {
      finalPrice: 0,
      quantity: 0,
      comment: '',
    },
    snackbar: {
      snackbarOpen: false,
      snackbarMessage: '',
      alertSeverity: '',
    },
  }

  static propTypes = {
    product: PropTypes.object,
    addCartProductRequest: PropTypes.func,
    getProductByIdRequest: PropTypes.func,
  }

  componentDidMount() {
    const { getProductByIdRequest } = this.props;

    getProductByIdRequest();
  }

  snackbarClose = () => {
    this.setState({
      snackbar: {
        snackbarOpen: false,
        snackbarMessage: '',
      },
    });
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

  showAlert(error) {

    if(error) {
      this.setState({
        snackbar: {
          snackbarOpen: true,
          snackbarMessage: 'Please pick at least one product',
          alertSeverity: 'error',
        },
      });
    }
    else {
      this.setState({
        snackbar: {
          snackbarOpen: true,
          snackbarMessage: 'Product has been added to the cart',
          alertSeverity: 'success',
        },
      });
    }
  }

  addToCart = () => {
    const { orderData } = this.state;
    const { product, addCartProductRequest } = this.props;

    const cartProduct = {};

    let ifError = false;

    if(orderData.finalPrice > 0 && orderData.quantity > 0 && orderData.quantity < 1000 && orderData.comment.length < 100) {
      cartProduct.id = uniqid();
      cartProduct.photo = product.photo[0];
      cartProduct.name = product.name;
      cartProduct.quantity = orderData.quantity;
      cartProduct.finalPrice = orderData.finalPrice;
      cartProduct.comment = orderData.comment;
      cartProduct.price = product.price;
      cartProduct.productId = product._id;

      addCartProductRequest(cartProduct);
      this.showAlert(ifError);
      this.clearProductFormData();
    }
    else {
      let ifError = true;
      this.showAlert(ifError);
    }
  }

  render() {
    const { product } = this.props;
    const { orderData, snackbar } = this.state;

    if(!product) return(<Loader />);

    return(
      <Paper className={styles.root}>
        <Snackbar
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
          open={snackbar.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
        >
          <Alert
            variant='filled'
            severity={snackbar.alertSeverity}
            onClose={this.snackbarClose}
          >
            {snackbar.snackbarMessage}
          </Alert>
        </Snackbar>

        <Grid container className={styles.gridContainer}>

          <Grid item xs={12}>
            <Typography
              className={styles.title}
              gutterBottom
              variant='h3'
              component='h1'
            >
              {product.name}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant='h4'
              component='p'
              className={styles.description}
            >
              {product.description}
            </Typography>
          </Grid>

          <Grid item xs={12} container>
            <Grid item xs={12} sm={6}>
              <PhotoGallery
                images={product.photo}
              />
            </Grid>

            <Grid item xs container direction='column' className={styles.featuresContainer}>
              <Grid item className={styles.productCounterContainer}>
                <ProductCounter
                  handleChange={this.handleQuantityChange}
                  increase={this.increaseProductQuantity}
                  decrease={this.decreaseProductQuantity}
                  quantity={orderData.quantity}
                />
              </Grid>

              <Grid item className={styles.commentFieldContainer}>
                <TextField
                  id='comment'
                  label='Comment'
                  variant='outlined'
                  multiline
                  rows={4}
                  rowsMax={4}
                  inputProps={{
                    maxLength: 100,
                  }}
                  className={styles.commentField}
                  value={orderData.comment}
                  onChange={this.handleCommentChange}
                />
              </Grid>

              <Grid item>
                <Typography
                  variant='h5'
                  component='p'
                  className={styles.finalPrice}
                >
                  Price: {orderData.finalPrice}$
                </Typography>
              </Grid>

              <Grid item container>

                <Grid item xs={12} md={6} className={styles.buttonHomepage}>
                  <Button
                    variant='contained'
                    size='large'
                    color='primary'
                    component={NavLink}
                    exact to={`/`}
                    className={styles.button}
                    startIcon={<HomeIcon />}
                  >
                    <span>HOMEPAGE</span>
                  </Button>
                </Grid>

                <Grid item xs={12} md={6} className={styles.buttonCart}>
                  <Button
                    variant='contained'
                    size='large'
                    color='primary'
                    onClick={this.addToCart}
                    className={styles.button}
                    startIcon={<AddShoppingCartIcon />}
                  >
                    <span>ADD TO CART</span>
                  </Button>
                </Grid>

              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCartProductRequest: cartProduct => dispatch(addCartProductRequest(cartProduct)),
  getProductByIdRequest: () => dispatch(getProductByIdRequest(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
