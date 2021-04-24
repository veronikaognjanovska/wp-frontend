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
            <div>
                <div className={"row mt-4"}>
                <div className={"col"}>
                    <h3 className={"upcoming-movies "}>Popular movies</h3>
                </div>
               </div>

                <div >
                    <PopularMovies  popularMovies={this.state.popularMovies}/>
                </div>

                   <div className={"row mt-4"}>
                <div className={"col"}>
                    <h3 className={"upcoming-movies"}>Newest movies</h3>
                </div>
                   </div>
                <div >
                    <NewestMovies newestMovies={this.state.newestMovies}/>
                </div>

                   <div className={"row mt-4"}>
                       <div className={"col"}>
                    <h3 className={"upcoming-movies"}>Top Rated movies</h3>
                </div>
                   </div>
                <div >
                    <TopRatedMovies  topRatedMovies={this.state.topRatedMovies}/>
                </div>


            </div>
            )}

}
export default Home;