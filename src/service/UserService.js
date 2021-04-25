import axios from '../axios/axios';
import {StorageService} from './StorageService';


const UserService = {

    followUser: (username2) => {
        return axios.put(`/users/${StorageService.getLoggedInUser()?.username}/follow/${username2}`, {});
    },
    unfollowUser: (username2) => {
        return axios.put(`/users/${StorageService.getLoggedInUser()?.username}/unfollow/${username2}`, {});
    },

    fetchUser: (username) => {
        return axios.get(`/users/${username}`);
    },

    fetchUserFavourites: (username) => {
        return axios.get(`/users/${username}/favourites`);
    },
    fetchUserWatchlist: (username) => {
        return axios.get(`/users/${username}/watchlist`);
    },
    fetchUserFollowers: (username) => {
        return axios.get(`/users/${username}/followers`);
    },
    fetchUserFollowing: (username) => {
        return axios.get(`/users/${username}/following`);
    },

    editUser: (username, email, birthday) => {
        return axios.put(`/users/${username}/edit`, {
            "username": username,
            "password": '',
            "email": email,
            "birthday": birthday
        });
    },

    register: (username, password, repeatPassword, email, birthday) => {
        return axios.post(`/api/auth/register`, {
            "username": username,
            "password": password,
            "repeatPassword": repeatPassword,
            "email": email,
            "birthday": birthday
        });
    },
    login: (username, password) => {
        return axios.post('/api/auth/login', {
            "username": username,
            "password": password
        });
    },


    getLoggedInUser: () => {
        return StorageService.getLoggedInUser()?.username;
    },
    setLoggedInUser: (data) => {
        if (data === null) {
            StorageService.setLoggedInUser(data);
        }
        StorageService.setLoggedInUser(data);
        UserService.getFollowingLoggedIn().then().catch();
    },
    getFollowingLoggedIn: () => {
        const username = StorageService.getLoggedInUser()?.username;
        if (username !== null & username !== undefined) {
            return UserService.fetchUserFollowing(username)
                .then((data) => {
                    let list = data.data.map(item => {
                        return {username: item.username}
                    });
                    StorageService.setUserFollowing(list);
                    return Promise.resolve({username: username, following: list});
                });
        }
        return Promise.resolve('null');
    },


    setLoggedInUserFacebook: () => {
       console.log('user logged in using facebook')
    },

};

export default UserService;
