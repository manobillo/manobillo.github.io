import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const spotlightProjects = {
      "Stock Price Prediction with MLOps": {
       title: "automating stock predictions",
        desc:
          "An automated predictor of various stocks using machine learning DevOps.",
        techStack: "Python (TENSORFLOW)",
        link: "https://github.com/odmoon/mlops-stock-price-prediction",
        open: "https://github.com/odmoon/mlops-stock-price-prediction",
        image: "/assets/image.png"
      }

    };
    const projects = {
      "Stock Price Prediction with MLOps": {
        desc:
          "An automated predictor of various stocks using machine learning DevOps.",
        techStack: "Python (TensorFlow)",
        link: "https://github.com/odmoon/mlops-stock-price-prediction",
        open: "https://github.com/odmoon/mlops-stock-price-prediction"
      },
      "Basilisk Storage Data Application": {
        desc:
          "A solution to secure and private self-storage to encrypt information for the user to own their own data.",
        techStack: "Java, JavaScript",
        link: "https://github.com/RLennon24/Basilisk--SE-491/",
        open: "https://github.com/RLennon24/Basilisk--SE-491/"
      }
    //  "Distributed Logging and Monitoring System": {
    //    desc:
    //      "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
     //   techStack: "Node.js (Express.js), React.js, PostgreSQL",
       // link:
        //  "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System"
     // },
     // "Odin Bot": {
      //  desc:
      //    "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
     //   techStack: "Javascript, Node.js, Natural NLP, Telegram API",
       // link: "https://github.com/gazijarin/OdinBot",
       // open: ""
     // },
    //  "Game Centre": {
    //    desc:
    //      "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      //  techStack: "Java, Android Studio",
        //link: "https://github.com/gazijarin/gamecentre",
       // open: ""
  //    },

   };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
         // {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
