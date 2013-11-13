int direction =0;

void setup(){
  size(24,24);
  if (direction == 0)
  createimage();
}
 
void draw(){
  
}

void createimage(){

  background(255);
  for(int x=0; x<12; x++) {
  noStroke();
  fill(random(200,255), random(200,255), random(200,255));
  float r = random(0, 6);
  float a = random(0, 12);
  float n = random(0, 18);
  rect(x-r, x+a, x+r, x-n);
  smooth();
  }
  

save("favicon.png");
  }
