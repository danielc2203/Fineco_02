let nombreF="";
let valorG ="";
let nombreP = "";
let date = new Date().toLocaleDateString();
// Recupera el nombre del usuario actual
var usuariof = document.getElementById("usuariof").textContent;

// Funcion que pinta los cuadros div de cada calculadora en el html
function cuadroDiv(nombreF, ColorF, iconoF, colorFuente, iconPre){
    // 1. Crear un nuevo elemento div
    const cuadroDiv = document.createElement('div');
    cuadroDiv.classList.add('col-sm-4'); // 2. Agregar la clase "col-sm-4"
    cuadroDiv.classList.add('small-box', 'text-center'); // 3. Agregar la clase "small-box bg-maroon text-center"
    cuadroDiv.style.backgroundColor = ColorF; // Color de Fondo
    cuadroDiv.style.color = colorFuente;
    cuadroDiv.id = nombreF;// 4. Agregar el id "casur"
    const innerDiv = document.createElement('div');// 5. Crear un elemento div con clase "inner"
    innerDiv.classList.add('inner');
    const h3 = document.createElement('h3');// Agregar los elementos h3 y h4 al div inner
    h3.textContent = nombreF;
    innerDiv.appendChild(h3);
    const h4 = document.createElement('h4');
    h4.textContent = 'Calculadora';
    innerDiv.appendChild(h4);
    const iconDiv = document.createElement('div');// 6. Crear un elemento div con clase "icon"
    iconDiv.classList.add('icon');
    const icon = document.createElement('i');// Agregar el icono deseado al div icon
    icon.classList.add(iconPre, iconoF);
    iconDiv.appendChild(icon);
    const a = document.createElement('a');// 7. Crear un elemento a con clase "small-box-footer"
    a.classList.add('small-box-footer');
    a.textContent = 'Calcular ';// Agregar el texto y el icono al elemento a
    const icon2 = document.createElement('i');
    icon2.classList.add('fas', 'fa-calculator');
    a.appendChild(icon2);
    cuadroDiv.appendChild(innerDiv);// 8. Agregar los elementos creados a su respectivo padre
    cuadroDiv.appendChild(iconDiv);
    cuadroDiv.appendChild(a);
    // 9. Agregar el nuevo elemento div al final de la sección con id "calculadoras"
    const calculadorasDiv = document.getElementById('calculadoras');
    calculadorasDiv.appendChild(cuadroDiv);
}

// Funcion que llama un modal y pone los datos del formulario de cada calculadora
function formularioModal (nombreF, ColorF, colorFuente, F_asesor){

  
  var html = '<div class="container"><div class="row"><div class="col-6" id="left-col"><a id="add-Ingresos" class="btn btn-outline-success"><i class="far fa-plus-square"></i></a>';


  var inputs = [   
    { label: 'Asignación Básica', id: 'C1' }
      ];

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
        { label: 'Aportes de Ley', id: 'G1' },
        { label: 'Otros Descuentos', id: 'G2' }  ];

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
    html += '<tr><td>CUPO LIBRE INVERSIÓN</td><td id="cupo">0</td></tr>'
    html += '<tr><td>PAGADURIA</td><td id="pagaduria">'+nombreF+'</td></tr>'
  
    html += '</tbody></table></div>'

    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'

    $("#fCalculadora").html(html);
    $(".modal-header").css({
    "background-color": ColorF,
    "color": "#fff" });
    $(".modal-title").text("Calculadora de Créditos - "+nombreF);
    $('#modalCREDITOS').modal('show');

}

// Funcion para agregar nuevos campos a la izquierda o derecha
function nuevosCampos(){
  
  const leftCol = document.getElementById("left-col");
  const rightCol = document.getElementById("right-col");

  let nextIdC = 9;
  let nextIdG = 3;

  const inputFormat = {
    type: 'number',
    max: 999999999,
    className: 'form-control form-control-sm',
    placeholder: '$'
  };

  function createInput(id, label) {
    const input = document.createElement("input");
    input.id = id;
    Object.assign(input, inputFormat);

    const inputDiv = document.createElement("div");
    inputDiv.className = "col-6";
    inputDiv.appendChild(input);

    const labelDiv = document.createElement("label");
    labelDiv.className = "col-6 col-form-label-sm";
    labelDiv.textContent = label;

    const formGroupDiv = document.createElement("div");
    formGroupDiv.className = "form-group row mb-0";
    formGroupDiv.appendChild(labelDiv);
    formGroupDiv.appendChild(inputDiv);

    return formGroupDiv;
  }

  function addNewIncomeField() {
    const inputId = "C" + nextIdC++;
    const label = "Ingreso " + inputId;
    const inputEl = createInput(inputId, label);
    leftCol.appendChild(inputEl);
  }

  function addNewExpenseField() {
    const inputId = "G" + nextIdG++;
    const label = "Gasto " + inputId;
    const inputEl = createInput(inputId, label);
    rightCol.appendChild(inputEl);
  }

  document.getElementById("add-Ingresos").addEventListener("click", addNewIncomeField);
  document.getElementById("add-Gastos").addEventListener("click", addNewExpenseField);

}


