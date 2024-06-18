function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10,20,80);
  }
  
  function draw() {
    // Randomly generate circles
    let x = random(width); // Random x-coordinate
    let y = random(height); // Random y-coordinate
    let radius = random(10, 50); // Random radius
  
    // Randomly generate color
    let r = random(255); // Random red value
    let g = random(255); // Random green value
    let b = random(255); // Random blue value
    let alpha = random(100, 200); // Random alpha (transparency)
  
    // Set fill and stroke properties
    fill(r, g, b, alpha);
    noStroke();
  
    // Draw the circle
    ellipse(x, y, radius * 2, radius * 2);
  }
  
  // Optional: if you want to regenerate the canvas on mouse press
  function mousePressed() {
    background(220);
  }