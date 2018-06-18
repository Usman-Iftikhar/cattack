'use strict';

// $(document).ready(function() {

// UDATE ALL OUTPUTS WITH EACH FUNCTION CLICK
  function update (){
    document.getElementById('attack-count').innerHTML = clickCount + " times!";

    document.getElementById('ammountAutoClick').innerHTML = autoClick;
    document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12)

    document.getElementById('ammountAutoCat').innerHTML = cats;
    document.getElementById('costAutoCat').innerHTML = Math.pow(((cats+1) * 5),2);

    document.getElementById('ammountFly').innerHTML = fly;
    document.getElementById('costFly').innerHTML = Math.pow(((fly+1) * 10),2);

    document.getElementById('ammountLizard').innerHTML = lizard;
    document.getElementById('costLizard').innerHTML = Math.pow(((lizard+1) * 5),3);

    document.getElementById('ammountRat').innerHTML = rat;
    document.getElementById('costRat').innerHTML = Math.pow(((rat+1) * 10),3);

    document.getElementById('ammountSnake').innerHTML = snake;
    document.getElementById('costSnake').innerHTML = Math.pow(((snake+1) * 10),4);
  }

// MAIN VARIABLES
  var clickCount = 0;
  var autoClick = 0;
  var cats = 0;
  var fly = 0;
  var lizard = 0;
  var rat = 0;
  var snake = 0;

// TIME FUNCTION TO INCREASE AUTOCLICKS
  function timer() {
    clickCount = clickCount + autoClick;
// NO OTHER UPGRADE SHOULD AUTOCLICK UNTIL ATLEAST 1 AUTOCLICK IS OBTAINED
    if(autoClick>=1){
        clickCount = clickCount + cats*2;
    }
    update();
  }

// SET TIME INTERVAL TO 2 SECONDS FOR AUTOCLICK
  setInterval(timer,2000); // 2 seconds interval

// ADD 1 TO CLICK COUND
  function add() {
    clickCount = clickCount+1;
    update();
  }
// FUNCTION TO AUTO CLICK
// NEXT AUTO CLICK INCREASES BY 12 CLICK
// INCREMENT AUTOCLICK BY 1
  function buyAutoClick(){
    if (clickCount >= ((autoClick+1) * 12)) { // need at least 1 to multiply by 12
      clickCount = clickCount - ((autoClick+1)*12);
      autoClick = autoClick + 1;
      update();
    }
  }

// FUNCITON TO GET ANOTHER CAT
// NEXT CAT INCREASE BY (CAT+5)^2
// INCREMENT CAT BY 1
  function buyAutoCat(){
  if (clickCount >= Math.pow(((cats+1) * 5),2)) {
      clickCount = clickCount - Math.pow(((cats+1) * 5),2);
      cats = cats + 1;
      update();
    }
  }

// FUNCITON CATCH A FLY
// NEXT FLY INCREASE BY (FLY+10)^2
// INCREMENT FLY BY 1
  function catchFly(){
    if (clickCount >= Math.pow(((fly+1) * 10),2)) {
      clickCount = clickCount - Math.pow(((fly+1) * 10),2);
      fly = fly + 1;
      update();
    }
  }

  // FUNCITON CATCH A LIZARD
  // NEXT LIZAARD INCREASE BY (LIZARD+5)^3
  // INCREMENT LIZARD BY 1
  function catchLizard(){
    if (clickCount >= Math.pow(((lizard+1) * 5),3)) {
      clickCount = clickCount - Math.pow(((lizard+1) * 5),3);
      lizard = lizard + 1;
      update();
    }
  }

  // FUNCITON CATCH A RAT
  // NEXT RAT INCREASE BY (RAT+10)^3
  // INCREMENT RAT BY 1
  function catchRat(){
    if (clickCount >= Math.pow(((rat+1) * 10),3)) {
      clickCount = clickCount - Math.pow(((rat+1) * 10),3);
      rat = rat + 1;
      update();
    }
  }

  // FUNCITON CATCH A SNAKE
  // NEXT NEXT SNAKE INCREASE BY (SNAKE+10)^4
  // INCREMENT FLY BY 1
  function catchSnake(){
    if (clickCount >= Math.pow(((snake+1) * 10),4)) {
      clickCount = clickCount - Math.pow(((snake+1) * 10),4);
      snake = snake + 1;
      update();
    }
  }

// })
