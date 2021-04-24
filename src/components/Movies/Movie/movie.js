import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../service/apiService";
import DramaMovies from "../Movies/DramaMovies/dramaMovies"
import ActionMovies from "../Movies/ActionMovies/actionMovie"
import MovieList from "./MovieList/movieList"
import GoldenLadderService from "../../service/GoldenLadderService";
import MovieInfo from "../MovieInfo/movieInfo";
import ComedyMovies from "../Movies/ComedyMovies/comedyMovies"
class Movie extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            movie:{}

        }
    }
    componentDidMount() {
        this.loadMovieInfo();

    }
    loadMovieInfo(){
        GoldenLadderService.getMovie(this.props.match.params.id)
            .then(data => this.setState({movie:data.data} ))
            .catch(error => console.log("Error : " + error));

    }


    render() {
        return(
            <div className="container">


                <div className={"row "}>
                    <div className={"col-md-12"}>
                        <h3 className={"upcoming-movies"}>Movie</h3>
                    </div>
                    <div className={"col-md-12"}>
                        <MovieInfo  movieInfo={this.state.movie}/>
                    </div>
                </div>
                {/*<div className={"row "}>*/}
                {/*    <div className={"col-md-12"}>*/}
                {/*        <h3 className={"upcoming-movies"}>Action movies</h3>*/}
                {/*    </div>*/}
                {/*    <div className={"col-md-12"}>*/}
                {/*        <ActionMovies  actionMovies={this.state.action}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className={"row "}>*/}
                {/*    <div className={"col-md-12"}>*/}
                {/*        <h3 className={"upcoming-movies"}>Drama movies</h3>*/}
                {/*    </div>*/}
                {/*    <div className={"col-md-12"}>*/}
                {/*        <DramaMovies  dramaMovies={this.state.drama}/>*/}
                {/*    </div>*/}
                {/*</div>*/}



            </div>

        )}

}
export default Movie;