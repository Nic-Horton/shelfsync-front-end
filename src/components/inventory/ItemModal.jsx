import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CategorySelect from './CategorySelect';
import UnitSelect from './UnitSelect';
import QuantityField from './QuantityField';
import ItemNameField from './ItemNameField';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem, updateItem } from '../../api/pantryItems';
import { FaTrash } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';

const ItemModal = ({open, handleClose, selectedRow}) => {
  const queryClient = useQueryClient();

  const itemUpdate = useMutation({
    mutationFn: updateItem,
    onSuccess: data => {
      queryClient.setQueryData(["pantryItems", data.id], data)
      queryClient.invalidateQueries(["pantryItems"], {exact: true})
      handleClose()
    }
  })

  const itemDeletion = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.setQueryData(["pantryItems"])
      queryClient.invalidateQueries(["pantryItems"], {exact: true})
      handleClose()
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    let itemUnit = '';
    const data = new FormData(event.currentTarget);
    if (data.get('unit') !== 'N/A'){
      itemUnit = data.get('unit');
    }
    itemUpdate.mutate({
      id: selectedRow.id,
      name: data.get('name'),
      quantity: Number(data.get('quantity')),
      unit: itemUnit,
      category: data.get('category')
    })
    // console.log({name: data.get('name'), quantity: Number(data.get('quantity')), unit: itemUnit, category: data.get('category')})
  };

  const handleDelete = () => {
    itemDeletion.mutate({
      id: selectedRow.id,
    })
  }
  
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form" ,
          onSubmit: handleSubmit
        }}
      >
        <DialogTitle sx={{display:'flex', justifyContent:'space-between', alignItems:'center', textAlign:'center'}}>
          Update {selectedRow.name}
          <IconButton color="error" onClick={handleDelete}>
            <FaTrash />
          </IconButton>
        </DialogTitle>
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