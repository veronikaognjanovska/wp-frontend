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
    fetchRatingForMovie: (movieId) => {
        return axios.get(`/m/${movieId}/rate`);
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
    logout: () => {
        return axios.post('/api/auth/logout', {
        });
    },

    loginFacebookUser: (username, id) => {
        return axios.post('/api/auth/login/facebook', {
            "username": username,
            "id": id
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


    setLoggedInUserFacebook: (response) => {
        return UserService.loginFacebookUser(response.name,response.id);
        // console.log('user logged in using facebook')
        // console.log(response)
        // return Promise.resolve('{username: username, following: list}');
    },
    getWatchlistForLoggedInUser: () => {
        const username = StorageService.getLoggedInUser()?.username;
        if (username !== null & username !== undefined) {
            return UserService.fetchUserWatchlist(username)
                .then((data) => {
                    let list = data.data.map(item => {
                        return {movieId: item.movieId}
                    });
                    return Promise.resolve({username: username, watchlist: list});
                });
        }
        return Promise.resolve('null');
    },
    getFavoritesForLoggedInUser: () => {
        const username = StorageService.getLoggedInUser()?.username;
        if (username !== null & username !== undefined) {
            return UserService.fetchUserFavourites(username)
                .then((data) => {
                    let list = data.data.map(item => {
                        return {movieId: item.movieId}
                    });
                    return Promise.resolve({username: username, favorites: list});
                });
        }
        return Promise.resolve('null');
    },

    getRatingForLoggedInUser: (movieId) => {
        const username = StorageService.getLoggedInUser()?.username;
        if (username !== null & username !== undefined) {
            return UserService.fetchRatingForMovie(movieId)
                .then((data) => {
                    console.log(data.data.rating);
                    return Promise.resolve({username: username, rate: data.data.rating / 2});

                });
        }
        return Promise.resolve('null');
    }

};

export default UserService;
