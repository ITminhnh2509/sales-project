import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const CartItem = ({ item, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.listItem}>
      <ListItemText
        primary={item.name}
        secondary={`$${item.price} x ${item.quantity}`}
      />
      <IconButton edge="end" aria-label="delete" onClick={() => onRemoveFromCart(item)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default CartItem;
