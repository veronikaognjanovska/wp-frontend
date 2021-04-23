import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../service/apiService";
import UpComing from "./HomeUpcoming/upComing";
import PopularMovies from "./HomePopularMovies/popularMovies"

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            upComing:[],
            popularMovies:[]

        }
    }
    componentDidMount() {

        this.loadUpComing();
        this.loadPopularMovies();
    }

    loadPopularMovies(){
        ApiService.getUpcoming()
            .then(data=>data.json())
            .then(data=>{
                this.setState({
                    popularM: data.results
                });
            })
    }
    loadUpComing(){
        ApiService.getUpcoming()
            .then(data=>data.json())
            .then(data=>{
                this.setState({
                    upComing: data.results
                });
            })
    }
    render() {
            return(

        <div className={"row "}>
            <div className={"col-md-12"}>
                <h3 className={"upcoming-movies"}>Upcoming movies</h3>
            </div>
            <div className={"col-md-12"}>
                <UpComing  upComingMovies={this.state.upComing}/>
            </div>
            <div className={"col-md-12"}>
                <h3 className={"upcoming-movies"}>Popular movies</h3>
            </div>
            <div className={"col-md-12"}>
                <PopularMovies  popularMovies={this.state.popularM}/>
            </div>
        </div>


            )}

}
export default Home;