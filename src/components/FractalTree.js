import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/FractalTree.css";

let t;
let size;

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(512, 512);
    p5.background(0);
    t = 0;
    size = 300;
  };

  p5.draw = () => {
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(p5.PI / 2);
    let r = 100;
    p5.stroke(255);
    p5.noFill();
    p5.strokeWeight(1);

    const da = p5.PI / 100;
    const dx = 0.2;
    let xoff = 0;

    // Define colorvar here for access in both loops
    let colorvar = p5.frameCount;

    p5.beginShape();

    // First loop
    for (let a = -p5.PI / 2; a <= p5.PI / 2; a += da) {
      let n = p5.noise(xoff, t);
      r = p5.sin(2 * a) * p5.map(n, 0, 1, 50, 325);
      let x = r * p5.cos(a);
      let y = r * p5.sin(a);
      xoff += dx;
      let rColor = p5.map(colorvar, 0, p5.width, p5.random(230), 255);
      let gColor = p5.map(colorvar, 0, p5.width, p5.random(210), 255);
      let bColor = p5.map(colorvar, 0, p5.height, p5.random(250), 255);
     
