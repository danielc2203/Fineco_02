$( document ).ready(function() {
  
  let nombreF = "MinDefensa";
  let ColorF = "#7d2ee3";
  let iconPre = 'fas';
  let iconoF = 'fa-user-shield';
  let colorFuente = "#ffffff";
  
  // llamammos la funcion para crear el cuadro de calculadora
cuadroDiv(nombreF, ColorF, iconoF, colorFuente, iconPre);

    //Abre el modal y muestra el formulario para policia Nuevo
    $("#MinDefensa").click(function(){
        opcion = 1; //opcion 1 para envio de credito al crud           
        id=null;

    var html = "";
    var html = '<div class="container">';
    html += '<div class="row">';
    html += '<div class="col-6" id="left-col">';
    html += '<a id="add-Ingresos" class="btn btn-outline-success"><i class="far fa-plus-square"></i></a>';

  var inputs = [   
    { label: 'ASIGNACIÓN BÁSICA', id: 'C1' },
    { label: 'SEGVIDSUBS', id: 'C2' },
    { label: 'SUBFAMILIAR', id: 'C3' },
    { label: 'DEVO_PART_ALIM', id: 'C4' },
    { label: 'BONORDPUPF', id: 'C5' },
    { label: 'PRSOLVOL', id: 'C6' }  ];

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
        { label: 'APORTE CAJA RETIRO FFMM', id: 'G1' },
        { label: 'SISTEMA SALUD FFMM', id: 'G2' },
        { label: 'ASOCIACIÓN DEFENSORÍA MILITAR', id: 'G3' },
        { label: 'PREVISORASASUB', id: 'G4' },
        { label: 'PREVISORASAVOL', id: 'G5' },
        { label: 'COOSERPARK', id: 'G6' },
        { label: 'BAYPORT', id: 'G7' },
        { label: 'BANCO DE BOGOTÁ', id: 'G8' } ];

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
    html += '<tr><td>PAGADURIA</td><td id="pagaduria">'+nombreF+'</td></tr>'
  
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

  var inputHandler = function(event) {
    
  // Escucha cambios en los imput C y G para la suma automatica
  document.addEventListener("input", function (event) {
    if (event.target.id.startsWith("C")) {
      sumar("C");
      calcularDiferenciaDef();
    } else if (event.target.id.startsWith("G")) {
      sumar("G");
      calcularDiferenciaDef();
    }
    //console.log("Escuchando Cambios");
  });

  };
  

  function calcularDiferenciaDef() {
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

    var maximo = (ingresos - eps - C4 - C5 - C6)/2;

    // Calcular la diferencia entre los ingresos y gastos
    var cupo = (maximo - gastos + eps);
    
    // Mostrar la diferencia en el elemento de texto correspondiente
    document.getElementById("cupo").innerText = cupo.toFixed(0);
    document.getElementById("maximo").innerText = maximo.toFixed(0);

    valorG = (cupo.toFixed(0));// Guarda el valor de cupo en valorG para guardar los datos
  }

  
  
 });

 $('#modalCREDITOS').on('hidden.bs.modal', function () {
  valorG = '';
  nombre = '';
  $(document).off("input");
})
 

});

