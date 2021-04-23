import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

import GoldenLadderService from "../../../service/GoldenLadderService";
//import NotificationService from "../../../service/NotificationService";

class MoviesGenre extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: []

        }
    }
    componentDidMount(){
        GoldenLadderService.getMoviesByGenre(this.props.match.params.genre)
            .then(data => this.setState({movie:data.data}))
            .catch(error => console.log("Error : " + error));
    }
    render() {

        const {movie} = this.state;
        if(movie==null){
            return <div>Hi</div>;
        }
        return (
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                {movie.map((term) => {
                    return(
                        <tr>
                            <td>
                                {term.title}
                            </td>
                        </tr>
                    )
                })}
            </div>

        );
    }

}
export default MoviesGenre;