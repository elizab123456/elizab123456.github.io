let startX, startY; // Starting coordinates of the line
let initialX, initialY; // Initial starting coordinates of the line

function setup() {
  createCanvas(windowWidth, windowHeight);
  initialX = startX = width / 2; // Start in the middle horizontally
  initialY = startY = height / 2; // Start in the middle vertically
  background(220);
  frameRate (5);
}

function draw() {
  drawLine();
}

function drawLine() {
  // Set the endpoint direction randomly
  let possibility1 = floor(random(1, 4)); // 1 to 3 for the general direction
  let possibility2 = floor(random(1, 7)); // 1 to 6 for the specific direction
  
  // Define the lengths for the two possibilities
  let len1 = 50; // Length for the first set of possibilities
  let len2 = 100; // Length for the second set of possibilities
  
  // Calculate the average length
  let averageLen = (len1 + len2) / 2;
  
  // Calculate the endpoint coordinates based on the possibilities and average length
  let endX = startX, endY = startY;
  if (possibility1 === 1) { // Horizontal
    if (possibility2 === 1 || possibility2 === 3 || possibility2 === 5) {
      endX = startX - averageLen; // Left
    } else if (possibility2 === 2 || possibility2 === 4 || possibility2 === 6) {
      endX = startX + averageLen; // Right
    }
  } else if (possibility1 === 2) { // Vertical
    if (possibility2 === 1 || possibility2 === 3 || possibility2 === 5) {
      endY = startY + averageLen; // Down
    } else if (possibility2 === 2 || possibility2 === 4 || possibility2 === 6) {
      endY = startY - averageLen; // Up
    }
  } else if (possibility1 === 3) { // Diagonal
    switch (possibility2) {
      case 1:
        endX = startX + averageLen * cos(PI / 6);
        endY = startY + averageLen * sin(PI / 6); // Down-right
        break;
      case 2:
        endX = startX - averageLen * cos(PI / 6);
        endY = startY + averageLen * sin(PI / 6); // Down-left
        break;
      case 3:
        endX = startX + averageLen * cos(PI / 6);
        endY = startY - averageLen * sin(PI / 6); // Up-right
        break;
      case 4:
        endX = startX - averageLen * cos(PI / 6);
        endY = startY - averageLen * sin(PI / 6); // Up-left
        break;
      case 5:
      case 6:
        // Do not draw the line for 5 and 6
        return;
    }
  }
  
  // Check if the line goes off the canvas
  if (endX < 0 || endX > width || endY < 0 || endY > height) {
    // Set a new random starting point near the initial starting point
    let restartPossibility = floor(random(1, 7)); // 1 to 6 for the new starting point direction
    switch (restartPossibility) {
      case 1:
        startX = initialX + 10; // 1 cm to the right
        startY = initialY;
        break;
      case 2:
        startX = initialX - 10; // 1 cm to the left
        startY = initialY;
        break;
      case 3:
      case 6:
        startX = initialX;
        startY = initialY + 10; // 1 cm down
        break;
      case 4:
      case 5:
        startX = initialX;
        startY = initialY - 10; // 1 cm up
        break;
    }
    return; // End the current draw call to avoid drawing the out-of-bounds line
  }
  
  // Draw the line
  stroke(0);
  line(startX, startY, endX, endY);
  
  // Update startX and startY to the end point of the line
  startX = endX;
  startY = endY;
}