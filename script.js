var i = 0;
var y = 0;
var txt = ' ... ';
var txt2 = 'well... what are you waiting for?';
var speed = 700;
var speed2 = 40;
var count = 0;

document.addEventListener("click", function(){
  document.getElementById("clicktime").innerHTML = "hello";
});




function clearText(){
  if (count < 1) {
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
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(dotFunction, speed);
  }
  else {
    clearText()
  }
}

function dotFunctionTwo() {
  if (i < txt2.length) {
    document.getElementById("demo").innerHTML += txt2.charAt(y);
    y++;
    setTimeout(dotFunctionTwo, speed2);
  }
}

function start(){
  dotFunction();
  dotFunctionTwo();
}
