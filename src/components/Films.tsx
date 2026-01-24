import { Button } from '@mui/material';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import '../App.css'

function Films({ movie }: any) {
    const resimYolu = "https://image.tmdb.org/t/p/w1280";
    const { adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, relase_date, title, video, vote_average, vote_count } = movie
    
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{
                width: "300px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                overflow: "auto",
                margin: "15px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                height: "450px",
                
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
                        vote_average >= 7.5 ? <FaStar />:  vote_average <5.5  ? <FaRegStar/> : <FaStarHalf/>
                  }</p>
                </div>
                <Button variant='outlined'>Favoriye Ekle</Button>
                
            </div>
        </div>
    )
}

export default Films