import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../service/apiService";
import UpComing from "./HomeUpcoming/upComing"
import Popular from "./PopularMovies/popularMovies1"
import MovieList from "./MovieList/movieList"

class Movies extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            popular:[],
            movieList:[]

        }
    }
    componentDidMount() {
        this.loadPopularMovies();
    }


    loadPopularMovies(){
        ApiService.getUpcoming()
            .then(data=>data.json())
            .then(data=>{
                this.setState({
                    popular: data.results
                });
            })
    }
    render() {
        return(
<div className="container">
            <div className={"row "}>
                <div className={"col-md-12"}>
                    <h3 className={"upcoming-movies"}>Popular movies</h3>
                </div>
                <div className={"col-md-12"}>
                    <Popular  popularMovies={this.state.popular}/>
                </div>
            </div>
    <div className="row">
        <MovieList movieList={this.state.movieList}/>
    </div>
</div>

        )}

}
export default Movies;