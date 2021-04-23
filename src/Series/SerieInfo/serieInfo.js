import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";
import ApiService from "../../../service/apiService";
import axios from "axios";

const yt="https://www.youtube.com/watch?v="
const IMAGE_API="https://image.tmdb.org/t/p/original";
class SerieInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            serie:{}
        }


    }
    componentDidMount(){
        GoldenLadderService.getSerie(this.props.match.params.id)
            .then(data => this.setState({serie:data.data}))
            .catch(error => console.log("Error : " + error));

    }
    async imdbIdFind(imdb_id) {
        // fetch data from a url endpoint
        const response = await ApiService.findAll(imdb_id);
        const data = await response.json();

        return data.tv_results;
    }


    render() {
        const ratingChanged = (newRating) => {
            GoldenLadderService.rateSerie(serie.id,newRating)
                .then(() => {
                    // NotificationService.success('Success!', 'Movie is rated!');
                    // redirect to login
                    window.location.pathname = "/series"
                })
            // console.log(newRating);
        };

        const {serie} = this.state;
        if(serie==null){
            return <div>Hi</div>;
        }
        return (
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-auto d-none d-lg-block">
                    <img src={IMAGE_API+this.imdbIdFind(serie.id).poster_path}/>
                </div>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-weight-bold">{serie.originalTitle}  </h1>
                    <h3>{serie.startYear} - {serie.endYear}</h3>
                    <p className="lead my-3">{serie.genres}</p>
                    <p className="lead my-3">runTime: {serie.runTimeMinutes}</p>
                    <p className="lead my-3">{this.imdbIdFind(serie.id).original_language}</p>

                    <div className="list-group">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />

                        <button type="button" className="btn btn-primary btn-circle btn-sm">WatchList</button>

                    </div>
                </div>
            </div>

        );
    }

}
export default SerieInfo;