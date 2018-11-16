//initialise function
function initialise(){
  let colorArray= {};
  let squareList = document.getElementsByClassName("square");

  //generates random rgb colors for colorArray
  for (let i=0;i<squareList.length;i++){
    let colorInRgb = "rgb(";
    for(let j=0;j<3;j++){
      if(j==2)
        colorInRgb+=Math.floor((Math.random() * 255)+1)
      else
        colorInRgb+=Math.floor((Math.random() * 255)+1) +",";
    }
    colorInRgb+=")";
    colorArray[i]=colorInRgb;
  }
  //initialise squareList with the colors
  for (let i=0;i<squareList.length;i++){
    if(colorArray[i]=="rgb(24,27,32)")
      squareList[i].style.background = "rgb(3,10,95)"
    else
      squareList[i].style.background = colorArray[i];
  }
}

//returns one color of the squareList array and displays it in the header of html file
function chooseColor(){
  let colorHead = document.getElementById("colorHead");
  let squareList = document.getElementsByClassName("square");
  let choosenColor = squareList[Math.floor((Math.random() * 5) + 1)].style.backgroundColor;
  console.log(choosenColor);
  colorHead.innerHTML+=" " + choosenColor;
  return choosenColor;
}

function endOfGame(choosenColor,isWin){
  let squareList = document.getElementsByClassName("square");
  if(!isWin){
    choosenColor = "black";
  }
  for(let i=0;i<squareList.length;i++){
    squareList[i].style.backgroundColor = choosenColor
  }
}

//defines the game logic
function gameLogic(choosenColor,counter){
  let statusText = document.getElementById("statusText");
  let squareList = document.getElementsByClassName("square");
  for (let i=0;i<squareList.length;i++){
      squareList[i].addEventListener("click", function (event) {
      statusText.innerHTML = " ";
      if (event.target.style.backgroundColor == choosenColor){
          statusText.innerHTML = "YOU WIN!";
          statusText.style.color = "#26ff00";
          endOfGame(choosenColor,true);
      }
      else if (counter > 1 && event.target.style.backGroundColor !=choosenColor) {
          statusText.innerHTML ="YOU LOSE!";
          endOfGame(choosenColor, false);
      }
      else {
        counter++;
        console.log(counter);
        statusText.style.color="red";
        statusText.innerHTML ="TRY AGAIN!";
      }
    })
  }
}

// main function
window.onload = function(){
  var counter = 0;
  initialise();
  gameLogic(chooseColor(),counter);
}
