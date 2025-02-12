import React from "react";
import "./index.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import GFLLogo from "../../assets/images/GFL_SideText_black-1536x619-1.png";
import Button from "@mui/material/Button";

import CardActions from "@mui/material/CardActions";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="experience-header-container">
        <div className="experience-header">
          <h1>Experience</h1>
        </div>
      </div>

      <div className="card-wrapper">
        <Card className="card">
          <CardActionArea>
            {/* <CardMedia
              component="img"
              sx={{ width: "15%", height: "auto", objectFit: "contain" }}
              image={GFLLogo}
              alt="GFL Logo"
            /> */}
            <CardContent className="card-content">
              <div className="card-header">
                <Typography gutterBottom variant="h2" component="div">
                  Company
                </Typography>
                <Typography gutterBottom variant="h3" component="div">
                  Job Title
                </Typography>
              </div>

              <hr />

              <Typography variant="body1" style={{ color: "black" }}>
                • Collaborated with game designers, artists, and sound engineers
                to develop and publish C# and Unity Multimedia Applications on
                Itch.io
                <hr />
                • Designed and implemented new gameplay features, mechanics, and
                UI systems from concept to completion
                <hr />
                • Redesigned the object spawning codebase utilizing Object
                Pooling, boosting FPS performance by 36%
                <hr />
                • Regularly conducted feature testing, updated test cases, and
                reported results to the team
                <hr />• Created and maintained development documents for
                stakeholder communication using Microsoft Excel and Word
              </Typography>
              <hr />
              <div className="card-header">
                <Typography gutterBottom variant="body1" component="div">
                  Lynnwood, WA | February 2024- September 2024
                </Typography>
                <CardActions>
                  <Button size="small" color="primary">
                    Website
                  </Button>
                </CardActions>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className="card">
          <CardActionArea>
            {}
            <CardContent className="card-content">
              <div className="card-header">
                <Typography gutterBottom variant="h2" component="div">
                  Company
                </Typography>
                <Typography gutterBottom variant="h3" component="div">
                  Job Title
                </Typography>
              </div>

              <hr />

              <Typography variant="body1" style={{ color: "black" }}>
                • Content
                <hr />
                • Content
                <hr />
                • Content
                <hr />
                • Content
                <hr />• Content
              </Typography>
              <hr />
              <div className="card-header">
                <Typography variant="body1" component="div">
                  City, WA | Month 2022- Month 2022
                </Typography>
                <CardActions>
                  <Button size="small" color="primary">
                    Website
                  </Button>
                </CardActions>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
