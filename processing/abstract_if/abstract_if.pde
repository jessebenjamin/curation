int numDots = 1000;

//Background Map
PVector[] v1 = new PVector[numDots];
PVector[] v2 = new PVector[numDots];
PVector[] v3 = new PVector[numDots];
PVector[] v4 = new PVector[numDots];

PVector[] v1c = new PVector[numDots];
PVector[] v2c = new PVector[numDots];
PVector[] wAh = new PVector[numDots];

void setup() {

  size(window.innerWidth, 4000);
  
  for (int i = 0; i < numDots; i++) {
    v1[i] = new PVector(random(width), random(height));
    v2[i] = new PVector(v1[i].x+random(-40, 40), v1[i].y+random(-40, 40));
    v3[i] = new PVector(random(width), random(height));
    v4[i] = new PVector(v3[i].x+random(-40, 40), v3[i].y+random(-40, 40));

    v1c[i] = new PVector(v1[i].x+random(-20, 20), v1[i].y+random(-20, 20));
    v2c[i] = new PVector(v2[i].x+random(-20, 20), v2[i].y+random(-20, 20));

    wAh[i] = new PVector(random(1, 20), random(1, 20));
  }

  noLoop();
  smooth();
}

void draw() {

  float r = random(0, 75);

  if (r<5) {
    background(64, 224, 208);
    for (int i = 0; i < numDots; i++) {
      fill(205, 92, 92);
      noStroke(); 
      quad(v3[i].x+random(0, 40), v3[i].y+random(0, 40), v4[i].x+random(0, 200), v4[i].y+random(0, 200), v3[i].x-random(0, 40), v3[i].y-random(0, 40), v4[i].x-random(0, 200), v4[i].y-random(0, 200));
    }
  } 
  else if (r<10) {
    background(64, 224, 208);
    for (int i = 0; i < numDots; i++) {
      fill(43, 43, 43);
      noStroke(); 
      quad(v1[i].x+random(0, 20), v1[i].y+random(0, 20), v2[i].x+random(0, 100), v2[i].y+random(0, 100), v1[i].x-random(0, 20), v1[i].y-random(0, 20), v2[i].x-random(0, 100), v2[i].y-random(0, 100));
    }
  } 
  else if (r<15) {
    background(10);
    for (int i = 0; i < numDots; i++) {
      noStroke();
      fill(random(0, 255), random(0, 255), random(0, 255), random(60, 100));
      quad(v1[i].x+random(50, 100), v1[i].y+random(50, 100), v2[i].x-random(50, 100), v2[i].y-random(50, 100), v1[i].x-random(50, 100), v1[i].y-random(50, 100), v2[i].x+random(50, 100), v2[i].y+random(50, 100));
      smooth();
    }
  } 
  else if (r<20) {
    background(255, 215, 0);
    for (int i = 0; i < numDots; i++) {
      fill(255);
      noStroke();
      quad(v1[i].x+random(0, 20), v1[i].y+random(0, 20), v2[i].x+random(0, 100), v2[i].y+random(0, 100), v1[i].x-random(0, 20), v1[i].y-random(0, 20), v2[i].x-random(0, 100), v2[i].y-random(0, 100));
    }
  } 
  else if (r<25) {
    background(176, 48, 96);
    for (int i = 0; i < numDots; i++) {
      noFill();
      strokeCap(PROJECT);
      strokeWeight(random(60, 100));
      stroke(random(0, 255), 0, random(0, 255), random(60, 100));
      quad(v1[i].x+random(50, 100), v1[i].y+random(50, 100), v2[i].x-random(50, 100), v2[i].y-random(50, 100), v1[i].x-random(50, 100), v1[i].y-random(50, 100), v2[i].x+random(50, 100), v2[i].y+random(50, 100));
      smooth();
    }
  } 
  else if (r<30) {
    background(78, 238, 148);
    for (int i = 0; i < numDots; i++) {
      strokeWeight(20);
      stroke(random(0, 255), random(0, 255), random(0, 255), random(60, 100));
      noFill();
      line(v1[i].x, v1[i].y, v2[i].x, v2[i].y);
    }
  } 
  else if (r<35) {
    background(205, 92, 92);
    for (int i = 0; i < numDots; i++) {
      fill(43, 43, 43);
      noStroke();
      quad(v1[i].x+random(0, 20), v1[i].y+random(0, 20), v2[i].x+random(0, 100), v2[i].y+random(0, 100), v1[i].x-random(0, 20), v1[i].y-random(0, 20), v2[i].x-random(0, 100), v2[i].y-random(0, 100));
    }
  } 
  else if (r<40) {
    background(123, 112, 255);
    for (int i = 0; i < numDots; i++) {
      noFill();
      stroke(random(0, 255), random(0, 255), random(0, 255), random(60, 100));
      strokeWeight(random(60, 100));
      strokeCap(PROJECT);
      bezier(v1[i].x+random(50, 100), v1[i].y+random(50, 100), v2[i].x-random(50, 100), v2[i].y-random(50, 100), v1[i].x-random(50, 100), v1[i].y-random(50, 100), v2[i].x+random(50, 100), v2[i].y+random(50, 100));
    }
  }
  else if (r<45) {
    background(43, 43, 43);
    for (int i = 0; i < numDots; i++) {
      noFill();
      stroke(255); 
      strokeWeight(random(1, 3)); 
      line(v1[i].x, v1[i].y, v1[i].x-random(0, 40), v1[i].y-random(0, 40));
    }
  } 
  else if (r<50) {
    background(255, 255, 240);
    for (int i = 0; i < numDots; i++) {
      noFill();
      stroke(255, 215, 0);
      strokeWeight(random(5, 10));
      point(v1[i].x-random(0, 40), v1[i].y-random(0, 40));
    }
  } 
  else if (r<55) {
    background(0, 0, 25);
    for (int i = 0; i < numDots; i++) {
      noStroke();
      fill(random(200, 240), random(200, 240), random(200, 240), random(60, 100));
      quad(v1[i].x+random(10, 50), v1[i].y+random(10, 50), v2[i].x-random(10, 50), v2[i].y-random(10, 50), v1[i].x-random(10, 50), v1[i].y-random(10, 50), v2[i].x+random(10, 50), v2[i].y+random(10, 50));
    }
  } 
  else if (r<60) {
    background(0);
    for (int i = 0; i < numDots; i++) {
      noStroke();
      fill(64, 224, 208);
      bezier(v1[i].x+random(5, 10), v1[i].y+random(5, 10), v2[i].x-random(5, 10), v2[i].y-random(5, 10), v1[i].x-random(5, 10), v1[i].y-random(5, 10), v2[i].x+random(5, 10), v2[i].y+random(5, 10));
    }
  }
  else if (r<65) {
    background(43, 43, 43);
    for (int i = 0; i < numDots; i++) {
      stroke(random(200, 255));
      strokeWeight(2);
      noFill();
      bezier(v1[i].x+random(5, 10), v1[i].y+random(5, 10), v1c[i].x, v1c[i].y, v2[i].x+random(5, 10), v2[i].y+random(5, 10), v2c[i].x, v2c[i].y);
    }
  }
  else if (r<70) {
    background(205, 92, 92);
    for (int i = 0; i < numDots; i++) {
      stroke(255);
      strokeWeight(random(1, 4));
      noFill();
      rotate(radians(random(PI, TWO_PI)));
      rect(v4[i].x+random(5, 10), v4[i].y+random(5, 10), wAh[i].x+random(5, 10), wAh[i].y+random(5, 10));
    }
  }
  else if (r<75) {
    background(205, 92, 92);
    for (int i = 0; i < numDots; i++) {
      stroke(255);
      strokeWeight(random(1, 4));
      noFill();
      triangle(v1[i].x+random(5, 10), v1[i].y+random(5, 10), v2[i].x-random(5, 20), v2[i].y-random(5, 20), v1[i].x+random(5, 30), v1[i].y+random(5, 30));
    }
  }

//  rectMode(CENTER);
//  noStroke();
//  fill(255);
//  rect(width/2, height/2, width-(width/10), height-(height/50));
  //saveFrame("background-##.png");
}

