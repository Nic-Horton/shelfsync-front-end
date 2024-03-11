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
import { createItem } from '../../api/pantryItems';

const NewItemModal = ({open, handleClose}) => {
  const queryClient = useQueryClient();
  const itemCreation = useMutation({
    mutationFn: createItem,
    onSuccess: data => {
      queryClient.setQueryData(["pantryItems", data.id], data)
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
    itemCreation.mutate({
      name: data.get('name'),
      quantity: Number(data.get('quantity')),
      unit: itemUnit,
      category: data.get('category')
    })
    // console.log({name: data.get('name'), quantity: Number(data.get('quantity')), unit: data.get('unit'), category: data.get('category')})
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
        <DialogTitle>Item Creation</DialogTitle>
        <DialogContent>
          <ItemNameField currentName=''/>
          <QuantityField currentQuantity=''/>
          <UnitSelect currentUnit=''/>
          <CategorySelect currentCategory=''/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="warning">Cancel</Button>
          <Button type="submit" color="success">Create New Item</Button>
        </DialogActions>
      </Dialog>
  )
}

export default NewItemModal