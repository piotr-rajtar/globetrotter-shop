import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderForm.module.scss';

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


const Component = ({submitForm, orderData, handleChange, formId}) => (
  <form
    className={styles.root}
    onSubmit={submitForm}
    id={formId}
  >
    <TextField
      id='name'
      label='Name'
      variant='outlined'
      InputProps={{
        minLength: 10,
      }}
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
      value={orderData.name}
    />

    <TextField
      id='email'
      label='Email'
      variant='outlined'
      type='email'
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
      value={orderData.email}
    />

    <TextField
      id='phone'
      label='Phone number'
      variant='outlined'
      type='tel'
      className={styles.formFieldPartialWidth}
      onChange={handleChange}
      value={orderData.phone}
    />

    <FormLabel component="legend" className={styles.radioLegend}>Preferred contact</FormLabel>
    <RadioGroup
      row
      id="preferredContact"
      onChange={handleChange}
      value={orderData.preferredContact}
    >
      <FormControlLabel
        name='preferredContact'
        value="phone"
        control={<Radio color="primary" />}
        label="Phone"
        labelPlacement="end"
        className={styles.radioButtons}
      />
      <FormControlLabel
        name='preferredContact'
        value="email"
        control={<Radio color="primary" />}
        label="E-mail"
        labelPlacement="end"
        className={styles.radioButtons}
      />
    </RadioGroup>

    <TextField
      name='message'
      label='Message'
      variant='outlined'
      multiline
      rows={4}
      rowsMax={4}
      inputProps={{
        maxLength: 100,
      }}
      className={styles.formFieldFullWidth}
      onChange={handleChange}
      value={orderData.message}
    />

  </form>
);

Component.propTypes = {
  submitForm: PropTypes.func,
  orderData: PropTypes.object,
  handleChange: PropTypes.func,
  formId: PropTypes.string,
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
