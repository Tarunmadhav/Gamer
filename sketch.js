var ball, img, paddle;

function preload() {
  ball = loadImage("ball.png");
  paddle = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  football = createSprite(200, 200, 10, 10);
  football.addImage("football", ball);
  football.Scale = 0.5;
  computerpaddle = createSprite(30, 200, 50, 30);
  computerpaddle.addImage("computerpaddle", paddle);
  playerpaddle = createSprite(370, 200, 50, 30);
  playerpaddle.addImage("playerpaddle", paddle);

  football.velocityX = -5;
  football.velocityY = 5
  computerpaddle.velocityY = 10;
  //playerpaddle.velocityY = 3;

}


function draw() {
  background(205, 153, 0);
  edges = createEdgeSprites();
  football.bounceOff(edges[0]);
  football.bounceOff(edges[0]);
  football.bounceOff(edges[2]);
  football.bounceOff(edges[3]);
  computerpaddle.bounceOff(edges[2]);
  computerpaddle.bounceOff(edges[3]);
  football.bounceOff(computerpaddle);
  football.bounceOff(playerpaddle);
  playerpaddle.bounceOff(edges[2]);
  playerpaddle.bounceOff(edges[3]);


  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */

  /* Prevent the paddle from going out of the edges */

  if (keyDown(UP_ARROW)) {
    /* what should happen when you press the UP Arrow Key */
    playerpaddle.velocityY = -15;
    playerpaddle.y=playerpaddle.y-1;
    
    
  } else if (keyDown(DOWN_ARROW)) {
    /* what should happen when you press the UP Arrow Key */
    playerpaddle.velocityY = 15;
    playerpaddle.y=playerpaddle.y+1;
  }  else {
    playerpaddle.velocityY = 0;
  }
  drawSprites();

}

function randomVelocity() {
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}