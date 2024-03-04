import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Generate Order Data
function createData(id, name, quantity, unit, category) {
  return { id, name, quantity, unit, category };
}

const invRows = [
  createData(
    0,
    'Bananas',
    2,
    '',
    'Fruit',
  ),
  createData(
    1,
    'Cheerios',
    2,
    'Boxes',
    'Cereal',
  ),
  createData(
    2,
    'Rice',
    5,
    'Boxes',
    'Grains',
  ),
  createData(
    3,
    'Jello',
    10,
    'Packs',
    'Snacks',
  ),
];

const Inventory = () => {
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
        {invRows.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.quantity}</TableCell>
            <TableCell>{row.unit}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
  )
}

export default Inventory