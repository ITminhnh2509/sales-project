import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import   
 { useSpring, animated } from '@react-spring/web';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 140,
  },
  content: {
    textAlign: 'center',
  },
  button: {
    marginTop: '10px',
  },
});

const ProductCard = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({ opacity: 0 }));

  React.useEffect(() => {
    set({ opacity: 1 });
  }, [set]);

  return (
    <animated.div style={props}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6">
            ${product.price}
          </Typography>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => onAddToCart(product)}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </animated.div>
  );
};

export default ProductCard;
