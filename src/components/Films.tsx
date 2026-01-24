import { Alert, Button, Snackbar } from '@mui/material';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { addMovieToFavorite } from '../redux/movieSlice';
import type { RootState, } from "../redux/store";
import { useState } from 'react';

function Films({ movie }: any) {
    const favorites = useSelector((state: RootState) => state.movie.favorites)
    const [open, setOpen] = useState<boolean>(false)
    const resimYolu = "https://image.tmdb.org/t/p/w1280";
    const { adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, relase_date, title, video, vote_average, vote_count } = movie
    const dispatch = useDispatch<AppDispatch>()
    const handleFavoriteClick = () => {
        dispatch(addMovieToFavorite(id))
        setOpen(true)
    }
    const handleClose = (e:React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false); 
    };
    return (
        <div className='movie-wrapper' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{
                width: "300px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                margin: "15px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                height: "450px",
                overflow: "auto"
            }}>

                <img style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover'
                }} src={resimYolu + backdrop_path} alt="" />
                <h3>{original_title}</h3>
                <p>{overview}</p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <p>{vote_average}</p>
                    <p>{
                        vote_average >= 7.5 ? <FaStar /> : vote_average < 5.5 ? <FaRegStar /> : <FaStarHalf />
                    }</p>
                    <div>
                    </div>
                </div>
                <div className='button-div'>
                <Button 
                
                    onClick={handleFavoriteClick}
                    variant='outlined'>Favoriye Ekle
                </Button>
                <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{vertical:"top",horizontal:"right"}}>
                    <Alert onClose={handleClose} severity='success' variant='filled' sx={{width:"100%"}}>
                        {original_title} Favorilere Eklendi!
                    </Alert>
                </Snackbar>
                <Button variant='outlined'>
                    Detaylı Göster
                </Button>
                </div>
            </div >
        </div >
    )
}

export default Films