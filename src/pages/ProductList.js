import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import ProductPagination from '../components/Pagination';
import ProductCarousel from '../components/ProductCarousel';
import api from '../services/api';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
  },
  filters: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
});

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 10;
  const classes = useStyles();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/products');
      setProducts(response.data);
      setFeaturedProducts(response.data.slice(0, 5)); // Assuming first 5 products are featured
      setTotalPages(Math.ceil(response.data.length / productsPerPage));
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category === '' || product.category === category)
    )
    .slice((page - 1) * productsPerPage, page * productsPerPage);

  return (
    <Container className={classes.container}>
      <ProductCarousel featuredProducts={featuredProducts} />
      <div className={classes.filters}>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      <ProductPagination page={page} setPage={setPage} totalPages={totalPages} />
    </Container>
  );
};

export default ProductList;
