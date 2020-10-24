import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NotFound.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';

const Component = () => (
  <Paper>

    <Grid container className={styles.gridContainer}>

      <Grid item xs={12}>
        <Typography
          className={styles.title}
          gutterBottom
          variant='h1'
          component='h1'
        >
          404
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          className={styles.text}
          gutterBottom
          variant='h3'
          component='p'
        >
          Are you lost, Globetrotter?
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography
          className={styles.text + ' ' + styles.textBottom}
          gutterBottom
          variant='h6'
          component='p'
        >
          Given page does not exist or has been removed already!
        </Typography>
      </Grid>

      <Grid item xs={12} className={styles.buttonContainer}>
        <Button
          variant='contained'
          size='large'
          color='primary'
          className={styles.button}
          component={NavLink}
          exact to={`/`}
          startIcon={<HomeIcon />}
        >
          HOMEPAGE
        </Button>
      </Grid>

    </Grid>

  </Paper>
);

Component.propTypes = {
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
