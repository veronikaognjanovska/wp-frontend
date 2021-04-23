import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../../service/apiService";
import {Card,CardGroup} from 'react-bootstrap';

const IMAGE_API="https://image.tmdb.org/t/p/original/";

const CardImage = ({movieId, ...props}) => {

    const [path, setPath] = useState([]);

    useEffect(() => {
        imdbIdFind(movieId);
    }, []);

    async function imdbIdFind(movieId) {
        console.log(movieId);
        var result = await ApiService.findAll(movieId);
        console.log(result);
        console.log(result.data);
        console.log(result.data.movie_results[0]);
        setPath(result.data.movie_results[0].poster_path);
    }

    return (<Card.Img src={IMAGE_API + path} {...props}/>)
}
export default CardImage;