function setup() {
  // create the canvas (800px wide, 800px high)
  createCanvas(800, 800);

  // draw a border to help you see the size
  // this isn't compulsory (remove this code if you like)
  strokeWeight(5);
  rect(0, 0, width, height);
}

let death = false;
let moveA = false;
let moveB = false;
let finalStage = false;

function draw() {
  // your cool monster code goes in this draw function

  //sky
  background(0,201,230);
  
  //cloud
  noStroke();
  fill(255);
  circle(100,100,50);
  circle(140,100,50);
  circle(115,75,50);
  
  circle(300,100,70);
  circle(340,100,70);
  circle(315,75,70);
  
  //wall
  stroke(0);
  fill(164,116,73);
  rect(0,300,800,800);
  
  //sign
  fill(255);
  rect(100,400,205,100);

  //T
  stroke(0);
  line(110,440,130,440);
  line(120,440,120,470);
  //H
  line(135,440,135,470);
  line(150,440,150,470);
  line(135,455,150,455)
  //Y
  line(163,455,163,470);
  line(155,440,163,455);
  line(170,440,163,455);
  //L
  line(175,440,175,470);
  line(175,470,185,470);
  //A
  line(190,470,200,440);
  line(210,470,200,440);
  line(195,460,205,460);
  //C
  line(215,440,215,470);
  line(215,440,225,440);
  line(215,470,225,470);
  //I
  line(231,440,241,440);
  line(236,440,236,470);
  line(231,470,241,470);
  //N
  line(250,440,250,470);
  line(250,440,265,470);
  line(265,440,265,470);
  //E
  line(275,440,275,470);
  line(275,440,290,440);
  line(275,470,290,470);
  line(275,455,290,455);
  
  //ground
  fill(206,205,203);
  rect(0,600,800,400);

  //Thylacine
  noStroke();
  fill(212,156,74);
  ellipse(620,640,200,50);
  //ears
  fill(0,0,0)
  triangle(555,610,550,630,560,630);
  triangle(560,640,560,650,575,645);
  //eyes
  fill(255);
  stroke(0,0,0);
  strokeWeight(2);
  if(death){
    line(543,628,547,632);
    line(550,641,554,645);
  }else{
    circle(545,630,4);
    circle(552,643,4);
  }
  noStroke();
  fill(0);
  //nose
  circle(520,635,10);
  //pattern
  triangle(580,625,585,635,595,635);
  triangle(580,655,585,635,595,635);
  
  triangle(600,620,610,635,620,635);
  triangle(600,660,610,635,620,635);
  
  triangle(625,617,635,635,645,635);
  triangle(625,663,635,635,645,635);
  
  triangle(650,615,660,635,670,635);
  triangle(650,665,660,635,670,635);
  
  triangle(675,617,685,635,695,635);
  triangle(675,662,685,635,695,635);
  
  triangle(700,623,710,640,720,640);
  triangle(700,657,710,640,720,640);
  //tail
  fill(212,156,74);
  rect(718,635,50,10);
  circle(770,640,10);
  
  //recenter
  translate(0,200);
  //thylacine is tired
  if(frameCount>=400){
    //dialog
    fill(255);
    circle(530,410,10);
    circle(550,390,20);
    circle(575,365,40);
    //z
    stroke(0);
    line(570,360,580,360);
    line(580,360,570,370);
    line(570,370,580,370);
    
    //fairy in the final position
    if(frameCount>=500){
      finalStage=true;
      fairyMove(400,300);
      
      //dialog
      fill(255);
      circle(385,247,10);
      circle(370,230,20);
      circle(350,200,40);
      //smile
      stroke(0);
      line(335,195,340,190);
      line(340,190,345,195);
      line(355,195,360,190);
      line(365,195,360,190);
      line(350,210,345,205);
      line(350,210,355,205);
      
      //thylacine closes eyes
      death = true;
    }else{
      //fairy moves up
      moveB=true;
      fairyMove(400,800-frameCount);
      moveB=false;
    }
  }else{
    //Fairy of Nature moves closer
    moveA=true;
    fairyMove(frameCount,frameCount);
    moveA=false;
  }
  
  //Cage
  translate(0,-200);
  stroke(0,0,0);
  strokeWeight(3);
  line(400,400,400,700);
  line(450,400,450,700);
  line(500,400,500,700);
  line(550,400,550,700);
  line(600,400,600,700);
  line(650,400,650,700);
  line(700,400,700,700);
  line(750,400,750,700);
  line(480,300,480,600);
  line(440,350,440,650);
  //upper
  line(450,400,530,300);
  line(500,400,580,300);
  line(550,400,630,300);
  line(600,400,680,300);
  line(650,400,730,300);
  line(700,400,780,300);
  line(750,400,830,300);
  //horizontal
  line(400,700,800,700);
  line(400,400,800,400);
  line(480,300,800,300);
  //tilt
  line(400,700,480,600);
  line(400,400,480,300);
}

function fairyMove(x,y){
  noStroke();
  //wings
  fill(0,150,205);
  //push one
  push();
  translate(x,y);
  //push two
  push();
  if(moveA){
    rotate(random(PI/3,PI));
  }else if(moveB){
    rotate(random(-PI/4,PI/4));
  }
  ellipse(-50,0,50,20);
  ellipse(50,0,50,20);
  //pop two
  pop();
  //body of monster
  //push three
  push();
  if(moveA){
    rotate(3*PI/4);
  }
  //cornsilk half
  fill(255,248,220);
  arc(0, 0, 100, 100, PI, 0, CHORD);
  //tree trunk brown
  fill(83,53,10);
  arc(0, 0, 100, 100, 0, PI, CHORD);
  //curve
  fill(255,248,220);
  ellipse(0,0,100,50);
  //eyes
  fill(100,200,0);
  circle(0,0,30);
  fill(135,206,235)
  arc(0, 0, 30, 30, PI, 0, CHORD);
  //pop three
  pop();
  //pop one
  pop();
}

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "monster.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("monster.png");
  }
}
