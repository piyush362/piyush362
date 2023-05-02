import React from "react";
import "./skillcard.css";

function Skillcard({ data, color, heading }) {
  return (
    <div className="skillContainerCard" style={{ backgroundColor: `${color}` }}>
      <h1 className="skill-heading">{heading}</h1>
      <div className="partition"></div>
      {data.map((item) => (
        <div className="skill-name">
          <img className="skills-logo" src={item.logo} alt="logo" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Skillcard;
