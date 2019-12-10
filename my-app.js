// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

var tamaño = document.getElementById("tamaño");
var caracteristicas = document.getElementById("caracteristicas");
var telcontacto = document.getElementById("telcontacto");
var email = document.getElementById("telcontacto");
var comentarios = document.getElementById("comentarios");

           

// function enviarDatos() {
//     db.collection("infoLostPets").doc(email.value).set({
//       tamaño: tamaño.value,
//       caracteristicas: caracteristicas.value,
//       telcontacto: telcontacto.value,
//       email: email.value,
//       comentarios: comentarios.value
//      })
//         .then(function(docRef){
//           console.log(alias.value);
//        })
//       .catch(function(error){
//           console.log("Error "+ error);})};

// Handle Cordova Device Ready Event
$$('.hide-navbar').on('click', function () {
    app.navbar.hide('.navbar');
  });
  $$('.show-navbar').on('click', function () {
    app.navbar.show('.navbar');
  });

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
// myApp.onPageInit('about', function (page) {
//     // Do something here for "about" page

// })
//         var tamaño = document.getElementById("tamaño");
//         var caracteristicas = document.getElementById("caracteristicas");
//         var telcontacto = document.getElementById("telcontacto");
//         var email = document.getElementById("telcontacto");
//         var comentarios = document.getElementById("comentarios");


// $$('#enviarDatos').on('click', function(){
//     db.collection("infoLostPets").doc(tamaño.value).set({
//       tamaño: tamaño.value,
//       caracteristicas: caracteristicas.value,
//       telcontacto: telcontacto.value,
//       email: email.value,
//       comentarios: comentarios.value
//     })
// })
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }else if(page.name === 'encontre') {
        
       
        // //   carga de datos subidos por el usuario de la mascota perdida
        var tamaño = document.getElementById("tamaño");
        var caracteristicas = document.getElementById("caracteristicas");
        var telcontacto = document.getElementById("telcontacto");
        var email = document.getElementById("telcontacto");
        var comentarios = document.getElementById("comentarios");

                   
        // function enviarDatos() {
        //     db.collection("infoLostPets").doc(tamaño.value).set({
        //       tamaño: tamaño.value,
        //       caracteristicas: caracteristicas.value,
        //       telcontacto: telcontacto.value,
        //       email: email.value,
        //       comentarios: comentarios.value
        //      })
        //         .then(function(docRef){
        //           console.log(alias.value);
        //        })
        //       .catch(function(error){
        //           console.log("Error "+ error);         
        //     })};

      

        //carga de archivos subidos por el usuario
        var uploader = document.getElementById("uploader");
        var fileButton = document.getElementById("fileButton");

        fileButton.addEventListener('change', function(e){
    
            var file = e.target.files[0]; 
        
            var storageRef = firebase.storage().ref('mascotassubidas/' + file.name);
        
            var task = storageRef.put(file);
            task.on('state_changed',
             function progress(snapshot){
              var porcentaje = (snapshot.bytesTranferred / snapshot.totalBytes) * 100;
              uploader.value  = porcentaje
             },
        
             function error(err) {
        
             },
        
             function complete (){
        
             }
        
            )
          })
    }
    else if(page.name === 'perdi'){
        // myApp.alert('Proximamente disponible');
        // aca
      
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

