import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllMovies, } from "../redux/movieSlice"
import type { RootState, AppDispatch } from "../redux/store";
import Films from "./Films";
import LoadSkeleton from '../MUI/LoadSkeleton'
function FilmList() {


    const dispatch = useDispatch<AppDispatch>()
    
    const movies = useSelector((state: RootState) => state.movie.movies)
    const loading = useSelector((state:RootState)=>state.movie.loading)

    useEffect(() => {
        dispatch(getAllMovies(1))
    }, [])
    console.log(movies)
 
    console.log("loading:", loading);
   if(loading){
    return <LoadSkeleton/>
   }
    return (
        
          
        <div style={{
            display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center",
            padding: "20px", backgroundColor: "#f4f4f4", width:"100%"

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