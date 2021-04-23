import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
// import ApiService from "../../service/apiService";
import {Card,CardGroup} from 'react-bootstrap';
import ApiService from "../../../service/apiService";
import CardImage from "../Image/image";


const IMAGE_API="https://image.tmdb.org/t/p/original/";

const popular =(props)=> {

    // const [paths, setPath] = useState([]);
    //
    // useEffect(() => {
    //     const getPaths = async ()=> {
    //         const result = await Promise.all(props.popularMovies.map(movie => imdbIdFind(movie.movieId)));
    //
    //         setPath(...result);
    //         console.log(paths);
    //     }
    //     getPaths();
    // }, []);
    //
    // async function imdbIdFind(imdb_id) {
    //     var result = await ApiService.findAll(imdb_id);
    //     return result.data.movie_results[0].poster_path;
    // }
    //

    return (
        <CardGroup>
            {props.popularMovies.map((movie, index) => {
                console.log(movie);
            return (

                <Card style={{width: '18rem'}}>
                    <CardImage variant="top" movie={movie.movieId}/>
                    <Card.Body>

                        <Card.Title>{movie.originalTitle}</Card.Title>
                    </Card.Body>
                </Card>
            )
        })}
        </CardGroup>

    )
}
export default  popular;


             //  console.log(data.data.movie_results[0].poster_path
       // fetch data from a url endpoint
        // var result;
        // const response =  ApiService.findAll(imdb_id)
        //     .then(data=>{
        //         console.log(data);
        //         console.log("ova e data.data "+data.movie_results);
        //         result=data.data.movie_results.poster_path;
        //
        //         console.log(result);
        //     })
        // return result;
        // const data = await response.json;
        // console.log(response);
        // return response.movie_results.poster_path;


