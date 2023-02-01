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
    html += '<input type="number" maxIntegerDigits="3" id="' + input.id + '" value="" class="form-control form-control-sm" placeholder="$" >';
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

    function sumarIngresos() {
      var ingresos = document.querySelectorAll("[id^='C']");
      var suma = 0;
      for (var i = 0; i < ingresos.length; i++) {
        suma += parseFloat(ingresos[i].value) || 0;
      }
      //document.getElementById("sumaIngresos").textContent = suma;
      document.getElementById("devengados").textContent = suma;
      //sumaIngresos.textContent = suma;
    }
    
    function sumarGastos() {
      var gastos = document.querySelectorAll("[id^='G']");
      var suma = 0;
      for (var i = 0; i < gastos.length; i++) {
        suma += parseFloat(gastos[i].value) || 0;
      }
      //document.getElementById("sumaGastos").textContent = suma;
      document.getElementById("tdeducidos").textContent = suma;
      //sumaGastos.textContent = suma;
    }
    
    // Escucha cambios en los imput C y G para la suma automatica
    document.addEventListener("input", function (event) {
      if (event.target.id.startsWith("C")) {
        sumarIngresos();
      } else if (event.target.id.startsWith("G")) {
        sumarGastos();
      }

      calcularDiferencia();
    });

    function calcularDiferencia() {
      // Obtener los valores de los ingresos y gastos
      var ingresos = parseFloat(document.getElementById("devengados").textContent);
      var gastos = parseFloat(document.getElementById("tdeducidos").textContent);
      var bonfam = parseFloat(document.getElementById("C2").value);
      var segurov = parseFloat(document.getElementById("C3").value);
      var G1 = parseFloat(document.getElementById("G1").value);
      var G2 = parseFloat(document.getElementById("G2").value);
      var eps = G1 + G2;
      var maximo = (ingresos - eps - bonfam - segurov)/2;


      // Calcular la diferencia entre los ingresos y gastos
      var cupo = (maximo - gastos + eps);
    
      // Mostrar la diferencia en el elemento de texto correspondiente
      document.getElementById("cupo").innerText = cupo;
      document.getElementById("maximo").innerText = maximo;

      valorG = (cupo.toFixed(0));
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






