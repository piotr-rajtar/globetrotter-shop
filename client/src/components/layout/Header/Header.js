import React from 'react';

import styles from './Header.module.scss';

import { ShopLogo } from '../../features/ShopLogo/ShopLogo';
import { CartLogo } from '../../features/CartLogo/CartLogo';

const Component = () => (
  <header className={styles.root}>
    <ShopLogo />
    <CartLogo />
  </header>
);

export {
  Component as Header,
  Component as HeaderComponent,
};
