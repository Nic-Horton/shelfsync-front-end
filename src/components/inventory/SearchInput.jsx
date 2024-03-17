// import {useState} from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FaSearch } from "react-icons/fa";
import SvgIcon from '@mui/material/SvgIcon';

const SearchInput = ({searchTerm, setSearchTerm}) => {
  return (
    <TextField
            margin="normal"
            fullWidth
            id="search"
            label="Search"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{maxWidth:'500px', minWidth:'200px'}}
            InputProps={{
              endAdornment: <InputAdornment position="end"> 
                <SvgIcon>
                  <FaSearch />
                </SvgIcon>
              </InputAdornment>,
            }}
          />
  )
}

export default SearchInput