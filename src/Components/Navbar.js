import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link id="logo-h1" to="/">
          <h1>Student App</h1>
        </Link>
      </div>
      <div className="nav-links">

        <Link id="links" to="/All-students">AllStudents</Link>
        <Link id="links" to="/Add-student">Student</Link>
        <Link id="links" to="/Login">Login</Link>


      </div>
    </div>
  );
};

export default Navbar;
