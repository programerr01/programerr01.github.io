const particles = []
function setup(){  
    //creating the canvas of the full size
    var clientHeight = document.getElementById('main-section').clientHeight;
	var clientWidth = document.getElementById('main-section').clientWidth;

	var cnv = createCanvas(clientWidth, clientHeight);
    cnv.parent("main-section");

    // createCanvas(100, 100);
    const numberOfParticles = Math.floor(100/5);
    for(var i = 0;i <numberOfParticles;i++){
        // pushing each particle to the array
        particles.push(new Particle);
    }
}

function draw(){
    // black background;
    background(0,0,0);
    //iterating through all the particles and then filling them 
    particles.forEach((p, index) =>{
        fill(100);
        p.update();
  p.draw();
  //checking for the edges
  p.checkParticles(particles.slice(index));
    })
 
}

class Particle{
    constructor(){
        //Position
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-2,2), random(-2,2));
        // Size
        this.size = 10;


    }
    //update function
    update(){
        this.pos.add(this.vel);
        this.edges();
    }
    //draw method
    draw(){
        // Using the variable color so that it looks colorfull
        let r =Math.floor(random(200));
        let g  = Math.floor(random(255));
       frameRate(20);
        noStroke();
    
        fill(`rgba(${r},${g},255,0.9)`, );
       //creating the circle at random positon
        circle(this.pos.x , this.pos.y,this.size)
    }
    edges(){
        //edge checking
        if(this.pos.x < 0 || this.pos.y > width){
            this.vel.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > height){
            this.vel.y *= -1;
        }
    }
    checkParticles(particles){
        particles.forEach(particle =>{
            const d = dist(this.pos.x , this.pos.y , particle.pos.x , particle.pos.y);

            if(d < 10){
                stroke('rgba(255,255,255,0.1)');
                line(this.pos.x ,this.pos.y , particle.pos.x , particle.pos.y);
            }
        })
    }
}