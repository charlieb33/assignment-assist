import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header.js";
import Home from "./components/Home.js"
// import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route
          exact path="/"
          render={() => <Home />}
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
}

export default App;
