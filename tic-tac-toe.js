// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = 1

function game(){
  var yesorno = "unclicked"
     document.getElementById("rect-one")

if (turn == 1) {
    "rect-one".setAttribute("fill","red")
    turn = 2
    yesorno = "clicked"
  } else if (turn == 2){
    rect(1,1).setAttribute("fill","blue")

     turn = 1
     yesorno = "clicked"
}
}
