import React from "react";
import { withRouter } from "react-router-dom";

import "../styles/CourseEdit.css";

const CourseEdit = (props) => {
    return (
        <div className="course-edit-form">
            <h2>Edit Course</h2>
            <form onSubmit={props.handleSubmit}>
                <p>Course Name:</p>
                <input
                    type="text"
                    name="name"
                    value={props.courseForm.name}
                    onChange={props.handleFormChange}
                />
                <p>Course Description</p>
                <input
                    type="text"
                    name="description"
                    value={props.courseForm.description}
                    onChange={props.handleFormChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default withRouter(CourseEdit);