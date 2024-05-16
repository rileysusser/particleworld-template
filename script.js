let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // Change the background color
  background(100, 150, 200); // Soft blue background

  // Generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  // Set the background in the draw function to clear old frames
  background(100, 150, 200);

  // Update and display each particle
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    // Optionally, remove the particle if it goes off the bottom of the screen
    if (p.y > height) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpd = random(-2, 2); // Random horizontal speed
    this.ySpd = random(0.5, 2);
    // Add width and height properties for the rectangle
    this.width = random(10, 30); // Random width between 10 and 30 pixels
    this.height = random(5, 20); // Random height between 5 and 20 pixels
  }

  update() {
    this.y += this.ySpd;
    this.x += this.xSpd;

    // Prevent particles from leaving the screen horizontally
    if (this.x > width || this.x < 0) {
      this.xSpd *= -1; // Reverse direction if hitting the left or right edge
    }
    // Prevent particles from leaving the screen vertically
    if (this.y > height || this.y < 0) {
      this.ySpd *= -1; // Reverse direction if hitting the top or bottom edge
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    fill(255); // Set particle color to white
    // Draw rectangle centered on the particle's current position
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}