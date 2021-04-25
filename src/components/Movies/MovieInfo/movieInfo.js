import React from 'react';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";
import Image from "../Image1/image1";
//import Trailer from "../Trailer/trailerMovie"
import Actor from "../../Actors/ActorTerm/actorTerm"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App/App.css";
import NotificationService from "../../../service/NotificationService";
import UserService from "../../../service/UserService";

class MovieInfo extends React.Component {

    settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    }

    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            userName: {},
            loggedInWatchlist: [],
            loggedInFavorites: [],
            rate: 0
        }
    }

    getLoggedInUser = () => {
        UserService.getFavoritesForLoggedInUser()
            .then((data) => {
                this.setState({
                    userName: data.username,
                    loggedInFavorites: data.favorites
                });
            })
            .catch(() => {
                // no user
            });
        UserService.getWatchlistForLoggedInUser()
            .then((data) => {
                this.setState({
                    userName: data.username,
                    loggedInWatchlist: data.watchlist
                });
            })
            .catch(() => {
                // no user
            });
        UserService.getRatingForLoggedInUser(this.props.match.params.id)
            .then((data) => {
                this.setState({
                    userName: data.username,
                    rate: data.rate
                });
                console.log(this.state);
            })
            .catch(() => {
                // no user
            });
    }

    isWatchList = () => {
        for (let i = 0; i < this.state.loggedInWatchlist?.length; i++) {
            if (this.state.loggedInWatchlist[i].movieId === this.state.movie.movieId) {
                return true;
            }
        }
        return false;
    }

    isFavorites = () => {
        for (let i = 0; i < this.state.loggedInFavorites?.length; i++) {
            if (this.state.loggedInFavorites[i].movieId === this.state.movie.movieId) {
                return true;
            }
        }
        return false;
    }

    componentDidMount() {
        this.loadMovie(this.props.match.params.id);
        this.getLoggedInUser();
    }

    async loadMovie(id) {
        var result = await GoldenLadderService.getMovie(id);
        this.setState({
            movie: result.data
        })
    }

    ratingChanged = (newRating) => {
        GoldenLadderService.rateMovie(this.props.match.params.id, newRating)
            .then(() => {
                NotificationService.success('Success!', 'Movie was rated!');
                this.setState({
                    rate: newRating
                })
            })
    }

    addWatchList = () => {
        GoldenLadderService.addToWatchList(this.props.match.params.id)
            .then(() => {
                NotificationService.success('Success!', 'Movie is added to watchlist!');
                this.componentDidMount();
            })
    }

    removeWatchlist = () => {
        GoldenLadderService.deleteFromWatchList(this.props.match.params.id)
            .then(() => {
                NotificationService.success('Success!', 'Movie is removed from watchlist!');
                this.componentDidMount();
            })
    }

    addFavorites = () => {
        GoldenLadderService.addToFavorites(this.props.match.params.id)
            .then(() => {
                NotificationService.success('Success!', 'Movie is added to favorites!');
                this.componentDidMount();
            })
    }

    removeFavorites = () => {
        GoldenLadderService.deleteFromFavorites(this.props.match.params.id)
            .then(() => {
                NotificationService.success('Success!', 'Movie is removed from the favorite set');
                this.componentDidMount();
            })
    }


    render() {
        return (
            <div className=" p-3 p-md-5 text-white rounded bg-dark">
                <div className={"row"}>
                    <div className="col-6 d-none d-lg-block">
                        <Image movieId={this.props.match.params.id}/>
                    </div>
                    <div className=" col-6  px-0 text-center">
                        <h1 className="display-4 font-weight-bold">{this.state.movie.originalTitle}  </h1>
                        <p>Date published: {this.state.movie.datePublished}</p>
                        <p className="lead my-3">{this.state.movie.genre}</p>
                        <p className="lead my-3">Duration: {this.state.movie.duration} minutes</p>
                        <p className="lead my-3">{this.state.movie.country}</p>

                        {
                            this.state.userName !== undefined &&
                            <div>
                                <h4>Rate now</h4>
                                <ReactStars classNames={"stars"}
                                            count={5}
                                            onChange={this.ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={this.state.rate}
                                />
                            </div>
                        }

                        {
                            this.state.userName !== undefined
                            && !this.isWatchList() &&
                            <button type={"button"} className={"btn btn-primary btn-circle btn-sm"}
                                    onClick={this.addWatchList}>
                                Add to watchlist
                            </button>
                        }
                        {
                            this.state.userName !== undefined
                            && this.isWatchList() &&
                            <button type={"button"} className={"btn btn-outline-primary btn-circle btn-sm"}
                                    onClick={this.removeWatchlist}>
                                Remove from watchlist
                            </button>
                        }
                        {
                            this.state.userName !== undefined
                            && !this.isFavorites() &&
                            <button type={"button"} className={"btn btn-warning btn-circle btn-sm"}
                                    onClick={this.addFavorites}>
                                Add to favorites
                            </button>

                        }
                        {
                            this.state.userName !== undefined
                            && this.isFavorites() &&
                            <button type={"button"} className={"btn btn-outline-warning btn-circle btn-sm"}
                                    onClick={this.removeFavorites}>
                                Remove from favorites
                            </button>
                        }
                        <h3>Cast & Crew</h3>
                        {this.state.movie && this.state.movie.actorMovies && this.state.movie.actorMovies.map((actor, index) => {
                            return (
                                <div>
                                    <Actor actor={actor}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieInfo;




