import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Component = () => (
  <Paper>
    <img
      src='https://images.unsplash.com/photo-1553981956-2335cffb5e50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
      alt='compass'
      className={styles.image}
    />
    <Typography>Are you lost, Globetrotter?</Typography>
    <Typography>Given page does not exist or has been removed already!</Typography>
    <Button
      variant="outlined"
      color="primary"
      size="large"
      className={styles.button}
      component={NavLink}
      exact to={`/`}
    >
          GO BACK TO HOMEPAGE
    </Button>
  </Paper>
);

Component.propTypes = {
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
