import { Alert, Button, Snackbar } from '@mui/material';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import '../App.css'
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { addMovieToFavorite } from '../redux/movieSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Films({ movie }: any) {
    const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false)
    const resimYolu = "https://image.tmdb.org/t/p/w1280";
    const {  backdrop_path,  id,  original_title, overview, vote_average,  } = movie
    const dispatch = useDispatch<AppDispatch>()
    const handleFavoriteClick = () => {
        dispatch(addMovieToFavorite(id))
        setOpen(true)
    }
    const handleClose = (_e:React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false); 
    };
   return (
        <div className='movie-card'>
            <img 
                className='movie-image'
                src={resimYolu + backdrop_path} 
                alt={original_title} 
            />
            
            <div className='movie-content'>
                <h2 className='movie-title'>{original_title}</h2>
                <p className='movie-overview'>{overview}</p>
                
                <div className='movie-rating'>
                    <span>Puan: {vote_average.toFixed(1)}</span>
                    <span className='star-icon'>
                        {vote_average >= 8 ? <FaStar color="#FFD700" /> : 
                         vote_average < 5.5 ? <FaRegStar color="#FFD700" /> : 
                         <FaStarHalf color="#FFD700" />}
                    </span>
                </div>
            </div>

            <div className='button-group'>
                <Button 
                    className='button'
                    onClick={handleFavoriteClick}
                    variant='contained' 
                    size="small"
                    color="primary">
                    Listeye Ekle
                </Button>
                <Button
                    className='button'
                    onClick={() => navigate("/details/" + id)}
                    variant='outlined'
                    size="small">
                    Detaylar
                </Button>
            </div>

            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{vertical:"top", horizontal:"center"}}>
                <Alert onClose={handleClose} severity='success' variant='filled'>
                    {original_title} eklendi!
                </Alert>
            </Snackbar>
        </div>
    )
}
export default Films