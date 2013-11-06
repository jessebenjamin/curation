int direction =0;

void setup(){
  size(2000,4000);
  if (direction == 0)
  createimage();
}
 
void draw(){
  
}

void createimage(){
  float r = random(0,100);

  if (r<25) {
  background(0);
  for(int x=0; x<random(80,100); x++) {
  noFill();
  strokeWeight(round(random(5,100)));
  stroke(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  fill(255);
  noStroke();
  quad(50,50,1950,50,1950,3950,50,3950);
  smooth();
  }
  }  else if (r<50) {
  background(random(0,120), 0, 0);
  for(int x=0; x<random(80,100); x++) {
  noFill();
  strokeWeight(round(random(5,100)));
  stroke(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  fill(255);
  noStroke();
  quad(50,50,1950,50,1950,3950,50,3950);
  smooth();
  }
} else if (r<75) {
  background(0, 0, random(0,120));
  for(int x=0; x<random(100,500); x++) {
  noFill();
  strokeCap(ROUND);
  strokeWeight(round(random(5,100)));
  stroke(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  fill(255);
  noStroke();
  quad(50,50,1950,50,1950,3950,50,3950);
  smooth();
  }
} else {
  background(255);
  for(int x=0; x<random(80,100); x++) {
  noFill();
  strokeWeight(round(random(5,100)));
  stroke(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  fill(255);
  noStroke();
  quad(50,50,1950,50,1950,3950,50,3950);
  smooth();
  }
} 
  }
