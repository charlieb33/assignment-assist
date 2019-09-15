import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import {
    createAssignment,
    readAllAssignments,
    readOneAssignment,
    destroyCourse,
    updateCourse
} from "../../services/api-helper";

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            assignments: [],
            assignmentForm: {
                name: "",
                description: "",
                due_date: ""
            }
        };
    };

    getAssignments = async () => {
        const assignments = await readAllAssignments();
        this.setState({
            assignments
        });
    };

    deleteCourse = async (course_id) => {
        await destroyCourse(course_id);
        this.setState(prevState => ({
            courses: prevState.courses.filter(
                course => course.course_id !== course_id)
            })
        );
    };

    componentDidMount() {}

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
        return(
            <div>
                <Route
                    path="course/:course_id/edit"
                />
                <Route
                    path="course/:course_id/new/assignment"
                />
                <Route
                    path="course/:course_id/assignment/:assignment_id"
                />
            </div>
        );
    };
}

export default withRouter(Course);