import React, { Component } from "react";
import AssignmentList from "../AssignmentList"
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import {
    createAssignment,
    readAllAssignments,
    readOneAssignment,
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
                dueDate: ""
            },
            course: props.course
        };
    };

    getAssignments = async () => {
        const assignments = await readAllAssignments(this.props.course.id);
        this.setState({
            assignments
        });
    };

    async componentDidMount() {
        await this.getAssignments()
    }

    // componentDidUpdate() {}

    // componentWillUnmount() {}

    render() {
        const { course } = this.props
        return(
            <div className="course-item-container">
                <h1>{course.name}</h1>
                <p>{course.description}</p>
                <h3>Assignments</h3>
                <AssignmentList
                    assignments={this.state.assignments}
                    assignmentForm={this.state.assignmentForm}
                />

            </div>
        );
    };
}

export default Course;