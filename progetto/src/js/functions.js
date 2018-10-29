const $ = require('jquery');
const Mustache = require('Mustache');

/*$(document).ready(function(){
$.ajax({
  url: "ajaxFile.json",
  method: "GET",
  success: function(result) {
  for(var i=0; i< result.length; i++){              //con la doAjax in result andrà un oggetto composto dalle stringhe in ajaxFile.json
      $('#call').append(result[i].text);          //invce di scrivere in html, passerò l'oggetto nei tag tramite questa funzione che me li trasferirà direttamente nella pagina html
  }
  },
  error: function() {
    console.log('error');
  }
});
});*/

$.ajax({
url: '/articoli',
method: "GET",
dataType:'json',
success: function(result){
  console.log(result);
  var template = $('#template').html();
        console.log(template);
        var rendered = Mustache.render(template, result);
        console.log('il renderizzato:');
          console.log(rendered);
        $('#articolo').html(rendered);
},
error: function(result){
 console.log('error');
}
});


$( document ).ajaxComplete(function() {
    $('#cookie').on('click', () => {
      $('#divCookie').hide();
  })
});


$( document ).ajaxComplete(function() {
  $('.btn , .btn-default').on('click', event => {
      $(event.currentTarget).toggleClass("btn-success");
  })
});


/*
function changeColor(x1){
  if (document.getElementById(x1).style.backgroundColor === 'rgb(0, 128, 0)'){
    document.getElementById(x1).style.backgroundColor=  'rgb(255, 255, 255)';
   }
  else
       {
         document.getElementById(x1).style.backgroundColor='rgb(0, 128, 0)'
         console.log("Il pulsante è verde");
     }
   };

   var x1=document.getElementById('button1');
   x1.addEventListener("click",function(){
     changeColor('button1');
   });

   var x1=document.getElementById('button2');
   x1.addEventListener("click",function(){
     changeColor('button2');
   });

   var x1=document.getElementById('button3');
   x1.addEventListener("click",function(){
     changeColor('button3');
   });


   var x1=document.getElementById('button4');
   x1.addEventListener("click",function(){
     changeColor('button4');
   });
   */
