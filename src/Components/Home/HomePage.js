import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h2>Online Learning Courses Administration App</h2>
    <p>
      This app uses React, Redux, React Router, and many other helpful libraries
      for ultra-responsive web apps. To get started click on learn more to
      understand how to use this App
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
