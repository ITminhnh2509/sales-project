import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import api from '../services/api';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return null;

  return (
    <Container>
      <Typography variant="h3">{product.name}</Typography>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h4">${product.price}</Typography>
      <Button variant="contained" color="primary" onClick={() => onAddToCart(product)}>
        Add to Cart
      </Button>
    </Container>
  );
};

export default ProductDetail;
