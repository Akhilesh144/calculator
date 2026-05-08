function number1() {
  let num1 = parseInt((document.getElementById("result").value += 1));
}
function number2() {
  let num2 = parseInt((document.getElementById("result").value += 2));
}
function number3() {
  let num3 = parseInt((document.getElementById("result").value += 3));
}
function number4() {
  let num4 = parseInt((document.getElementById("result").value += 4));
}
function number5() {
  let num5 = parseInt((document.getElementById("result").value += 5));
}
function number6() {
  let num6 = parseInt((document.getElementById("result").value += 6));
}
function number7() {
  let num7 = parseInt((document.getElementById("result").value += 7));
}
function number8() {
  let num8 = parseInt((document.getElementById("result").value += 8));
}
function number9() {
  let num9 = parseInt((document.getElementById("result").value += 9));
}
function zero() {
  let gero = parseInt((document.getElementById("result").value += 0));
}
function add() {
  let sum = parseInt((document.getElementById("result").value += "+"));
}
function sub() {
  let rem = parseInt((document.getElementById("result").value += "-"));
}
function mult() {
  let multi = parseInt((document.getElementById("result").value += "*"));
}
function divis() {
  let div = parseInt((document.getElementById("result").value += "/"));
}
function dot() {
  let dots = parseInt((document.getElementById("result").value += "."));
}
function power() {
  document.getElementById("result").value += "**";
}
function display() {
  try {
    let equ = document.getElementById("result").value;
    let solve = eval(equ);
    document.getElementById("result").value = solve;
  } catch (error) {
    document.getElementById("result").value = "Math error";
  }
}
function remove() {
  document.getElementById("result").value = " ";
}
function delte() {
  let delt = document.getElementById("result").value;
  let insert = Math.floor(delt / 10);
  document.getElementById("result").value = insert;
}
/*function delte() {
  let delt = document.getElementById("result").value;
  let length = 
  document.getElementById("result").value = length;
}*/
  