import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BsGrid1X2 } from "react-icons/bs";
import { BsGraphUp } from 'react-icons/bs';
import { BsGearWideConnected } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const mainListItems = (
	<>
		<ListItemButton component={Link} to={''}>
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
		<ListItemButton>
			<ListItemIcon>
				<FiLogOut />
			</ListItemIcon>
			<ListItemText primary="Sign Out" />
		</ListItemButton>
	</>
);
