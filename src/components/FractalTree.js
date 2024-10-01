import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";  // Keep the same CSS file

let angle;

const heartSketch = p5 => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255); // Set stroke color to white
    p5.noFill(); // Ensure shapes have no fill
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, 200); // Center the drawing
    branch(100); // Start the heart shape drawing
  };

  function branch(len) {
    // Base condition to stop recursion
    if (len > 4) {
      const x = len * p5.cos(angle); // Calculate x position
      const y = len * p5.sin(angle); // Calculate y position

      p5.line(0, 0, x, -y); // Draw the line

      p5.push(); // Save the current state
      p5.rotate(angle); // Rotate to the right
      branch(len * 0.67); // Recursive call for right branch
      p5.pop(); // Restore to the previous state

      p5.push(); // Save the current state
      p5.rotate(-angle); // Rotate to the left
      branch(len * 0.67); // Recursive call for left branch
      p5.pop(); // Restore to the previous state
    }
  }
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={heartSketch} />
  </div>
);

export default FractalTree;
