import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { auth } from '../services/firebase';
import api from '../services/api';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Orders = () => {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = auth.currentUser;
      if (user) {
        const response = await api.get(`/orders?userId=${user.uid}`);
        setOrders(response.data);
      }
    };

    fetchOrders();
  }, []);

  return (
    <Container className={classes.container}>
      <Typography variant="h4">Your Orders</Typography>
      <List>
        {orders.map((order) => (
          <ListItem key={order.id} className={classes.listItem}>
            <ListItemText
              primary={`Order #${order.id}`}
              secondary={`Total: $${order.total} - Date: ${new Date(order.date).toLocaleDateString()}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Orders;
