$( document ).ready(function() {

    //Abre el modal y muestra el formulario para policia Nuevo
    $("#policia").click(function(){
        opcion = 1; //opcion 1 para envio de credito al crud           
        id=null;

    var html = "";

    var html = '<div class="container">';
    html += '<div class="row">';

    html += '<div class="col-6" id="left-col">';
    html += '<a id="add-left" class="btn btn-outline-success"><i class="far fa-plus-square"></i></a>';

  var inputs = [   
    { label: 'Asignación Básica', id: 'C1' },
    { label: 'Bonificación Asistencia Familiar', id: 'C3' },
    { label: 'Bonificación Seguro de Vida', id: 'C5' },
    { label: 'Distinción', id: 'C7' },
    { label: 'Prima Nivel Ejecutivo', id: 'C9' },
    { label: 'Prima Orden Público', id: 'C11' },
    { label: 'Prima Retorno a la Experiencia', id: 'C13' },
    { label: 'Subsidio Alimentación', id: 'C15' }  ];

  inputs.forEach(function(input) {
    html += '<div class="form-group row mb-0">';
    html += '<label class="col-6 col-form-label-sm">' + input.label + '</label>';
    html += '<div class="col-6">';
    html += '<input type="number" maxIntegerDigits="3" id="' + input.id + '" value="" class="form-control form-control-sm" placeholder="$" >';
    html += '</div>';
    html += '</div>';
  });
    

    html += '</div>';
    html += '<div class="col-6" id="right-col">';
    html += '<a id="add-right" class="btn btn-outline-danger"><i class="far fa-plus-square"></i></a>';

    inputs = [
        { label: 'Pensión - Casur', id: 'C2' },
        { label: 'EPS', id: 'C4' }  ];

    inputs.forEach(function(input) {
        html += '<div class="form-group row mb-0">';
        html += '<label class="col-6 col-form-label-sm">' + input.label + '</label>';
        html += '<div class="col-6">';
        html += '<input type="number" maxIntegerDigits="3" id="' + input.id + '" value="" class="form-control form-control-sm" placeholder="$" >';
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

    
    html += '<p id="izquierda">Suma columna Izquierda: 0</p>'
    html += '<p id="derecha">Sum Col Derecha: 0</p>'

    html += '</tbody></table></div>'

    html += '<button type="button" class="btn btn-outline-danger ml-3" onclick= "clearInput()"><i class="fas fa-broom"></i></button>'
    html += '<button type="button" class="btn btn-warning ml-3" onclick= "rellenarDatosPolicia()">Rellenar</button>'
    html += '<button type="button" class="btn btn-primary m-3" id="calc" onclick= "calcularPolicia()">Calcular</button>'
    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'


    $("#fCalculadora").html(html);

    $(".modal-header").css({
    "background-color": "#0f7403",
    "color": "white" });
    $(".modal-title").text("Calculadora de Créditos - POLICIA");
    $('#modalCREDITOS').modal('show');

    const leftCol = document.getElementById('left-col');
    const rightCol = document.getElementById('right-col');  
    const addLeftBtn = document.getElementById('add-left');
    const addRightBtn = document.getElementById('add-right');
    const resultDiff = document.getElementById('izquierda');

    let leftSum = 0;

    addLeftBtn.addEventListener('click', function() {
    const labelName = prompt("Escribe el nombre del nuevo campo:");
    if (!labelName) return;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.max = 999;
    input.className = 'form-control form-control-sm';
    input.placeholder = '$';
    input.addEventListener('input', function() {
        leftSum -= parseInt(this.previousValue || 0);
        leftSum += parseInt(this.value || 0);
        resultDiff.textContent = `izquierda: ${leftSum }`;
        this.previousValue = this.value;
    });
    
    leftCol.appendChild(input);
    });

    addRightBtn.addEventListener('click', function() {
    const labelName = prompt("Escribe el nombre del nuevo campo:");
    if (!labelName) return;
    
    rightCol.insertAdjacentHTML('beforeend', 
        `<div class="form-group row mb-0">
        <label class="col-6 col-form-label">${labelName}</label>
        <div class="col-6">
            <input type="number" maxIntegerDigits="3" id="${labelName}" class="form-control form-control-sm" placeholder="$">
        </div>
        </div>`
    );
    });

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






