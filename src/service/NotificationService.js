// import {store} from 'react-notifications-component';
import {NotificationManager} from 'react-notifications';

const NotificationService = {

    info: (title, message) => {
        NotificationManager.info(title,message);
        // return store.addNotification({
        //     title: title,
        //     message: message,
        //     type: "info",
        //     insert: "top",
        //     container: "top-right",
        //     animationIn: ["animate__animated", "animate__fadeIn"],
        //     animationOut: ["animate__animated", "animate__fadeOut"],
        //     dismiss: {
        //         duration: 5000,
        //         onScreen: true
        //     }
        // });
    },

    success: (title, message) => {
        NotificationManager.success(title,message);
        // return store.addNotification({
        //     title: title,
        //     message: message,
        //     type: "success",
        //     insert: "top",
        //     container: "top-right",
        //     animationIn: ["animate__animated", "animate__fadeIn"],
        //     animationOut: ["animate__animated", "animate__fadeOut"],
        //     dismiss: {
        //         duration: 5000,
        //         onScreen: true
        //     }
        // });
    },

    warn: (title, message) => {
        NotificationManager.warning(title,message);
        // return store.addNotification({
        //     title: title,
        //     message: message,
        //     type: "warning",
        //     insert: "top",
        //     container: "top-right",
        //     animationIn: ["animate__animated", "animate__fadeIn"],
        //     animationOut: ["animate__animated", "animate__fadeOut"],
        //     dismiss: {
        //         duration: 5000,
        //         onScreen: true
        //     }
        // });
    },

    danger: (title, message) => {
        NotificationManager.error(title,message);
        // return store.addNotification({
        //     title: title,
        //     message: message,
        //     type: "danger",
        //     insert: "top",
        //     container: "top-right",
        //     animationIn: ["animate__animated", "animate__fadeIn"],
        //     animationOut: ["animate__animated", "animate__fadeOut"],
        //     dismiss: {
        //         duration: 5000,
        //         onScreen: true
        //     }
        // });
    }

};


export default NotificationService;