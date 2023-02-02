$( document ).ready(function() {

    //Abre el modal y muestra el formulario para policia Nuevo
    $("#policia").click(function(){
        opcion = 1; //opcion 1 para envio de credito al crud           
        id=null;

    var html = "";
    var html = '<div class="container">';
    html += '<div class="row">';
    html += '<div class="col-6" id="left-col">';
    html += '<a id="add-Ingresos" class="btn btn-outline-success"><i class="far fa-plus-square"></i></a>';

  var inputs = [   
    { label: 'Asignación Básica', id: 'C1' },
    { label: 'Bonificación Familiar', id: 'C2' },
    { label: 'Bonificación Seguro de Vida', id: 'C3' },
    { label: 'Distinción', id: 'C4' },
    { label: 'Prima Nivel Ejecutivo', id: 'C5' },
    { label: 'Prima Orden Público', id: 'C6' },
    { label: 'Prima de Experiencia', id: 'C7' },
    { label: 'Subsidio Alimentación', id: 'C8' }  ];

  inputs.forEach(function(input) {
    html += '<div class="form-group row mb-0">';
    html += '<label class="col-6 col-form-label-sm">' + input.label + '</label>';
    html += '<div class="col-6">';
    html += '<input type="number" maxIntegerDigits="8" id="' + input.id + '" value="" class="form-control form-control-sm" placeholder="$" >';
    html += '</div>';
    html += '</div>';
  });
    
    html += '</div>';
    html += '<div class="col-6" id="right-col">';
    html += '<a id="add-Gastos" class="btn btn-outline-danger"><i class="far fa-plus-square"></i></a>';

    inputs = [
        { label: 'Pensión - Casur', id: 'G1' },
        { label: 'EPS', id: 'G2' }  ];

    inputs.forEach(function(input) {
        html += '<div class="form-group row mb-0">';
        html += '<label class="col-6 col-form-label-sm">' + input.label + '</label>';
        html += '<div class="col-6">';
        html += '<input type="number" maxIntegerDigits="8" id="' + input.id + '" value="" class="form-control form-control-sm" placeholder="$" >';
    html += '</div>';
    html += '</div>';
  });   

    html += '</div>';// Fin de Columna Derecha
    html += '</div>';// Fin de Container

    html += '<div id="answer"><table class="table table-striped"><tbody>';

    html += '<tr><td>TOTAL DEVENGADOS</td><td id="devengados">0</td></tr>'
    html += '<tr><td>TOTAL DEDUCIDOS</td><td id="tdeducidos">0</td></tr>'
    html += '<tr><td>VALOR MÁXIMO</td><td id="maximo">0</td></tr>'
    html += '<tr><td>CUPO LIBRE INVERSIÓN</td><td id="cupo">0</td></tr>'
  
    html += '</tbody></table></div>'

    html += '<button type="button" class="btn btn-outline-danger ml-3" onclick= "clearInput()"><i class="fas fa-broom"></i></button>'
    html += '<button type="button" class="btn btn-warning ml-3" onclick= "rellenarDatosPolicia()">Rellenar</button>'
    //html += '<button type="button" class="btn btn-primary m-3" id="calc" onclick= "calcularPolicia()">Calcular</button>'
    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'

    $("#fCalculadora").html(html);

    $(".modal-header").css({
    "background-color": "#0f7403",
    "color": "white" });
    $(".modal-title").text("Calculadora de Créditos - POLICIA");
    $('#modalCREDITOS').modal('show');
        
    //btn nuevo campo al for de la columna izquierda:
    let nextIdC = 9;
    
    document.getElementById("add-Ingresos").addEventListener("click", function() {
      const input = document.createElement("input");
      input.id = "C" + nextIdC;
      input.type = 'number';
      input.max = 999999999;
      input.className = 'form-control form-control-sm';
      input.placeholder = '$';

      const label = document.createElement("label");
      label.className = "col-6 col-form-label-sm";
      label.innerHTML = "Ingreso " +input.id ;

      const divInput = document.createElement("div");
      divInput.className = "col-6";
      divInput.appendChild(input);

      const divFormGroup = document.createElement("div");
      divFormGroup.className = "form-group row mb-0";
      divFormGroup.appendChild(label);
      divFormGroup.appendChild(divInput);

      document.getElementById("left-col").appendChild(divFormGroup);
      nextIdC++;
    });

    //Agregando campos al lado derecho y sumandolos:
    let nextIdG = 3;

    document.getElementById("add-Gastos").addEventListener("click", function() {
      // Create a new input element
      let newInput = document.createElement("input");
      newInput.id = "G" + nextIdG;
      newInput.type = 'number';
      newInput.max = 999999999;
      newInput.className = 'form-control form-control-sm';
      newInput.placeholder = '$';

      const label = document.createElement("label");
      label.className = "col-6 col-form-label-sm";
      label.innerHTML = "Gasto " +newInput.id ;

      const divInput = document.createElement("div");
      divInput.className = "col-6";
      divInput.appendChild(newInput);

      const divFormGroup = document.createElement("div");
      divFormGroup.className = "form-group row mb-0";
      divFormGroup.appendChild(label);
      divFormGroup.appendChild(divInput);

      //Agregamos los elementos creados a la columna
      document.getElementById("right-col").appendChild(divFormGroup);
      nextIdG++;

    });

    // Suma de los valores
  function sumar(prefix) {
    var elementos = document.querySelectorAll("[id^='" + prefix + "']");
    var suma = 0;
    for (var i = 0; i < elementos.length; i++) {
      suma += parseFloat(elementos[i].value) || 0;
    }
    document.getElementById(prefix === "C" ? "devengados" : "tdeducidos").textContent = suma.toFixed(0);
    
  }

  // Escucha cambios en los imput C y G para la suma automatica
  document.addEventListener("input", function (event) {
    if (event.target.id.startsWith("C")) {
      sumar("C");
      calcularDiferencia();
    } else if (event.target.id.startsWith("G")) {
      sumar("G");
      calcularDiferencia();
    }
    console.log("sigue llamando");
  });

  function calcularDiferencia() {
    // Obtener los valores de los ingresos y gastos
    var ingresos = parseFloat(document.getElementById("devengados").textContent);
    var gastos = parseFloat(document.getElementById("tdeducidos").textContent);
    var bonfam = parseFloat(document.getElementById("C2").value) || 0;
    var segurov = parseFloat(document.getElementById("C3").value) || 0;
    var G1 = parseFloat(document.getElementById("G1").value) || 0;
    var G2 = parseFloat(document.getElementById("G2").value) || 0;
    var eps = G1 + G2;
    var maximo = (ingresos - eps - bonfam - segurov)/2;

    // Calcular la diferencia entre los ingresos y gastos
    var cupo = (maximo - gastos + eps);
    
    // Mostrar la diferencia en el elemento de texto correspondiente
    document.getElementById("cupo").innerText = cupo.toFixed(0);
    document.getElementById("maximo").innerText = maximo.toFixed(0);

    valorG = (cupo.toFixed(0));// Guarda el valor de cupo en valorG para guardar los datos
  }
  
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



// Modal de Guardar Datos en tabla - Modal Agregar Nuevo Credito
function guardarDatos(){

  if (valorG) {
    Swal.fire({
      title: 'Deseas crear',
      text: "Un nuevo registro de credito?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Crear nuevo credito!'
    }).then((result) => {
      if (result.isConfirmed) {
        var html = "";

        html += '<div class="form-group row mb-0">'
        html += '<form id="formNuevoCredito" class="needs-validation">  '
        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CEDULA:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="number" id="F_cedula" value="" class="form-control form-control-sm" placeholder="CC" required>'
        html += '</div>'

        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CAPACIDAD MENSUAL:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="text" id="F_capacidad"  value="'+valorG+'" step="0.01" class="form-control form-control-sm" placeholder="$" readonly>'
        html += '</div>'
        html += '</div>'

        html += '<div class="form-group row mb-0">'
        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">N° DE PLAZO EN MESES</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="number"  id="F_plazo" value="" class="form-control form-control-sm" placeholder="365" required>'
        html += '</div>'

        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">FECHA DE SOLICITUD:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="text" id="F_fecha" value='+date+' class="form-control form-control-sm" placeholder="$" readonly>'
        html += '</div>'
        html += '</div>'

        html += '<div class="form-group row mb-0">'
        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">MONTO DEL CREDITO:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="number" id="F_montoCredito" value="" class="form-control form-control-sm" placeholder="$" required>'
        html += '</div>'

        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">ESTADO DEL CREDITO:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="text" id="F_estado" value="Pendiente" class="form-control form-control-sm" placeholder="$" readonly>'
        html += '</div>'
        html += '</div>'

        html += '<button type="button" class="btn btn-primary" onclick= "consultarCliente()" >Consultar Cliente</button>'
        html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
        html += '</form>'

        html += '<div id="answer"><table class="table table-striped"><tbody>'
        html += '</tbody></table></div>'
    
        $("#fCalculadora").html(html);
        $(".modal-header").css("background-color", "#ff5722");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").css("font-weight: bold", "font-size: 18px");
        $(".modal-title").text("Agregar Nuevo Credito");

      }
    })
  }else{
    Swal.fire('Se requiere de calcular capacidad de libre inversiòn')
  }

 };

 function modalnuevo(){
  var html = "";

  $(".modal-header").css("background-color", "#0267EB");
  $(".modal-header").css( "color", "white" );
  $(".modal-title").text("Agregar Nuevo Credito");
};


// Funcion Consultar Cliente
function consultarCliente() {
  cedula = $.trim($('#F_cedula').val());
  capacidad = $.trim($('#F_capacidad').val());
  plazo = $.trim($('#F_plazo').val());
  fecha = $.trim($('#F_fecha').val());
  monto = $.trim($('#F_montoCredito').val());
  estado = $.trim($('#F_estado').val());
  opcion = 6; //Consulta CC

  if(cedula != 0){
    console.log("Cedula 2 = "+cedula);

    $.ajax({
      url: "crud.php",
      type: "POST",
      datatype:"json",    
      data: {opcion:opcion, cedula:cedula}, 

      success: function (response) {
      
          // Parse the json result Trae los resultados en json
          response = JSON.parse(response);
          
          // Check if there is available records
          if(response.length) {
              // Loop the parsed JSON
              $.each(response, function(key,value) {
                console.log("ok el documento correcto guardando... ");
                $.ajax({
                  url: "crud.php",
                  type: "POST",
                  datatype:"json",    
                  data:  {cedula:cedula,
                        capacidad:capacidad,
                        plazo:plazo,
                        fecha:fecha,
                        monto:monto,
                        estado:estado,
                        opcion:1},    
                  success: function(data) {
                      $(function() {
                          Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'el credito ha sido guardado exitosamente...',
                              showConfirmButton: false,
                              timer: 2000,
                              willClose: () => {
                                  window.location.reload()
                                }
                            })
                        });
                  }
                });
              });
          } else {

            Swal.fire({
              title: 'El documento '+cedula+' no es cliente, desea registrarlo ?',
              showDenyButton: true,
              //showCancelButton: true,
              confirmButtonText: 'Registrar Cliente',
              denyButtonText: 'No Guardar',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire('Seras redirigido al formulario de clientes', '', 'success')
              } else if (result.isDenied) {
                Swal.fire('Registro no almacenado', '', 'info')
              }
            })

          }      
      }
    });

  }else{
    console.log("Cedula 2 Vacia = "+cedula);
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'El campo de cedula es obligatorio ',
      showConfirmButton: false,
    })
  };

}



// Funcion para validar los campos requeridos
(function() {
  'use strict';
  window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          }
          form.classList.add('was-validated');
      }, false);
      });
  }, false);
  });