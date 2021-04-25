// import NotificationService from "./NotificationService";

import {BehaviorSubject} from "rxjs";

const subscriber = new BehaviorSubject(0);

const StorageService = {

    setToken: (token) => {
        if (token) {
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
            // NotificationService.info('token', 'token is set');
        } else {
            localStorage.removeItem('REACT_TOKEN_AUTH');
            // NotificationService.info('token', 'token is removed');
        }
    },

    getToken: () => {
        let token = localStorage.getItem('REACT_TOKEN_AUTH');
        // NotificationService.info('token', 'token get');
        return JSON.parse(token);
    },

    getLoggedInUser: () => {
        return JSON.parse(localStorage.getItem('USER'));
    },

    setLoggedInUser: (user) => {
        if (user === null) {
            localStorage.setItem('USER', null);
            StorageService.setToken(null);
            StorageService.setUserFollowing(null);
            return;
        }
        localStorage.setItem('USER', JSON.stringify({username: user?.username, role: user?.roles}));
        StorageService.setToken(user.accessToken);
        subscriber.next(0); // notify all to reload loggedInUser
    },


    getUserFollowing: () => {
        return JSON.parse(localStorage.getItem('USER_FOLLOWING'));
    },

    setUserFollowing: (list) => {
        localStorage.setItem('USER_FOLLOWING', JSON.stringify(list));
    },


};

export {StorageService, subscriber};