import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { OrderSummaryList } from '../../features/OrderSummaryList/OrderSummaryList';
import { OrderForm } from '../../features/OrderForm/OrderForm';

import { connect } from 'react-redux';
import { getAllCartProducts, clearCartRequest, getCartProductsRequest } from '../../../redux/cartRedux';
import { addOrderRequest } from '../../../redux/ordersRedux';
import { createDate, emailParser, phoneParser, nameParser } from '../../../utils';

import styles from './OrderSummary.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';

class Component extends React.Component {

  state = {
    orderData: {
      name: '',
      email: '',
      phone: '',
      preferredContact: 'phone',
      message: '',
      ordered: '',
      totalCost: '',
      orderDetails: this.props.cartProducts,
    },
    snackbar: {
      snackbarOpen: false,
      snackbarMessage: '',
      alertSeverity: '',
    },
  }

  static propTypes = {
    cartProducts: PropTypes.array,
    addOrderRequest: PropTypes.func,
    clearCartProducts: PropTypes.func,
    getCartProducts: PropTypes.func,
  }

  componentDidMount() {
    const { getCartProducts } = this.props;

    getCartProducts();
  }

  snackbarClose = () => {
    this.setState({
      snackbar: {
        snackbarOpen: false,
        snackbarMessage: '',
      },
    });
  }

  showAlert(error) {

    if(error) {
      this.setState({
        snackbar: {
          snackbarOpen: true,
          snackbarMessage: error,
          alertSeverity: 'error',
        },
      });
    }
    else {
      this.setState({
        snackbar: {
          snackbarOpen: true,
          snackbarMessage: 'Order form submitted successfully',
          alertSeverity: 'success',
        },
      });
    }
  }

  totalCost() {
    const { cartProducts } = this.props;

    let totalCost = 0;

    cartProducts.map(cartProduct => totalCost += cartProduct.finalPrice);

    return totalCost;
  }

  handleChange = (event) => {
    const { orderData } = this.state;
    const { value, id, name } = event.target;

    if(id) {
      this.setState({
        orderData: {
          ...orderData,
          [id]: value,
        },
      });
    }
    else {
      this.setState({
        orderData: {
          ...orderData,
          [name]: value,
        },
      });
    }
  }

  setOrderParams = () => {
    const { orderData } = this.state;
    const date = createDate();
    const totalCost = this.totalCost();

    this.setState({
      orderData: {
        ...orderData,
        ordered: date,
        totalCost: totalCost,
      },
    });
  }

  clearCart() {
    const { clearCartProducts } = this.props;

    this.setState({
      orderData: {
        name: '',
        email: '',
        phone: '',
        preferredContact: 'phone',
        message: '',
        ordered: '',
        totalCost: '',
      },
    });

    clearCartProducts();
  }

  submitForm = async (event) => {
    const { orderData } = this.state;
    const { addOrderRequest, cartProducts } = this.props;

    event.preventDefault();

    let error = null;

    const validName = nameParser(orderData.name);
    const validEmail = emailParser(orderData.email);
    const validPhone = phoneParser(orderData.phone);

    if(cartProducts.length === 0) error='Your cart is empty!';

    if(!orderData.name.length || !orderData.email.length || !orderData.phone.length) error='All form fields should be filled';
    else if(orderData.name.length < 7) error = 'Your full name should have at least 7 characters';
    else if(orderData.name.length >= 30) error = 'Your full name should have max 30 characters';
    else if (!validName) error = 'Invalid name format';
    else if (!validEmail) error = 'Invalid email format';
    else if (!validPhone) error = 'Invalid phone format';

    if(!error) {
      await addOrderRequest(orderData);
      this.showAlert(error);
      this.clearCart();
    } else {
      this.showAlert(error);
    }
  }

  render() {
    const { cartProducts } = this.props;
    const { orderData, snackbar } = this.state;

    return(
      <Paper>
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

        <Grid container className={styles.gridContainer} justify='center'>

          <Grid item xs={12}>
            <Typography
              className={styles.title}
              gutterBottom
              variant='h3'
              component='h1'
            >
              ORDER SUMMARY
            </Typography>
          </Grid>

          <Grid item xs={12} className={styles.table}>
            <OrderSummaryList cartProducts={cartProducts} />
          </Grid>

          <Grid item xs={12} className={styles.totalCostContainer}>
            <Typography
              className={styles.totalCost}
              gutterBottom
              variant='h4'
              component='span'
            >
              Total cost: {this.totalCost()}$
            </Typography>
          </Grid>

          <Grid item xs={12} className={styles.contactFormHeaderContainer}>
            <Typography
              gutterBottom
              variant='h5'
              component='span'
            >
              Contact form
            </Typography>
          </Grid>

          <Grid item xs={12} sm={8} md={6} className={styles.form}>
            <OrderForm
              orderData={orderData}
              handleChange={this.handleChange}
              submitForm={this.submitForm}
              formId='orderSummaryForm'
            />
          </Grid>

          <Grid item container className={styles.buttonsContainer}>

            <Grid item xs={12} sm={5} className={styles.buttonCart}>
              <Button
                variant='contained'
                size='large'
                color='primary'
                component={NavLink}
                exact to={`/cart`}
                className={styles.button}
                startIcon={<ShoppingCartIcon />}
              >
                BACK TO CART
              </Button>
            </Grid>

            <Grid item xs={12} sm={5} className={styles.buttonSubmitOrder}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                className={styles.button}
                type='submit'
                onClick={this.setOrderParams}
                form='orderSummaryForm'
                startIcon={<SendIcon />}
              >
                SUBMIT ORDER
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

const mapDispatchToProps = dispatch => ({
  addOrderRequest: orderData => dispatch(addOrderRequest(orderData)),
  clearCartProducts: () => dispatch(clearCartRequest()),
  getCartProducts: () => dispatch(getCartProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as OrderSummary,
  Component as OrderSummaryComponent,
};
