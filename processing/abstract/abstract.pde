int direction =0;

void setup(){
  size(300,200);
  if (direction == 0)
  createimage();
}
 
void draw(){
  
}

void createimage(){
  background(0);
  for(int x=0; x<random(80,100); x++) {
  noFill();
  strokeWeight(round(random(5,100)));
  stroke(random(0,255), random(0,255), random(0,255), round(random(0,100)));
  quad(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2), random(-width,width*2),random(-width,height*2));
  smooth();
  }
}
