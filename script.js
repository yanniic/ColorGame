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
    //console.log(colorArray[i]);
  }
  //initialise squareList with the colors
  for (let i=0;i<squareList.length;i++){
    if(colorArray[i]=="rgb(24,27,32)")
      squareList[i].style.background = "rgb(3,10,95)"
    else
      squareList[i].style.background = colorArray[i];
  }
}

function chooseColor(){
  //choose one color of the given squareList
  let squareList = document.getElementsByClassName("square");
  let choosenColor = squareList[Math.floor((Math.random()*5)+1)].style.background;
  return choosenColor;
}

function gameLogic(choosenColor){
  let squareList = document.getElementsByClassName("square");
  console.log(choosenColor);
  for (let i=0;i<squareList.length;i++){
    squareList[i].addEventListener("click", function(event){
      if (event.target.style.background === choosenColor)
        console.log("WIN");
      else
        console.log("TRY AGAIN");
    })
  }
}
// main function
window.onload = function(){
  initialise();
  gameLogic(chooseColor());

}
