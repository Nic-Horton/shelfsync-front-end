import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const units = [
  '',
  'Grams (g)',
  'Kilograms (kg)',
  'Milligrams (mg)',
  'Ounces (oz)',
  'Pounds (lbs)',
  'Liters (L)',
  'Milliliters (mL)',
  'Fluid ounces (fl oz)',
  'Cups',
  'Teaspoons (tsp)',
  'Tablespoons (tbsp)',
  'Quarts (qt)',
  'Gallons (gal)',
  'Pieces',
  'Packs',
  'Cans',
  'Boxes',
  'Bags',
  'Jars',
  'Bottles',
  'Slices',
  'Loaves',
  'Cartons',
  'Bunches',
  'Bundles',
  'Containers',
  'Bars'
];

const UnitSelect = ({currentUnit}) => {
  const [unit, setUnit] = useState(currentUnit ? currentUnit : '');

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <TextField
      select
      margin="normal"
      id="unit"
      name="unit"
      label="Unit"
      value={currentUnit ? unit : ''}
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
      {units.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default UnitSelect