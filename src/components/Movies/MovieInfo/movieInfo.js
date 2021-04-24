import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";
import ApiService from "../../../service/apiService";
import axios from "axios";
import Image1 from "../Image1/image1";
import Trailer from "../Trailer/trailerMovie"


const yt="https://www.youtube.com/watch?v=";
const IMAGE_API="https://image.tmdb.org/t/p/original";


const movieInfo =(props)=>{



        // const ratingChanged = (newRating) => {
        //     GoldenLadderService.rateMovie(movie.id,newRating)
        //         .then(() => {
        //            // NotificationService.success('Success!', 'Movie is rated!');
        //             // redirect to login
        //             window.location.pathname = "/movies"
        //         })
        //     // console.log(newRating);
        // };


        return (
            props.movieInfo.map((movie, index) => {
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-auto d-none d-lg-block">
                        <Image1 movie={movie}/>
                    </div>
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-weight-bold">{movie.originalTitle}  </h1>
                        <h3>{movie.datePublished}</h3>
                        <p className="lead my-3">{movie.genre}</p>
                        <p className="lead my-3">runTime: {movie.duration}</p>
                        <p className="lead my-3">{movie.language}</p>

                        {/*<div className="list-group">*/}
                        {/*    <ReactStars*/}
                        {/*        count={5}*/}
                        {/*        onChange={ratingChanged}*/}
                        {/*        size={24}*/}
                        {/*        activeColor="#ffd700"*/}
                        {/*    />*/}

                            <button type="button" className="btn btn-primary btn-circle btn-sm">WatchList</button>
                            {/*<Trailer movie={movie}/>*/}
                        {/*</div>*/}
                    </div>
                </div>

            }));



}
export default movieInfo;