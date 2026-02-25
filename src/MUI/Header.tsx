import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export default function ButtonAppBar() {

   const movies = useSelector((state:RootState)=>state.movie.movies)
   console.log(movies)
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            MovieFlow
          </Typography>
           <Typography className='mobil-hidden' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Popüler Filmleri Takip Edin
          </Typography>
         <Autocomplete
         disablePortal 
         options={movies.map((movie)=>{
         return  movie.title
         })}
         sx={{width:250}}
         renderInput={(params)=><TextField {...params} label="Bu Sayfadaki Filmler" />
         }
         />
          <Button

            color="inherit"><Link to="/" style={{textDecoration:"none",color:"inherit"}}>Ana Sayfa</Link></Button>
          <Button
 
            color="inherit"><Link to="/favorites" style={{textDecoration:"none",color:"inherit"}}>İzleme Listem</Link></Button>
        </Toolbar>

      </AppBar>
    </Box>
  );
}
