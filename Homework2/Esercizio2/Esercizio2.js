

function quadrato(){

var ar=new Array(15);

  for(var i=0; i<ar.length;i++){

      ar[i]=(i*i);
    }

      return ar;
}



  var fine="Fine operazione";
 document.getElementById('ar').innerHTML=quadrato();
document.getElementById('fine').innerHTML=fine;
