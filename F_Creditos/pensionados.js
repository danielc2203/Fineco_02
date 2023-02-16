$( document ).ready(function() {

    //Abre el modal y muestra el formulario para policia Nuevo
    $("#pensionados").click(function(){
        opcion = 1; //opcion 1 para envio de credito al crud           
        id=null;

    var html = "";
    var html = '<div class="container">';
    html += '<div class="row">';
    html += '<div class="col-6" id="left-col">';
    html += '<a id="add-Ingresos" class="btn btn-outline-success"><i class="far fa-plus-square"></i></a>';

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
    //html += '<tr><td>VALOR MÁXIMO</td><td id="maximo">0</td></tr>'
    html += '<tr><td>CUPO LIBRE INVERSIÓN</td><td id="cupo">0</td></tr>'
  
    html += '</tbody></table></div>'

    html += '<button type="button" class="btn btn-outline-danger ml-3" onclick= "clearInput()"><i class="fas fa-broom"></i></button>'
    html += '<button type="button" class="btn btn-warning ml-3" onclick= "rellenarDatosPolicia()">Rellenar</button>'
    //html += '<button type="button" class="btn btn-primary m-3" id="calc" onclick= "calcularPolicia()">Calcular</button>'
    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'

    $("#fCalculadora").html(html);

    $(".modal-header").css({
    "background-color": "#007bff",
    "color": "white" });
    $(".modal-title").text("Calculadora de Créditos - PENSIONADOS");
    $('#modalCREDITOS').modal('show');

    // Calcular el valor de Aportes segun el salario
    // Obtener una referencia al campo C1 y G1
    const campoC1 = document.getElementById('C1');
    const campoG1 = document.getElementById('G1');

    // Agregar un listener al evento "input" del campo C1
    campoC1.addEventListener('input', function() {
    // Obtener el valor de C1
    const valorC1 = parseFloat(campoC1.value);

    // Calcular el valor de G1 en función del valor de C1
    let valorG1;
    if (valorC1 < 1160001) {
        valorG1 = valorC1 * 0.04;
    } else if (valorC1 < 2320001) {
        valorG1 = valorC1 * 0.10;
    } else {
        valorG1 = valorC1 * 0.12;
    }

    // Mostrar el valor de G1 en el campo correspondiente
   
    console.log(valorG1)

    const redondeado = Math.ceil(valorG1/100)*100; // Redondea hacia arriba
    const sinDecimales = Math.round(redondeado / 100) * 100; // Redondea a múltiplos de 100
    campoG1.value = sinDecimales;
    console.log(sinDecimales); // Muestra 215100
    });


        
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

    // Suma de los valores devengados y deducidos
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
    console.log("Escuchando Cambios");
  });

  function calcularDiferencia() {
    // Obtener los valores de los ingresos y gastos
    var ingresos = parseFloat(document.getElementById("devengados").textContent);
    var gastos = parseFloat(document.getElementById("tdeducidos").textContent);
    // var bonfam = parseFloat(document.getElementById("C2").value) || 0;
    // var segurov = parseFloat(document.getElementById("C3").value) || 0;
    var G1 = parseFloat(document.getElementById("G1").value) || 0;
    var G2 = parseFloat(document.getElementById("G2").value) || 0;
    var eps = G1 + G2;
    var maximo = ((ingresos - G1 )/2) - G2;

    // Calcular la diferencia entre los ingresos y gastos
    var cupo = (maximo - gastos + eps);
    //console.log(cupo);
    
    // Mostrar la diferencia en el elemento de texto correspondiente
    document.getElementById("cupo").innerText = cupo.toFixed(0);
    //document.getElementById("maximo").innerText = maximo.toFixed(0);

    valorG = (cupo.toFixed(0));// Guarda el valor de cupo en valorG para guardar los datos
  }
  
 });



});