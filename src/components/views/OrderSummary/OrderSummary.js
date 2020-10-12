import React from 'react';
import PropTypes from 'prop-types';

import { OrderSummaryList } from '../../features/OrderSummaryList/OrderSummaryList';
import { OrderForm } from '../../features/OrderForm/OrderForm';

import { connect } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';
import { addOrder } from '../../../redux/ordersRedux';
import { createDate } from '../../../utils';

import styles from './OrderSummary.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Component extends React.Component {

  state = {
    orderData: {
      name: '',
      surname: '',
      email: '',
      telephone: '',
      ordered: '',
      orderDetails: this.props.cartProducts,
    },
  }

  static propTypes = {
    cartProducts: PropTypes.array,
    addOrder: PropTypes.func,
  }

  totalCost() {
    const { cartProducts } = this.props;

    let totalCost = 0;

    cartProducts.map(cartProduct => totalCost += cartProduct.finalPrice);

    return totalCost;
  }

  handleChange = (event) => {
    const { orderData } = this.state;
    const { value, id } = event.target;

    this.setState({
      orderData: {
        ...orderData,
        [id]: value,
      },
    });
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
    const { orderData } = this.state;

    this.setState({
      orderData: {
        name: '',
        surname: '',
        email: '',
        telephone: '',
        ordered: '',
      },
    });

    console.log(orderData);
  }

  submitForm = (event) => {
    const { orderData } = this.state;
    const { addOrder } = this.props;

    event.preventDefault();

    let error = null;

    if(!orderData.name.length || !orderData.surname.length || !orderData.email.length || !orderData.telephone.length) error='All form fields should be filled';
    else if(orderData.name.length > 15 || orderData.surname.length > 20) error ='Name or surname is too long. Name max 15 characters, surname max 20';

    if(!error) {
      addOrder(orderData);
      alert('Order submitted successfully');
      this.setState({
        orderData: {
          name: '',
          surname: '',
          email: '',
          telephone: '',
          ordered: '',
        },
      });
    } else {
      alert(error);
    }
  }

  render() {
    const { cartProducts } = this.props;
    const { orderData } = this.state;

    return(
      <Paper>
        <OrderSummaryList cartProducts={cartProducts} />

        <Typography className={styles.title} gutterBottom variant="h4" component="h1">
          Total cost:{this.totalCost()}$
        </Typography>

        <OrderForm
          orderData={orderData}
          handleChange={this.handleChange}
          submitForm={this.submitForm}
          setOrderDate={this.setOrderDate}
        />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: getAllCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
  addOrder: orderData => dispatch(addOrder(orderData)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as OrderSummary,
  Container as OrderSummary,
  Component as OrderSummaryComponent,
};
