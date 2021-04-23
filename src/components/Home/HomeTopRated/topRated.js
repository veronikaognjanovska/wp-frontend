// import React,{useState,useEffect} from 'react';
// import {Link} from 'react-router-dom';
// // import ApiService from "../../service/apiService";
// import {Card, CardGroup} from 'react-bootstrap';
// import ApiService from "../../../service/apiService";
//
//
// const IMAGE_API="https://image.tmdb.org/t/p/original/";
// const topRated =(props)=> {
//
//      function imdbIdFind(imdb_id) {
//         // fetch data from a url endpoint
//         var result;
//         const response =  ApiService.findAll(imdb_id)
//             .then(data=>{
//                 console.log(data);
//                 result=data.data.movie_results.poster_path;
//                 console.log(result);
//             })
//          return result;
//         // const data = await response.json;
//         // console.log(response);
//         // return response.movie_results.poster_path;
//     }
//
//     return (
//         <CardGroup>
//             { props.topRatedMovies.map((movie, index) => {
//             return (
//                 <Card style={{width: '18rem'}}>
//                     {/*<Card.Img variant="top" src={IMAGE_API + imdbIdFind(movie.movieId)}/>*/}
//                     <Card.Body>
//                         <Card.Title>{movie.title}</Card.Title>
//                     </Card.Body>
//                 </Card>
//             )
//         })}
//         </CardGroup>
//
//     )
// }
// export default  topRated;