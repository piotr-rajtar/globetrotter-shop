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

const Component = ({id, name, type, price, photo, description}) => (
  <Card>
    <CardActionArea>
      <CardMedia
        component='img'
        alt={type}
        height='140'
        image={photo[0]}
        className={styles.photo}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Prices start from {price}
        </Typography>
      </CardContent>
    </CardActionArea>

    <CardActions>
      <Button
        size='small'
        component={NavLink}
        exact to={{
          pathname:`/product/${id}`,
          aboutProps: {
            id: id,
            name: name,
            type: type,
            price: price,
            photo: photo,
            description: description,
          },
        }}
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
  description: PropTypes.string,
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
