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

        <TableCell
          align='left'
          className={styles.tableHeader}
        >
          Product
        </TableCell>

        <TableCell
          align='center'
          className={styles.tableHeader}
        >
          Quantity
        </TableCell>

        <TableCell
          align='center'
          className={styles.tableHeader}
        >
          Comment
        </TableCell>

        <TableCell
          align='right'
          className={styles.tableHeader}
        >
          Price
        </TableCell>

      </TableRow>
    </TableHead>

    <TableBody>
      {cartProducts.map(cartProduct => (
        <TableRow key={cartProduct.id}>

          <TableCell
            align='left'
            className={styles.tableBodyEdge}
          >
            {cartProduct.name}
          </TableCell>

          <TableCell
            align='center'
            className={styles.tableBodyCenter}
          >
            {cartProduct.quantity}
          </TableCell>

          <TableCell
            align='center'
            className={styles.tableBodyCenter + ' ' + styles.comment}
          >
            {cartProduct.comment}
          </TableCell>

          <TableCell
            align='right'
            className={styles.tableBodyEdge}
          >
            {cartProduct.finalPrice}
          </TableCell>

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
