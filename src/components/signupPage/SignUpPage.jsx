import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link as RLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../copyright/Copyright';
import SvgIcon from '@mui/material/SvgIcon';
import { FaUserPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { createProfile } from '../../api/user';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('password') === data.get('confirmPassword')) {
      createProfile({username: data.get('username'),password:data.get('password')},navigate)
    } else {
      setPasswordsMatch(false);
    }
  };

  const handlePasswordChange = (event) => {
    if(document.getElementById('confirmPassword').value || (event.target.value === document.getElementById('confirmPassword').value)){
      setPasswordsMatch(event.target.value === document.getElementById('confirmPassword').value);
    }
  };
  const handleConfirmPasswordChange = (event) => {
    setPasswordsMatch(event.target.value === document.getElementById('password').value);
  };

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <SvgIcon>
            <FaUserPlus />
          </SvgIcon>
          <Typography component="h1" variant="h5">
            Create an Account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Enter your Username"
              name="username"
              autoFocus
              autoComplete="new-user-name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Enter your Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="new-password"
              onChange={handlePasswordChange}
              InputProps={{
                endAdornment: 
                 <InputAdornment position="end">
                   <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleClickShowPassword}
                   >
                     {showPassword ? <FaEyeSlash /> : <FaEye />}
                   </IconButton>
                 </InputAdornment>
             }}
            />
            <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            error={!passwordsMatch} 
            helperText={!passwordsMatch && "Passwords don't match"}
            onChange={handleConfirmPasswordChange}
            InputProps={{
              endAdornment: 
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowConfirmPassword}
                 >
                   {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                 </IconButton>
               </InputAdornment>
           }}
          />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Link component={RLink} to="/signin" variant="body2">
                  {"Have an account already? Sign In"}
                </Link>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  )
}

export default SignUpPage