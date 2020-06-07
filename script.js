var i = 0;
var y = 0;
var txt = ' ... ';
var txt2 = 'well... what are you waiting for?';
var speed = 700;
var speed2 = 40;
var count = 0;
var clicked = false;
var first = 'MALACHYDONOVAN.COM';
var namespace = ' ';
var last = 'DONOVAN';
var speed3 = 10;

function mainName (){
  if (i < first.length) {
    document.getElementById("clicktime").innerHTML += first.charAt(y);
    y++;
    setTimeout(mainName, speed3);
  }
}

document.addEventListener("click",
function clickEffect()
{
    clicked = true
    var full_del = txt.replace('...','');
    document.getElementById("demo").innerHTML = full_del;
    var full_del2 = txt2.replace('well... what are you waiting for?','');
    document.getElementById("demo").innerHTML = full_del2;
    mainName();
});

function clearText(){
  if (count < 1 && clicked == false) {
  var del = txt.replace('...','');
  document.getElementById("demo").innerHTML = del;
  i = 0;
dotFunction();
count++;
  }
  else {
    var del = txt.replace('...','');
    document.getElementById("demo").innerHTML = del;
    dotFunctionTwo();
  }
}

function dotFunction() {
  if (i < txt.length && clicked == false) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(dotFunction, speed);
  }
  else {
    clearText()
  }
}

function dotFunctionTwo() {
  if (i < txt2.length && clicked == false) {
    document.getElementById("demo").innerHTML += txt2.charAt(y);
    y++;
    setTimeout(dotFunctionTwo, speed2);
  }
}
