import BottomNavigation from '@mui/material/BottomNavigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fillPage, getAllMovies } from '../redux/movieSlice';

export default function FooterNav() {
    const dispatch = useDispatch<any>()
    const [page,setPage] = useState<number>(1)
    useEffect(()=>{
     dispatch(fillPage(page))
     dispatch(getAllMovies(page))
    },[dispatch,page])
    console.log(page)
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
            <Stack spacing={2}  >
                <Pagination count={100} onChange={(_e,value)=>{
                setPage(value)
                } } color='primary'/>
                
            </Stack>
        </BottomNavigation>
    );
}
