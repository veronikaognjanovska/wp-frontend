import React, {Component} from 'react';
import UserService from "../../service/UserService";
import '../App/App.css';
import NotificationService from "../../service/NotificationService";
import './login.css';

class Logout extends Component {

    onLogout = () => {
        let message = '';
        try {
            UserService.setLoggedInUser(null);
            UserService.logout();
            message = 'User is logged out!';
            NotificationService.success('Success!', message);
        } catch (e) {
            message = 'User can not log out';
            NotificationService.danger('Error!', message);
        }
        return message;
    };

    render() {
        return (
            <div className={''}>
                <div className={'row m-2 mt-4'}>
                    <div className={'col-sm-12 d-flex justify-content-center'}>
                        <h3>
                            {this.onLogout()}
                        </h3>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
    }

}


export default Logout;