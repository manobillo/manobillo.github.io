import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";  // Keep the same CSS file

const heartSketch = p5 => {
  const heartPattern = [
    [2, 3], [7, 3], [1, 1], [2, 7], [6, 2], [2, 4],
    [4, 7], [1, 5], [5, 1], [6, 5], [1, 6], [2, 0],
    [5, 6], [3, 7], [7, 4], [3, 0], [1, 2], [4, 0]
  ];

  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    p5.noLoop();  // Only draw once if it's static
  };

  p5.draw = () => {
    p5.clear();
    p5.background(0);  // Black background
    p5.fill(255);  // Change to white for the heart

    const gridSize = 50; // Define grid size for placing points
    const sizeModifier = 1 + 0.3 * p5.sin(p5.frameCount * 0.1); // Dynamic size

    heartPattern.forEach(([x, y]) => {
      // Draw a heart point with dynamic size
      p5.ellipse(x * gridSize + gridSize / 2, y * gridSize + gridSize / 2, 20 * sizeModifier, 20 * sizeModifier);
    });
  };
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={heartSketch} />
  </div>
);

export default FractalTree;
