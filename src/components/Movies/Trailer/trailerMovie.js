import React,{useState,useEffect} from 'react';
import ApiService from "../../../service/apiService";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const yt="https://www.youtube.com/watch?v=";


const TrailerMovie = (props) => {

    const [path, setPath] = useState({});
    const [id,setId]=useState({});
    useEffect(() =>ApiService.findAll(props.movieId)
        .then(response=>{
            setId(response.data.movie_results[0].id);

             return response.data.movie_results[0].id;

        })
        .then(id=>{
            ApiService.getVideo(id);
            console.log();
        })

        .then(response=>{
            console.log(response);
            const trailer =response.results.filter((video)=>video.type.equals("Trailer") && video.site.equals("YouTube"))[0];
            console.log(response);
            setPath(trailer.key);

        }),
     {});



    return (<a href={yt + path} className={"btn btn-danger"}>Play Trailer</a>)
}
export default TrailerMovie;


