import {useState} from 'react'
import TextField from '@mui/material/TextField';

const QuantityField = ({currentQuantity}) => {
  const [quantity, setQuantity] = useState(currentQuantity ? currentQuantity : '');

  return (
   <TextField
            margin="normal"
            fullWidth
            name="quantity"
            label="Quantity"
            InputProps={{
              inputProps: {
                inputMode: 'numeric',
                pattern: '[0-9]*[.]?[0-9]*',
              },
            }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            helperText="Please enter a valid number (decimals are accepted)"
            id="quantity"
            autoComplete="none"
          /> 
  )
}

export default QuantityField