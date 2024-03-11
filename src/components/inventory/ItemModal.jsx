import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CategorySelect from './CategorySelect';
import UnitSelect from './UnitSelect';
import QuantityField from './QuantityField';
import ItemNameField from './ItemNameField';

const ItemModal = ({open, handleClose, selectedRow}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({name: data.get('name'), quantity: Number(data.get('quantity')), unit: data.get('unit'), category: data.get('category')})
  };
  
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form" ,
          onSubmit: handleSubmit
        }}
      >
        <DialogActions>
          <Button color="error" >Delete Item</Button>
        </DialogActions>
        <DialogTitle>Update {selectedRow.name}</DialogTitle>
        <DialogContent>
          <ItemNameField currentName={selectedRow.name}/>
          <QuantityField currentQuantity={selectedRow.quantity}/>
          <UnitSelect currentUnit={selectedRow.unit}/>
          <CategorySelect currentCategory={selectedRow.category}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="warning">Cancel</Button>
          <Button type="submit" color="success">Update Item</Button>
        </DialogActions>
      </Dialog>
  )
}

export default ItemModal