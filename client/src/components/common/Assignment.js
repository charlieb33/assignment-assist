import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
    destroyAssignment,
    updateAssignment
} from "../../services/api-helper"

class Assignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    };

    deleteAssignment = async(assignment_id) => {
        await destroyAssignment(assignment_id);
        this.setState(prevState => ({
            assignments: prevState.assignments.filter(
                assignment => assignment.assignment_id !== assignment)
            })
        );
    };

    render() {
        return(
            <div>
                <Route
                    path="course/:course_id/assignment/:assignment_id/edit"
                />
            </div>
        );
    };
};

export default Assignment;