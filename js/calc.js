var box = document.getElementById('display');

function addToScreen(x) {
  box.value+= x;

if (x==='C'){
  box.value = '';
}
}

function answer() {
  x=box.value;
  x=eval(x);
  box.value = x;
}

function power(){
  x=box.value;
  x=eval(x*x);
  box.value = x;
}

function backSpace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  box.value = newNum;
}