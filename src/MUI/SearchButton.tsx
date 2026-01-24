import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function FooterNav() {


    return (
        <BottomNavigation 
            showLabels
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                zIndex: 9999,
            }}
        >
            <Stack spacing={2}>
                <Pagination count={12} onChange={(e)=>{
                }} color='primary' />
            </Stack>
        </BottomNavigation>
    );
}
