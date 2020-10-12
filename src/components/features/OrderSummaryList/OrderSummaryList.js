import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderSummaryList.module.scss';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const Component = ({cartProducts}) => (
  <Table aria-label='simple table'>
    <TableHead>
      <TableRow>
        <TableCell>Product</TableCell>
        <TableCell>Quantity</TableCell>
        <TableCell>Comment</TableCell>
        <TableCell>Price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {cartProducts.map(cartProduct => (
        <TableRow key={cartProduct.id}>
          <TableCell>{cartProduct.name}</TableCell>
          <TableCell>{cartProduct.quantity}</TableCell>
          <TableCell>{cartProduct.comment}</TableCell>
          <TableCell>{cartProduct.finalPrice}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

Component.propTypes = {
  cartProducts: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as OrderSummaryList,
  // Container as OrderSummaryList,
  Component as OrderSummaryListComponent,
};
