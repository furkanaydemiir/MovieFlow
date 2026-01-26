import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../img//Ejderha_Bilisim_Teknolojisi_Logosu.png'
export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="" />
            Movie Flow
          </Typography>
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Popüler Filmleri Takip Edin
          </Typography>
          <Button

            color="inherit"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Ana Sayfa</Link></Button>
          <Button
 
            color="inherit"><Link to="/favorites" style={{textDecoration:"none",color:"inherit"}}>İzleme Listem</Link></Button>
        </Toolbar>

      </AppBar>
    </Box>
  );
}
