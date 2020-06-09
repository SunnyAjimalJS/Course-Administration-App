import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../Redux/Actions/courseActions";
import { loadAuthors } from "../../Redux/Actions/authorActions";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);
  // The ^ Empty Array above as a second argument to effect means the effect will run once when the component mounts, rather than every time. NOTE --- This is all effectively the same as componentDidMount as it starts with an empty array then loads what's needed

  return (
    <>
      <h2>Manage Courses</h2>
    </>
  );
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
