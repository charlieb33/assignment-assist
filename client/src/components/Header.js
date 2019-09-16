import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
        <div className="header-container">
            <Link
                to="/"
            >
                <h1>Assignment Assist</h1>
            </Link>
            <div className="">
                { props.currentUser ?
                    <>
                        <h3>{props.currentUser.username}</h3>
                        <button onClick={props.handleLogOut}>Log Out</button>
                    </>
                    :
                    <>
                        <h3><Link to="/login">Log In</Link></h3>
                        <h3><Link to="/register">Register</Link></h3>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;