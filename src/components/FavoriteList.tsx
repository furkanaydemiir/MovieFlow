import { useState } from "react";
import Header from '../MUI/Header';
import { useDispatch, useSelector } from "react-redux";
import { deleteMovieFromFavorite } from "../redux/movieSlice";
import type { RootState, } from "../redux/store";
import { Alert, Button, Snackbar } from '@mui/material';

export default function FavoriteMovies() {
    const dispatch = useDispatch()
    const [open, setOpen] = useState<boolean>(false)

    const favoriteMovies = useSelector((state: RootState) => state.movie.favorites);
    const handleFavoriteClick = (id:number) => {
        dispatch(deleteMovieFromFavorite(id))
        setOpen(true)
    }
    const handleClose = (_e: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };
  

    return (

        <div>
            <Header />
            <h1>Favori Filmlerim</h1>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>

                {favoriteMovies.length === 0 && <p>Favori film yok.</p>}

                {favoriteMovies.map(movie => (
                    <div key={movie.id} style={{
                        border: "1px solid #ddd",
                        margin: 10,
                        padding: 10,
                        width: "350px",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} style={{ width: "100%", borderRadius: 8 }} />
                        <h3>{movie.original_title}</h3>
                        <p style={{ flexGrow: 1 }}>{movie.overview}</p>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p>Puan: {movie.vote_average}</p>
                            <Button onClick={() => {
                                 handleFavoriteClick(movie.id)
                            }} variant="outlined" color="error">Kaldır</Button>
                            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                                <Alert onClose={handleClose} severity='error' variant='filled' sx={{ width: "100%" }}>
                                     Favorilerden Kaldırıldı
                                </Alert>
                            </Snackbar>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
