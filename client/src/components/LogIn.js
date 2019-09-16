import React from "react";
import { Redirect } from "react-router-dom";

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
                <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
                <p>Password:</p>
                <input
                    name="password"
                    type="password"
                    value={props.formData.password}
                    onChange={props.handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    );
}

export default LogIn;