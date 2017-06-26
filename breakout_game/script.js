var canvas =document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');

var x= canvas.width/2;
var y= canvas.height-40;
var dx=2;
var dy=-2;
var ballRadius=10;
var paddleWidth=75;
var paddleHeight=10;
var paddleX=(canvas.width-paddleWidth)/2;
var rightPressed=false;
var leftPressed=false;
var lives =3;
var brickrowcount=10;
var brickcolcount=10;
var brickwidth=75;
var brickheight=20;
var brickoffsetleft=30;
var brickoffsettop=50;
var brickpadding=10;
var score=0;
var high=0;

var bricks=[];
for(c=0;c<brickcolcount;c++){
  bricks[c]=[];
  for(r=0;r<brickrowcount;r++){
    bricks[c][r]={x:0,y:0,status:1}
  }
}

document.addEventListener("keydown",keyDownHandler);
document.addEventListener("keyup",keyUpHandler);

function drawBricks(){
  for(c=0;c<brickcolcount;c++){
    for(r=0;r<brickrowcount;r++){
      if(bricks[c][r].status==1){
        var brickX=c*(brickwidth+brickpadding)+brickoffsetleft;
        var brickY=r*(brickheight+brickpadding)+brickoffsettop;
        bricks[c][r].x=brickX;
        bricks[c][r].y=brickY;
        ctx.beginPath();
        ctx.rect(brickX,brickY,brickwidth,brickheight);
        ctx.fillStyle="blue";
        ctx.fill();
        ctx.closePath();
      }
      }
  }
}

function collisionDetection(){
for(c=0;c<brickcolcount;c++){
  for(r=0;r<brickrowcount;r++){
    var b= bricks[c][r];
    if(b.status==1){
      if(x>b.x && x<brickwidth+b.x && y>b.y && y<brickheight+b.y){
        dy=-dy;
      b.status=0;
      score++;
      if(score==brickrowcount*brickcolcount){
        alert("YOU WIN !!");
        document.location.reload();
      }
    }
    }
  }
}
}
dy=-dy;

function drawScore(){
  ctx.font="16px Arial";
  ctx.fillStyle="red";
  ctx.fillText("Score : "+score,10,20);
}

function drawLives(){
  ctx.font="16px Arial";
  ctx.fillStyle="red";
  ctx.fillText("Lives : "+lives,canvas.width-70,20);
}

function keyDownHandler(e){
  if(e.keyCode==39){
    rightPressed=true;
  }
  else if(e.keyCode==37) {
    leftPressed=true;
  }
}

function keyUpHandler(e){
  if(e.keyCode==39){
    rightPressed=false;
  }
  else if(e.keyCode==37) {
    leftPressed=false;
  }
}

ctx.beginPath();
ctx.rect(20,40,50,50);
ctx.fillStyle="red";
ctx.fill();
ctx.closePath();

//setInterval(draw,10);

function drawBall(){
  ctx.beginPath();
  ctx.arc(x,y,10,0,2*Math.PI,false);
  ctx.fillStyle="green";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.closePath();
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();
  drawScore();
  drawLives();
  if(y+dy<ballRadius){
    dy=-dy;
  }else if(y+dy>canvas.height-ballRadius){
    if(x>paddleX&&x<paddleX+paddleWidth){
      dy=-dy;
    }else {
      lives--;
      if(!lives){
        alert("GAME OVER !!");
       document.location.reload();
      }
      else{
        x=canvas.width/2;
        y=canvas.height-40;
        dx=2;
        dy=-2;
        paddleX=(canvas.width-paddleWidth)/2;

      }
    }
  }
  if(x+dx>canvas.width-ballRadius||x+dx<ballRadius){
    dx=-dx;
  }
  if(rightPressed && paddleX<canvas.width-paddleWidth){
    paddleX+=7;
  }
  else if(leftPressed && paddleX>0) {
    paddleX-=7;
  }
  x+=dx;
  y+=dy;
requestAnimationFrame(draw);
}
document.addEventListener("mousemove",mousemoveHandler);
function mousemoveHandler(e){
  var relativeX=e.clientX-canvas.offsetLeft;
  if(relativeX>0+paddleWidth/2 &&relativeX<canvas.width-paddleWidth/2){
    paddleX=relativeX-paddleWidth/2;
  }
}
draw();
