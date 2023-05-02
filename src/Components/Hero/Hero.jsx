import React from "react";

import { skills, projects } from "../../data/data.js";

//css
import "./hero.css";

import Skillcard from "../SkillCard/Skillcard";
import Projects from "../Projects/Projects.jsx";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="myPersonalCard">
        <div className="title">
          <h1>Piyush Sagar __</h1>
          <div className="title-tag">
            <p className="titleHead">JavaScript Developer</p>
            <p className="titleHead bg-yellow">React.JS, React Native</p>
          </div>
        </div>
        <div className="profilecard">
          <img
            className="profile-pic"
            src="/assests/images_icons/profile.jpeg"
            alt="profile"
          />
          <p>LinkedIn</p>
        </div>
      </div>

      <div className="education-card">
        <div className="education-details">
          <h1>Educational Detail</h1>
          <p className="f-bold">
            Dr. Rammanohar Lohia Avadh University, Ayodhya - ( 2020 - 2024 )
          </p>
          <p>Course- (B.Tech) Bachelor of Technology, </p>
          <p> Stream- Information Technology</p>
        </div>
      </div>

      <div className="skillscontainer">
        <h1>My Skills...</h1>
        <div className="skillscards">
          <Skillcard
            heading={"Languages"}
            data={skills.languages}
            color={"#19376D"}
          />
          <Skillcard heading={"Tools"} data={skills.tools} color={"#3B185F"} />
          <Skillcard
            heading={"Framework / Library"}
            data={skills.framework}
            color={"#1E5128"}
          />
        </div>
      </div>

      <div className="projectscontainer">
        <h1>Projects...</h1>
        <div className="projectSection">
          <h1>UI Projects</h1>
          <div className="partition2"></div>
          <div className="projectlist">
            {projects.uiProject.map((item) => (
              <ProjectCard image={item.image} title={item.title} />
            ))}
          </div>
          <div className="moreProject">
            <p>More...</p>
          </div>
        </div>
        <div className="projectSection">
          <h1>React.JS Projects</h1>
          <div className="partition2"></div>
          <div className="projectlist">
            {projects.uiProject.map((item) => (
              <ProjectCard image={item.image} title={item.title} />
            ))}
          </div>
          <div className="moreProject">
            <p>More...</p>
          </div>
        </div>
        <div className="projectSection">
          <h1>React Native Projects</h1>
          <div className="partition2"></div>
          <div className="projectlist">
            {projects.uiProject.map((item) => (
              <ProjectCard image={item.image} title={item.title} />
            ))}
          </div>
          <div className="moreProject">
            <p>More...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
