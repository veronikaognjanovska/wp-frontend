import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";
import ApiService from "../../../service/apiService";
import axios from "axios";

const IMAGE_API="https://image.tmdb.org/t/p/original";
class ActorInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            actor:{}
        }


    }
    componentDidMount(){
        GoldenLadderService.getSerie(this.props.match.params.id)
            .then(data => this.setState({actor:data.data}))
            .catch(error => console.log("Error : " + error));

    }
    async imdbIdFind(imdb_id) {
        // fetch data from a url endpoint
        const response = await ApiService.findAll(imdb_id);
        const data = await response.json();

        return data.person_results;
    }


    render() {


        const {actor} = this.state;
        if(actor==null){
            return <div>Hi</div>;
        }
        return (
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-auto d-none d-lg-block">
                    <img src={IMAGE_API+this.imdbIdFind(actor.id).poster_path}/>
                </div>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-weight-bold">{actor.name}  </h1>
                    <h3>{actor.birthday}</h3>
                    <p className="lead my-3">{actor.biography}</p>
                    
                    </div>
                </div>


        );
    }

}
export default ActorInfo;