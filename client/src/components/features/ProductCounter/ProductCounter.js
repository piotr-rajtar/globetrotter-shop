import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductCounter.module.scss';

import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

const Component = ({handleChange, increase, decrease, quantity}) => (
  <div className={styles.root}>
    <IconButton onClick={decrease}>
      <RemoveIcon className={styles.icon} />
    </IconButton>

    <TextField
      id='quantity'
      label='Quantity'
      variant='outlined'
      type='number'
      inputProps={{
        min: 0,
        max: 999,
        step: 1,
      }}
      onChange={handleChange}
      required
      className={styles.counter}
      value={quantity}
    />

    <IconButton onClick={increase}>
      <AddIcon className={styles.icon} />
    </IconButton>

  </div>
);

Component.propTypes = {
  handleChange: PropTypes.func,
  increase: PropTypes.func,
  decrease: PropTypes.func,
  quantity: PropTypes.number,
};

export {
  Component as ProductCounter,
  Component as ProductCounterComponent,
};
