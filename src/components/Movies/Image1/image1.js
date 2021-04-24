import React,{useState,useEffect} from 'react';
import ApiService from "../../../service/apiService";


const IMAGE_API="https://image.tmdb.org/t/p/w500/";


class Image extends React.Component{

    constructor(props) {
        super(props);
        this.props = props;
        this.state={
            movieImage:{}
        }

    }


    componentDidMount() {
        this.imdbIdFind();
    }


     async  imdbIdFind() {
        var result = await ApiService.findAll(this.props.movieId);
        this.setState({movieImage:result.data.movie_results[0].poster_path});
    }


    render() {
        return (<img  src={IMAGE_API + this.state.movieImage} alt={"hello"}/>)
    }


}
export default Image;


