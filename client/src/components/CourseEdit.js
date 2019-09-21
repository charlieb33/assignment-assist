import React from "react";
import { withRouter } from "react-router-dom";

const CourseEdit = (props) => {
    return (
        <div className="course-edit-form">
            <h3>Edit Course</h3>
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