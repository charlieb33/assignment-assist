import React, { Component } from "react";
import CourseList from "./CourseList";
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';

import "../styles/Home.css";

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCourses();
        // const checkUser = localStorage.getItem("jwt");
        // if (checkUser) {
        //     const user = decode(checkUser);
        //     this.setState({
        //         currentUser: user,
        //     })
        // }
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="home-container">
                { this.props.currentUser ?
                    <div className="courses-container">
                        <h2>Courses</h2>
                        <CourseList
                            courses={this.props.courses}
                            courseForm={this.props.courseForm}
                        />
                    </div>
                    :
                    <div className="about-the-app">
                        <h2>About the App</h2>
                        <p>
                            A new and convenient way to keep track of your courses and assignments.
                            Simply log in or register to begin. Once you are signed in, you will be
                            able to access information on any courses you have, or you can add courses
                            to the list. By clicking on a course, you will be able to see their name,
                            a description on it, a list of assignments for that course, and the options
                            to edit or delete that course or add a new assignment for it. Clicking on an
                            assignment in the list will allow you to see its name, description, and due date,
                            and allow access to editing or deleting that assignment.
                        </p>
                    </div>
                }
            </div>
        );
    };
};

export default Home;