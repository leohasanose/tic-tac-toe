// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = 1

function game(){
  var canvas = document.getElementById("game-board")

  if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 45)
    circle.setAttribute("cy", 45)
    circle.setAttribute("r",40)
    circle.setAttribute("fill", "red")
    canvas.appendChild(circle)
  turn = 2

  } else if(turn == 2){
    var circle3 = document.createElementNS(namespace, "circle")
    circle3.setAttribute("cx", 45)
    circle3.setAttribute("cy", 45)
    circle3.setAttribute("r",40)
    circle3.setAttribute("fill", "blue")
    canvas.appendChild(circle3)
  turn = 1
}
}

function game2() {
  var canvas = document.getElementById("game-board")
  if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 45)
    circle.setAttribute("cy", 145)
    circle.setAttribute("r",40)
    circle.setAttribute("fill", "red")
    canvas.appendChild(circle)
turn = 2
  } else if(turn == 2){
    var circle3 = document.createElementNS(namespace, "circle")
    circle3.setAttribute("cx", 45)
    circle3.setAttribute("cy", 145)
    circle3.setAttribute("r",40)
    circle3.setAttribute("fill", "blue")
    canvas.appendChild(circle3)
turn = 1
  }
}

function game3(){
  var canvas = document.getElementById("game-board")
if (turn == 1){
  var circle4 = document.createElementNS(namespace, "circle")
  circle4.setAttribute("cx", 45)
  circle4.setAttribute("cy", 245)
  circle4.setAttribute("r",40)
  circle4.setAttribute("fill", "red")
  canvas.appendChild(circle4)
  turn = 2
}else if (turn == 2){
  var circle5 = document.createElementNS(namespace, "circle")
  circle5.setAttribute("cx", 45)
  circle5.setAttribute("cy", 245)
  circle5.setAttribute("r",40)
  circle5.setAttribute("fill", "blue")
  canvas.appendChild(circle5)
turn = 1
}
}

function game4(){

  var canvas = document.getElementById("game-board")
  if (turn == 1){
  var circle6 = document.createElementNS(namespace, "circle")
  circle6.setAttribute("cx", 155)
  circle6.setAttribute("cy", 45)
  circle6.setAttribute("r",40)
  circle6.setAttribute("fill", "red")
  canvas.appendChild(circle6)
  turn = 2
  }else if (turn == 2){
  var circle7 = document.createElementNS(namespace, "circle")
  circle7.setAttribute("cx", 155)
  circle7.setAttribute("cy", 45)
  circle7.setAttribute("r",40)
  circle7.setAttribute("fill", "blue")
  canvas.appendChild(circle7)
  turn = 1
  }
}

function game5(){

  var canvas = document.getElementById("game-board")
  if (turn == 1){
  var circle8 = document.createElementNS(namespace, "circle")
  circle8.setAttribute("cx", 155)
  circle8.setAttribute("cy", 145)
  circle8.setAttribute("r",40)
  circle8.setAttribute("fill", "red")
  canvas.appendChild(circle8)
  turn = 2
  }else if (turn == 2){
  var circle9 = document.createElementNS(namespace, "circle")
  circle9.setAttribute("cx", 155)
  circle9.setAttribute("cy", 145)
  circle9.setAttribute("r",40)
  circle9.setAttribute("fill", "blue")
  canvas.appendChild(circle9)
  turn = 1
  }
}

function game6(){

  var canvas = document.getElementById("game-board")
  if (turn == 1){
  var circle10 = document.createElementNS(namespace, "circle")
  circle10.setAttribute("cx", 155)
  circle10.setAttribute("cy", 245)
  circle10.setAttribute("r",40)
  circle10.setAttribute("fill", "red")
  canvas.appendChild(circle10)
  turn = 2
  }else if (turn == 2){
  var circle11 = document.createElementNS(namespace, "circle")
  circle11.setAttribute("cx", 155)
  circle11.setAttribute("cy", 245)
  circle11.setAttribute("r",40)
  circle11.setAttribute("fill", "blue")
  canvas.appendChild(circle11)
  turn = 1
  }
}

function game7(){

  var canvas = document.getElementById("game-board")
  if (turn == 1){
  var circle12 = document.createElementNS(namespace, "circle")
  circle12.setAttribute("cx", 265)
  circle12.setAttribute("cy", 45)
  circle12.setAttribute("r",40)
  circle12.setAttribute("fill", "red")
  canvas.appendChild(circle12)
  turn = 2
  }else if (turn == 2){
  var circle13 = document.createElementNS(namespace, "circle")
  circle13.setAttribute("cx", 265)
  circle13.setAttribute("cy", 45)
  circle13.setAttribute("r",40)
  circle13.setAttribute("fill", "blue")
  canvas.appendChild(circle13)
  turn = 1
  }
}

function game8(){

  var canvas = document.getElementById("game-board")
  if (turn == 1){
  var circle14 = document.createElementNS(namespace, "circle")
  circle14.setAttribute("cx", 265)
  circle14.setAttribute("cy", 145)
  circle14.setAttribute("r",40)
  circle14.setAttribute("fill", "red")
  canvas.appendChild(circle14)
  turn = 2
  }else if (turn == 2){
  var circle15 = document.createElementNS(namespace, "circle")
  circle15.setAttribute("cx", 265)
  circle15.setAttribute("cy", 145)
  circle15.setAttribute("r",40)
  circle15.setAttribute("fill", "blue")
  canvas.appendChild(circle15)
  turn = 1
  }
}

function game9(){

  var canvas = document.getElementById("game-board")
  if (turn == 1){
  var circle16 = document.createElementNS(namespace, "circle")
  circle16.setAttribute("cx", 265)
  circle16.setAttribute("cy", 245)
  circle16.setAttribute("r",40)
  circle16.setAttribute("fill", "red")
  canvas.appendChild(circle16)
  turn = 2
  }else if (turn == 2){
  var circle17 = document.createElementNS(namespace, "circle")
  circle17.setAttribute("cx", 265)
  circle17.setAttribute("cy", 245)
  circle17.setAttribute("r",40)
  circle17.setAttribute("fill", "blue")
  canvas.appendChild(circle17)
  turn = 1
  }
}
