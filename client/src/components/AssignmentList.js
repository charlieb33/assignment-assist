import React from 'react';
import { withRouter } from 'react-router';

const AssignmentList = (props) => {
    return(
        <div className="assignment-list-container">
            <div>
                { props.assignments.map((assignment, course) => (
                    <div
                        key={assignment.id}
                        className="assignment-card"
                        onClick={() =>
                            props.history.push(`/courses/${course.id}/assignments${assignment.id}`)
                        }
                    >
                        <h3>{assignment.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default withRouter(AssignmentList);