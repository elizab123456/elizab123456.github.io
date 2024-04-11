let userHasClicked = false

let metalSound;
function preload() {
  metalSound = loadSound('assets/metal.wav');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50)
  textAlign(CENTER)
  metalSound.setVolume(0)


}

function draw() {

  background('hotpink');

  if (userHasClicked == false) {
    text(
      'Hi, pls click to continue!',
      width / 2,
      height / 2
    )
  } else {

    if (metalSound.isPlaying() == false) {
      metalSound.play();
    }
    
    let targetVolume = map(
      mouseX, 
      0, 
      width, 
      0,
      1
    )
    metalSound.setVolume(targetVolume)

  }


}
function mouseClicked() {
  userHasClicked = true;

}

