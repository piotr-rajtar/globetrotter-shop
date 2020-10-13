import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductBox.module.scss';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const Component = ({id, name, type, price, photo}) => (
  <Card>
    <CardActionArea
      className={styles.cardClickableArea}
      component={NavLink}
      exact to={`/product/${id}`}
    >
      <CardMedia
        component='img'
        alt={type}
        height='140'
        image={photo[0]}
        className={styles.photo}
      />

      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {name}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          Prices start from {price}
        </Typography>
      </CardContent>
    </CardActionArea>

    <CardActions>
      <Button
        variant='contained'
        size='small'
        color='primary'
        component={NavLink}
        exact to={`/product/${id}`}
        className={styles.button}
        startIcon={<SearchIcon />}
      >
        Find out more
      </Button>
    </CardActions>

  </Card>
);

Component.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  photo: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
