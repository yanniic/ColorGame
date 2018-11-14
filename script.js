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

// main function
window.onload = function(){
  initialise();
}
