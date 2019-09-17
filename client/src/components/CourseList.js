import React, { Component} from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

import { readOneCourse } from "../services/api-helper";

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseData: []
        }
    }

    render() {
        return (
            <div className="course-list-container">
                <div>
                    {this.props.courses.map(course => (
                        <Link
                            key={course.id}
                            className="course-card"
                            to={`/courses/${course.id}`}
                        >
                            <h3>{course.name}</h3>
                        </Link>
                    ))}
                </div>
                <div className="add-course">
                    <Link to="/new/course">
                        <h4>Add a Course</h4>
                    </Link>
                </div>
            </div>
        );
    }
};

export default withRouter(CourseList);