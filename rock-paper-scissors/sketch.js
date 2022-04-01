// Ahmet Kadir Zengin
let img;
let rock; // 0
let paper; // 1
let scissors; // 2
let pNothingg;
let cNothingg;
let player = false; // Player's choice
let playerWin= 0;
let computerWin = 0;
let tie = 0;
let source;

function setup() {
  createCanvas(700, 500);
  background(255);
  board();
}

function draw() {
  noFill();
}

function board(){
rect(50,50,200);
rect(300,50,200);
pNothing(50,150); // player default
cNothing(301,150); // computer default
}

function play(pDecide)
{
  player = true;
  if(pDecide == 0)
  {
    dRock();
  }
  else if(pDecide == 1)
  {
    dPaper();
  }
  else if(pDecide == 2)
  {
    dScissors();
  }
  computer(pDecide);
}

function computer(pDecide)
{
  player = false;
  let cDecide;
  cDecide = Math.floor(Math.random() * 3);
  if(cDecide == 0)
  {
    dRock();
  }
  else if(cDecide == 1)
  {
    dPaper();
  }
  else if(cDecide == 2)
  {
    dScissors();
  }
  result(pDecide, cDecide);
}

async function result(pDecide, cDecide)
{
  await new Promise(resolve => setTimeout(resolve, 50));
  if((pDecide == 0 && cDecide == 2)||
  (pDecide == 1 && cDecide == 0)||
  (pDecide == 2 && cDecide == 1)){
    playerWin++;
    alert("YOU WIN!\nWIN = " + playerWin);
  }
  else if((cDecide == 0 && pDecide == 2)||
  (cDecide == 1 && pDecide == 0)||
  (cDecide == 2 && pDecide == 1)){
    computerWin++;
    alert("YOU LOSE!\nLOSE = " + computerWin);
  }
  else
  {
    tie++;
    alert("DRAW!\nDRAW = " + tie);
  }
  board(); //Inorder to reset the images
}

function pNothing(nX,nY) // default stage
{
  pNothingg = createImg('https://i.hizliresim.com/t3avs77.png');
  pNothingg.size(199,199);
  pNothingg.position(nX,nY);
}

function cNothing(nX,nY) // default stage
{
  cNothingg = createImg('https://i.hizliresim.com/37265n6.png');
  cNothingg.size(199,199);
  cNothingg.position(nX,nY);
}

function dRock()
{
  if(player)
  {
    source = 'https://i.hizliresim.com/gm5bicr.jpg'
    rock = createImg(source);
    rock.size(199,199);
    rock.position(50,150);
  }
  else
  {
    source = 'https://i.hizliresim.com/975lamm.jpg'
    rock = createImg(source);
    rock.size(199,199);
    rock.position(301,150);
  }
}
function dPaper()
{
  if(player)
  {
    source = 'https://i.hizliresim.com/259r4rt.jpg'
    paper = createImg(source);
    paper.size(199,199);
    paper.position(50,150);
  }
  else
  {
    source = 'https://i.hizliresim.com/lca8qdz.jpg'
    paper = createImg(source);
    paper.size(199,199);
    paper.position(301,150);
  }
}

function dScissors()
{
  if(player)
  {
    source = 'https://i.hizliresim.com/sg6cj5k.jpg'
    scissors = createImg(source);
    scissors.size(199,199);
    scissors.position(50,150);
  }
  else
  {
    source = 'https://i.hizliresim.com/eh8afrm.jpg'
    scissors = createImg(source);
    scissors.size(199,199);
    scissors.position(301,150);
  }
}