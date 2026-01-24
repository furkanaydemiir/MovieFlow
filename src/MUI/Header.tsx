import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Flow
          </Typography>
          <Button

            color="inherit">Ana Sayfa</Button>
          <Button

            color="inherit">Favorilerim</Button>
        </Toolbar>

      </AppBar>
    </Box>
  );
}
