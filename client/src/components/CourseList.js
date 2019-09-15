import React from 'react';
import { withRouter } from 'react-router';

const CourseList = (props) => {
    return(
        <div className="course-list-container">
            <div>
                { props.courses.map(course => (
                    <div
                        key={course.id}
                        className="course-card"
                        onClick={() => props.history.push(`/courses/${course.id}`)}
                    >
                        <h3>{course.name}</h3>
                    </div>
                ))}
            </div>
            <div className="add-course">
                <h3>Add a Course</h3>
            </div>
        </div>
    );
};

export default withRouter(CourseList);