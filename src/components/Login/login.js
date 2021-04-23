import React, {Component} from 'react';
import UserService from "../../service/UserService";
import '../App/App.css';
import NotificationService from "../../service/NotificationService";
import './login.css';
import axios from "axios";

class Login extends Component {

    constructor() {
        super();
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;

        if(this.validate(username,password)){
            this.onLogin(username,password);
        }else{
            NotificationService.danger('Error!', 'Please enter valid information!');
        }
    }

    onLogin = (username,password) => {
        // UserService.login(username,password)
        //     .then((data) => {
        //         NotificationService.success('Success!', 'User is logged in!');
        //         // redirect to home
        //         console.log(data)
        //         // data shoud be {user, following}
        //         // UserService.setLoggedInUser(data);
        //         // to do: set user
        //        // window.location.pathname = "/home"
        //     })
        //     .catch(function() {
        //         NotificationService.danger('Error!', 'User can not log in');
        //     });
        const endpoint = "http://localhost:8080/login";


        const user_object = {
            username: username,
            password: password
        };
        // OPTIONS /api/posts HTTP/1.1
        // Origin: http://localhost:1111
        //     Access-Control-Request-Method: DELETE
        // Access-Control-Request-Headers: Shady-Status
        let p  = axios.options(endpoint,{headers:{
               "Origin": "http://localhost:3000",
                'Access-Control-Request-Method': 'POST'
        // Access-Control-Request-Headers: Shady-Status
            }}).then(res => {
            console.log(res)
            // localStorage.setItem("authorization", res.data.token);
            // return this.handleDashboard();
        });
        console.log(p)
    };

    handleDashboard() {
        axios.get("http://localhost:8080/users/ti").then(res => {
        if (res.data === "success") {
            this.props.history.push("/home");
        } else {
            alert("Authentication failure");
        }
    });
}

    validate = (username,password) => {
        if(username==='' || password===''){
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
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               name="password"
                        />
                    </div>
                    <button id="submit" type="submit" className={"btn btn-primary float-right"}
                            >Submit</button>
                </form>



            </div>


        );
    }

    componentDidMount() {
    }

}




export default Login;