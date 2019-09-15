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

    render() {
        return(
            <h1>Assignment Test</h1>
        );
    };
};

export default Assignment;