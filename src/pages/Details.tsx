import { useParams } from "react-router-dom"
import Header from '../MUI/Header'
import { useSelector } from "react-redux"
import type { RootState, } from "../redux/store";
import { Alert, Button, Snackbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { addMovieToFavorite } from "../redux/movieSlice";
import { useState } from "react";

function Details() {
    const { id } = useParams()
    const movies = useSelector((state: RootState) => state.movie.movies);
    const numberId = Number(id)
    const resimYolu = "https://image.tmdb.org/t/p/w1280";
    const dispatch = useDispatch<AppDispatch>()
    const [open, setOpen] = useState<boolean>(false)
    const handleFavoriteClick = () => {
        dispatch(addMovieToFavorite(numberId))
        setOpen(true)
    }
    const handleClose = (_e: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <div>
            <Header />
            <div>
                {
                    movies && movies.map((movie) => {
                        if (movie.id === numberId) {
                            return <div style={{
                                width: "100%", height: "100vh", backgroundImage: `url(${resimYolu}${movie.backdrop_path})`, backgroundSize: "cover"
                                , backgroundPosition: "center", backgroundRepeat: "no-repeat", position: "absolute", display: "flex", justifyContent: "center"
                            }}
                                key={movie.id}>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }} >
                                    <h1 style={{ color: "lightgrey" }}>{movie.title}</h1>
                                    <h3 style={{ color: "Background" }}>{movie.overview}</h3>
                                    <h3 style={{ color: "white" }}>IMDB:{movie.vote_average}</h3>
                                    <Button style={{width:"350px"}}

                                        onClick={handleFavoriteClick}
                                        variant='contained'>İzleme Listesine Ekle
                                    </Button>
                                    <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                                        <Alert onClose={handleClose} severity='success' variant='filled' sx={{ width: "100%" }}>
                                             İzleme Listesine Eklendi
                                        </Alert>
                                    </Snackbar>
                                </div>
                            </div>;
                        }
                        return null;
                    })
                }
            </div>
        </div>
    )
}

export default Details