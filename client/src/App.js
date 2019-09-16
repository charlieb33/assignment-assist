import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

// import decode from "jwt-decode";

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import LogIn from "./components/LogIn";
import Register from "./components/Register";

import {
  logInUser,
  registerUser,
  verifyUser,
} from "./services/api-helper";

// import "./styles/App.css";

class App extends Component {
  state = {
    currentUser: null,
    authFormData: {
      username: "",
      email: "",
      password: ""
    }
  };

  handleLogIn = async () => {
    const userData = await logInUser(this.state.authFormData);
    this.setState({
      currentUser: userData
    });
    localStorage.setItem("jwt", userData.token)
  };

  handleRegister = async (event) => {
    event.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogIn();
  };

  authHandleChange = async (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  };

  handleLogOut = async () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    });
  };

  render() {
    return (
      <div className="app-container">
        <Header
          currentUser={this.state.currentUser}
          formData={this.authFormData}
          handleLogOut={this.handleLogOut}
        />
        <Switch>
          <Route
            exact path="/login"
            render={() => (
              <LogIn
                currentUser={this.state.currentUser}
                handleLogIn={this.handleLogIn}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route
            exact path="/register"
            render={() => (
              <Register
                currentUser={this.state.currentUser}
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route
            exact path="/"
            render={() =>
              <Home
                currentUser={this.state.currentUser}
              />
            }
          />
          <Route
            path="/new/course"
          />
          <Route
            path="course/:course_id"
          />
        </Switch>
      </div>
    );
  };
}

export default withRouter(App);