import React,{useState,useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
import GoldenLadderService from "../../../service/GoldenLadderService";

//import Trailer from "../Trailer/trailerMovie"
import Actor from "../../Actors/ActorTerm/actorTerm"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ActorImage from "../ActorImage/actorImage";


const ActorInfo = (props)=>{

    const[actor,setActor] = useState([]);

    useEffect(()=>{

        loadActor(props.match.params.id);
    },[])



    async function loadActor(id)
    {
        var result = await GoldenLadderService.getActor(id);
        setActor(result.data);

    }
        return (

            <div className=" p-3 p-md-5 text-white rounded bg-dark">
                <div className={"row"}>
                <div className="col-6 d-none d-lg-block">
                    <ActorImage movieId={props.match.params.id}/>
                </div>
                <div className=" col-6  px-0 text-center">
                    <h1 className="display-4 font-weight-bold">{actor.name}  </h1>
                    <p>Bio: {actor.bio}</p>
                    <p className="lead my-3">Birthday: {actor.birthDate}</p>
                    {actor.deathDate!=null && <p className="lead my-3">Death date: {actor?.deathDate} </p>}

                </div>
                </div>
            </div>

    );
}
export default ActorInfo;




