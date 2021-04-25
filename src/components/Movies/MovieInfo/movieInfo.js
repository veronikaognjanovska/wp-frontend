import React,{useState,useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";
import Image from "../Image1/image1";
//import Trailer from "../Trailer/trailerMovie"
import Actor from "../../Actors/ActorTerm/actorTerm"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MovieInfo = (props)=>{

        const[movie,setMovie] = useState([]);

        useEffect(()=>{

            loadMovie(props.match.params.id);
        },[])



    async function loadMovie(id)
    {
        var result = await GoldenLadderService.getMovie(id);

        setMovie(result.data);

    }


    var settings={
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay:true


    }

    const ratingChanged = (newRating) => {

       

        GoldenLadderService.rateMovie(props.match.params.id, newRating)

            .then(() => {
                // NotificationService.success('Success!', 'Movie is rated!');
                // redirect to login
                window.location.pathname = "/movies"
            })


    }

    return (
        <div>
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
            <div className="col-auto d-none d-lg-block">
            <Image movieId={props.match.params.id}/>
            </div>
            <div className="col-md-6 px-0">
                <h1 className="display-4 font-weight-bold">{movie.originalTitle}  </h1>
                <h3>{movie.datePublished}</h3>
                <p className="lead my-3">{movie.genre}</p>
                <p className="lead my-3">{movie.duration} minutes</p>
                <p className="lead my-3">{movie.country}</p>



                <div className="list-group">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />

                    <button type="button" className="btn btn-primary btn-circle btn-sm">WatchList</button>
                    {/*<Trailer movieId={props.match.params.id}/>*/}
                </div>
            </div>
            </div>
        <div className={"row"}>
            <h3>Cast & Crew</h3>
            {/*<Slider {...settings}>*/}
                {movie && movie.actorMovies &&  movie.actorMovies.map((actor,index)=>{
                    return(
                        <Actor actor={actor}/>
                    );
                })}
            {/*</Slider>*/}
        </div>
        </div>
    );
}
export default MovieInfo;




