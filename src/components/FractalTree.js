// src/FractalTree.js

import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./styles/FractalTree.css"; // Adjust path if necessary

const Sketch = (p5) => {
  let angle;
  let raindrops = []; // Array to hold raindrop objects

  p5.setup = () => {
    p5.createCanvas(400, 400, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255);
    
    // Create initial raindrops
    for (let i = 0; i < 100; i++) {
      raindrops.push(new Raindrop(p5));
    }
  };

  p5.draw = () => {
    p5.clear();

    // Draw raindrops
    for (let i = 0; i < raindrops.length; i++) {
      raindrops[i].update(); // Update raindrop position
      raindrops[i].display(); // Draw raindrop
    }

    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    branch(100);
  };

  function branch(len) {
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
  }

  class Raindrop {
    constructor(p5) {
      this.p5 = p5;
      this.x = p5.random(p5.width); // Random x position
      this.y = p5.random(-500, 0); // Start above the canvas
      this.length = p5.random(10, 20); // Length of the raindrop
      this.speed = p5.random(2, 5); // Falling speed
    }

    update() {
      this.y += this.speed; // Move down
      if (this.y > this.p5.height) {
        this.y = 0; // Reset to the top when off screen
        this.x = this.p5.random(this.p5.width); // Randomize x position
      }
    }

    display() {
      this.p5.stroke(138, 43, 226); // Color for rain (purple)
      this.p5.line(this.x, this.y, this.x, this.y + this.length); // Draw raindrop
    }
  }
};

const FractalTree = () => (
  <div id="fractal-tree">
    <ReactP5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
