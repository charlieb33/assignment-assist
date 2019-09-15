import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
    createCourse,
    readAllCourses,
    readOneCourse,
    logInUser,
    registerUser,
    verifyUser
} from "../services/api-helper";

class Home extends Component {
    state = {
        courses: [],
        courseForm: {
            name: "",
            description: ""
        },
        currentUser: null
    };

    componentDidMount() {}

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="home-container">
                <div className="about-the-app">
                    <p>A new and convenient way to keep track of your courses and assignments.
                        Simply log in or register to begin. Once you are signed in, you will be
                        able to access information on any courses you have, or you can add courses
                        to the list. By clicking on a course, you will be able to see their name,
                        a description on it, a list of assignments for that course, and the options
                        to edit or delete that course or add a new assignment for it. Clicking on an
                        assignment in the list will allow you to see its name, description, and due date,
                        and allow access to editing or deleting that assignment.
                    </p>
                </div>
                <div className="courses-container">
                    <h2>Courses</h2>
                </div>
            </div>
        );
    };
};

export default Home;