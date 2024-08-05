import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>Category</InputLabel>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        label="Category"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
        <MenuItem value="fashion">Fashion</MenuItem>
        <MenuItem value="books">Books</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
