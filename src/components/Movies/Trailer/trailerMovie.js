import React,{useState,useEffect} from 'react';
import ApiService from "../../../service/apiService";
import "bootstrap/dist/css/bootstrap.min.css";
const yt="https://www.youtube.com/watch?v=";


const TrailerMovie = (props) => {

    const [path, setPath] = useState([]);

    useEffect(() => {
        imdbIdFind();
    }, []);

    async function imdbIdFind() {

        var result = await ApiService.findAll(props.movie.movieId);
        console.log(result);
        const id=result.data.movie_results[0].id;
        var link=await ApiService.getVideo(id);
        const trailer =link.results.filter((video)=>video.type.equals("Trailer") && video.site.equals("YouTube"))[0];
        setPath(trailer.key);
    }

    return (<a href={yt + path} className={"btn btn-danger"}>Play Trailer</a>)
}
export default TrailerMovie;


