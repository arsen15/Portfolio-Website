import React from "react";
import "./index.scss";
import "../page.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";

import CardActions from "@mui/material/CardActions";
import uw_background from "../../assets/images/uw_background.jpg";

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="page-header-container">
        <div className="page-header">
          <h1>Education</h1>
        </div>
      </div>
      <div className="card-wrapper">
        <Card
          className="education-card"
          sx={{
            position: "relative",
            height: 400,
            width: 1000,
            backgroundImage: `url(${uw_background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <CardActionArea>
            <CardContent className="card-content">
              <div className="text-container">
                <Typography className="main-text">
                  Bachelor of Science in Computer Science and Systems
                </Typography>
                <Typography className="hover-text">
                  GPA: 3.5 <br />
                  Related Courses: Data Structures, Algorithms, Operating
                  Systems, Cloud Computing, Database Systems Design, Mobile
                  Application Programming.
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Education;
