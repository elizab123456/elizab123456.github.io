function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10, 20, 45);
    frameRate(5);
  }
  
  function draw() {
    
    let x1 = 0;                     
    let y1 = random(height);        
    let x2 = random(width);         
  
    let r = random(0, 50);          
    let g = random(0, 50);          
    let b = random(50, 150);       
  
    
    stroke(0, 0, b);                
    strokeWeight(3);                
    line(x1, y1, x2, y1);           
  
    
    let circleX = random(width);      
    let circleY = random(height);     
    let circleSize = random(20, 100); 
  
    fill(random(150, 255), 0, random(150, 255), 150);
    ellipse(circleX, circleY, circleSize, circleSize);  
  
    
    let oppositeX1 = width;         
    let oppositeX2 = random(width); 
  
    stroke(255);                    
    strokeWeight(3);                
    line(oppositeX1, y1, oppositeX2, y1); 
  }