import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import { ProductCounter } from '../ProductCounter/ProductCounter';

import styles from './CartProduct.module.scss';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';

class Component extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    comment: PropTypes.string,
  }

  render() {
    const { id, name, photo, quantity, price, comment } = this.props;

    return(
      <Grid container className={styles.root} spacing={2}>

        <Grid item>
          <ButtonBase className={styles.imageContainer}>
            <img className={styles.image} src={photo} alt='product' />
          </ButtonBase>
        </Grid>

        <Grid item xs={12} sm container>

          <Grid  item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography className={styles.productName} gutterBottom variant='subtitle1'>
                {name}
              </Typography>
            </Grid>
            <Grid item xs>
              <ProductCounter />
            </Grid>
            <Grid item xs>
              <TextField
                id='comment'
                label='Comment'
                variant='outlined'
                multiline
                rowsMax={4}
                inputProps={{
                  maxLength: 100,
                }}
                className={styles.commentField}
              />
            </Grid>
          </Grid>

          <Grid  item xs container direction='column' spacing={2}>
            <Grid className={styles.price} item>
              ${price}
            </Grid>
            <Grid item className={styles.iconContainer}>
              <Button>
                <DeleteIcon className={styles.icon} />
              </Button>
            </Grid>
          </Grid>

        </Grid>

      </Grid>
    );
  }
}

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartProduct,
  // Container as CartProduct,
  Component as CartProductComponent,
};





