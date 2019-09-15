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

    componentDidMount() {}

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {};
}

export default withRouter(Course);