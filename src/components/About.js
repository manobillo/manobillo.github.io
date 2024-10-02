import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently a <b>Senior Clinical Researcher</b> at
        <a href="https://www.cancer.northwestern.edu/research/clinical-trials-office/careers.html"> Northwestern</a>, working in the Data Management
        sector under the Lymphoma Team. As of June 2024, I graduated
        with my <b> Master's of Science</b> in <b>Computer Science </b>at{" "}
        <a href="https://www.cdm.depaul.edu/academics/Pages/MS-in-Computer-Science.aspx">DePaul University</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        artifical intelligence. I also play a lot of video games. And take film and digital photos.
      </p>
    );

    const tech_stack = [
      "Python",
      "Javascript ES6+",
      "Java",
      "C#",
      "TensorFlow",
      "PyTorch",
      "Kubernetes",
      "Docker"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Maheen Khan" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
