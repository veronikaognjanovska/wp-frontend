import React from 'react';
import {Link} from 'react-router-dom';
const movieList = (props) => {

    return (
        <div className="container">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">

                    <Link to={"/movies/genre/Comedy"} className="p-2 text-muted">COMEDY</Link>
                    <Link to={"/movies/genre/Sci-Fi"} className="p-2 text-muted">SCI-FI</Link>
                    <Link to={"/movies/genre/Horror"} className="p-2 text-muted">HORROR</Link>
                    <Link to={"/movies/genre/Romance"} className="p-2 text-muted">ROMANCE</Link>
                    <Link to={"/movies/genre/Action"} className="p-2 text-muted">ACTION</Link>
                    <Link to={"/movies/genre/Thriller"} className="p-2 text-muted">THRILLER</Link>
                    <Link to={"/movies/genre/Drama"}   className="p-2 text-muted">DRAMA</Link>
                    <Link to={"/movies/genre/Mystery"} className="p-2 text-muted">MYSTERY</Link>
                    <Link to={"/movies/genre/Crime"}   className="p-2 text-muted">CRIME</Link>
                    <Link to={"/movies/genre/Animation"} className="p-2 text-muted">ANIMATION</Link>
                    <Link to={"/movies/genre/Adventure"} className="p-2 text-muted">ADVENTURE</Link>
                    <Link to={"/movies/genre/Fantasy"} className="p-2 text-muted">FANTASY</Link>

                </nav>
            </div>

        </div>

)
}

export default movieList;