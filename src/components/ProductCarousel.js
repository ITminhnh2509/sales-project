import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  carousel: {
    marginBottom: '20px',
  },
});

const ProductCarousel = ({ featuredProducts }) => {
  const classes = useStyles();

  return (
    <Carousel className={classes.carousel} showThumbs={false} autoPlay infiniteLoop>
      {featuredProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <p className="legend">{product.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
