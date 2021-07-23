function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

quadHorizontal(430,100,520,0,white);




for(i=0; i<5 ;i++){
  
bezierOpenRight(getRndInteger(10, myCanvas.width),getRndInteger(10, myCanvas.height),getRndInteger(70, 480),getRndInteger(20, 90),yellow,4);

}
for(i=0; i<5 ;i++){
bezierOpenLeft(getRndInteger(10, myCanvas.width),getRndInteger(10, myCanvas.height),getRndInteger(70, 480),getRndInteger(20, 90),lightred,4);

}

for(i=0; i<20 ;i++){
circles(20,100,30,200,5,10,grass);
circles(620,800,430,500,5,10,coffee);
  quadShapeRight(getRndInteger(10, myCanvas.width-10),getRndInteger(10, myCanvas.height-10),midblue);

 
}
for(i=0; i<25 ;i++){
  quadHorizontalRandom(getRndInteger(10, myCanvas.width),getRndInteger(10, myCanvas.height),getRndInteger(0, 90),pink)

 
}
for(i=0; i<20 ;i++){

quadShapeLeft(getRndInteger(200, myCanvas.width-200),getRndInteger(100, myCanvas.height-100),darkblue);
 
  straightLine(getRndInteger(10, myCanvas.width),getRndInteger(10, myCanvas.height),getRndInteger(100, myCanvas.height),getRndInteger(170, 180),lightblack,2);

}

for(i=0; i<15 ;i++){


  straightLine(getRndInteger(10, myCanvas.width),getRndInteger(10, myCanvas.height),getRndInteger(50, myCanvas.height),getRndInteger(170, 180),lightblack,5);
  quadHorizontalRandom(getRndInteger(10, myCanvas.width),getRndInteger(10, myCanvas.height),0,orange)
  shortCurve(200,40,45,lightblack,3)
  shortCurve(800,560,90,lightblack,3);
}



for(i=0; i<105 ;i++){
shortCurve(getRndInteger(200, myCanvas.width-300),getRndInteger(200, myCanvas.height-200),getRndInteger(0, 180),lightblack,0.5);

}

 
 bg(bgcolor);

