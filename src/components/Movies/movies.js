import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../service/apiService";
import DramaMovies from "../Movies/DramaMovies/dramaMovies"
import ActionMovies from "../Movies/ActionMovies/actionMovie"
import MovieList from "./MovieList/movieList"
import GoldenLadderService from "../../service/GoldenLadderService";
import ComedyMovies from "../Movies/ComedyMovies/comedyMovies"
class Movies extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            comedy:[],
            action:[],
            drama:[],
            movieList:[]

        }
    }
    componentDidMount() {
        this.loadComedyMovies();
        this.loadActionMovies();
        this.loadDramaMovies();
    }
    loadDramaMovies(){
        GoldenLadderService.getMoviesByGenre("Drama")
            .then(data=>{
                this.setState({
                    drama: data.data
                });
            })
    }

    loadComedyMovies(){
        GoldenLadderService.getMoviesByGenre("Comedy")
            .then(data=>{
                this.setState({
                   comedy: data.data
                });
            })
    }
    loadActionMovies(){
        GoldenLadderService.getMoviesByGenre("Action")
            .then(data=>{
                this.setState({
                    action: data.data
                });
            })
    }

    render() {
        return(
<div className="container">

    <div className="row">
        <MovieList movieList={this.state.movieList}/>
    </div>
            <div className={"row "}>
                <div className={"col-md-12"}>
                    <h3 className={"upcoming-movies"}>Comedy movies</h3>
                </div>
                <div className={"col-md-12"}>
                    <ComedyMovies  comedyMovies={this.state.comedy}/>
                </div>
            </div>
    <div className={"row "}>
        <div className={"col-md-12"}>
            <h3 className={"upcoming-movies"}>Action movies</h3>
        </div>
        <div className={"col-md-12"}>
            <ActionMovies  actionMovies={this.state.action}/>
        </div>
    </div>

    <div className={"row "}>
        <div className={"col-md-12"}>
            <h3 className={"upcoming-movies"}>Drama movies</h3>
        </div>
        <div className={"col-md-12"}>
            <DramaMovies  dramaMovies={this.state.drama}/>
        </div>
    </div>



</div>

        )}

}
export default Movies;