import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
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
        );
    };
};

export default Home;