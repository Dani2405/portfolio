var fieldY = document.getElementById("screen");
var fieldX = window.innerWidth - 100;
var spawnableRange = document.getElementById("screen").offsetHeight - 100;
var birdSpeed = 4;
var gameScore = 0;
var gameLives = 10;
var fps = 24;
var gameOver = false;

spawnBird();

function runGame() {
  document.body.style.cursor = "url(src/assets/crosshair.png) 10 10, auto";
  document.getElementById("buttonContainer").remove();
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("gameInfo").style.display = "block";

  tickEvent();

  gameLoop = setInterval(function(){
    if(!gameOver) {
      setTimeout(function(){
        spawnBird();
      }, randomDelay(500, 1500));
    } else {
      clearInterval(gameLoop);
    }
  }, 2000/birdSpeed);
}

function tickEvent() {
  birds = document.getElementsByClassName("bird");
  if (birds.length > 0) {
    setInterval(function(){
      moveBirds();
    }, fps); // Animation framerate
  }
}

function spawnBird() {
  birds = document.getElementsByClassName("bird");
  var position = Math.floor(Math.random() * spawnableRange + 10)
  fieldY.innerHTML += '<div id="bird'+parseInt(birds.length+1)+'" class="bird moving"  style="top: '+position+'px; margin-left: -100px" onclick="killBird(this)"></div>';
}

function randomDelay(rangeMin, rangeMax) {
  return Math.floor(Math.random() * rangeMax + rangeMin);
}

function moveBirds() {
  birds = document.getElementsByClassName("moving");

  for (i = 0; i < birds.length; i++) {
    bird = birds[i];
    if (bird === undefined) {
      //Failed
      break;
    } else {
      var birdXLocationInt = parseInt(bird.style.marginLeft.replace("px", ""));
      var birdXLocation = (birdXLocationInt+birdSpeed) + "px";

      if(birdXLocationInt >= fieldX+100) {
        console.log("Bird missed! :(");
        gameLives--;
        document.getElementById("gameLives").innerHTML = gameLives;
        bird.remove();
        checkDeath();
      } else {
        bird.style.marginLeft = birdXLocation;
      }
    }
  }
}

function killBird(bird) {
  birdSpeed += .1;
  //bird.style.backgroundImage = "url(src/assets/bird/feathers.gif)";
  //bird.classList.add("animate__animated", "animate__fadeOut", "animate__slow");
  //bird.classList.remove("moving");
  gameScore += 10;
  document.getElementById("gameScore").innerHTML = gameScore;

  bird.remove();
}

function checkDeath() {
  if(gameLives <= 0) {
    gameOver = true;
    fps = 0;
    birdSpeed = 0;
    document.getElementById("screen").innerHTML = "";
    document.getElementById("title").innerHTML = "Game Over!";
    document.getElementById("title").style.visibility = "visible";
  }
}