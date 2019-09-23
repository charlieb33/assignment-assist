import React from "react";
import { Redirect } from "react-router-dom";

import "../styles/AuthForm.css";

const LogIn = (props) => {
    return(
        props.currentUser ?
        <Redirect to="/" />
        :
        <div className="auth-container">
            <h2>Log In</h2>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.handleLogIn();
            }}>
                <p>Username:</p>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={props.formData.username}
                    onChange={props.handleChange}
                />
                <p>Password:</p>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={props.formData.password}
                    onChange={props.handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    );
}

export default LogIn;