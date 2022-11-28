import React from "react";
import ProjectItemInfo from "./PorjectItemInfo.json";

function ProjectItem({ image, name, overview, skills }) {
  return (
    <>
      <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }} className="image" />
        <div className="info">
          <h1 className="name">{name}</h1>
          <h1 className="overview">{overview}</h1>
          <h1 className="skills">{skills}</h1>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
