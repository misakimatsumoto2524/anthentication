import React from 'react'
// import AuthService from '../config/AuthService.js'
//import styles from './styles.module.css'

export class Login extends React.Component {

  render() {
    // const { auth } = this.props
    /*function checkLoginState() {
      FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      });
    }*/
    return (
      <div className="container login">
        <div className="jumbotron">
          <div className="row align-items-center justify-contents-center">
            <div className="col">
              <h1>hello!</h1>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <div className="fb-login-button" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="false" scope="public_profile,email"
                onlogin={"checkLoginState();"}>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
