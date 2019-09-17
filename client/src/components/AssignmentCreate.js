import React from "react";
import { withRouter } from "react-router-dom";

const AssignmentCreate = (props) => {
    return (
        <div className="assignment-create-form">
            <h2>Create a new assignment</h2>
            <form onSubmit={props.newCourse}>
                <p>Assignment Name:</p>
                <input
                    type="text"
                    name="name"
                    value={props.assignmentForm.name}
                    onChange={props.handleAssignmentFormChange}
                />
                <p>Assignment Description:</p>
                <input
                    type="text"
                    name="description"
                    value={props.assignmentForm.description}
                    onChange={props.handleAssignmentFormChange}
                />
                <p>Assignment Due Date:</p>
                <input
                    type="text"
                    name="due date"
                    value={props.assignmentForm.dueDate}
                    onChange={props.handleAssignmentFormChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default withRouter(AssignmentCreate);