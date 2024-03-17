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
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

const headCells = [
  {
    id: 'name',
    numeric: false,
    label: 'Name',
  },
  {
    id: 'quantity',
    numeric: true,
    label: 'Quantity',
  },
  {
    id: 'unit',
    numeric: false,
    label: 'Unit',
  },
  {
    id: 'category',
    numeric: false,
    label: 'Category',
  },
];

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
  return (a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  };
}

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false); 
  const [openForAdd, setOpenForAdd] = useState(false); 
  const [selectedRow, setSelectedRow] = useState({}); 
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

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

  const filteredItems = inventoryQuery.data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems = stableSort(filteredItems, getComparator(order, orderBy));

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <>
    <Box sx={{ width: '100%' }}>
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display:'flex',
        justifyContent:'start'
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
      <Tooltip title="Add Item">
        <IconButton  onClick={() => handleOpenForAdd()}>
          <FaRegPlusSquare />
        </IconButton>
      </Tooltip>
    </Toolbar>
    <Toolbar sx={{display:'flex', justifyContent:'center' }}>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </Toolbar>
    <Table size="large">
      <TableHead>
        <TableRow>
        {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={ 'left' }
                  padding={ 'normal'}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={() => handleRequestSort(headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
        </TableRow>
      </TableHead>
      {sortedItems.length === 0 ? <Typography variant='h5'>No Items Found</Typography> :
      <TableBody>
        {sortedItems?.map((item) => (
          <TableRow hover sx={{ cursor: 'pointer' }} onClick={() => handleOpen(item)} key={item.id}>
            <TableCell align="left">{item.name}</TableCell>
            <TableCell align="left">{item.quantity}</TableCell>
            <TableCell align="left">{item.unit === 'null' ? '' : item.unit}</TableCell>
            <TableCell align="left">{item.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
}
    </Table>
    </Box>
    <ItemModal open={open} handleClose={handleClose} selectedRow={selectedRow}/>
    <NewItemModal open={openForAdd} handleClose={handleCloseForAdd}/>
  </>
  )
}

export default Inventory