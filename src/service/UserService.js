import axios from '../axios/axios';

let loggedInUser = null; // User Object

const UserService = {

    getLoggedInUser: () => {
        return loggedInUser;
    },

    setLoggedInUser: (user) => {
        loggedInUser = user;
    },

    followUser: (username2) => {
        return axios.put(`/users/${loggedInUser.username}/follow/${username2}`, {});
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
        return axios.post(`/register`, {
            "username": username,
            "password": password,
            "repeatPassword": repeatPassword,
            "email": email,
            "birthday": birthday
        });
    },
    login: (username, password) => {
        return axios.post('/login', {
            "username": username,
            "password": password,
            // "repeatPassword": '',
            // "email": '',
            // "birthday": ''
        });
        // return axios.post('/login', {
        //     params: {
        //         "username": username,
        //         "password": password
        //     }
        // });
    },


};

export default UserService;
