import React from 'react';
import ActorImage from "../ActorImage/actorImage";
import GoldenLadderService from "../../../service/GoldenLadderService";


const IMAGE_API="https://image.tmdb.org/t/p/original";
class ActorInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            actor:{}
        }


    }
    componentDidMount(){
        GoldenLadderService.getSerie(this.props.match.params.id)
            .then(data => this.setState({actor:data.data}))
            .catch(error => console.log("Error : " + error));

    }



    render() {


        const {actor} = this.state;
        if(actor==null){
            return <div>Hi</div>;
        }
        return (
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-auto d-none d-lg-block">
                    <ActorImage actorId={this.props.match.params.id}/>
                </div>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-weight-bold">{actor.name}  </h1>
                    <h3>{actor.date_of_birth}</h3>
                    <p className="lead my-3">{actor.biography}</p>
                    </div>
                </div>


        );
    }

}
export default ActorInfo;