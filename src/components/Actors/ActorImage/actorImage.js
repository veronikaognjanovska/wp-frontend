import React,{useState,useEffect} from 'react';
import ApiService from "../../../service/apiService";


const IMAGE_API="https://image.tmdb.org/t/p/w500/";


class ActorImage extends React.Component{

    constructor(props) {
        super(props);
        this.props = props;
        this.state={
            actorImage:{}
        }

    }


    componentDidMount() {
        this.imdbIdFind();
    }


    async  imdbIdFind() {
        var result = await ApiService.findAll(this.props.movieId);
        this.setState({actorImage:result.data.person_results[0].profile_path});
    }


    render() {
        return (<img  src={IMAGE_API + this.state.actorImage} alt={"hello"}/>)
    }


}
export default ActorImage;


