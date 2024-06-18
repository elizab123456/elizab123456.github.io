function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10,20,45);
    frameRate(4);
  }
  
  function draw() {
    // Generate random coordinates for the start and end points of the line
    let x1 = 0;   // random x coordinate for start point
    let y1 = random(height);  // random y coordinate for start point
    let x2 = random(width);   // random x coordinate for end point
    
    
    // Generate random shade of blue for the line
  let b = random(100, 255);  // random blue component between 100 and 255
    
  stroke(0, 0, b);  // set stroke color to shades of blue
  line(x1, y1, x2, y1);  // draw the line
}
  