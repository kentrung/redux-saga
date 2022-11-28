import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: '1rem',
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper elevation={3} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" fullWidth>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginPage;
