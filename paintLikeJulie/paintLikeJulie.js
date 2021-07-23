// getting a reference to our HTML element
let myCanvas = document.querySelector('canvas')

// initiating 2D context on it
let ctx = myCanvas.getContext('2d')
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;



//colors
let bgcolor = '#e0d2b8';
    darkblue = '#004f9f'; 
    midblue = '#7fa6c7';
    pink = '#e06184';
    orange = '#f67600';
    yellow = '#fdaf00';
    coffee = '#b7885c';
    grass = '#a0b213';
    darkgrey = '#5f666b';
    lightblack = '#232839';
    red = '#c66e5a';
    lightred = '#f09589';
    white ='#ffffff';
    lightgrey ="#dbdbdb";
    lightblue ="#e4edf0";

function circles(marginLeft,marginRight,marginTop,marginBottom,sMin,sMax,color){
let randomX = Math.floor(Math.random() * (marginRight-marginLeft)+marginRight);
let randomY = Math.floor(Math.random() * (marginBottom-marginTop)+marginBottom);
let randomSize = Math.floor(Math.random() *(sMax-sMin)+ sMin);

ctx.fillStyle = color;
ctx.beginPath();
ctx.arc(randomX, randomY, randomSize, 0, 2 * Math.PI);
ctx.fill();
  
  
}



function straightLine(xPos,yPos,width,angle,strokeColor,strokeWeight){
  
ctx.strokeStyle = strokeColor;
ctx.lineWidth = strokeWeight;
ctx.save();
ctx.translate(xPos,yPos);
ctx.rotate(angle);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(width,0);
ctx.translate(0,0);
ctx.restore();
ctx.stroke();

}

function triangle(xPos,yPos,width,height,angle,color){
  
let randomAngleLeft = Math.floor(Math.random() * 5+1);
let randomAngleRight = Math.floor(Math.random() * 5+1);
  
ctx.save();
ctx.translate(xPos,yPos);
ctx.rotate(angle);
ctx.fillStyle = color;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(width/randomAngleLeft,height);
ctx.lineTo(-width/randomAngleRight,height);
ctx.lineTo(0,0);
ctx.closePath();
ctx.fill(); 
ctx.translate(0,0);
ctx.restore();
  
}
      
function shortCurve(xPos,yPos,angle,strokeColor,strokeWeight){
  
let randomCurveHeight = Math.floor(Math.random() * 30+10);
let randomCurveWidth = Math.floor(Math.random() * 40+3); 
 
ctx.save();
ctx.translate(xPos,yPos);
ctx.rotate(angle);
ctx.lineWidth = strokeWeight;
ctx.strokeStyle = strokeColor;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.bezierCurveTo(randomCurveWidth,randomCurveHeight,-randomCurveWidth,randomCurveHeight*2,randomCurveHeight,randomCurveHeight*3);
ctx.stroke();
ctx.translate(0,0);
ctx.restore();


}

function bezierOpenRight(xPos,yPos,width,height,strokeColor,strokeWeight){

ctx.lineWidth = strokeWeight;
ctx.strokeStyle = strokeColor;
ctx.beginPath()
ctx.moveTo(xPos, yPos);
ctx.bezierCurveTo(xPos-width/2, yPos+height*0.2, xPos-width, yPos+height*1.5, xPos+width/2, yPos+height);
ctx.stroke()

}

function bezierOpenLeft(xPos,yPos,width,height,strokeColor,strokeWeight){

ctx.lineWidth = strokeWeight;
ctx.strokeStyle = strokeColor;
ctx.beginPath()
ctx.moveTo(xPos, yPos);
ctx.bezierCurveTo(xPos+width, yPos+height*0.1, xPos+width/2, yPos+height*1.2, xPos-width*0.2, yPos+height);
ctx.stroke()
  
}


function quadShapeLeft(xPos,yPos,color){
  
let randomQuadWidth = Math.floor(Math.random() * 201+10)
let randomQuadHeight = Math.floor(Math.random() * 101+10)
  
  ctx.fillStyle = color;
ctx.beginPath();
ctx.moveTo(xPos, yPos);
ctx.lineTo(xPos+randomQuadWidth,yPos+randomQuadHeight);
ctx.lineTo(xPos+randomQuadWidth,yPos+randomQuadHeight*2);
ctx.lineTo(xPos, yPos+randomQuadHeight*3);
ctx.closePath();
ctx.fill();
}

function quadShapeRight(xPos,yPos,color){
  
let randomQuadWidth = Math.floor(Math.random() * 201+10)
let randomQuadHeight = Math.floor(Math.random() * 101+10)

ctx.fillStyle = color;
ctx.beginPath();
ctx.moveTo(xPos, yPos);
ctx.lineTo(xPos-randomQuadWidth,yPos+randomQuadHeight);
ctx.lineTo(xPos-randomQuadWidth,yPos+randomQuadHeight*1.6);
ctx.lineTo(xPos, yPos+randomQuadHeight*2+30);
ctx.closePath();
ctx.fill();
 
}

function quadHorizontalRandom(xPos,yPos,angle,color){
  
let randomQuadWidth = Math.floor(Math.random() * 201+10)
let randomQuadHeight = Math.floor(Math.random() * 31+5)
let randomQuadNum = Math.floor(Math.random() * 12+1)

ctx.save();
ctx.translate(xPos,yPos);
ctx.rotate(angle);
ctx.fillStyle = color;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(randomQuadWidth,0);
ctx.lineTo(randomQuadWidth-randomQuadNum,randomQuadHeight);
ctx.lineTo(randomQuadNum, randomQuadHeight+randomQuadNum);
ctx.closePath();
ctx.fill(); 
ctx.translate(0,0);
ctx.restore();
}

function quadHorizontal(xPos,yPos,width,angle,color){
  
let randomQuadWidth = Math.floor(Math.random() * 201)
let randomQuadHeight = Math.floor(Math.random() * 101+5)
let randomQuadNum = Math.floor(Math.random() * 50+0)

ctx.save();
ctx.translate(xPos,yPos);
ctx.rotate(angle);
ctx.fillStyle = color;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(width,0);
ctx.lineTo(width+randomQuadNum,randomQuadHeight);
ctx.lineTo(0-randomQuadNum,randomQuadHeight+randomQuadNum);
ctx.closePath();
ctx.fill();
ctx.translate(0,0);
ctx.restore();
}

function DownloadCanvasAsImage(){
	let downloadLink = document.createElement('a');
	downloadLink.setAttribute('download', 'CanvasAsImage.png');
	let canvas = document.getElementById('canvas');
  let dataURL = canvas.toDataURL('image/png');
  let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
	downloadLink.setAttribute('href',url);
	downloadLink.click();
}


ctx.globalCompositeOperation='destination-over';
function bg(color){
ctx.fillStyle = color;
ctx.fillRect(0,0,myCanvas.width, myCanvas.height);
}
