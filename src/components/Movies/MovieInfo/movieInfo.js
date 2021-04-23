import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";
import ApiService from "../../../service/apiService";
import axios from "axios";

const yt="https://www.youtube.com/watch?v="
const IMAGE_API="https://image.tmdb.org/t/p/original";
class MovieInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movie:{}
        }


    }
    componentDidMount(){
        GoldenLadderService.getMovie(this.props.match.params.id)
            .then(data => this.setState({movie:data.data}))
            .catch(error => console.log("Error : " + error));

    }
    async imdbIdFind(imdb_id) {
        // fetch data from a url endpoint
        const response = await ApiService.findAll(imdb_id);
        const data = await response.json();

        return data.movie_results;
    }
    async getTrailer(imdb_id){

        const idTmdb= await this.imdbIdFind(imdb_id).id;
        const response = await ApiService.getVideo(idTmdb);
        const data=await response.json();
        const link =data.results.filter((video)=>video.type.equals("Trailer") && video.site.equals("YouTube"))[0];
        return yt+link.key;

    }

    render() {
        const ratingChanged = (newRating) => {
            GoldenLadderService.rateMovie(movie.id,newRating)
                .then(() => {
                   // NotificationService.success('Success!', 'Movie is rated!');
                    // redirect to login
                    window.location.pathname = "/movies"
                })
            // console.log(newRating);
        };

        const {movie} = this.state;
        if(movie==null){
            return <div>Hi</div>;
        }
        return (
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-auto d-none d-lg-block">
                    <img src={IMAGE_API+this.imdbIdFind(movie.id).poster_path}/>
                </div>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-weight-bold">{movie.originalTitle}  </h1>
                    <h3>{movie.startYear}</h3>
                    <p className="lead my-3">{movie.genres}</p>
                    <p className="lead my-3">runTime: {movie.runTimeMinutes}</p>
                    <p className="lead my-3">{this.imdbIdFind(movie.id).original_language}</p>

                    <div className="list-group">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />

                        <button type="button" className="btn btn-primary btn-circle btn-sm">WatchList</button>
                        <a className="btn btn-warning" href={this.getTrailer(movie.id)} >
                            Play Trailer
                        </a>
                    </div>
                </div>
            </div>

        );
    }

}
export default MovieInfo;