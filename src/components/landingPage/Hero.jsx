
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeroLayout from './HeroLayout';
import { Link } from 'react-router-dom';

const backgroundImage ='../src/assets/strawberries.jpg';

export default function Hero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#748386',
        backgroundPosition: '50%',
        backgroundSize: "cover",
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Shelfsync
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      > 
      Where your pantry syncs its shelf.
      </Typography>
      <Button component={Link} to='signin' variant="contained" size="large" sx={{width: 'fit-content', alignSelf:'center', p:'10px'}}> 
        Get Started
      </Button>
    </HeroLayout>
  );
}