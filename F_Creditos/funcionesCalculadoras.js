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
function formularioModal (nombreF, ColorF, colorFuente){

    
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
    html += '<button type="button" class="btn btn-success ml-3" id="guardar" onclick= "guardarDatos()">Guardar</button>'
    html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'

    $("#fCalculadora").html(html);

    $(".modal-header").css({
    "background-color": ColorF,
    "color": colorFuente });
    $(".modal-title").text("Calculadora de Créditos - "+nombreF);
    $('#modalCREDITOS').modal('show');

}


// Funcion para agregar nuevos campos a la izquierda o derecha
function nuevosCampos(){
      
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
}