import { useParams } from "react-router-dom"
import Header from '../MUI/Header'
import { useSelector } from "react-redux"
import type { RootState,  } from "../redux/store";
import { Button } from "@mui/material";

function Details() {
    const { id } = useParams()
    const movies = useSelector((state: RootState) => state.movie.movies);
    const numberId = Number(id)
    const resimYolu = "https://image.tmdb.org/t/p/w1280";
    
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
                                <div style={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}} >
                                    <h1 style={{color:"lightgrey"}}>{movie.title}</h1>
                                 <h3 style={{color:"white"}}>{movie.overview}</h3>
                                 <h3 style={{color:"white"}}>IMDB:{movie.vote_average}</h3>
                                  <Button style={{width:"350px"}} variant="contained" color="error">Favoriye Ekle</Button>
                                  
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