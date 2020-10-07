import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';

import { ProductList } from '../../features/ProductList/ProductList';

//import styles from './Homepage.module.scss';

import Paper from '@material-ui/core/Paper';

class Component extends React.Component {

  static propTypes = {
    products: PropTypes.array,
  }

  render() {
    const { products } = this.props;

    return(
      <Paper>
        <ProductList products={products} />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
