import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
// import ApiService from "../../service/apiService";
import {Card, CardGroup, Col, Container} from 'react-bootstrap';
import CardImage from "../Image/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../home.css";
import "../../App/App.css"

const IMAGE_API="https://image.tmdb.org/t/p/original/";
const topRated =(props)=> {

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

                {props.topRatedMovies.map((movie, index) => {

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
export default  topRated;