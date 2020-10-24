import React from 'react';

import styles from './Loader.module.scss';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const Component = () => (
  <div className={styles.root}>
    <Typography
      className={styles.title}
      gutterBottom
      variant='h2'
      component='span'
    >
      Loading...
    </Typography>
    <CircularProgress size={35} />
  </div>
);

export {
  Component as Loader,
  Component as LoaderComponent,
};
