x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

apple = "apple.jpg";
ball = "ball.jpg";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
document.getElementById("status").innerHTML = "system is listening please speak";
recognition.start();  
}
recognition.onresult = function(event) {
 console.log(event);
 var content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "THE SPEECH HAS BEEN RECOGNISED AS : " + content;

 if (content == "circle") {
 x = Math.floor(Math.random()*900);
 y = Math.floor(Math.random()*600);
 document.getElementById("status").innerHTML = "started drawing circle";
 draw_circle = "set";
 }
 
 if (content == "rectangle") {
 x = Math.floor(Math.random()*900);
 y = Math.floor(Math.random()*600);
 document.getElementById("status").innerHTML = "started drawing rectangle";
 draw_rect = "set";   
 }
}

function setup() {
 canvas = createCanvas(900,600);  
}

function draw() {
if (draw_circle == "set") {
Image(apple, 50 , 50)
document.getElementById("status").innerHTML = "apple is drawn";
draw_circle = "";    
}   

if (draw_rect == "set") {
Image(ball,50 , 50);
document.getElementById("status").innerHTML = "ball is drawn";
draw_rect = "";    
} 
}