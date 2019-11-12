
var inputgenerala=document.getElementById("inputsgenerala");
var inputgenerala2=document.getElementById("inputsgenerala2");
var inputgenerala3=document.getElementById("inputsgenerala3");
var inputgenerala4=document.getElementById("inputsgenerala4");
var inputgenerala5=document.getElementById("inputsgenerala5");
var inputgenerala6=document.getElementById("inputsgenerala6");
var inicio= document.getElementById("contenedorpaginainicial");




function mostrarinput() {
    
 var cantidaddejugadores= parseInt(document.getElementById("ingrese").value);
switch (cantidaddejugadores) {

        case 1: inputgenerala.style.display='block';
        inicio.style.display='none';

        break;
        case 2: inputgenerala.style.display='block';
        inputgenerala2.style.display='block';
        inicio.style.display='none';
        break;
        case 3: inputgenerala.style.display='block';
        inputgenerala2.style.display='block';
        inputgenerala3.style.display='block'; 
        inicio.style.display='none';
        break;
        case 4:  inputgenerala.style.display='block';
        inputgenerala2.style.display='block';
        inputgenerala3.style.display='block' ;
        inputgenerala4.style.display='block'; 
        inicio.style.display='none';
        break;
        case 5: inputgenerala.style.display='block';
        inputgenerala2.style.display='block';
        inputgenerala3.style.display='block';
        inputgenerala4.style.display='block';
        inputgenerala5.style.display='block';
        inicio.style.display='none';
        break;
        case 6: inputgenerala.style.display='block';
        inputgenerala2.style.display='block';
        inputgenerala3.style.display='block';
        inputgenerala4.style.display='block';
        inputgenerala5.style.display='block';
        inputgenerala6.style.display='block';
        inicio.style.display='none';
        break;

        default:
            alert("Ingrese un numero entre el 1 y el 6")


    }
}

function sumar (valor) {
    var total = 0;	
    valor = parseInt(valor); // Convertir el valor a un entero (número).
	
    total = document.getElementById('spTotal').innerHTML;
	
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
	
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
	
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal').innerHTML = total;
}

function sumar2 (valor) {
    var total = 0;	
    valor = parseInt(valor); // Convertir el valor a un entero (número).
	
    total = document.getElementById('spTotal2').innerHTML;
	
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
	
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
	
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal2').innerHTML = total;
}

function sumar3 (valor) {
    var total = 0;	
    valor = parseInt(valor); // Convertir el valor a un entero (número).
	
    total = document.getElementById('spTotal3').innerHTML;
	
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
	
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
	
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal3').innerHTML = total;
}

function sumar4 (valor) {
    var total = 0;	
    valor = parseInt(valor); // Convertir el valor a un entero (número).
	
    total = document.getElementById('spTotal4').innerHTML;
	
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
	
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
	
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal4').innerHTML = total;
}

function sumar5 (valor) {
    var total = 0;	
    valor = parseInt(valor); // Convertir el valor a un entero (número).
	
    total = document.getElementById('spTotal5').innerHTML;
	
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
	
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
	
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal5').innerHTML = total;
}

function sumar6 (valor) {
    var total = 0;	
    valor = parseInt(valor); // Convertir el valor a un entero (número).
	
    total = document.getElementById('spTotal6').innerHTML;
	
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
	
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
	
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal6').innerHTML = total;
}



function puffout(){
    $('#contenedorpaginainicial').addClass( "puff-out-center" );}


function ambas () {
    mostrarinput()
}



