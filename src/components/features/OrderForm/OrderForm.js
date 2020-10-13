import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderForm.module.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const Component = ({submitForm, orderData, setOrderDate, handleChange}) => (
  <form
    className={styles.form}
    onSubmit={submitForm}
  >
    <TextField
      id="name"
      label="Name"
      variant="outlined"
      InputProps={{
        minLength: 10,
      }}
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
    />
    <TextField
      id="surname"
      label="Surname"
      variant="outlined"
      InputProps={{
        minLength: 10,
      }}
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
    />
    <TextField
      id="email"
      label="Email"
      variant="outlined"
      type="email"
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
    />
    <TextField
      id="telephone"
      label="Phone number"
      variant="outlined"
      type="tel"
      className={styles.formFieldPartialWidth}
      onChange={handleChange}
    />
    <Button
      variant='contained'
      color="primary"
      size="large"
      className={styles.button}
      type="submit"
      onClick={setOrderDate}
      startIcon={<SendIcon />}
    >
      SUBMIT ORDER FORM
    </Button>
  </form>
);

Component.propTypes = {
  submitForm: PropTypes.func,
  orderData: PropTypes.object,
  setOrderDate: PropTypes.func,
  handleChange: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as OrderForm,
  // Container as OrderForm,
  Component as OrderFormComponent,
};
