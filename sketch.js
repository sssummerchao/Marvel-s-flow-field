var points = [];
var mult = 0.005;
var allimages=[];
var pic;
var pos = 0;
var bg;
var imgur;


function preload(){
  allimages=['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png'];
  // var pos = floor(random(allimages.length));

  pic = loadImage(allimages[pos]);
  bg = loadImage('images/bgg.png');

}

function setup() {
  var ww= windowWidth;
  createCanvas(windowWidth,windowHeight);
  background(255,100);
  imageMode(CORNER);
  image(bg,0,0);
  textSize(16);

  // image(pic,width/2,height/2);
  // bg.resize(500, 500);
  angleMode(DEGREES);
  noiseDetail(200);
  inti();
  textFont('Helvetica');
  push();
  textSize(20);
  textStyle(BOLD);
  text("Marvel's noise flow field", 800, height/2-40);
  pop();
  text("It'll take some time to load the character, please wait patiently\nClick anywhere to switch to the next character\nOnly click once at a time", 800, height/2-10);

  imgur = createA('https://imgur.com/gallery/z5xzmcA', 'See all characters here', "_blank");
  imgur.position(800, height/2+60);
}

function inti(){

  image(bg,0,0);
  fill(100);
  push();
  textSize(20);
  textStyle(BOLD);
  text("Marvel's noise flow field", 800, height/2-40);
  pop();
  text('Click anywhere to switch to the next characters\nOnly click once at a time\nIt may take some time to load, please wait patiently', 800, height/2-10);


  var rowPoints = 520;
  var distPoints = width/rowPoints;
  for(var x=0; x<width;x+=distPoints){
    for(var y=0; y<height;y+=distPoints){
        var p = createVector(x+random(10,30),y+random(10,50));
        points.push(p);
        }
    
  }

}

function mousePressed(){
  pos = pos + 1;
  if (pos >= allimages.length) {
    pos = 0;
}
  
  pic = loadImage(allimages[pos]);
  background(255);
  points = [];
  inti();

}

function draw() {

  // background(255,10);
   for(var i=0; i<points.length;i++){
     
     var angle = map(noise(points[i].x*mult,points[i].y*mult), 0,1,0,920);
     points[i].add(createVector(cos(angle),sin(angle)));

     circle(points[i].x,points[i].y,2);
     let coolor = pic.get(points[i].x,points[i].y);
     fill(coolor);
     noStroke();
   }

  console.log(pos);
  // console.log(allimages.length);

}

