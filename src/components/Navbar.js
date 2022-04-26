import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">Github Search</div>
    <u className="navbar-nav">
        <li className="nav-item">
            <NavLink exact='true' to="/home" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/about" className="nav-link">Info</NavLink>
        </li>
    </u>
  </nav>
);
