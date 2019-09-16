import React from "react";
import { Redirect } from "react-router-dom";

const Register = (props) => {
    return(
        props.currentUser ?
        <Redirect to="/" />
        :
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={props.handleRegister}>
                <p>Username:</p>
                <input
                    name="username"
                    type="text"
                    value={props.formData.username}
                    onChange={props.handleChange}
                />
                <p>Email:</p>
                <input
                    name="email"
                    type="text"
                    value={props.formData.email}
                    onChange={props.handleChange}
                />
                <p>Password:</p>
                <input
                    name="password"
                    type="password"
                    value={props.formData.password}
                    onChange={props.handleChange}
                />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;