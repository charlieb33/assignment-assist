import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

// import decode from "jwt-decode";

import Course from "./components/common/Course";
import CourseCreate from "./components/CourseCreate";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import LogIn from "./components/LogIn";
import Register from "./components/Register";

import {
  readAllCourses,
  createCourse,
  updateCourse,
  destroyCourse,
  logInUser,
  registerUser,
  verifyUser,
  updateAssignment,
} from "./services/api-helper";

import "./styles/App.css";

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

  getCourses = async () => {
    const courses = await readAllCourses();
    this.setState({
      courses
    });
  };

  newCourse = async (event) => {
    event.preventDefault();
    const course = await createCourse(this.state.courseForm);
    this.setState(prevState => ({
      courses: [...prevState.courses, course],
      courseForm: {
        name: "",
        description: ""
      }
    }));
    this.props.history.push("/");
  };

  editCourse = async () => {
    const { courseForm } = this.state;
    await updateCourse(courseForm.id, courseForm);
    this.setState(prevState => ({
      courses: prevState.courses.map(course =>
        course.id === courseForm.id ? courseForm : course
      )
    }));
  };

  deleteCourse = async (course_id) => {
    await destroyCourse(course_id);
    this.setState(prevState => ({
      courses: prevState.courses.filter(
        course => course.course_id !== course_id)
    })
    );
    this.props.history.push("/");
  };

  handleCourseFormChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      courseForm: {
        ...prevState.courseForm,
        [name]: value
      }
    }));
  };

  mountEditForm = async (course_id) => {
    const courses = await readAllCourses()
    const course = courses.find(el => el.id === parseInt(course_id))
    this.setState({
      courses,
      courseForm: course
    })
  };

  handleLogIn = async () => {
    const userData = await logInUser(this.state.authFormData);
    this.setState({
      currentUser: userData,
    });
    localStorage.setItem("jwt", userData.token);
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
    this.props.history.push("/");
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
                getCourses={this.getCourses}
                courses={this.state.courses}
                courseForm={this.state.courseForm}
                currentUser={this.state.currentUser}
              />
            }
          />
          <Route
            path="/new/course"
            render={() => (
              <CourseCreate
                handleFormChange={this.handleCourseFormChange}
                courseForm={this.state.courseForm}
                newCourse={this.newCourse}
              />
            )}
          />
          <Route
            path="/courses/:course_id"
            render={props => {
              const { course_id } = props.match.params;
              const course = this.state.courses.find(
                el => el.id === parseInt(course_id)
              );
              return (
                <Course
                  course_id={course_id}
                  course={course}
                  currentUser={this.state.currentUser}
                  courseForm={this.state.courseForm}
                  handleFormChange={this.handleCourseFormChange}
                  mountEditForm={this.mountEditForm}
                  editCourse={this.editCourse}
                  deleteCourse={this.deleteCourse}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  };
}

export default withRouter(App);