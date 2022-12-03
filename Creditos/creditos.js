$( document ).ready(function() {

//para limpiar los campos antes de dar de Alta a un registro
 $("#policia").click(function(){
     opcion = 1; //dejaremos la opcion 1 para envio de credito policia           
     id=null;
//     //$("#formUsuarios").trigger("reset"); // Para hace reset a el formulario
     $(".modal-header").css( "background-color", "#0f7403");
     $(".modal-header").css( "color", "white" );
     $(".modal-title").text("Calculadora de Creditos - POLICIA");
     $('#modalCREDITOS').modal('show');
 });

});
