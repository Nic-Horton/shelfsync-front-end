import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BsGrid1X2 } from "react-icons/bs";
import { BsGraphUp } from 'react-icons/bs';
import { BsGearWideConnected } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { logout } from '../../../auth';
import axios from "axios"
import { useState } from 'react';

const baseURL = "http://localhost:3000"

const tabItems =[
	{name: "Inventory", path:'inventory', icon: <BsGrid1X2 />},
	{name: "Statistics", path:'stats', icon: <BsGraphUp />},
	{name: "Settings", path:'settings', icon: <BsGearWideConnected />}
] 

const MainListItems = () => {
	const [selectedItem, setSelectedItem] = useState('Inventory');

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };


	const signingOut = () => {
		axios.post(`${baseURL}/signout`)
		.then(function(response){
			console.log(response);
			logout();
		})
		.catch(function (error) {
			console.log(error);
		})
	}
	return(
	<>
		{tabItems.map((item)=>{
			return (
			<ListItemButton key={item.name} component={Link} to={item.path} onClick={()=>handleItemClick(item.name)} selected={selectedItem === item.name} >
				<ListItemIcon>
					{item.icon}
				</ListItemIcon>
				<ListItemText primary={item.name} />
			</ListItemButton>
			)
		})}

		<ListItemButton  onClick={() => signingOut()}>
			<ListItemIcon>
				<FiLogOut color='red'/>
			</ListItemIcon>
			<ListItemText sx={{color:'red'}} primary="Sign Out" />
		</ListItemButton>
	</>
	)
}

export default MainListItems