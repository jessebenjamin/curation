int direction =0;

void setup(){
  size(2000,4000);
  if (direction == 0)
  createimage();
}
 
void draw(){
  
}

void createimage(){
  float r = random(0,30);

  if (r<5) {
  background(240,0,240);
  for(int x=0; x<random(100,500); x++) {
  noFill();
  strokeWeight(round(random(5,100)));
  stroke(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  smooth();
  }
  }  else if (r<10) {
  background(random(0,120), 0, 0);
  for(int x=0; x<random(100,500); x++) {
  noStroke();
  //strokeWeight(round(random(5,100)));
  fill(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  smooth();
  }
} else if (r<15) {
  background(240, 240, 0);
  for(int x=0; x<random(100,500); x++) {
  noFill();
  strokeCap(ROUND);
  strokeWeight(round(random(5,100)));
  stroke(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  smooth();
  }
} else if (r<20) {
  background(0, random(0,120), 0);
  for(int x=0; x<random(100,500); x++) {
  noStroke();
  //strokeWeight(round(random(5,100)));
  fill(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  smooth();
  }
} else if (r<25) {
  background(0, 240, 240);
  for(int x=0; x<random(100,500); x++) {
  noFill();
  strokeCap(ROUND);
  strokeWeight(round(random(5,100)));
  stroke(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  smooth();
  }
} else {
  background(0, 0, random(0,120));
  for(int x=0; x<random(100,500); x++) {
  noStroke();
  //strokeWeight(round(random(5,100)));
  fill(random(0,255), random(0,255), random(0,255), round(random(80,100)));
  ellipse(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2));
  smooth();
  }
} 

//save("abstract_if-8.png");
  }
