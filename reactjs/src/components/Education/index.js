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
        <Card className="education-card">
          {/* Background image overlay */}
          <div className="card-background"></div>

          <div className="card-gradient"></div>

          <CardActionArea>
            <CardContent className="card-content">
              <Typography className="main-text">
                Bachelor of Science in Computer Science and Systems
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "16px", md: "20px", lg: "24px" },
                }}
              >
                <b>GPA:</b> 3.5 <br />
              </Typography>
              <Typography className="hover-text">
                <b>Related Courses:</b> Data Structures, Algorithms, Operating
                Systems, Cloud Computing, Database Systems Design, Mobile
                Application Programming.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Education;
