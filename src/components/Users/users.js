import React, {Component} from 'react';
import logoUser from "../../assets/images/user_logo.png";
import '../App/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import ModalLongFile from "../Modals/modalLongFile";
import UserService from "../../service/UserService";



class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "", //<- should be user
            show: false,
            dataList:['follower1','follower2','follower3','follower4','follower5',
                'follower1','follower2','follower3','follower4','follower5',
                'follower1','follower2','follower3','follower4','follower5',
                'follower1','follower2','follower3','follower4','follower5',
                'follower1','follower2','follower3','follower4','follower5',
                'follower1','follower2','follower3','follower4','follower5']
        }
    }

    showModal = () => {
        this.setState({ show: true });
        console.log("ooooo"+this.state.show)
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    getFollowers = () => {
        // this.setState({ dataList: this.state.data.following });
        this.showModal();
    }
    getFollowing = () => {
        // this.setState({ dataList: this.state.data.following });
        this.showModal();
    }
    getFavorites = () => {
        // this.setState({ dataList: this.state.data.following });
        this.showModal();
    }
    getWatchList = () => {
        // this.setState({ dataList: this.state.data.following });
        this.showModal();
    }

    render() {
        return (
            <div style={{backgroundColor:'white'}}>
                <div className={'row m-2'}>
                    <div className={'col-sm-12 d-flex justify-content-center'} >
                       <h3>Edit Profile</h3>
                    </div>
                </div>
                <hr/>
                <div className={'row m-2 position-relative'}>
                    <div className={'mt-2 position-absolute'} style={{right: "0",top:"0"}}>
                        <button type={"button"} className={'btn btn-focus-none'}>
                            <FontAwesomeIcon icon={faEdit} style={{fontSize: "20px",color:"green"}}/>
                        </button>
                    </div>
                    <div className={'col-sm-2 mt-2 mb-2'} >
                        <img src={logoUser} width={100} height={100}/>
                    </div>
                    <div className={'col-sm-8'} >
                        <div className={'row m-2'}>
                            <div className={'col-sm-12'} >
                                <h6>Username: GET Username </h6>
                            </div>
                        </div>
                        <div className={'row m-2'}>
                            <div className={'col-sm-12'} >
                                <h6>Email: GET Email </h6>
                            </div>
                        </div>
                        <div className={'row m-2'}>
                            <div className={'col-sm-12'} >
                                <h6>Birthday: GET Birthday as string(dd-mm-yyyy) </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={'row m-2 text-style'}>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <button type={"button"} className={'btn btn-focus-none btn-style'}
                                onClick={this.getFollowers} >FOLLOWERS</button>
                    </div>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <button type={"button"} className={'btn btn-focus-none btn-style'}
                                onClick={this.getFollowing} >FOLLOWING</button>
                    </div>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <button type={"button"} className={'btn btn-focus-none btn-style'}
                                onClick={this.getFavorites} >FAVORITES</button>
                    </div>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <button type={"button"} className={'btn btn-focus-none btn-style'}
                                onClick={this.getWatchList} >WATCH LIST</button>
                    </div>
                </div>
                <div className={'row m-2'} style={{backgroundColor:'blue'}}>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <ModalLongFile show={this.state.show} handleClose={this.hideModal}
                                       dataList={this.state.dataList}>
                        </ModalLongFile>
                    </div>

                </div>
            </div>


        );
    }

    componentDidMount() {
       // this.loadUser();
    }

    loadUser = () => {
        UserService.fetchUser()
            .then((data) => {
                this.setState({
                    data: data.data
                })
                console.log("--------------------------")
                console.log(this.state.data)
                console.log("--------------------------")
            });
    }
}




// const container = document.createElement('div');
// document.body.appendChild(container);
// ReactDOM.render(<App />, container);

export default Users;