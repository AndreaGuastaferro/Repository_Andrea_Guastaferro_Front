
function somma(){
  var num1= Number(document.querySelector('#num1').value);
  var num2= Number(document.querySelector('#num2').value);
  document.getElementById('somma').innerHTML=num1+num2;
}

function differenza(){
  var num3=Number(document.querySelector('#num3').value);
  var num4=Number(document.querySelector('#num4').value);
document.getElementById('differenza').innerHTML=num3-num4;
}

function moltiplicazione(){
  var num5=Number(document.querySelector('#num5').value);
  var num6=Number(document.querySelector('#num6').value);
document.getElementById('moltiplicazione').innerHTML=num5*num6;
}

function divisione(a,b){
  var num7=Number(document.querySelector('#num7').value);
  var num8=Number(document.querySelector('#num8').value);
  document.getElementById('divisione').innerHTML=num7/num8;
}
