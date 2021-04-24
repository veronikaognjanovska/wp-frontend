import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../service/apiService";
import UpComing from "./HomeUpcoming/upComing"
import Popular from "./PopularMovies/popularMovies1"
import MovieList from "./MovieList/movieList"
import GoldenLadderService from "../../service/GoldenLadderService";
import ComedyMovies from "../Movies/ComedyMovies/comedyMovies"
class Movies extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            comedy:[],
            movieList:[]

        }
    }
    componentDidMount() {
        this.loadPopularMovies();
    }

    loadComedyMovies(){
        GoldenLadderService.getMoviesByGenre("Comedy")
            .then(data=>{
                this.setState({
                   comedyMovies: data.data
                });
            })
    }

    render() {
        return(
<div className="container">
            <div className={"row "}>
                <div className={"col-md-12"}>
                    <h3 className={"upcoming-movies"}>Comedy movies</h3>
                </div>
                <div className={"col-md-12"}>
                    <ComedyMovies  comedyMovies={this.state.comedy}/>
                </div>
            </div>
 
</div>

        )}

}
export default Movies;