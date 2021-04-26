import React from 'react';
import {Link} from 'react-router-dom';
const movieList = (props) => {

    return (
        <div className="container">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">

                    <Link key={1} to={"/movies/genre/Comedy"} className="p-2 text-muted">COMEDY</Link>
                    <Link key={2} to={"/movies/genre/Sci-Fi"} className="p-2 text-muted">SCI-FI</Link>
                    <Link key={3} to={"/movies/genre/Horror"} className="p-2 text-muted">HORROR</Link>
                    <Link key={4} to={"/movies/genre/Romance"} className="p-2 text-muted">ROMANCE</Link>
                    <Link key={5} to={"/movies/genre/Action"} className="p-2 text-muted">ACTION</Link>
                    <Link key={6} to={"/movies/genre/Thriller"} className="p-2 text-muted">THRILLER</Link>
                    <Link key={7} to={"/movies/genre/Drama"}   className="p-2 text-muted">DRAMA</Link>
                    <Link key={8} to={"/movies/genre/Mystery"} className="p-2 text-muted">MYSTERY</Link>
                    <Link key={9} to={"/movies/genre/Crime"}   className="p-2 text-muted">CRIME</Link>
                    <Link key={10} to={"/movies/genre/Animation"} className="p-2 text-muted">ANIMATION</Link>
                    <Link key={11} to={"/movies/genre/Adventure"} className="p-2 text-muted">ADVENTURE</Link>
                    <Link key={12} to={"/movies/genre/Fantasy"} className="p-2 text-muted">FANTASY</Link>

                </nav>
            </div>

        </div>

)
}

export default movieList;