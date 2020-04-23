var Sun
var Mercury, Venus, Earth
var x
function preload(){
SunImage = loadImage("sun.png")
mercuryImage = loadImage("alternateuniverse-master/me.png")
venusImage = loadImage("alternateuniverse-master/ju.png")
earthImage = loadImage("alternateuniverse-master/e.png")
x = 0
}
function setup() {
  createCanvas(800,800);
  Sun = createSprite(0, 0,40, 40);
  Sun.addImage(SunImage)
  Sun.scale  = 0.1
  angle = 0
  Mercury = createSprite(140,140)
  Mercury.addImage(mercuryImage)
  Mercury.scale=0.1
  Venus = createSprite(180,180)
  Venus.addImage(venusImage)
  Venus.scale=0.3
  Earth = createSprite(230,230)
  Earth.addImage(earthImage)
  Earth.scale=0.2
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES)
  translate(width/2,height/2)
  rotate(angle)
  line(0,0,Sun.x,Sun.y)
  Sun.scale = Sun.scale+0.01
  angle = angle+1
  drawSprites();
  if(Sun.isTouching(Mercury)){
    Mercury.destroy();
  }
  if(Sun.isTouching(Venus)){
    Venus.destroy();
  }
  if(Sun.isTouching(Earth)){
    Earth.destroy();
  }
  /*
  for(var x=0; x<50; x = x+0.01) {
    Sun.scale = Sun.scale+x
    }
    console.log(Sun.scale)
  */}