import React from 'react';
import { List, Typography, Button, Container } from '@mui/material';
import CartItem from '../components/CartItem';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  },
});

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const classes = useStyles();
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className={classes.container}>
      <Typography variant="h4">Your Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
        ))}
      </List>
      <div className={classes.total}>
        <Typography variant="h5">Total: ${totalAmount}</Typography>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
