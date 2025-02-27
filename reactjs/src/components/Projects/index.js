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
      <h3 className="header-title">
        Click on the buttons below to see my projects.
      </h3>
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
      </div>
      {selectedProject && (
        <p className="project-description">
          {selectedProject === "mobileApp" &&
            "Developed an Android weather and messaging app in a 5-member team. Implemented Log-in authentication functionality using JSON web tokens. Developed the feature of adding and deleting a contact on the Contacts page. Utilized Agile and Scrum methodologies to manage the project workflow"
              .split(". ")
              .map((sentence, index) => (
                <React.Fragment key={index}>
                  {sentence}.<br />
                  <br />
                </React.Fragment>
              ))}
          {selectedProject === "penguinGame" &&
            "Led a team of 8 developers to develop a web game using Unity game engine and C#. Utilized interfaces and events to implement a flexible item collection system. Designed and programmed enemy behavior including area patrol, path finding, and attacks"
              .split(". ")
              .map((sentence, index) => (
                <React.Fragment key={index}>
                  {sentence}.<br />
                  <br />
                </React.Fragment>
              ))}
          {selectedProject === "towerDefenseGame" &&
            "Fruit Fortress is a 3D tower defense game made in Unity. I utlized Object Pooling for object spawning and destruction. In addition, I designed and implemented enemy pathfinding algorithm, wave system, and tower targeting and shooting systems"
              .split(". ")
              .map((sentence, index) => (
                <React.Fragment key={index}>
                  {sentence}.<br />
                  <br />
                </React.Fragment>
              ))}
          {selectedProject === "dndWebsite" &&
            "Created a website that allows Dungeons and Dragons players to create and store spells for games. Designed and developed user interface with React.js. Implemented a database to store and manage data using MySQL"
              .split(". ")
              .map((sentence, index) => (
                <React.Fragment key={index}>
                  {sentence}.<br />
                  <br />
                </React.Fragment>
              ))}
        </p>
      )}
    </div>
  );
};

export default Projects;
