let tyler;
let bg;
let bg2;

let big;

let bastardColor;

function preload() {
  
  bg = loadImage("assets/background.jpg")
  bg2 = loadImage("assets/background2.jpg")
  tyler = loadJSON("assets/tylerAlbums.json")

  // carico tutte le canzoni (non sono riuscito a caricarle da JSON)
  assmilk = loadSound("assets/assmilk.mp3")
  yonkers = loadSound("assets/yonkers.mp3")
  tamale = loadSound("assets/tamale.mp3")
  smuckers = loadSound("assets/smuckers.mp3")
  wtfb = loadSound("assets/wtfb.mp3")
  abiag = loadSound("assets/abiag.mp3")
  wusyaname = loadSound("assets/wusyaname.mp3")
  
  // carico tutte le immagini (non sono riuscito a caricarle da JSON)
  bastard = loadImage("assets/bastard.jpg")
  goblin = loadImage("assets/goblin.jpg")
  wolf = loadImage("assets/wolf.jpg")
  cherrybomb = loadImage("assets/cherrybomb.jpg")
  flowerboy = loadImage("assets/flowerboy.jpg")
  igor = loadImage("assets/igor.jpg")
  cmiygl = loadImage("assets/cmiygl.jpg")

}

function setup() {
createCanvas(windowWidth, windowHeight)
cursor("assets/cursore.png", 1, 1)
voice = new p5.Speech()
analyzer = new p5.Amplitude();

imageMode(CENTER)
image(bg,width/2,height/2,windowWidth,windowHeight)

var big = 2.5; // scala delle copertine

if (windowWidth/windowHeight < 1) {
  imageMode(CENTER)
image(bg2,width/2,height/2,windowWidth,windowHeight)
  big = 1.5;
} // in caso la finestra sia più alta che larga cambia lo sfondo

imageMode(CENTER)
textAlign(CENTER)

bastardColor = "red";

// ogni immagine ha posizione e dimensione in base ai valori presi dal JSON

image(bastard, 
  width*tyler.albums[0].ordine/8, 
  height*tyler.albums[0].ascolti/900000,
  tyler.albums[0].minuti*big,
  tyler.albums[0].minuti*big)
  fill(bastardColor)

image(goblin, 
  width*tyler.albums[1].ordine/8, 
  height*tyler.albums[1].ascolti/900000,
  tyler.albums[1].minuti*big,
  tyler.albums[1].minuti*big)

image(wolf, 
  width*tyler.albums[2].ordine/8, 
  height*tyler.albums[2].ascolti/900000,
  tyler.albums[2].minuti*big,
  tyler.albums[2].minuti*big)

image(cherrybomb, 
  width*tyler.albums[3].ordine/8, 
  height*tyler.albums[3].ascolti/900000,
  tyler.albums[3].minuti*big,
  tyler.albums[3].minuti*big)

image(flowerboy, 
  width*tyler.albums[4].ordine/8, 
  height*tyler.albums[4].ascolti/900000,
  tyler.albums[4].minuti*big,
  tyler.albums[4].minuti*big)

image(igor, 
  width*tyler.albums[5].ordine/8, 
  height*tyler.albums[5].ascolti/900000,
  tyler.albums[5].minuti*big,
  tyler.albums[5].minuti*big)

image(cmiygl, 
  width*tyler.albums[6].ordine/8, 
  height*tyler.albums[6].ascolti/900000,
  tyler.albums[6].minuti*big,
  tyler.albums[6].minuti*big)


// in caso la finestra sia più alta che larga scrivo il testo
  if (windowWidth/windowHeight < 1) {
  textAlign(CENTER)
  fill("red")
  textFont("VT323")
  textSize(60)
  text("MEGLIO DAL COMPUTER", width/2, height/2)
  }
}




