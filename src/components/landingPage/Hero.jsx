import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeroLayout from './HeroLayout';
import { Link } from 'react-router-dom';

const backgroundImage = '../src/assets/strawberries.jpg';

export default function Hero() {
	return (
		<HeroLayout
			sxBackground={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundColor: '#242424',
				backgroundPosition: '50%',
				backgroundSize: 'cover',
			}}
		>
			<img
				style={{ display: 'none' }}
				src={backgroundImage}
				alt="increase priority"
			/>
			<Typography
				color="inherit"
				align="center"
				variant="h1"
				fontWeight="bold"
				marked="center"
			>
				Shelfsync
			</Typography>
			<Typography
				color="inherit"
				align="center"
				variant="h3"
				fontWeight="bold"
				sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
			>
				Where your pantry syncs its shelf.
			</Typography>
			<Button
				component={Link}
				to={'signin'}
				variant="contained"
				size="large"
				sx={{
					width: 'fit-content',
					alignSelf: 'center',
					p: '10px',
					fontWeight: 'bold',
				}}
			>
				Get Started
			</Button>
		</HeroLayout>
	);
}
