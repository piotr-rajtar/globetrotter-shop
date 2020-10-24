import React from 'react';

import { Link } from 'react-router-dom';

import styles from './ShopLogo.module.scss';

import PublicIcon from '@material-ui/icons/Public';
import Button from '@material-ui/core/Button';

const Component = () => (
  <span className={styles.root}>
    <Button className={styles.link} component={Link} to={`/`}>
      <PublicIcon className={styles.icon} />
    </Button>
    <Button className={styles.link} component={Link} to={`/`}>
      <h1 className={styles.title}>The GlobeTrotter</h1>
    </Button>
  </span>
);

export {
  Component as ShopLogo,
  Component as ShopLogoComponent,
};
