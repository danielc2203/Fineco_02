$( document ).ready(function() {

    //Abre el modal y muestra el formulario para policia Nuevo
    $("#policia").click(function(){
        opcion = 1; //opcion 1 para envio de credito al crud           
        id=null;

    var html = "";

    html += '<div class="container">'

    html += '<div class="row">'

    html += '<div class="col-6 " id="left-col">'
    html += '<p></p>'
    html += '<a id="add-left" class="btn btn-outline-primary"><i class="far fa-plus-square"></i>'
    html += '</div>'


    html += '<div class="col-6" id="right-col">'
    html += '<p></p>'
    //html += '<a id="add-right">Add to B</a>'
    html += '<a id="add-right" class="btn btn-outline-primary"><i class="far fa-plus-square"></i>'
    html += '</div>'


    html += '</div>'
    html += '</div>'


    $("#fCalculadora").html(html);

    //datos en formulario
     $(".modal-header").css( "background-color", "#0f7403");
     $(".modal-header").css( "color", "white" );
     $(".modal-title").text("Calculadora de Creditos - POLICIA");
     $('#modalCREDITOS').modal('show');

     //evento click para agregar input a la columna izquierda
     $("#add-left").click(function() {
        var labelName = prompt("Escribe el nombre del nuevo campo:");
        if (!labelName) return;
        $("#left-col").append(
            '<div class="form-group row"><label class="col-6 col-form-label">' + labelName + '</label><div class="col-6"><input type="number" maxIntegerDigits="3" id="C1"  class="form-control" placeholder="$" /></div></div>'
            );
      });

    //evento click para agregar input a la columna izquierda
    $("#add-right").click(async function() {

        var labelName = prompt("Escribe el nombre del nuevo campo:");

        if (!labelName) return;
        $("#right-col").append(
            '<div class="form-group row"><label class="col-6 col-form-label">' + labelName + '</label><div class="col-6"><input type="number" maxIntegerDigits="3" id="C1"  class="form-control" placeholder="$" /></div></div>'
            );
      });
 });


    //Abre el modal y muestra el formulario para policia
 $("#policias").click(function(){
     opcion = 1; //opcion 1 para envio de credito al crud           
     id=null;

    var html = "";

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">ASIGNACIÓN BÁSICA</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C1" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PENSIÓN - CASUR</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C2" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">BONIFICACIÓN ASISTENCIA FAMILIAR</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C3" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">EPS</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C4" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">BONIFICACIÓN SEGURO DE VIDA</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C5" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CLUBAGESOSTE</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C6" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">DISTINCIÓN</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C7" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">SEGURO VOLUNT</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C8" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PRIMA NIVEL EJECUTIVO</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C9" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PAGADIBIE</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C10" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PRIMA ORDEN PÚBLICO</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C11" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">COORSERPACK</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C12" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PRIMA RETORNO A LA EXPERIENCIA</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C13" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">BBVA</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C14" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">SUBSIDIO ALIMENTACIÓN</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C15" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PROEXEASCENCI</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C16" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm"></label>'
    html += '<div class="col-sm-3">'
    html += '<input type="hidden" maxIntegerDigits="3" id="C17" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">SEGURO PONAL</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C18" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'
    html += '</div>'

    html += '<div id="answer"><table class="table table-striped"><tbody>'

    html += '<tr><td>TOTAL DEVENGADOS</td><td id="devengados">0</td></tr>'
    html += '<tr><td>TOTAL DEDUCIDOS</td><td id="tdeducidos">0</td></tr>'
    html += '<tr><td>VALOR MÁXIMO</td><td id="maximo">0</td></tr>'
    html += '<tr><td>CUPO LIBRE INVERSIÓN</td><td id="cupo">0</td></tr>'

    html += '</tbody></table></div>'

    html += '<button type="button" class="btn btn-outline-danger ml-3" onclick= "clearInput()"><i class="fas fa-broom"></i></button>'
    html += '<button type="button" class="btn btn-warning ml-3" onclick= "rellenarDatosPolicia()">Rellenar</button>'
    html += '<button type="button" class="btn btn-primary m-3" id="calc" onclick= "calcularPolicia()">Calcular</button>'
    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
  

    $("#fCalculadora").html(html);

    //datos en formulario
     $(".modal-header").css( "background-color", "#0f7403");
     $(".modal-header").css( "color", "white" );
     $(".modal-title").text("Calculadora de Creditos - POLICIA");
     $('#modalCREDITOS').modal('show');
 });    


 //Abre modal de pensionados.
 $("#pensionados").click(function(){
    opcion = 1; //dejaremos la opcion 1 para envio de credito policia           
    id=null;
    
    var html = "";

    html += '<div class="card-header text-center" > <h5> Pensionados </h5> </div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">SALARIO BÁSICO</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C1" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">APORTES DE LEY</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="text" maxIntegerDigits="3" id="C2" value="" step="0.01" class="form-control form-control-sm" placeholder="$" readonly>'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">OTROS DESCUENTOS</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C3" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CAPACIDAD LIBRE INVERSIÓN</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C4" value="" step="0.01" class="form-control form-control-sm" placeholder="$" readonly>'
    html += '</div>'
    html += '</div>'

    html += '<div id="answer"><table class="table table-striped"><tbody>'

    html += '<tr><td>APORTES DE LEY</td><td id="aportes">0</td></tr>'
    html += '<tr><td>CAPACIDAD LIBRE INVERSIÓN</td><td id="capacidad">0</td></tr>'

    html += '</tbody></table></div>'

    html += '<button type="button" class="btn btn-outline-danger ml-3" onclick= "clearInput()"><i class="fas fa-broom"></i></button>'
    html += '<button type="button" class="btn btn-primary ml-3" id="calc" onclick= "calcularPensionados()">Calcular</button>'
    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'



    $("#fCalculadora").html(html);

    $(".modal-header").css("background-color", "#311847");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Calculadora de Creditos - Pensionados");
    $('#modalCREDITOS').modal('show');
});


 // Calculadora de Docentes
 $("#docentes").click(function(){
    opcion = 1; //dejaremos la opcion 1 para envio de credito al modal           
    id=null;

    var html = "";

    html += '<div class="card-header text-center" > <h5> Calculadora Docentes </h5> </div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">SALARIO BÁSICO</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C1" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">APORTES DE LEY</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="text" maxIntegerDigits="3" id="C2" value="" step="0.01" class="form-control form-control-sm" placeholder="$" readonly>'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group row mb-0">'
    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">OTROS DESCUENTOS</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C3" value="" step="0.01" class="form-control form-control-sm" placeholder="$" >'
    html += '</div>'

    html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CAPACIDAD LIBRE INVERSIÓN</label>'
    html += '<div class="col-sm-3">'
    html += '<input type="number" maxIntegerDigits="3" id="C4" value="" step="0.01" class="form-control form-control-sm" placeholder="$" readonly>'
    html += '</div>'
    html += '</div>'


    html += '<div id="answer"><table class="table table-striped"><tbody>'

    html += '<tr><td>APORTES DE LEY</td><td id="aportes">0</td></tr>'
    html += '<tr><td>CAPACIDAD LIBRE INVERSIÓN</td><td id="capacidad">0</td></tr>'

    html += '</tbody></table></div>'

    html += '<button type="button" class="btn btn-outline-danger ml-3" onclick= "clearInput()"><i class="fas fa-broom"></i></button>'
    html += '<button type="button" class="btn btn-primary ml-3" id="calc" onclick= "calcularDocentes()">Calcular</button>'
    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'

    $("#fCalculadora").html(html);

    $(".modal-header").css("background-color", "#0267EB");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Calculadora de Creditos - Docentes");
    $('#modalCREDITOS').modal('show');

});

});






