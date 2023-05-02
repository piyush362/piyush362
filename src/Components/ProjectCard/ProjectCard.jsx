import React from "react";
import "./projectcard.css";

function ProjectCard({ image, title }) {
  return (
    <div className="projectcard">
      <img src={image} alt="img" />
      <h1>{title}</h1>
      <div className="projectBtn">
        <p>Source Code...</p>
        <p>Live Link...</p>
      </div>
    </div>
  );
}

export default ProjectCard;
