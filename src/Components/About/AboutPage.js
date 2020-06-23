import React from "react";

const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>This App is for administering Course data with data from Pluralsight.</p>
    <p>
      How this App works: As a user, you are able to fully manage Course data
      which includes Adding new Courses, Updating Existing Courses and Deleting
      Courses
    </p>
    <div>
      To get started click on Courses, from here you have an administration
      dashboard where you are able to:
      <ul>
        <li>Add a new Course</li>
        <li>Watch a course - takes you to Pluralsight to watch the course</li>
        <li>
          Click on a Course Title to Edit/Update an existing course and Save
        </li>
        <li>
          View the author for the Online Course along with the Category for this
          Course Subject
        </li>
        <li>Delete an existing Course</li>
      </ul>
    </div>
  </div>
);

export default AboutPage;
