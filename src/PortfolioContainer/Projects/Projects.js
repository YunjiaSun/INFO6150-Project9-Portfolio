import React from "react";
import ProjectItem from "../../Components/ProjectList/ProjectItem";
import project1 from "../../Components/image/library.jpeg";
import project2 from "../../Components/image/employee.jpeg";
import project3 from "../../Components/image/movie.jpeg";
import project4 from "../../Components/image/COVID-19.jpeg";
import project5 from "../../Components/image/game.jpeg";
import project6 from "../../Components/image/data.jpeg";
import "./Projects.css";

//display ProjectList-each projectItem
function Projects() {
  return (
    <div className="projects">
      <div className="projectList">
        <ProjectItem
          name="Library Management Web"
          image={project1}
          overview="Developed library web pages with Django and implement librarian and user management functions."
          skills="Skills: Django/Python "
        />
        <ProjectItem
          name="Employee Management Web"
          image={project2}
          overview="Build with Spring Boot and MySQL to handle HTTP requests, created CRUD operations to fetch data with queries."
          skills="Skills: SpringBoot/Java/React "
        />
        <ProjectItem
          name="Movie Application"
          image={project3}
          overview="Developed movie website allows users to view the movie information and search the movie."
          skills="Skills: HTML/CSS/JavaScript "
        />
        <ProjectItem
          name="Hospital On-Wheels System"
          image={project4}
          overview="Developed library web pages with Django and implement librarian and user management functions."
          skills="Skills: Java "
        />
        <ProjectItem
          name="Number Guessing Game"
          image={project5}
          overview="Implement a guessing number game, allowing users to guess the number according to the prompt."
          skills="Skills: HTML/CSS/JavaScript "
        />
        <ProjectItem
          name="Data Visualization Analysis"
          image={project6}
          overview="Provides water quality analysis reports for two water stations in California."
          skills="Skills: Python/Pandas/Numpy "
        />
      </div>
    </div>
  );
}

export default Projects;
