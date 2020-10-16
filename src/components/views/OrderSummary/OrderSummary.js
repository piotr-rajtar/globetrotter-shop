import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { OrderSummaryList } from '../../features/OrderSummaryList/OrderSummaryList';
import { OrderForm } from '../../features/OrderForm/OrderForm';

import { connect } from 'react-redux';
import { getAllCartProducts, clearCart } from '../../../redux/cartRedux';
import { addOrder } from '../../../redux/ordersRedux';
import { createDate } from '../../../utils';

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
    addOrder: PropTypes.func,
    clearCartProducts: PropTypes.func,
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

  setOrderDate = () => {
    const { orderData } = this.state;
    const date = createDate();

    this.setState({
      orderData: {
        ...orderData,
        ordered: date,
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
      },
    });

    clearCartProducts();
  }

  submitForm = (event) => {
    const { orderData } = this.state;
    const { addOrder } = this.props;

    event.preventDefault();

    let error = null;

    if(!orderData.name.length || !orderData.email.length || !orderData.phone.length) error='All form fields should be filled';
    else if(orderData.name.length < 15) error ='Please enter you full name - min. 15 characters';

    if(!error) {
      addOrder(orderData);
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

          <Grid item xs={12}>
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

          <Grid item xs={6} className={styles.form}>
            <OrderForm
              orderData={orderData}
              handleChange={this.handleChange}
              submitForm={this.submitForm}
              formId='orderSummaryForm'
            />
          </Grid>

          <Grid item container className={styles.buttonsContainer}>

            <Grid item xs={6} className={styles.buttonCart}>
              <Button
                variant='contained'
                size='large'
                color='primary'
                component={NavLink}
                exact to={`/cart`}
                className={styles.button}
                startIcon={<ShoppingCartIcon />}
              >
                GO BACK TO CART
              </Button>
            </Grid>

            <Grid item xs={6} className={styles.buttonSubmitOrder}>
              <Button
                variant='contained'
                color='primary'
                size='large'
                className={styles.button}
                type='submit'
                onClick={this.setOrderDate}
                form='orderSummaryForm'
                startIcon={<SendIcon />}
              >
                SUBMIT ORDER FORM
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
  addOrder: orderData => dispatch(addOrder(orderData)),
  clearCartProducts: () => dispatch(clearCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as OrderSummary,
  Container as OrderSummary,
  Component as OrderSummaryComponent,
};
