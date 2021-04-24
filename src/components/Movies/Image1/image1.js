import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../../service/apiService";
import {Card,CardGroup} from 'react-bootstrap';

const IMAGE_API="https://image.tmdb.org/t/p/w500";


const CardImage = (props) => {

    const [path, setPath] = useState([]);

    useEffect(() => {
        imdbIdFind();
    }, []);

    async function imdbIdFind() {
        console.log(props.movie);
        var result = await ApiService.findAll(props.movie.movieId);
        console.log(result);
        // console.log(result.data);
        // console.log(result.data.movie_results[0]);
        setPath(result.data.movie_results[0].poster_path);
    }

    return (<img  src={IMAGE_API + path} />)
}
export default CardImage;


