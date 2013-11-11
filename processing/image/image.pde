PImage img;
PImage destination; 
color pink = color(255, 102, 204);
color blue = color(204, 102, 255);

void setup() {
  size(675, 900);
  img = loadImage("F1000001.png");
  destination = createImage(675, 900, RGB);
  frameRate(60);
}

void draw() {
   loadPixels();
   img.loadPixels();
   destination.loadPixels();
  
   for (int i = 0; i < width; i++) {
   for (int j = 0; j < height; j++ ) {
      int loc =  i + j*destination.width;
      color pix = img.pixels[loc];
      float r = random(0, 30);

    // Pixel to the left location and color
    int leftLoc = (0) + j*destination.width;
    color leftPix = blue;

    // New color is difference between pixel and left neighbor
    float diff = abs(brightness(pix)+r - brightness(leftPix)+r);
    destination.pixels[loc] = color(diff);
    

      }
      

   }
  destination.updatePixels(); 
  image(destination,0,0);
  //save("mix.png");
  //exit(); 
}
 
