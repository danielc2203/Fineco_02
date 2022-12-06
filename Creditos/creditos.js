$( document ).ready(function() {

//para limpiar los campos antes de dar de Alta a un registro
 $("#policia").click(function(){
     opcion = 1; //dejaremos la opcion 1 para envio de credito policia           
     id=null;
//     //$("#formUsuarios").trigger("reset"); // Para hace reset a el formulario
    var html = "";
    
    html += '<div class="card-header text-center" > <h5> Daniel </h5> </div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">ASIGNACIÓN BÁSICA</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C1" value="2316871.93" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PENSIÓN - CASUR</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C2" value="120465.53" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">BONIFICACIÓN ASISTENCIA FAMILIAR</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C3" value="805465.50" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PENSIÓN - CASUR</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C4" value="92674.88" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    
    $("#fcreditos").html(html);

    //datos en formulario
     $(".modal-header").css( "background-color", "#0f7403");
     $(".modal-header").css( "color", "white" );
     $(".modal-title").text("Calculadora de Creditos - POLICIA");
     $('#modalCREDITOS').modal('show');
 });


 //pensionados
 $("#pensionados").click(function(){
    opcion = 1; //dejaremos la opcion 1 para envio de credito policia           
    id=null;
//     //$("#formUsuarios").trigger("reset"); // Para hace reset a el formulario
    $(".modal-header").css("background-color", "#311847");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Calculadora de Creditos - Pensionados");
    $('#modalCREDITOS').modal('show');
});


 //Docentes
 $("#docentes").click(function(){
    opcion = 1; //dejaremos la opcion 1 para envio de credito policia           
    id=null;
//     //$("#formUsuarios").trigger("reset"); // Para hace reset a el formulario
    $(".modal-header").css("background-color", "#0267EB");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Calculadora de Creditos - Docentes");
    $('#modalCREDITOS').modal('show');
});
});




