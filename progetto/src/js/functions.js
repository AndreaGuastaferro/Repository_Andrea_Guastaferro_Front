const $ = require('jquery');

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
url: 'ajaxFile.json',
method: "GET",
success: function(result){
 $('#article1').append("<h3>" + result[0].text + "</h3>");
        $('#article1').append("<img class='Immagine3' src=" + result[1].text + "><br>");
        $('#article1').append("<span class="+"'label label-pill label-primary'"+">" + result[2].text + "</span>");
        $('#article1').append("<p>" + result[3].text + "</p>");
        /*$('#art1').append("<span class="+"'like btn btn-light'>"+ result[4].text +"</span>");*/

 $('#article2').append("<h3>" + result[4].text + "</h3>");
        $('#article2').append("<img class='Immagine3' src=" + result[5].text + "><br>");
        $('#article2').append("<span class="+"'label label-pill label-primary'"+">" + result[6].text + "</span>");
        $('#article2').append("<p>" + result[7].text + "</p>");
        /*$('#art2').append("<span class="+"'like btn btn-light'>"+ result[9].text +"</span>");*/

        $('#article3').append("<h3>" + result[8].text + "</h3>");
        $('#article3').append("<img class='Immagine3' src=" + result[9].text + "><br>");
        $('#article3').append("<span class="+"'label label-pill label-primary'"+">" + result[10].text + "</span>");
        $('#article3').append("<p>" + result[11].text + "</p>");
        /*$('#art3').append("<span class="+"'like btn btn-light'>"+ result[14].text +"</span>");*/

        $('#article4').append("<h3>" + result[12].text + "</h3>");
        $('#article4').append("<img class='Immagine3' src=" + result[13].text + "><br>");
        $('#article4').append("<span class="+"'label label-pill label-primary'"+">" + result[14].text + "</span>");
        $('#article4').append("<p>" + result[15].text + "</p>");
        /*$('#art4').append("<span class="+"'like btn btn-light'>"+ result[19].text +"</span>");*/
},
error: function(result){
 console.log('error');
}
});


$('#cookie').on('click', () => {
  $('#divCookie').hide();
});

$('.btn , .btn-default').on('click', event => {
    $(event.currentTarget).toggleClass("btn-success");
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
