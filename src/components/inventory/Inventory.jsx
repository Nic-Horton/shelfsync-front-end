import { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ItemModal from './ItemModal';

const baseURL = "http://localhost:3000"

axios.defaults.withCredentials = true;

const getInventory = () => {
  return axios.get(`${baseURL}/pantryItems`)
    .then((response) => {
      console.log(response)
      return response.data})
    .catch(function (error) {
      console.log(error);
    });
}

const Inventory = () => {
  const [open, setOpen] = useState(false); 
  const [selectedRow, setSelectedRow] = useState({}); 

  const handleOpen = (item) => {
    setSelectedRow(item)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedRow({});
  };

  const handleClick = (item) => {
    handleOpen(item);
  };


  const inventoryQuery = useQuery({
    queryKey: ['pantryItems'],
    queryFn: getInventory
  })

  if(inventoryQuery.isLoading) return <h1>Loading...</h1>
  if(inventoryQuery.isError){
    return <h1>Error: {inventoryQuery.error.message}</h1>
  }

  return (
    <>
    <Box>Inventory</Box>
    <Table size="large">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Unit</TableCell>
          <TableCell align="right">Category</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {inventoryQuery.data?.map((item) => (
          <TableRow hover sx={{ cursor: 'pointer' }} onClick={() => handleClick(item)} key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.unit === 'null' ? '' : item.unit}</TableCell>
            <TableCell align="right">{item.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <ItemModal open={open} handleClose={handleClose} selectedRow={selectedRow}/>
  </>
  )
}

export default Inventory