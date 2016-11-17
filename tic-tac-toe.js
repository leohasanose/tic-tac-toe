// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = 1

function game(){

  var yesorno = "no"
  var rectone =  document.getElementById("rect-one")

if (turn == 1) {
  rectone.setAttribute("fill","red")
    turn = 2
    yesorno = "yes"
  } else if (turn == 2)
    rectone.setAttribute("fill","blue")

     turn = 1
     yesorno = "yes"
}
}

function game2() {
  var canvas = document.getElementById("game-board")
  if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 45)
    circle.setAttribute("cy", 45)
    circle.setAttribute("r",40)
    circle.setAttribute("fill", "magenta")
    canvas.appendChild(circle)
  }
}
