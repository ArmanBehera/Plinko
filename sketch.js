const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

// Elements of the plinko games
var ground;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 200;

function setup() {
    createCanvas(480, 600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240, 580, 480, 20);

    // For pushing divisons into the array
    for (var k = 0; k <=width; k += 80) {
        divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }

    // For pushing plinkos into the array
    for (var j = 40; j <= width; j += 50){

        plinkos.push(new Plinko(j , 50, 10));
    }

    for (var a = 15; a <= width; a += 50){

        plinkos.push(new Plinko(a , 110, 10));
    } 

    for (var b = 40; b <= width; b += 50){

        plinkos.push(new Plinko(b , 170, 10));
    }

    for (var c = 15; c <= width; c += 50){

        plinkos.push(new Plinko(c, 230, 10));
    }

}

function draw() {
    
    background("black");

    Engine.update(engine);

    ground.display();

    // For displaying the divisions
    for (var k = 0; k < divisions.length; k++) {
     
        divisions[k].display();
    }

    // For adding particles to the array
    if (frameCount % 90 === 0){

        particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
    }

    // For dispplaying the particles in the array
    for (var i = 0; i < particles.length; i++){

        particles[i].display();
    }

    for (var i = 0; i < plinkos.length; i++){

        plinkos[i].display();
    }
    
}