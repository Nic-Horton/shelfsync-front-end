import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RLink } from 'react-router-dom';

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link component={RLink} color="inherit" to="/">
        ShelfSync
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright