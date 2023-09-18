var ColorScheme = false; //false = light

//Needed variables


function drawBackground(colorsch) {
  if(colorsch == true) {
    document.body.style.backgroundColor = "#372d35";
  } else {
    document.body.style.backgroundColor = "#ede7ec";
  }
}


function switchBackground() {
  if(ColorScheme == false) {
    ColorScheme = true;
  } else {
    ColorScheme = false;
  }
  drawBackground(ColorScheme);
}