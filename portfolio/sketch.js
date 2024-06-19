function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10, 20, 45);
    frameRate(5);
  }
  
  function draw() {
    // Generate random coordinates for the start and end points of the blue line
    let x1 = 0;                     // start from the left edge of the canvas
    let y1 = random(height);        // random y coordinate for start point
    let x2 = random(width);         // random x coordinate for end point
  
    let r = random(0, 50);          // random red component between 0 and 50
    let g = random(0, 50);          // random green component between 0 and 50
    let b = random(50, 150);        // random blue component between 50 and 150 (darker shades of blue)
  
    // Draw the blue line
    stroke(0, 0, b);                // set stroke color to shades of blue
    strokeWeight(3);                // set stroke weight for the blue line
    line(x1, y1, x2, y1);           // draw the blue line
  
    // Draw overlapping circles instead of rectangles
    let circleX = random(width);      // random x coordinate for circle
    let circleY = random(height);     // random y coordinate for circle
    let circleSize = random(20, 100); // random size of circle
  
    fill(random(150, 255), 0, random(150, 255), 150);
    ellipse(circleX, circleY, circleSize, circleSize);  // draw the circle
  
    // Draw white lines from the right edge to complement the blue lines
    let oppositeX1 = width;         // start from the right edge of the canvas
    let oppositeX2 = random(width); // random x coordinate for end point on the right side
  
    stroke(255);                    // set stroke color to white
    strokeWeight(3);                // set stroke weight for the white line
    line(oppositeX1, y1, oppositeX2, y1); // draw the white line
  }