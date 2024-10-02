import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css"; // Keep the same CSS file

const heartPattern = [
  [2, 3], [7, 3], [1, 1], [2, 7], [6, 2], [2, 4],
  [4, 7], [1, 5], [5, 1], [6, 5], [1, 6], [2, 0],
  [5, 6], [3, 7], [7, 4], [3, 0], [1, 2], [4, 0]
];

let angle;

const heartSketch = p5 => {
  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4; // Set the angle for branches
    p5.stroke(255); // Set stroke color to white
    p5.noFill(); // No fill for shapes
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, 200); // Center the drawing
    angle = p5.map(p5.sin(p5.frameCount * 0.05), -1, 1, p5.PI / 2, p5.PI / 16); // Dynamic angle
    branch(80); // Start with a length for the heart shape
  };

  function branch(len) {
    if (len > 4) {
      // Draw the main heart shape using points
      heartPattern.forEach(([x, y]) => {
        const gridSize = 25; // Define grid size for placing points
        p5.ellipse(x * gridSize, -y * gridSize, 10, 10); // Draw a heart point
      });

      // Add branches
      p5.line(0, 0, 0, -len); // Draw the line for the current branch
      p5.translate(0, -len); // Move to the end of the branch

      // Recursive calls for branching
      p5.push();
      p5.rotate(angle); // Rotate to the right
      branch(len * 0.67); // Recursive call for right branch
      p5.pop();

      p5.push();
      p5.rotate(-angle); // Rotate to the left
      branch(len * 0.67); // Recursive call for left branch
      p5.pop();
    }
  }
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={heartSketch} />
  </div>
);

export default FractalTree;
