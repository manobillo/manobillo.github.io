import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";

let angle;

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255);
    p5.noFill(); // Do not fill shapes
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    branch(100);
  };

  function branch(len) {
    // Draw the main branch
    p5.strokeWeight(len / 10); // Adjust stroke weight based on branch length
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);

    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }

    // Draw the butterfly wings
    if (len <= 20) { // Adjust this threshold to control when the wings appear
      p5.beginShape();
      p5.stroke(255, 100); // Transparent stroke for wings
      p5.vertex(0, 0);
      p5.bezierVertex(20, -20, 20, -50, 0, -70); // Right wing
      p5.bezierVertex(-20, -50, -20, -20, 0, 0); // Return to center
      p5.endShape();

      p5.beginShape();
      p5.stroke(255, 100); // Transparent stroke for wings
      p5.vertex(0, 0);
      p5.bezierVertex(-20, -20, -20, -50, 0, -70); // Left wing
      p5.bezierVertex(20, -50, 20, -20, 0, 0); // Return to center
      p5.endShape();
    }
  }
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
