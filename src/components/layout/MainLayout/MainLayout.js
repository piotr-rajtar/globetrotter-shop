import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const Component = ({children}) => (
  <div className={styles.root}>
    <AppBar position='fixed'>
      <Container>
        <Toolbar>
          <Header />
        </Toolbar>
      </Container>
    </AppBar>

    <Container>
      <Toolbar />
      <Toolbar />
      {children}
    </Container>

    <AppBar position='fixed' className={styles.footer}>
      <Container>
        <Toolbar>
          <Footer />
        </Toolbar>
      </Container>
    </AppBar>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
