import React, {Component} from 'react';
import UserService from "../../service/UserService";
import NotificationService from "../../service/NotificationService";
import logoUser from "../../assets/images/user_logo.png";

import '../App/App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import ModalLongFile from "../Modals/modalLongFile";
import ModalEditUser from "../Modals/modalEditUser";


class UserProfile extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: "", //<- should be user
            show: false,
            showEdit: false,
            type: '',
            dataList: [],
            loggedInUserUsername: undefined,
            loggedInUserFollowing: []
        }
    }

    render() {
        return (
            <div style={{backgroundColor: 'white'}}>
                <div className={'row m-2'}>
                    <div className={'col-sm-12 d-flex justify-content-center'}>
                        <h3>Edit Profile</h3>
                    </div>
                </div>
                <hr/>
                <div className={'row m-2 position-relative'}>
                    <div className={'mt-2 position-absolute'} style={{right: "0", top: "0"}}>
                        {
                            // EDIT
                            this.state.loggedInUserUsername !== undefined &&
                            this.state.data.username === this.state.loggedInUserUsername &&
                            <button type={"button"} className={'btn btn-focus-none'}>
                                <FontAwesomeIcon icon={faEdit} style={{fontSize: "20px", color: "green"}}
                                                 onClick={this.editUser}/>
                            </button>
                        }
                        {
                            // FOLLOW
                            this.state.loggedInUserUsername !== undefined &&
                            this.state.data.username !== this.state.loggedInUserUsername &&
                            !this.isFollowed() &&
                            <button type={"button"} className={'btn btn-focus-none'}
                                    style={{fontSize: "20px", color: "green"}}
                                    onClick={this.followUser}>
                                <FontAwesomeIcon icon={faPlusCircle}/> FOLLOW USER
                            </button>
                        }
                        {
                            // UNFOLLOW
                            this.state.loggedInUserUsername !== undefined &&
                            this.state.data.username !== this.state.loggedInUserUsername &&
                            this.isFollowed() &&
                            <button type={"button"} className={'btn btn-focus-none'}
                                    style={{fontSize: "20px", color: "green"}}
                                    onClick={this.unfollowUser}>
                                <FontAwesomeIcon icon={faMinusCircle}/> UNFOLLOW USER
                            </button>
                        }
                    </div>
                    <div className={'col-sm-2 mt-2 mb-2'}>
                        <img src={logoUser} alt="User logo" width={100} height={100}/>
                    </div>
                    <div className={'col-sm-8'}>
                        <div className={'row m-2'}>
                            <div className={'col-sm-12'}>
                                <h6>Username: {this.state.data.username}</h6>
                            </div>
                        </div>
                        <div className={'row m-2'}>
                            <div className={'col-sm-12'}>
                                <h6>Email: {this.state.data.email} </h6>
                            </div>
                        </div>
                        <div className={'row m-2'}>
                            <div className={'col-sm-12'}>
                                <h6>Birthday: {this.state.data.birthday}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={'row m-2 text-style'}>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <button type={"button"} className={'btn btn-focus-none btn-style'}
                                onClick={this.getFollowers}>FOLLOWERS
                        </button>
                    </div>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <button type={"button"} className={'btn btn-focus-none btn-style'}
                                onClick={this.getFollowing}>FOLLOWING
                        </button>
                    </div>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <button type={"button"} className={'btn btn-focus-none btn-style'}
                                onClick={this.getFavorites}>FAVORITES
                        </button>
                    </div>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <button type={"button"} className={'btn btn-focus-none btn-style'}
                                onClick={this.getWatchList}>WATCH LIST
                        </button>
                    </div>
                </div>
                <div className={'row m-2'} style={{backgroundColor: 'blue'}}>
                    <div className={'col-sm-3 d-flex justify-content-center'}>
                        <ModalLongFile show={this.state.show} handleClose={this.hideModal}
                                       dataList={this.state.dataList} type={this.state.type}>
                        </ModalLongFile>
                        <ModalEditUser show={this.state.showEdit} handleClose={this.hideModal}
                                       data={this.state.data} onEdit={this.onEdit}>
                        </ModalEditUser>
                    </div>

                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getLoggedInUser();
        this.loadUser(this.getUrl());
    }

    componentDidUpdate() {
        const username = this.getUrl();
        if (username !== this.state.username) {
            this.loadUser(username);
        }
    }

    getLoggedInUser = () => {
        UserService.getFollowingLoggedIn()
            .then((data) => {
                this.setState({
                    loggedInUserUsername: data.username,
                    loggedInUserFollowing: data.following
                });// {username: item.username}
            })
            .catch(() => {
                // no user
            });
    }

    isFollowed = () => {
        for (let i = 0; i < this.state.loggedInUserFollowing?.length; i++) {
            if (this.state.loggedInUserFollowing[i].username === this.state.username) {
                return true;
            }
        }
        return false;
    }

    getUrl = () => {
        const path = window.location.pathname.toString().split('/');
        const username = path[path.length - 1];
        return username;
    }

    loadUser = (username) => {
        UserService.fetchUser(username)
            .then((data) => {
                this.setUser(data);
            });
    }

    showModal = () => {
        this.setState({show: true});
    }

    hideModal = () => {
        this.setState({show: false, showEdit: false});
    }

    editUser = () => {
        this.setState({showEdit: true});
    }

    onEdit = (username, email, birthday) => {
        UserService.editUser(username, email, birthday)
            .then((data) => {
                this.setUser(data);
                NotificationService.success('Success!', 'User edited successfully!')
            });
    }

    setUser = (data) => {
        const birthdayStirng =
            data.data.birthday.substr(0, 4) + '-' + data.data.birthday.substr(5, 2) + '-' + data.data.birthday.substr(8, 2);
        const user = {
            ...data.data,
            birthday: birthdayStirng
        }
        this.setState({
            data: user,
            username: user.username
        })
    }

    getFollowers = () => {
        UserService.fetchUserFollowers(this.state.username)
            .then((data) => {
                let list = data.data.map(item => {
                    return {id: item.username, text: item.username}
                });
                this.setState({dataList: list, type: 'Followers'});
                this.showModal();
            });
    }
    getFollowing = () => {
        UserService.fetchUserFollowing(this.state.username)
            .then((data) => {
                let list = data.data.map(item => {
                    return {id: item.username, text: item.username}
                });
                this.setState({dataList: list, type: 'Following'});
                this.showModal();
            });
    }
    getFavorites = () => {
        UserService.fetchUserFavourites(this.state.username)
            .then((data) => {
                let list = data.data.map(item => {
                    return {id: item.movieId, text: item.originalTitle}
                });
                this.setState({dataList: list, type: 'Favorites'});
                this.showModal();
            });
    }
    getWatchList = () => {
        UserService.fetchUserWatchlist(this.state.username)
            .then((data) => {
                let list = data.data.map(item => {
                    return {id: item.movieId, text: item.originalTitle}
                });
                this.setState({dataList: list, type: 'Watch List'});
                this.showModal();
            });
    }


    followUser = () => {
        UserService.followUser(this.state.username)
            .then((data) => {
                NotificationService.success('Success!', 'User is followed!');
                this.componentDidMount();
            })
            .catch(function () {
                NotificationService.danger('Error!', 'User can not be followed!');
            });
    }
    unfollowUser = () => {
        UserService.unfollowUser(this.state.username)
            .then((data) => {
                NotificationService.success('Success!', 'User is unfollowed!');
                this.componentDidMount();
            })
            .catch(function () {
                NotificationService.danger('Error!', 'User can not be unfollowed!');
            });
    }

}


export default UserProfile;