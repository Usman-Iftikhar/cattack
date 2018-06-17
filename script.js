'use strict';

// $(document).ready(function() {

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

  var clickCount = 0;
  var autoClick = 0;
  var cats = 0;
  var fly = 0;
  var lizard = 0;
  var rat = 0;
  var snake = 0;

  function timer() {
    clickCount = clickCount + autoClick;
    if(autoClick>=1){
        clickCount = clickCount + cats*2;
    }

    // clickCount = clickCount + fly*3;
    update();
  }

  setInterval(timer,2000); // 2 seconds interval

  function add() {
    clickCount = clickCount+1;
    update();
  }

  function buyAutoClick(){
    if (clickCount >= ((autoClick+1) * 12)) { // need at least 1 to multiply by 12
      clickCount = clickCount - ((autoClick+1)*12);
      autoClick = autoClick + 1;
      update();
    }
  }

  function buyAutoCat(){
    if (clickCount >= Math.pow(((cats+1) * 5),2)) { // need at least 1 to multiply by 12
      clickCount = clickCount - Math.pow(((cats+1) * 5),2);
      cats = cats + 1;
      update();
    }
  }

  function catchFly(){
    if (clickCount >= Math.pow(((fly+1) * 10),2)) { // need at least 1 to multiply by 12
      clickCount = clickCount - Math.pow(((fly+1) * 10),2);
      fly = fly + 1;
      update();
    }
  }

  function catchLizard(){
    if (clickCount >= Math.pow(((lizard+1) * 5),3)) { // need at least 1 to multiply by 12
      clickCount = clickCount - Math.pow(((lizard+1) * 5),3);
      lizard = lizard + 1;
      update();
    }
  }

  function catchRat(){
    if (clickCount >= Math.pow(((rat+1) * 10),3)) { // need at least 1 to multiply by 12
      clickCount = clickCount - Math.pow(((rat+1) * 10),3);
      rat = rat + 1;
      update();
    }
  }

  function catchSnake(){
    if (clickCount >= Math.pow(((snake+1) * 10),4)) { // need at least 1 to multiply by 12
      clickCount = clickCount - Math.pow(((snake+1) * 10),4);
      snake = snake + 1;
      update();
    }
  }

// })
