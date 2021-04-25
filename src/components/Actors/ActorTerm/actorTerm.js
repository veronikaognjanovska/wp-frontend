import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {Card, Col} from "react-bootstrap";
import ActorCardImage from "../ActorCardImage/actorCard"
import "../../App/App.css"
import GoldenLadderService from "../../../service/GoldenLadderService";

const ActorTerm = (props)=>{




    const[actor,setActor]=useState([]);

    useEffect(()=>{
         console.log(props)
        loadActor(props.actor.pk.actorId);
    },[]);

    async function loadActor(id)
    {
        var result = await GoldenLadderService.getActor(id);
        setActor(result.data);
    }

    return(

        // <Col className="cardimage">
        //     <h1 style={{color:"red"}}>{actor.name}</h1>
        //     <Link to={`/actors/${props.actorId}`}>
        //         <Card >
        //
        //             {/*<ActorCardImage className={"image__img " } variant="top"  actorId={actorId}/>*/}
        //             <Card.Body  >
        //                 <Card.Title>
        //                     {/*<h3>Position: {category}</h3>*/}
        //                     <h1>Name: {actor.name}</h1>
        //                 </Card.Title>
        //             </Card.Body>
        //         </Card>
        //     </Link>
        // </Col>
        <h1>{actor.name} {actor.actorId}</h1>

    )

}
export default ActorTerm;