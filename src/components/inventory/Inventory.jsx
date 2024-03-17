import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import Typography from '@mui/material/Typography';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FaRegPlusSquare } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import ItemModal from './ItemModal';
import { getInventory } from '../../api/pantryItems';
import NewItemModal from './NewItemModal';
import SearchInput from './SearchInput';


const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false); 
  const [openForAdd, setOpenForAdd] = useState(false); 
  const [selectedRow, setSelectedRow] = useState({}); 

  const handleOpen = (item) => {
    setSelectedRow(item)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedRow({});
  };

  const handleOpenForAdd = () => {
    setOpenForAdd(true);
  };

  const handleCloseForAdd = () => {
    setOpenForAdd(false);
  };

  const inventoryQuery = useQuery({
    queryKey: ['pantryItems'],
    queryFn: getInventory
  })

  if(inventoryQuery.isLoading) return <h1>Loading...</h1>
  if(inventoryQuery.isError){
    return <h1>Error: {inventoryQuery.error.message}</h1>
  }

  const filteredItems = searchTerm ? inventoryQuery.data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) : inventoryQuery.data;

  return (
    <>
    <Box sx={{ width: '100%' }}>
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Pantry Inventory
      </Typography>
      <Tooltip title="Create New Item">
        <IconButton onClick={() => handleOpenForAdd()}>
          <FaRegPlusSquare />
        </IconButton>
      </Tooltip>
    </Toolbar>
    <Toolbar>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </Toolbar>
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
        {filteredItems?.map((item) => (
          <TableRow hover sx={{ cursor: 'pointer' }} onClick={() => handleOpen(item)} key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.unit === 'null' ? '' : item.unit}</TableCell>
            <TableCell align="right">{item.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Box>
    <ItemModal open={open} handleClose={handleClose} selectedRow={selectedRow}/>
    <NewItemModal open={openForAdd} handleClose={handleCloseForAdd}/>
  </>
  )
}

export default Inventory