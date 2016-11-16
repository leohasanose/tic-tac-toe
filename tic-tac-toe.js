// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = 1

function game(){

  var yesorno = "no"
  var rectone =  document.getElementById("rect-one")
  var canvas = document.getElementById("game-board")

if (turn == 1) {
    rectone.setAttribute("fill","red")
    turn = 2
    yesorno = "yes"
  } else if (turn == 2){
    rectone.setAttribute("fill","blue")

     turn = 1
     yesorno = "yes"
}
}

function game2(){
  var yesorno = "unclicked"
  var recttwo =  document.getElementById("rect-two")
  var canvas = document.getElementById("game-board")

if (turn == 1) {
    recttwo.setAttribute("fill","red")
    turn = 2
    yesorno = "clicked"
  } else if (turn == 2){
    recttwo.setAttribute("fill","blue")

     turn = 1
     yesorno = "clicked"
}
}
