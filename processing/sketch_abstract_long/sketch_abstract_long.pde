int direction =0;

void setup(){
  size(2000,4000);
  if (direction == 0)
  createimage();
}
 
void draw(){
  
}

void createimage(){
  background(round(random(0,255)));
  for(int x=0; x<random(80,100); x++) {
  //noFill();
  strokeWeight(round(random(5,100)));
  strokeCap(MITER);
  fill(random(0,255), random(0,255), random(0,255), round(random(0,100)));
  quad(random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2), random(-width,width*2), random(-width,height*2), random(-width,width*2),random(-width,height*2));
  fill(255);
  noStroke();
  quad(50,50,1950,50,1950,3950,50,3950);
  smooth();
  }
}
