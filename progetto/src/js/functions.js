var $ = window.jQuery=require('jquery');
const Mustache =require ('mustache');
var bootstrap=require ('bootstrap');

//const slick= require ('slick-carousel');

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

$( document ).ready(function() {


  $('#hereCookie').on('click', () => {
    $('.cookie').fadeOut();
  });
  doAjax();


});


  function doAjax(){
    $.ajax({
      url: '/articoli',
      method: 'GET',
      dataType: "json",
      success: function(result) {
        //  $.each(result, function(key, value) {
        var template = $('#template').html();
        //console.log(template);
        var rendered = Mustache.render(template, result);
        //console.log('il renderizzato:');
        //    console.log(rendered);
        $('#articolo').html(rendered);
      },
      error: function(error){
        console.log("Errore insuccesso doAjax:");
        console.log(error);
      },
      complete: function() {
      $('article .btn, .btn-default').on('click', function() {

          setLike($(this));
        });
      }
    });
  };


  function setLike(self){
    //console.log('Log prima della chiamata:' + self.attr('data-like'));
    $.ajax({
      url: '/articolo',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ id: self.attr('id'), like: self.attr('data-like') }),
      success: function(result){
      //console.log('Log dopo della chiamata:' + result);
      if(result === 'ok'){
        self.toggleClass("btn-success")
        self.attr('data-like', result);
      }
        //  console.log('valore di data-like:' + self.attr('data-like'));

      },
      error: function(error){
        console.log("Errore insuccesso setLike:");
        console.log(error);
      }
    });
  }

$( document ).ajaxComplete(function() {
    $('#cookie').on('click', () => {
      $('#divCookie').hide();
  })
});
