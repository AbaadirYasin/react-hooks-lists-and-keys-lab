import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  if (!projects) {
    // You might want to handle the case when projects is not provided
    return null;
  }

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} name={project.name} technologies={project.technologies} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
