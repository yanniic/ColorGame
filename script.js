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
  let choosenColor = squareList[Math.floor((Math.random()*5)+1)].style.background;
  colorHead.innerHTML+=" " + choosenColor;
  return choosenColor;
}

//defines the game logic
function gameLogic(choosenColor){
  let statusText = document.getElementById("statusText");
  let squareList = document.getElementsByClassName("square");
  console.log(choosenColor);
  for (let i=0;i<squareList.length;i++){
    squareList[i].addEventListener("click", function(event){
      if (event.target.style.background === choosenColor){
        statusText.style.color ="#26ff00";
        statusText.innerHTML ="YOU WIN!";
      }
      else {
        statusText.style.color="red";
        statusText.innerHTML ="TRY AGAIN!";
      }
    })
  }
}

// main function
window.onload = function(){
  initialise();
  gameLogic(chooseColor());
}
