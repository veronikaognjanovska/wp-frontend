import React,{useState,useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";
import Image from "../Image1/image1";
//import Trailer from "../Trailer/trailerMovie"
import Actor from "../../Actors/ActorTerm/actorTerm"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App/App.css";
import {render} from "@testing-library/react";


class MovieInfo extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            movie:{},
            faved:false,
            watchlist:false
        }
    }

    componentDidMount() {
        this.loadMovie(this.props.match.params.id);
    }

    async  loadMovie(id)
    {
        var result = await GoldenLadderService.getMovie(id);

        this.setState({
            movie: result.data
        })

    }


     settings={
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay:true


    }

     ratingChanged = (newRating) => {
            GoldenLadderService.rateMovie(this.props.match.params.id, newRating)

            .then(() => {
                // NotificationService.success('Success!', 'Movie is rated!');
                // redirect to login
                window.location.pathname = "/movies"
            })
            }

     addWatchList =() => {
        GoldenLadderService.addToWatchList(this.props.match.params.id)
            .then(() => {
                // NotificationService.success('Success!', 'Movie is rated!');
                // redirect to login
                // window.location.pathname = "/movies"
                this.setState({
                    watchlist:true
                })
            })
    }

    removeWatchlist=()=>{
        GoldenLadderService.deleteFromWatchList(this.props.match.params.id)
            .then(() => {
                // NotificationService.success('Success!', 'Movie is rated!');
                // redirect to login
                // window.location.pathname = "/movies"
                this.setState({
                    watchlist:false
                })
            })
    }

     addFavorites = () => {
        GoldenLadderService.addToFavorites(this.props.match.params.id)
            .then(() => {
                // NotificationService.success('Success!', 'Movie is rated!');
                // redirect to login
                // window.location.pathname = "/movies"
                this.setState({
                    faved:true
                })
            })}

     removeFavorites=()=>{
         GoldenLadderService.deleteFromFavorites(this.props.match.params.id)
             .then(() => {
                 // NotificationService.success('Success!', 'Movie is rated!');
                 // redirect to login
                 // window.location.pathname = "/movies"
                 this.setState({
                     faved:false
                 })
             })}


     render(){
         return (
             <div className=" p-3 p-md-5 text-white rounded bg-dark">
                <div className={"row"}>
                    <div className="col-6 d-none d-lg-block">
                     <Image movieId={this.props.match.params.id}/>
                    </div>
        <div className=" col-6  px-0 text-center">
            <h1 className="display-4 font-weight-bold">{this.state.movie.originalTitle}  </h1>
            <p>Date published: {this.state.movie.datePublished}</p>
            <p className="lead my-3">{this.state.movie.genre}</p>
            <p className="lead my-3">Duration: {this.state.movie.duration} minutes</p>
            <p className="lead my-3">{this.state.movie.country}</p>

            Rate the movie:
            <ReactStars classNames={"stars"}
                        count={5}
                        onChange={this.ratingChanged}
                        size={24}
                        activeColor="#ffd700"
            />

            {/*<button type="button" className="btn btn-primary btn-circle btn-sm" onClick={this.addWatchList}>*/}
            {/*    {this.state.watchlist ? "Remove from watchlist" : "Add to watchlist"}*/}
            {/*</button>*/}
            {/*<button type="button" className="btn btn-danger btn-circle btn-sm" onClick={this.addFavorites}>*/}
            {/*    */}
            {/*</button>*/}
            {
                !this.state.watchlist &&
                    <button type={"button"} className={"btn btn-primary btn-circle btn-sm"} onClick={this.addWatchList}>
                        Add to watchlist
                    </button>
            }
            {
                this.state.watchlist &&
                <button type={"button"} className={"btn btn-outline-primary btn-circle btn-sm"} onClick={this.removeWatchlist}>
                    Remove from watchlist
                </button>
            }
            {
                !this.state.faved &&
                <button type={"button"} className={"btn btn-warning btn-circle btn-sm"} onClick={this.addFavorites}>
                    Add to favorites
                </button>
            }
            {
                this.state.faved &&
                <button type={"button"} className={"btn btn-outline-warning btn-circle btn-sm"} onClick={this.removeFavorites}>
                    Remove from favorites
                </button>
            }


            <h3>Cast & Crew</h3>

            {this.state.movie && this.state.movie.actorMovies &&  this.state.movie.actorMovies.map((actor,index)=>{
                return(
                    <div>
                        <Actor actor={actor}/>
                    </div>
                );
            })}
        </div>
    </div>
</div>


);
}




}
export default MovieInfo;




