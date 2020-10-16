import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderSummaryList.module.scss';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const Component = ({cartProducts}) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell className={styles.tableHeaderLeftEdge}>Product</TableCell>
        <TableCell className={styles.tableHeaderCenter}>Quantity</TableCell>
        <TableCell className={styles.tableHeaderCenter}>Comment</TableCell>
        <TableCell className={styles.tableHeaderRightEdge}>Price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {cartProducts.map(cartProduct => (
        <TableRow key={cartProduct.id}>
          <TableCell className={styles.tableBodyLeftEdge}>{cartProduct.name}</TableCell>
          <TableCell className={styles.tableBodyCenter}>{cartProduct.quantity}</TableCell>
          <TableCell className={styles.tableBodyCenter}>{cartProduct.comment}</TableCell>
          <TableCell className={styles.tableBodyRightEdge}>{cartProduct.finalPrice}</TableCell>
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
