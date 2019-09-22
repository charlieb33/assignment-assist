import React, { Component} from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../styles/CourseList.css"

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
                <div className="course-list">
                    {this.props.courses.map(course => (
                        <div
                            key={course.id}
                            className="course-card"
                            onClick={() => 
                                this.props.history.push(`/courses/${course.id}`, {id: course.id})
                            }
                        >
                            <h3>{course.name}</h3>
                        </div>
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