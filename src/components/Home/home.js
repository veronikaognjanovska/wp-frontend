import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ApiService from "../../service/apiService";
import NewestMovies from "./HomeNewest/newest";
import TopRatedMovies from "./HomeTopRated/topRated"
import PopularMovies from "./HomePopularMovies/popularMovies"
import  GoldenLadderService from "../../service/GoldenLadderService"

class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            newestMovies:[],
            popularMovies:[],
            topRatedMovies:[]

        }
    }
    componentDidMount() {


        this.loadPopularMovies();
        this.loadTopRatedMovies();
        this.loadNewest();
    }

    loadPopularMovies(){
        GoldenLadderService.getPopular()
            .then(data=>{
                this.setState({
                    popularMovies: data.data
                });
            })
    }
    loadTopRatedMovies(){
        GoldenLadderService.getTopRated()
            .then(data=>{
                this.setState(
                    {
                        topRatedMovies: data.data
                    }
                )
            })
    }
    loadNewest(){
        GoldenLadderService.getNewest()
            .then(data=>{
                this.setState({
                    newestMovies:data.data
                })
            })
    }

    render() {
            return(
        <div className="container">
           <div className={"row mt-4"}>
            <div className={"col"}>
                <h3 className={"upcoming-movies"}>Popular movies</h3>
            </div>
            <div className={"col-md-12 mt-5"}>
                <PopularMovies  popularMovies={this.state.popularMovies}/>
            </div>
            {/*   <div className={"row mt-4"}>*/}
            {/*<div className={"col"}>*/}
            {/*    <h3 className={"upcoming-movies"}>Newest movies</h3>*/}
            {/*</div>*/}
            {/*<div className={"col-md-12 mt-5"}>*/}
            {/*    <NewestMovies newestMovies={this.state.newestMovies}/>*/}
            {/*</div>*/}
            {/*   </div>*/}
            {/*   <div className={"row mt-4"}>*/}

            {/*<div className={"col"}>*/}
            {/*    <h3 className={"upcoming-movies"}>TopRated movies</h3>*/}
            {/*</div>*/}
            {/*<div className={"col-md-12 mt-5"}>*/}
            {/*    <TopRatedMovies  topRatedMovies={this.state.topRatedMovies}/>*/}
            {/*</div>*/}
            {/*   </div>*/}
          </div>
        </div>
            )}

}
export default Home;