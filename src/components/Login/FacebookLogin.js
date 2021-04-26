import React, {Component} from 'react';
import NotificationService from "../../service/NotificationService";
import UserService from "../../service/UserService";

class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '1110404679463791',
                cookie: true,
                xfbml: true,
                version: 'v10.0'
            });
            window.FB.AppEvents.logPageView();
        };
    }

    getUserDetails = () => {
        window.FB.login(function (response) {
            if (response.authResponse) {
                window.FB.api('/me', function (response) {
                    // {name: "", id: "id_from_facebook_long"}
                    // set user
                    UserService.setLoggedInUserFacebook(response)
                        .then((data)=>{
                            NotificationService.success('Success!', 'User is logged in!');
                            UserService.setLoggedInUser(data.data);
                            window.location.pathname = "/home"
                        })
                        .catch(()=>{
                            NotificationService.danger('Error!', 'User can not log in!');
                        });
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    }
    checkLoginState = () => {
        window.FB.getLoginStatus(function (response) {
            //statusChangeCallback(response);
        });
    }

    render() {
        return (
            <React.Fragment>
                <button className={'ml-3 btn btn-primary'} onClick={this.getUserDetails}>
                    Login
                </button>
            </React.Fragment>
        )
    }
}

export default FacebookLogin;