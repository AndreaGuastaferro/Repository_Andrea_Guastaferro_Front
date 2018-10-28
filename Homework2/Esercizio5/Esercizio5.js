var array = ["Guasta", "Vinicio","Silver"];

function verifica(){
  var nome = document.querySelector('#num').value;
  var trovato = 0;
  var i = 0;
  while( i < array.length && trovato !== 1){
    if(nome === array[i] ){
      trovato = 1;
    }
    i++;

  }

  if(trovato === 1){
    document.getElementById('res').innerHTML = "Puoi Entrare";
  }
  else {
    document.getElementById('res').innerHTML = "Non Non puoi Entrare";
  }
}
