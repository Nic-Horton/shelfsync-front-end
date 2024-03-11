import {useState} from 'react'
import TextField from '@mui/material/TextField';

const ItemNameField = ({currentName}) => {
  const [name, setName] = useState(currentName ? currentName : '');

  return (
    <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Item Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="none"
            required
            autoFocus
          />
  )
}

export default ItemNameField