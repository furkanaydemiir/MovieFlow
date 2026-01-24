import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllMovies, } from "../redux/movieSlice"
import type { RootState, AppDispatch } from "../redux/store";
import Films from "./Films";

function FilmList() {


    const dispatch = useDispatch<AppDispatch>()

    const movies = useSelector((state: RootState) => state.movie.movies)

    useEffect(() => {
        dispatch(getAllMovies())
    }, [])
    console.log(movies)
    return (
        <div style={{width:"500px,",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",
        padding:"20px",backgroundColor:"#f4f4f4",

        }}>
            {
                movies && movies.map((movie) => (
                    <Films key={movie.id} movie={movie} />
                ))
            }
        </div>
    )
}

export default FilmList