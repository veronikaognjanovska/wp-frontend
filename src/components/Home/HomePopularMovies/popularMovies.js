import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
// import ApiService from "../../service/apiService";
import {Card,CardGroup,Container,Col} from 'react-bootstrap';
import ApiService from "../../../service/apiService";
import CardImage from "../Image/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../home.css"
import "../../App/App.css"


const IMAGE_API="https://image.tmdb.org/t/p/original/";

const popular =(props)=> {

    var settings={
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay:true,


    }

    return (
        <Container>
        <Slider {...settings}>

            {props.popularMovies.map((movie, index) => {

            return (
                <Col className="cardimage">
                    <Link to={`/movies/${movie.movieId}`}>
                <Card >

                    <CardImage className={"image__img " } variant="top"   movie={movie}/>
                    <Card.Body  >

                        <Card.Title>{movie.originalTitle}</Card.Title>
                        <div  className={"image__overlay image__overlay--primary "}>
                        <div className={"overview"}>Overview: {movie.description}</div>
                        <p className={"vote"}>Avg. rating: {movie.avgVote}</p>
                        </div>
                    </Card.Body>


                </Card>
                    </Link>
                </Col>
            )
        })}

        </Slider>
        </Container>
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


