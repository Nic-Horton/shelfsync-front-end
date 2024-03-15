import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';
import { FaUserCheck } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'primary.main',
  fontWeight: 'medium',
};

function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'dark', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 14,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <Box sx={{mb:6}}>
          <Grid container spacing={{xs:10, md:5}}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <SvgIcon sx={{my: 4}}>
                  <FaUserCheck/>
                </SvgIcon>
                <Typography variant="h5" align="center">
                  Sign up or Sign in.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <SvgIcon sx={{my: 4}}>
                  <FaRegSquarePlus/>
                </SvgIcon>
                <Typography variant="h5" align="center">
                  Add your pantry items to the tracker.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <SvgIcon sx={{my: 4}}>
                  <FaRegPenToSquare />
                </SvgIcon>
                <Typography variant="h5" align="center">
                  {'Manage those items. From deleting to updating whats already in store. '}
                  {'Pantry management has never been easier.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Button component={Link} to='signin' variant="contained" size="large" sx={{width: 'fit-content', alignSelf:'center', p:'10px'}}> 
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default HowItWorks;