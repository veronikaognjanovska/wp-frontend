import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Image1/image1"
import "../../App/App.css"
import GoldenLadderService from "../../../service/GoldenLadderService";
import {Card, Col, Container} from "react-bootstrap";
import CardImage from "../../Home/Image/image";
import MovieInfo from "../MovieInfo/movieInfo";
//import NotificationService from "../../../service/NotificationService";

class MoviesGenre extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: []

        }
    }
    componentDidMount(){
        GoldenLadderService.getMoviesByGenre(this.props.match.params.genre)
            .then(data => this.setState({movie:data.data}))
            .catch(error => console.log("Error : " + error));
    }
    render() {

        var settings={
            dots: false,
            infinite: true,
            speed: 200,
            slidesToShow: 4,
            slidesToScroll:1,
            autoplay:true,


        }
        const {movie} = this.state;
        if(movie==null){
            return <div>Hi</div>;
        }

        return (


        <div>
                {movie.map((term) => {

                    return (

                            <Link to={`/movies/${term.movieId}`}>
                                <div className={"container mm-4 mt-5"}>
                                    <div className={"row"}>
                                        <div className={"table-responsive"}>
                                            <table className={"table  tabela"}>
                                                <thead>
                                                <tr>
                                                    <td className={"text-center"}>{term.originalTitle}</td>
                                                </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>


                            </div>
                            </Link>

                    )

                })}
        </div>

        );
    }




}
export default MoviesGenre;