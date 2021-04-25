import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserProfile from "../Users/userProfile";
import Login from "../Login/login";
import Register from "../Login/register";
import Logout from "../Login/logout";
import MovieInfo from "../Movies/MovieInfo/movieInfo"
import Home from '../Home/home';
import Header from '../Header/header';
import Movies from '../Movies/movies'

import ActorInfo from "../Actors/ActorInfo/actorInfo";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


// import ReactNotification from 'react-notifications-component'
// import 'react-notifications-component/dist/theme.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

import MoviesGenre from "../Movies/MoviesGenre/moviesGenre";

function App() {


    return (
        <Router>
            {/*<ReactNotification/>*/}
            <NotificationContainer/>
            <Header/>
            <main className={"main"}>
                <div className={"container"}>
                    <Route path={"/login"} exact render={() =>
                        <Login/>}/>
                    <Route path={"/register"} exact render={() =>
                        <Register/>}/>
                    <Route path={"/logout"} exact render={() =>
                        <Logout/>}/>
                    <Route path={"/users/:username"}
                           children={<UserProfile/>}
                    />
                    <Route path={["/home","/"]} exact render={() =>
                    <Home/>}/>

                    <Route exact path={"/movies/:id"} render={props=>
                    <MovieInfo {...props}/>}/>

                    <Route exact path={"/movies"}  render={()=>
                    <Movies/>}/>

                    <Route  path={"/movies/genre/:genre"} render={props=>
                        <MoviesGenre {...props}/>}/>

                    <Route path={"/actors/:id"} render={props=>
                        <ActorInfo {...props}/>}/>

                </div>
            </main>
        </Router>

    );
}

export default App;
