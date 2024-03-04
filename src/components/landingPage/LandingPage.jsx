import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const LandingPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'center',
          height:'100vh'
        }}
      >
        <Stack spacing={2} sx={{ width: { xs: '100%' } }}>
          <Typography
            component="h1"
            variant={isSmallScreen ? 'h1' : 'h2'}
            sx={{textAlign:'center'}}
          >
            ShelfSync
          </Typography>
          <Typography component="h2" variant={isSmallScreen ? 'h3' : 'h4'} textAlign="center" >
            Where your pantry syncs its shelf.
          </Typography>
          <Button component={Link} to='signin' variant="contained" sx={{width: 'fit-content', alignSelf:'center', p:'10px'}}> 
            Get Started
          </Button>
        </Stack>
        
      </Container>
    </Box>
  );
}

export default LandingPage