function draw() {


// per ogni disco creo due variabili distanza e raggio, 
// e se il cursore vi passa sopra partono voce, canzone e testo
  d = dist(width*tyler.albums[0].ordine/8, 
        height*tyler.albums[0].ascolti/900000, 
        mouseX, mouseY)
  r = tyler.albums[0].minuti*1.5;
    
  if (d < r) {
  if(assmilk.isPlaying() == false){
    //canzone
    assmilk.play()
    //scritta su rettangolo
    push()
    translate(6*width/7,height/6)
    fill("black")
    rectMode(CENTER)
    stroke(197,255,244)
    rect(0, -10, 200, 100, 10, 10, 10, 10)
    fill("red")
    noStroke()
    textAlign(CENTER)
    textFont("VT323")
    textSize(40)
    text(tyler.albums[0].name, 0, -30)
    text(tyler.albums[0].anno, 0, 0)
    textSize(20)
    text(tyler.albums[0].brano, 0, 30)
    pop()
    //voce
    voice.listVoices();
    voice.setVoice("Amelie");
    voice.speak("assmilk, by tyler the creator");
  }
      } else {
    assmilk.stop()
  }


  d1 = dist(width*tyler.albums[1].ordine/8, 
    height*tyler.albums[1].ascolti/900000, 
    mouseX, mouseY)
r1 = tyler.albums[1].minuti*1.5;

if (d1 < r1) {
if(yonkers.isPlaying() == false){
yonkers.play()
push()
translate(6*width/7,height/6)
fill("black")
rectMode(CENTER)
stroke(197,255,244)
rect(0, -10, 200, 100, 10, 10, 10, 10)
noStroke()
textAlign(CENTER)
textFont("VT323")
fill("red")
textSize(40)
text(tyler.albums[1].name, 0, -30)
text(tyler.albums[1].anno, 0, 0)
textSize(20)
text(tyler.albums[1].brano, 0, 30)
pop()

voice.listVoices();
voice.setVoice("Amelie");
voice.speak("yonkers, by Tyler the creator");
}
  } else {
yonkers.stop();
}


d2 = dist(width*tyler.albums[2].ordine/8, 
  height*tyler.albums[2].ascolti/900000, 
  mouseX, mouseY)
r2 = tyler.albums[2].minuti*1.5;

if (d2 < r2) {
if(tamale.isPlaying() == false){
tamale.play()
push()
translate(6*width/7,height/6)
fill("black")
rectMode(CENTER)
stroke(197,255,244)
rect(0, -10, 200, 100, 10, 10, 10, 10)
noStroke()
textAlign(CENTER)
textFont("VT323")
fill("red")
textSize(40)
text(tyler.albums[2].name, 0, -30)
text(tyler.albums[2].anno, 0, 0)
textSize(20)
text(tyler.albums[2].brano, 0, 30)
pop()

voice.listVoices();
voice.setVoice("Amelie");
voice.speak("tamale, by Tyler the creator");
}
} else {
tamale.stop();
}



d3 = dist(width*tyler.albums[3].ordine/8, 
  height*tyler.albums[3].ascolti/900000, 
  mouseX, mouseY)
r3 = tyler.albums[3].minuti*1.5;

if (d3 < r3) {
if(smuckers.isPlaying() == false){
smuckers.play()
push()
translate(6*width/7,height/6)
fill("black")
rectMode(CENTER)
stroke(197,255,244)
rect(0, -10, 200, 100, 10, 10, 10, 10)
noStroke()
textAlign(CENTER)
textFont("VT323")
fill("red")
textSize(40)
text(tyler.albums[3].name, 0, -30)
text(tyler.albums[3].anno, 0, 0)
textSize(20)
text(tyler.albums[3].brano, 0, 30)
pop()

voice.listVoices();
voice.setVoice("Amelie");
voice.speak("smuckers, by Tyler the creator");
}
} else {
smuckers.stop();
}



d4 = dist(width*tyler.albums[4].ordine/8, 
  height*tyler.albums[4].ascolti/900000, 
  mouseX, mouseY)
r4 = tyler.albums[4].minuti*1.5;

if (d4 < r4) {
if(wtfb.isPlaying() == false){
wtfb.play()
push()
translate(6*width/7,height/6)
fill("black")
rectMode(CENTER)
stroke(197,255,244)
rect(0, -10, 200, 100, 10, 10, 10, 10)
noStroke()
textAlign(CENTER)
textFont("VT323")
fill("red")
textSize(40)
text(tyler.albums[4].name, 0, -30)
text(tyler.albums[4].anno, 0, 0)
textSize(20)
text(tyler.albums[4].brano, 0, 30)
pop()

voice.listVoices();
voice.setVoice("Amelie");
voice.speak("WHERE THE FLOWERS BLOOM, by Tyler the creator");
}
} else {
wtfb.stop();
}


d5 = dist(width*tyler.albums[5].ordine/8, 
  height*tyler.albums[5].ascolti/900000, 
  mouseX, mouseY)
r5 = tyler.albums[5].minuti*1.5;

if (d5 < r5) {
if(abiag.isPlaying() == false){
abiag.play()
push()
translate(6*width/7,height/6)
fill("black")
rectMode(CENTER)
stroke(197,255,244)
rect(0, -10, 200, 100, 10, 10, 10, 10)
noStroke()
textAlign(CENTER)
textFont("VT323")
fill("red")
textSize(40)
text(tyler.albums[5].name, 0, -30)
text(tyler.albums[5].anno, 0, 0)
textSize(20)
text(tyler.albums[5].brano, 0, 30)
pop()

voice.listVoices();
voice.setVoice("Amelie");
voice.speak("A BOY IS A GUN, by Tyler the creator");
}
} else {
abiag.stop();
}


d6 = dist(width*tyler.albums[6].ordine/8, 
  height*tyler.albums[6].ascolti/900000, 
  mouseX, mouseY)
r6 = tyler.albums[6].minuti*1.5;

if (d6 < r6) {
if(wusyaname.isPlaying() == false){
wusyaname.play()
push()
translate(6*width/7,height/6)
fill("black")
rectMode(CENTER)
stroke(197,255,244)
rect(0, -10, 200, 100, 10, 10, 10, 10)
noStroke()
textAlign(CENTER)
textFont("VT323")
fill("red")
textSize(20)
text(tyler.albums[6].name, 0, -30,)
textSize(40)
text(tyler.albums[6].anno, 0, 0)
textSize(20)
text(tyler.albums[6].brano, 0, 30)
pop()

voice.listVoices();
voice.setVoice("Amelie");
voice.speak("wusyaname, by Tyler the creator");
}
} else {
wusyaname.stop();
}
  
//in base al volume faccio pulsare il cerchio rosa
   volume = analyzer.getLevel();
    volume = map(volume,0,1,0,height);
    rectMode(CENTER)
    stroke(199,255,238)
    fill("darkGreen")
    rect(width/6, 6*height/7,130,130,10,10,10,10)
    noStroke()
    fill("magenta")
    ellipse(width/6, 6*height/7, volume/4)
}