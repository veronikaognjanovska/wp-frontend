import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserProfile from "../Users/userProfile";
import Login from "../Login/login";
import Register from "../Login/register";
import MovieInfo from "../Movies/MovieInfo/movieInfo"
import Home from '../Home/home';
import Header from '../Header/header';
import Movies from '../Movies/movies'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import MoviesGenre from "../Movies/MoviesGenre/moviesGenre";

function App() {


    return (
        <Router>
            <ReactNotification/>
            <Header/>
            <main className={"main"}>
                <div className={"container"}>
                    <Route path={"/login"} exact render={() =>
                        <Login/>}/>
                    <Route path={"/register"} exact render={() =>
                        <Register/>}/>
                    <Route path={"/users/:username"}
                           children={<UserProfile/>}
                    />
                    <Route path={["/home","/"]} exact render={() =>
                    <Home/>}/>


                    <Route path={"/movies/:id"} render={props=>
                    <MovieInfo {...props}/>}/>





                    <Route path={"/movies"} exact render={()=>
                    <Movies/>}/>

                    <Route exact path={"/movies/genre/:genre"} render={()=>
                        <MoviesGenre/>}/>




                    {/*<Route path={"/actors"} exact render={() =>*/}
                    {/*    <Actors/>}/>*/}
                    {/*<Route path={"/directors"} exact render={() =>*/}
                    {/*    <Directors/>}/>*/}
                    {/*<Route path={"/users"} exact render={() =>*/}
                    {/*    <Users/>}/>*/}

                    {/*<Route exact component={MovieTerm} path="/movies/:name"/>*/}

                    {/*<Route path={"/tvSeries"} exact render={() =>*/}
                    {/*    <TvSeries/>}/>*/}
                    {/*<Route path={"/movies/:id"} exact render={()=>*/}
                    {/*    <MovieTerm movies={this.state.movies}/>}/>*/}
                </div>
            </main>
        </Router>

    );
}

export default App;
