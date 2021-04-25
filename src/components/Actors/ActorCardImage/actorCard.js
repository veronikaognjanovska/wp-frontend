import React, {useEffect, useState} from "react";
import ApiService from "../../../service/apiService";
import {Card} from "react-bootstrap";

const IMAGE_API="https://image.tmdb.org/t/p/w500/";


const ActorCardImage=(props)=>{

    const[path,setPath] = useState({});

    useEffect(()=>{
        findById();
    },{})

    async function findById()
    {
        var result = await ApiService.findAll(props.actorId);
        setPath(result.data.person_results[0].profile_path)
    }

    return (
         <Card.Img  src={IMAGE_API + path} />
    )

}
export default ActorCardImage;