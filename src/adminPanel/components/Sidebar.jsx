import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
const Sidebar = () => {
    return (
        <div className="sidebar_nav">
            <div className="sidebar_logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar; <h5>Sidebar</h5>