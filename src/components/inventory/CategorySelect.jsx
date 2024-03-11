import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const categories = [
  'Grains',
  'Canned Goods',
  'Bakery',
  'Dairy',
  'Meat',
  'Vegetables',
  'Fruits',
  'Beverages',
  'Spices',
  'Condiments',
  'Frozen Foods',
  'Snacks',
  'Miscellaneous',
];

const CategorySelect = ({currentCategory}) => {
  const [category, setCategory] = useState(currentCategory ? currentCategory : '');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <TextField
      select
      margin="normal"
      id="category"
      name="category"
      label="Category"
      value={category}
      onChange={handleChange}
      fullWidth
      SelectProps={{
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: 200,
            },
          },
        },
      }}
    >
      {categories.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CategorySelect;
