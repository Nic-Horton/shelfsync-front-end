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


const baseURL = "http://localhost:3000"


const MainListItems = () => {

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
		<ListItemButton component={Link} to={'inventory'}>
			<ListItemIcon>
				<BsGrid1X2 />
			</ListItemIcon>
			<ListItemText primary="Inventory" />
		</ListItemButton>
		<ListItemButton component={Link} to={'stats'}>
			<ListItemIcon>
				<BsGraphUp />
			</ListItemIcon>
			<ListItemText primary="Statistics" />
		</ListItemButton>
		<ListItemButton component={Link} to={'settings'}>
			<ListItemIcon>
				<BsGearWideConnected />
			</ListItemIcon>
			<ListItemText primary="Settings" />
		</ListItemButton>
		<ListItemButton onClick={() => signingOut()}>
			<ListItemIcon>
				<FiLogOut />
			</ListItemIcon>
			<ListItemText primary="Sign Out" />
		</ListItemButton>
	</>
	)
}

export default MainListItems