function setup() {
  createCanvas(1000,1000)
  background(150,100,255)
}

function draw() {
 line(mouseX,2,mouseY,1000)
 fill(255,0,0)
 ellipse(mouseX,mouseY,80,mouseY)
 fill (0,255,0)
 rect(mouseX,mouseY,50,25)
 fill(0,0,255)
 ellipse(mouseY,mouseX,40,mouseX)
  
}