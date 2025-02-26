import React, { useState } from "react";
import "./index.scss";
import "../page.scss";
import Button from "@mui/material/Button";

import MobileAppPlayStoreIcon from "../../assets/images/Projects/Weather Chat Mobile App/ic_launcher-playstore.png";
import PenguinVoyageIcon from "../../assets/images/Projects/Penguin Video Game/Penguin Logo.png";
import FruitFortress from "../../assets/images/Projects/fruit_fortress_video_game/TowerDefenseGame Logo.PNG";
import DnDSpellLibrary from "../../assets/images/Projects/DnD_spell_lib_project/website logo.png";
import { Typography } from "@mui/material";

const Projects = () => {
  //State to control text visibility
  const [selectedProject, setSelectedProject] = useState(null);

  //Function to toggle text visibility
  const handleToggle = (projectName) => {
    setSelectedProject((prev) => (prev === projectName ? null : projectName));
  };

  return (
    <div className="projects">
      <div className="page-header-container">
        <div className="page-header">
          <h1>Projects</h1>
        </div>
      </div>
      <h3>Click on the buttons below to see my projects.</h3>
      <div className="project-buttons-container">
        {/* Button 1 */}
        <Button
          variant="outlined"
          className="project-button"
          onClick={() => handleToggle("mobileApp")}
        >
          <img
            src={MobileAppPlayStoreIcon}
            alt="Mobile App Icon"
            className="project-button-img"
          />
        </Button>
        {selectedProject === "mobileApp" && (
          <p className="project-description">This is a mobile app project.</p>
        )}

        {/* Button 2 */}
        <Button
          variant="outlined"
          className="project-button"
          onClick={() => handleToggle("penguinGame")}
        >
          <img
            src={PenguinVoyageIcon}
            alt="Penguin Voyage Game Icon"
            className="project-button-img"
          />
        </Button>
        {selectedProject === "penguinGame" && (
          <p className="project-description">
            This is a 2D platformer game made in Unity.
          </p>
        )}

        {/* Button 3 */}
        <Button
          variant="outlined"
          className="project-button"
          onClick={() => handleToggle("towerDefenseGame")}
        >
          <img
            src={FruitFortress}
            alt="Tower Defense Video Game Icon"
            className="project-button-img"
          />
        </Button>
        {selectedProject === "towerDefenseGame" && (
          <p className="project-description">
            This is a tower defense game made in Unity.
          </p>
        )}

        {/* Button 4 */}
        <Button
          variant="outlined"
          className="project-button"
          onClick={() => handleToggle("dndWebsite")}
        >
          <img
            src={DnDSpellLibrary}
            alt="DnD Website Logo"
            className="project-button-img"
          />
        </Button>
        {selectedProject === "dndWebsite" && (
          <p className="project-description">This is a DnD website project.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
