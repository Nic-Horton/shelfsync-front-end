import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { updatePassword } from '../../api/user';

const Settings = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [passwordsMatch, setPasswordsMatch] = useState(true);

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (data.get('password') === data.get('confirmPassword')) {
			updatePassword({ password: data.get('password') });
		} else {
			setPasswordsMatch(false);
		}
	};

	const handlePasswordChange = (event) => {
		if (
			document.getElementById('confirmPassword').value ||
			event.target.value === document.getElementById('confirmPassword').value
		) {
			setPasswordsMatch(
				event.target.value === document.getElementById('confirmPassword').value
			);
		}
	};
	const handleConfirmPasswordChange = (event) => {
		setPasswordsMatch(
			event.target.value === document.getElementById('password').value
		);
	};

	return (
		<>
			<CssBaseline />
			<Box
				sx={{
					paddingTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h5">
					Update Password
				</Typography>
				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="New Password"
						type={showPassword ? 'text' : 'password'}
						id="password"
						autoComplete="current-password"
						onChange={handlePasswordChange}
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
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowConfirmPassword}
									>
										{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
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
						Update
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Settings;
