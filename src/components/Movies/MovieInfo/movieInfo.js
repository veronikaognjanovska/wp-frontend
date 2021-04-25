import React,{useState,useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";
import Image from "../Image1/image1";
//import Trailer from "../Trailer/trailerMovie"
import Actor from "../../Actors/ActorTerm/actorTerm"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../App/App.css";


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

    const addWatchList =() => {
        GoldenLadderService.addToWatchList(props.match.params.id)
            .then(() => {
                // NotificationService.success('Success!', 'Movie is rated!');
                // redirect to login
                window.location.pathname = "/movies"
            })
    }
    const addFavourites = () => {
        GoldenLadderService.addToFavourites(props.match.params.id)
            .then(() => {
                // NotificationService.success('Success!', 'Movie is rated!');
                // redirect to login
                window.location.pathname = "/movies"
            })}

    return (

            <div className=" p-3 p-md-5 text-white rounded bg-dark">
                <div className={"row"}>
                   <div className="col-6 d-none d-lg-block">
                     <Image movieId={props.match.params.id}/>
                   </div>
          <div className=" col-6  px-0 text-center">
                      <h1 className="display-4 font-weight-bold">{movie.originalTitle}  </h1>
                      <p>Date published: {movie.datePublished}</p>
                       <p className="lead my-3">{movie.genre}</p>
                       <p className="lead my-3">Duration: {movie.duration} minutes</p>
                       <p className="lead my-3">{movie.country}</p>

                    Rate the movie:
                    <ReactStars classNames={"stars"}
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <button type="button" className="btn btn-primary btn-circle btn-sm" onClick={addWatchList}>Add to watchlist</button>
                    <button type="button" className="btn btn-danger btn-circle btn-sm" onClick={addFavourites}>Add to favourites</button>
                    {/*<Trailer movieId={props.match.params.id}/>*/}

              <h3>Cast & Crew</h3>
            {/*<Slider {...settings}>*/}
                {movie && movie.actorMovies &&  movie.actorMovies.map((actor,index)=>{
                    return(
                        <div>
                        <Actor actor={actor}/>
                        </div>
                    );
                })}
            {/*</Slider>*/}
            </div>
                </div>
            </div>

    );
}
export default MovieInfo;




