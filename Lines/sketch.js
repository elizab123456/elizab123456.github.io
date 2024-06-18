let startPoint;
let directionVector;

function setup() {
  createCanvas(400, 400);
  startPoint = createVector(width / 2, height / 2); // Center of the canvas
  directionVector = createVector(1, -1); // Example direction vector (change as needed)
  directionVector.normalize(); // Normalize to make it a unit vector
}

function draw() {
  background(220);
  
  // Calculate endpoint of the line
  let endPoint = p5.Vector.add(startPoint, p5.Vector.mult(directionVector, width * 2));
  
  // Draw the line
  stroke(0);
  line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
}