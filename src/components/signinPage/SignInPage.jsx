import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link as RLink, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../copyright/Copyright';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { isAuthenticated, login } from '../../../auth';
import SvgIcon from '@mui/material/SvgIcon';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';

const SignInPage = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			const authenticated = await isAuthenticated();
			if (authenticated) {
				navigate('/dashboard');
			} else {
				return;
			}
		};
		checkAuth();
	});

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const credentials = {
			username: data.get('username'),
			password: data.get('password'),
		};
		login(credentials, navigate);
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
					<FaLock />
				</SvgIcon>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type={showPassword ? 'text' : 'password'}
						id="password"
						autoComplete="current-password"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
									>
										{showPassword ? <FaEyeSlash /> : <FaEye />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
					<Box sx={{ display: 'flex', justifyContent: 'center' }}>
						<Link component={RLink} to="/signup" variant="body2">
							{"Don't have an account? Sign Up"}
						</Link>
					</Box>
				</Box>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
};

export default SignInPage;
