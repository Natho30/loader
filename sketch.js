var video; //cargar el video. 

var angle = 0 ;//para que gire. 

var isLoaded = false; 

function preload(){// va a cargar antes. 
  

}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight); // para que el brackgrpund se ajuste en 

}
function setup() {
  createCanvas(windowWidth, windowHeight );
  initializeVideo(); 
}

function draw(){ 
 if(isLoaded == true){
   drawVideo(); 
 }else{
   drawLoading(); 
 }
 
  //ojo. estamos dibujadon el loading y el video al mismo tiempo.
 /* drawLoading(); 
  drawVideo(); */
}


function initializeVideo(){
  video = createVideo('assets/videos/centro.mov', videoLoaded); //"videoloaded ya que se carga el video llama la funcion videoloaded"

}

function videoLoaded(){
  isLoaded = true; 
  video.loop(); 
  video.hide(); 
}

function drawVideo(){
  image(video,0,0); 
  
}

function drawLoading(){ // como se va a ver mientras carga. 
background(255,210,210);
translate(windowWidth/2, windowHeight/2); 
rotate(angle);
strokeWeight(10);
stroke(255,0,0); 
line(0,0,100,100);
angle += 0.1; // la velocidad. 
}

