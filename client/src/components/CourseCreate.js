import React from "react";
import { withRouter } from "react-router-dom";

import "../styles/CourseCreate.css"

const CourseCreate = (props) => {
    return (
        <div className="course-create-container">
            <h2>Create a new course</h2>
            <form onSubmit={props.newCourse}>
                <p>Course Name:</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Course Name"
                    value={props.courseForm.name}
                    onChange={props.handleFormChange}
                />
                <p>Course Description</p>
                <input
                    type="text"
                    name="description"
                    placeholder="Course Description"
                    value={props.courseForm.description}
                    onChange={props.handleFormChange}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default withRouter(CourseCreate);