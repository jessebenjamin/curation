//import processing.pdf.*;
//, PDF, "pttrns9.pdf"

int numDots = 1000;
int[]ArrayX = new int[numDots];
int[]ArrayY = new int[numDots];
int[]ArrayX2 = new int[numDots];
int[]ArrayY2 = new int[numDots];

void setup() {
  size(2560, 4000);
  for (int i = 0; i < numDots; i++) {
    ArrayX[i] = (int) random(-width, width);
    ArrayY[i] = (int) random(-height, height);
    ArrayX2[i] = (int) random(ArrayX[i]+random(100, 1000), ArrayX[i]+random(1000, 2000));
    ArrayY2[i] = (int) random(ArrayY[i]+random(100, 1000), ArrayY[i]+random(1000, 2000));
  }
  noLoop();
  smooth();
}

void draw() {

  float r = random(0,40);

  if (r<5) {
    background(70, 130, 180);
    for (int i = 0; i < numDots; i++) {
      noFill();
      strokeCap(PROJECT);
      strokeWeight(random(60, 100));
      stroke(random(0, 255), random(0, 255), random(0, 255), random(60, 100));
      ellipse(random(-width, width*2), random(-width, height*2), random(-width, width*2), random(-width, height*2));
      smooth();
    }
  } 
  else if (r<10) {
    background(64, 224, 208);
    for (int i = 0; i < numDots; i++) {
      fill(43, 43, 43);
      noStroke(); 
      quad(ArrayX[i]+random(0,20), ArrayY[i]+random(0,20), ArrayX2[i]+random(0,100), ArrayY2[i]+random(0,100),ArrayX[i]-random(0,20), ArrayY[i]-random(0,20), ArrayX2[i]-random(0,100), ArrayY2[i]-random(0,100));
    }
  } 
  else if (r<15) {
    background(205, 92, 92);
    for (int i = 0; i < numDots; i++) {
      noStroke();
      fill(random(0, 255), random(0, 255), random(0, 255), random(60, 100));
      quad(ArrayX[i]+random(50, 100), ArrayY[i]+random(50, 100), ArrayX2[i]-random(50, 100), ArrayY2[i]-random(50, 100), ArrayX[i]-random(50, 100), ArrayY[i]-random(50, 100), ArrayX2[i]+random(50, 100), ArrayY2[i]+random(50, 100));
      smooth();
    }
  } 
  else if (r<20) {
    background(255, 215, 0);
    for (int i = 0; i < numDots; i++) {
      fill(255);
      noStroke();
      quad(ArrayX[i]+random(0,20), ArrayY[i]+random(0,20), ArrayX2[i]+random(0,100), ArrayY2[i]+random(0,100),ArrayX[i]-random(0,20), ArrayY[i]-random(0,20), ArrayX2[i]-random(0,100), ArrayY2[i]-random(0,100));
    }
  } 
  else if (r<25) {
    background(176, 48, 96);
    for (int i = 0; i < numDots; i++) {
      noFill();
      strokeCap(PROJECT);
      strokeWeight(random(60, 100));
      stroke(random(0, 255), 0, random(0, 255), random(60, 100));
      quad(ArrayX[i]+random(50, 100), ArrayY[i]+random(50, 100), ArrayX2[i]-random(50, 100), ArrayY2[i]-random(50, 100), ArrayX[i]-random(50, 100), ArrayY[i]-random(50, 100), ArrayX2[i]+random(50, 100), ArrayY2[i]+random(50, 100));
      smooth();
    }
  } 
  else if (r<30) {
    background(78, 238, 148);
    for (int i = 0; i < numDots; i++) {
      strokeWeight(20);
      stroke(random(0, 255), random(0, 255), random(0, 255), random(60, 100));
      noFill();
      line(ArrayX[i], ArrayY[i], ArrayX2[i], ArrayY2[i]);
    }
  } 
  else if (r<35) {
    background(255, 48, 48);
    for (int i = 0; i < numDots; i++) {
    fill(0);
    noStroke();
    quad(ArrayX[i]+random(0,20), ArrayY[i]+random(0,20), ArrayX2[i]+random(0,100), ArrayY2[i]+random(0,100),ArrayX[i]-random(0,20), ArrayY[i]-random(0,20), ArrayX2[i]-random(0,100), ArrayY2[i]-random(0,100));
    }
  } 
  else if (r<40) {
    background(123, 112, 255);
    for (int i = 0; i < numDots; i++) {
      noFill();
      stroke(random(0, 255), random(0, 255), random(0, 255), random(60, 100));
      strokeWeight(random(60, 100));
      strokeCap(PROJECT);
      bezier(ArrayX[i]+random(50, 100), ArrayY[i]+random(50, 100), ArrayX2[i]-random(50, 100), ArrayY2[i]-random(50, 100), ArrayX[i]-random(50, 100), ArrayY[i]-random(50, 100), ArrayX2[i]+random(50, 100), ArrayY2[i]+random(50, 100));
    }
  }
}