// Modal de Guardar Datos en tabla - Modal Agregar Nuevo Credito
function guardarDatos(){
  
  // Guardo en nombreP el texto del id pagaduria
  let nombreP = document.getElementById("pagaduria").textContent;

  if (valorG) {
    Swal.fire({
      title: 'Deseas crear',
      text: "Un nuevo registro de credito para ",
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

        html += '<div class="form-group row mb-0">'
        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PAGADURIA:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="text" id="F_pagaduria" value='+nombreP+' class="form-control form-control-sm" placeholder="$" readonly >'
        html += '</div>'

        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">ASESOR DE FINECO:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="text" id="F_asesor" value="'+usuariof+'" class="form-control form-control-sm" placeholder="$" readonly>';
        html += '</div>'
        html += '</div>'

        // ' + <?php echo json_encode($nombre_usr); ?> + '

        html += '<button type="button" class="btn btn-primary" onclick= "consultarCliente()" >Crear Solicitud</button>'
        html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
        html += '</form>'

        html += '<div id="answer"><table class="table table-striped"><tbody>'
        html += '</tbody></table></div>'
    
        $("#fCalculadora").html(html);
        $(".modal-header").css("background-color", "#ff5722");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").css("font-weight: bold", "font-size: 18px");
        $(".modal-title").text("Agregar Nueva Solicitud de Credito");
        

      }
    })
  }else{
    Swal.fire('Se requiere calcular la capacidad de libre inversiòn')
  }

  
 };

 // Restablece el valorG a una cadena vacia
 $('#modalCREDITOS').on('hidden.bs.modal', function () {
  valorG = '';
  nombreF = '';
  $(document).off("input");
})



// Boton guardar submit para Actualización de
$('#fCalculadora').submit(function(e){                        
  e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

  $opcion = 1;
  cedula = $.trim($('#F_cedula').val());
  pagaduria = $.trim($('#F_pagaduria').val());
  capacidad = $.trim($('#F_capacidad').val());
  plazo = $.trim($('#F_plazo').val());
  fecha = $.trim($('#F_fecha').val());
  monto = $.trim($('#F_montoCredito').val());
  estado = $.trim($('#F_estado').val());
  asesor = $.trim($('#F_asesor').val());

  if (!!cedula && !!monto && !!plazo){
      $.ajax({
          url: "crud.php",
          type: "POST",
          datatype:"json",    
          data:  {cedula:cedula,
                pagaduria:pagaduria,
                capacidad:capacidad,
                plazo:plazo,
                fecha:fecha,
                monto:monto,
                estado:estado,
                asesor:asesor,
                opcion:opcion},    
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
  }else{
      Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Los campos son obligatorios',
          showConfirmButton: false,
          
        })
  };
  

});



// Funcion Consultar Cliente y si es correcto guarda el credito en la tabla Creditos
function consultarCliente() {
  cedula = $.trim($('#F_cedula').val());
  pagaduria = $.trim($('#F_pagaduria').val());
  capacidad = $.trim($('#F_capacidad').val());
  plazo = $.trim($('#F_plazo').val());
  fecha = $.trim($('#F_fecha').val());
  monto = $.trim($('#F_montoCredito').val());
  estado = $.trim($('#F_estado').val());
  asesor = $.trim($('#F_asesor').val());
  opcion = 6; //Consulta CC

  if(cedula != 0){
    //console.log("Cedula 2 = "+cedula);

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
                //console.log("ok el documento correcto guardando... ");
                $.ajax({
                  url: "crud.php",
                  type: "POST",
                  datatype:"json",    
                  data:  {cedula:cedula,
                        pagaduria:pagaduria,
                        capacidad:capacidad,
                        plazo:plazo,
                        fecha:fecha,
                        monto:monto,
                        estado:estado,
                        asesor:asesor,
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
                window.location.href = "/Fineco_02/F_Clientes";
              } else if (result.isDenied) {
                Swal.fire('Registro no almacenado', '', 'info')
              }
            })

          }      
      }
    });

  }else{
    console.log("Cedula Vacia = "+cedula);
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'El campo de cedula es obligatorio ',
      showConfirmButton: false,
    })
  };

}
