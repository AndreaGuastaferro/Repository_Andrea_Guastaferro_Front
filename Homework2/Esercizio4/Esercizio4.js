function quadnumeri(){
  var elenco=Number(document.querySelector('#num').value);
  var vector= new Array();
  for(var i=0; i<= elenco; i++){
    vector[i]=i*i;
  }
  var fine="Operazione eseguita";
  document.getElementById('ris').innerHTML= vector;
  document.getElementById('fine').innerHTML= fine;
}
