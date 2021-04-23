import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
// import ApiService from "../../service/apiService";
import {Card} from 'react-bootstrap';

const IMAGE_API="https://image.tmdb.org/t/p/original";
const popularM =(props)=> {


    return (

        props.popularMovies.map((movie, index) => {
            return (
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={IMAGE_API + movie.poster_path}/>
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                    </Card.Body>
                </Card>
            )
        })

    )
}
export default popularM;