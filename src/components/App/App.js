import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserProfile from "../Users/userProfile";
import Login from "../Login/login";
import Register from "../Login/register";
import Logout from "../Login/logout";

import Home from '../Home/home';
import Header from '../Header/header';

// import ReactNotification from 'react-notifications-component'
// import 'react-notifications-component/dist/theme.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

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
                    <Route path={"/home"} exact render={() =>
                        <Home/>}/>
                    {/*<Route path={"/actors"} exact render={() =>*/}
                    {/*    <Actors/>}/>*/}
                    {/*<Route path={"/directors"} exact render={() =>*/}
                    {/*    <Directors/>}/>*/}
                    {/*<Route path={"/users"} exact render={() =>*/}
                    {/*    <Users/>}/>*/}
                    {/*<Route path={"/movies/:name"} exact render={() =>*/}
                    {/*    <Movie/>}/>*/}
                    {/*<Route exact component={MovieTerm} path="/movies/:name"/>*/}
                    {/*{/<Route exact path={"/movies/:name"} render={props=>/}*/}
                    {/*{/<Movie {...props}/>}/>*!/*/}
                    {/*<Route path={"/tvSeries"} exact render={() =>*/}
                    {/*    <TvSeries/>}/>*/}
                    {/*<Route path={"/movies"} exact render={()=>*/}
                    {/*    <MovieList movies={this.state.movies}/>}/>*/}
                </div>
            </main>
        </Router>

    );
}

export default App;
