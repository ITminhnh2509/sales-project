import React from 'react';
import { Pagination } from '@mui/material';

const ProductPagination = ({ page, setPage, totalPages }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={page}
      onChange={handleChange}
      color="primary"
    />
  );
};

export default ProductPagination;
