// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = 1

var one = document.createElementNS(namespace, "circle")

one.setAttribute("cx", 10)
one.setAttribute("cy", 10)
one.setAttribute("r", 10)

var two = document.createElementNS(namespace,"rect")

two.setAttribute("x",10)
two.setAttribute("y", 10)
two.setAttribute("width", 30)
two.setAttribute("height", 30)

var canvas = document.getElementById("game-board")

function gamePiece() {

  if (turn == 1) {
    canvas.appendChild(one)
turn = 2
  } else if (turn == 2){

canvas.appendChild(two)
turn = 1


  }

}
