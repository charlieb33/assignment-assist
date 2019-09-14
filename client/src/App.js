import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import decode from 'jwt-decode';

// import './App.css';

class App extends Component {
  state = {
    courses: [],
    courseForm: {
      name: "",
      description: ""
    },
    currentUser: null,
    authFormData: {
      username: "",
      email: "",
      password: ""
    }
  };

  render() {
    return (
      <div className="app-container">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default withRouter(App);
