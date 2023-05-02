import React from "react";

//css
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbarContainer">
      <div className="navbarTitle">
        <div className="titleheading">
          <p>HomePage</p>
          <img src="/assests/images_icons/homeIcon.png" alt="homeicon" />
        </div>
        <div className="titleheading bg-yellow">
          <p>Download Resume</p>
          <img src="/assests/images_icons/downloadIcon.webp" alt="homeicon" />
        </div>
      </div>
      <div className="navicons">
        <img src="/assests/images_icons/githubIcon.png" alt="linkedin" />
        <img src="/assests/images_icons/linkedinIcon.png" alt="linkedin" />
        <img src="/assests/images_icons/whatsappIcon.webp" alt="linkedin" />
      </div>
    </div>
  );
}

export default NavBar;
