$( document ).ready(function() {
  
  let nombreF = "Policia";
  let ColorF = "#007936";
  let iconPre = 'fab';
  let iconoF = 'fa-pinterest-p';
  let colorFuente = "#ffffff";
  
  // llamammos la funcion para crear el cuadro de calculadora
cuadroDiv(nombreF, ColorF, iconoF, colorFuente, iconPre);

    //Abre el modal y muestra el formulario para policia Nuevo
    $("#Policia").click(function(){
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

    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'

    $("#fCalculadora").html(html);

    $(".modal-header").css({
      "background-color": ColorF,
    "color": colorFuente });
    $(".modal-title").text("Calculadora de Créditos - "+nombreF);
    $('#modalCREDITOS').modal('show');
        
    
      // Funcion que agrega campos nuevos a la derecha o a la izquierda
    nuevosCampos();



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
    //console.log("Escuchando Cambios");
  });

  function calcularDiferencia() {
    // Obtener los valores de los ingresos y gastos
    var ingresos = parseFloat(document.getElementById("devengados").textContent);
    var gastos = parseFloat(document.getElementById("tdeducidos").textContent);
    var C2 = parseFloat(document.getElementById("C2").value) || 0;
    var C3 = parseFloat(document.getElementById("C3").value) || 0;
    var C4 = parseFloat(document.getElementById("C4").value) || 0;
    var C5 = parseFloat(document.getElementById("C5").value) || 0;
    var C6 = parseFloat(document.getElementById("C6").value) || 0;
    var G1 = parseFloat(document.getElementById("G1").value) || 0;
    var G2 = parseFloat(document.getElementById("G2").value) || 0;


    var eps = G1 + G2;

    var maximo = (ingresos - eps - C2 - C3 - C4 - C6)/2;

    // Calcular la diferencia entre los ingresos y gastos
    var cupo = (maximo - gastos + eps);
    
    // Mostrar la diferencia en el elemento de texto correspondiente
    document.getElementById("cupo").innerText = cupo.toFixed(0);
    document.getElementById("maximo").innerText = maximo.toFixed(0);

    valorG = (cupo.toFixed(0));// Guarda el valor de cupo en valorG para guardar los datos
  }
  
 });


});
