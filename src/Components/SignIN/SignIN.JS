import React, { Component } from 'react';
import "../LoginPage/LoginPage.css"
class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="loginpage__text" type="text" placeholder="Phone number, username, or email" />
                <input className="loginpage__text" type="text" placeholder="Password" />
                <button className="login__button" type="submit" >Login</button>
            </div>
        );
    }
}

export default SignIN;
// onChange={(event) => { this.state.emailId = event.currentTarget.value }}
// onChange={(event) => { this.state.password = event.currentTarget.value }}
// onClick={this.login}