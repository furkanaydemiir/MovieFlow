import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Flow
          </Typography>
          <Button

            color="inherit"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Ana Sayfa</Link></Button>
          <Button
 
            color="inherit"><Link to="/favorites" style={{textDecoration:"none",color:"inherit"}}>Favorilerim</Link></Button>
        </Toolbar>

      </AppBar>
    </Box>
  );
}
