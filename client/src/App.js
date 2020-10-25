import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { OrderSummary } from './components/views/OrderSummary/OrderSummary';
import { Product } from './components/views/Product/Product';
import { ShoppingCart } from './components/views/ShoppingCart/ShoppingCart';
import { NotFound } from './components/views/NotFound/NotFound';
import ScrollToTop from './ScrollToTop';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#3b3b3b' },
  },
});

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ScrollToTop />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/order' component={OrderSummary} />
              <Route exact path='/product/:id' component={Product} />
              <Route exact path='/cart' component={ShoppingCart} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
