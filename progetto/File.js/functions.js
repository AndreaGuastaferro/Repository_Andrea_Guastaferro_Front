var c=document.getElementById('cookie');

function nascondi() {
  document.getElementById('divCookie').style.display='none';
};

c.addEventListener("click",function(){
  nascondi();
});

function changeColor(x1){
  if (document.getElementById(x1).style.backgroundColor === 'rgb(0, 128, 0)'){
    document.getElementById(x1).style.backgroundColor=  'rgb(255, 255, 255)';
   }
  else
       {
         document.getElementById(x1).style.backgroundColor='rgb(0, 128, 0)'
         console.log("Il pulsante è verde");
       ;
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
