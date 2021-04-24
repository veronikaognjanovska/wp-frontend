import React, {Component} from 'react';
import UserService from "../../service/UserService";
import '../App/App.css';
import NotificationService from "../../service/NotificationService";
import './login.css';

class Login extends Component {

    onFormSubmit = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        if (this.validate(username, password)) {
            this.onLogin(username, password);
        } else {
            NotificationService.danger('Error!', 'Please enter valid information!');
        }
    }

    onLogin = (username, password) => {
        UserService.login(username, password)
            .then((data) => {
                NotificationService.success('Success!', 'User is logged in!');
                // set user
                UserService.setLoggedInUser(data.data);
                // redirect to home
                window.location.pathname = "/home"
            })
            .catch(function () {
                NotificationService.danger('Error!', 'User can not log in');
            });
    };

    validate = (username, password) => {
        if (username === '' || password === '') {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className={'form-login'}>
                <form onSubmit={this.onFormSubmit}>
                    <div className={'row m-2 mt-4'}>
                        <div className={'col-sm-12 d-flex justify-content-center'}>
                            <h3>Login</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                               className="form-control"
                               id="username"
                               name="username"
                               value={'user'}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               name="password"
                               value={'user'}
                        />
                    </div>
                    <button id="submit" type="submit" className={"btn btn-primary float-right"}
                    >Submit
                    </button>
                </form>


            </div>


        );
    }

    componentDidMount() {
    }

}


export default Login;