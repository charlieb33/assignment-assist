import React, { Component } from "react";
import AssignmentList from "../AssignmentList"
import CourseEdit from "../CourseEdit";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import {
    createAssignment,
    readAllAssignments,
    readOneAssignment,
} from "../../services/api-helper";

import "../../styles/Course.css";

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            assignments: [],
            assignmentForm: {
                name: "",
                description: "",
                dueDate: ""
            },
            course: props.course
        };
    };

    getAssignments = async () => {
        const assignments = await readAllAssignments(this.props.course.id);
        this.setState({
            assignments
        });
    };

    componentDidMount = () => {
        this.getAssignments();
        this.props.mountEditForm(this.props.id);
    }

    render() {
        const { course } = this.props
        return (
            <div className="course-item-container">
                <h2>{course.name}</h2>
                <p>{course.description}</p>
                { this.state.isEdit ?
                    <Route path={'/courses/:course_id/edit'} render={() => (
                        <CourseEdit
                            handleFormChange={this.props.handleFormChange}
                            handleSubmit={(event) => {
                                event.preventDefault();
                                this.props.editInstructor();
                                this.setState({ isEdit: false })
                                this.props.history.push(`/courses/${this.props.courseForm.id}`)
                            }}
                            courseForm={this.props.courseForm}
                        />
                        )}
                    />
                    :
                    <>
                        <button onClick={() => {
                            this.setState({
                                isEdit: true
                            })
                            this.props.history.push(`/courses/${course.id}/edit`)
                            }}
                        >
                            Edit
                        </button>
                        <button onClick={() => {
                            this.props.deleteCourse(course.id);
                            this.props.history.push('/')
                            }}
                        >
                            Delete
                        </button>
                    </>
                }
                <h3>Assignments</h3>
                <AssignmentList
                    assignments={this.state.assignments}
                    assignmentForm={this.state.assignmentForm}
                />

            </div>
        );
    };
}

export default withRouter(Course);