$(document).ready(function() {
    let tabla = "clientes";
consultar();
function consultar() {
    $.ajax({
        url: "crud.php",
        method: "POST",
        dataType: "json",
        data: { opcion: 4, tabla: "clientes" },
        success: function(response) {

            
            // Definir las columnas, incluyendo la columna "Estado" con la opción "render" personalizada
            let columns = [
                { data: 'id', title: 'ID', width: '10%' },
                { data: 'primer_nombre', title: 'Primer Nombre', width: '15%' },
                { data: 'segundo_nombre', title: 'Segundo Nombre', width: '15%' },
                { data: 'primer_apellido', title: 'Primer Apellido', width: '15%' },
                { data: 'segundo_apellido', title: 'Segundo Apellido', width: '15%' },
                { data: 'num_documento', title: 'Número de Documento', width: '20%' },
                {
                    data: 'estado',
                    title: 'Estado',
                    width: '20%',
                    render: function(data, type, row, meta) {
                      return '<button class="btn-edit btn btn-sm btn-' + (data === 'activo' ? 'success' : 'danger') + '">' + data + '</button>';
                    }
                  }
            ];

            let html = "<table id='clientes' class='display nowrap'><thead><tr>";
            columns.forEach(function (col) {
              html += "<th>" + col.title + "</th>";
            });
            html += "<th></th><th></th></tr></thead><tbody class='text-uppercase'>";

            // Recorrer los resultados
            response.forEach(function (valores) {
                html += "<tr>";
                columns.forEach(function (col) {
                    html += "<td>" + valores[col.data] + "</td>";
                });
                html += "</tr>";
            });

            html += "</tbody></table>";

            // Insertar la tabla en el HTML
            $("#finecod").html(html);

            // Inicializar el DataTable
            $('#finecod').DataTable({
                language: {
                  url: '../dist/json/es-CO_DataTables.json',
                  //console.log('Archivo de idioma cargado correctamente');
                },
                dom: 'lBfrtip',
                buttons: [
                  'pageLength', 
                  {
                    extend: 'copyHtml5',
                    exportOptions: {
                      columns: ':visible'
                    }
                  }, 
                  {
                    extend: 'excelHtml5',
                    exportOptions: {
                      columns: ':visible'
                    }
                  },
                  'colvis'
                ],
                lengthMenu: [
                  [ 6, 12, 24, 48, -1 ],
                  [ '6 Filas','12 Filas', '24 Filas', '48 Filas', 'Ver Todos' ]
                ],
                responsive: true, 
                lengthChange: true,
                autoWidth: false,
                columns: columns,
                paging: true,
                initComplete: function(settings, json) {

                }
              });
              
        },
        error: function(xhr, status, error) {
            console.error("Error en la petición AJAX: " + error);
        }
    });
}
  
});

$(document).on('click', '.btn-edit', function() {
	fila = $(this);      
	tabla = "clientes";     
	var id = parseInt($(this).closest('tr').find('td:eq(0)').text());
	opcion = 5;
	//console.log(id, tabla, opcion);
	$.ajax({
		url: "crud.php",
		type: "POST",
		datatype:"json",    
		data: {opcion:opcion, id:id, tabla:tabla}, 

		success: function (response) {
			response = JSON.parse(response);
			var html = "";

			html += '<div class="modal-body">'
			html += '<form id="save-form">'
		  
			$.each(response[0], function(key, val) {
				//Buscamos si el campo es id lo bloqueamos
				if (key === "id") {
					html += '<div class="form-group row mb-0">';
					html += '<label class="col-6 col-form-label-sm">' + key + ' : </label>';
					html += '<div class="col-6">';
					html += '<input type="text" id="' + key + '" value="' + val + '" class="form-control form-control-sm" readonly>';
					html += '</div>';
					html += '</div>';
				} else {
					html += '<div class="form-group row mb-0">';
					html += '<label class="col-6 col-form-label-sm">' + key + ' : </label>';
					html += '<div class="col-6">';
					html += '<input type="text" id="' + key + '" value="' + val + '" class="form-control form-control-sm">';
					html += '</div>';
					html += '</div>';
				}

			});

			html += '<button type="button" class="btn btn-primary" id="btnUpdateSubmitEdit">Guardar</button>'
            html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
			html += '</form>'
			html += '</div>'// Cierro "modal-body"
		  
			// Insert the HTML Template and display all employee records
			$("#contenido_datos").html(html);
		  }
		  
	  });

	  $(".modal-header").css( "background-color", "#10a37f");
	  $(".modal-header").css( "color", "white" );
	  $(".modal-title").text("Detalles de " +tabla +id);
	  $('#modalClientes').modal('show');
	  var id = id;
	  //console.log(id);

});


$(document).on('click', '#btnUpdateSubmitEdit', function() {
    opcion = 2;
    var formData = {}; //Se declara una variable "formData" que será un objeto vacío.
    var inputs = document.querySelectorAll("input"); //Se declara una variable "inputs" que almacenará una lista de todos los elementos "input" utilizando la función "querySelectorAll" 
    for (var i = 0; i < inputs.length; i++) { //Se usa un ciclo "for" para iterar a través de todos los elementos "input" en la lista.
    formData[inputs[i].id] = inputs[i].value; //Dentro del ciclo, se agrega una propiedad al objeto "formData" utilizando el "id" del elemento de entrada actual como la clave y el "value" como el valor.
    }

    //formData['id'] = parseInt(id);
    var id = parseInt(formData['id']);

        $.ajax({
            url: "crud.php",
            type: "POST",
            //(...formData) es un operador de propagación que permite expandir el objeto 
            data: {opcion: opcion, tabla:tabla, id:id, ...formData}, 
            success: function (data) {
            }
            });

        $('#modalClientes').modal('hide');
        $(function() {
            //toastr.success('Se ha creado el registro correctamente')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Los cambios han sido efectuados exitosamente...',
                showConfirmButton: false,
                timer: 1900,
            }).then((result) => {
                // Se llama la función consultar después de que se haya cerrado la alerta
                location.reload();
            });
        });
            
        // Verifico por consola si esta enviando los datos correctos
        
});


$(document).on('click', '.btnNuevo', function(){
	var html = "";
	opcion = 1; // Opcion 1 para consultar todos los campos de la tabla y traerlos la formulario
	id ="";
    tabla = "clientes"

	$.ajax({
		url: "crud.php",
		type: "POST",
		datatype:"json",    
		data: {opcion:opcion, tabla:tabla}, 
	
		success: function (response) {
			response = JSON.parse(response);
			var html = "";
	
			html += '<div class="modal-body">'
			html += '<form id="save-form">'
		  
			$.each(response, function(index, val) {

                if (val.Field == "id"){
                    html += '<div class="form-group row mb-0">';
                    html += '<label class="col-6 col-form-label-sm">' + val.Field + ' : </label>';
                    html += '<div class="col-6">';
                    html += '<input type="text" id="' + val.Field + '" value="" class="form-control form-control-sm" readonly>';
                    html += '</div>';
                    html += '</div>';
                } else if (val.Field == "fecha_nacimiento") {
                    html += '<div class="form-group row mb-0">';
                    html += '<label class="col-6 col-form-label-sm">' + val.Field + ' : </label>';
                    html += '<div class="col-6">';
                    html += '<input type="date" id="' + val.Field + '" value="" class="form-control form-control-sm" onchange="calculateAge(this.value)">';
                    html += '</div>';
                    html += '</div>';
                } else if (val.Field.toLowerCase().includes('fecha')){
                    html += '<div class="form-group row mb-0">';
                    html += '<label class="col-6 col-form-label-sm">' + val.Field + ' : </label>';
                    html += '<div class="col-6">';
                    html += '<input type="date" id="' + val.Field + '" value="" class="form-control form-control-sm">';
                    html += '</div>';
                    html += '</div>';
                }else {
                    html += '<div class="form-group row mb-0">';
                    html += '<label class="col-6 col-form-label-sm">' + val.Field + ' : </label>';
                    html += '<div class="col-6">';
                    html += '<input type="text" id="' + val.Field + '" value="" class="form-control form-control-sm">';
                    html += '</div>';
                    html += '</div>';
                };
            });
	
			html += '<button type="button" class="btn btn-primary" id="btnUpdateSubmitNew">Guardar</button>'
			html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
			html += '</form>'
			html += '</div>'// Cierro "modal-body"
		  
			// Insert the HTML Template and display all employee records
			$("#contenido_datos").html(html);
		  }
		  
	  });
	
	  $(".modal-header").css( "background-color", "#543c0cb");
	  $(".modal-header").css( "color", "white" );
	  $(".modal-title").text("Detalles de " +tabla +id);
	  $('#modalClientes').modal('show');
	  var id = id;

});

$(document).on('click', '#btnUpdateSubmitNew', function() {
    opcion = 6;
    var formData = {}; //Se declara una variable "formData" que será un objeto vacío.
    var inputs = document.querySelectorAll("input"); //Se declara una variable "inputs" que almacenará una lista de todos los elementos "input" utilizando la función "querySelectorAll" 
    for (var i = 0; i < inputs.length; i++) { //Se usa un ciclo "for" para iterar a través de todos los elementos "input" en la lista.
    formData[inputs[i].id] = inputs[i].value; //Dentro del ciclo, se agrega una propiedad al objeto "formData" utilizando el "id" del elemento de entrada actual como la clave y el "value" como el valor.
    }

    //formData['id'] = parseInt(id);
    var id = parseInt(formData['id']);

        $.ajax({
            url: "crud.php",
            type: "POST",
            //(...formData) es un operador de propagación que permite expandir el objeto 
            data: {opcion: opcion, id:id, ...formData}, 
            success: function (data) {
            }
            });

        $('#modalClientes').modal('hide');
        $(function() {
            //toastr.success('Se ha creado el registro correctamente')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Los cambios han sido efectuados exitosamente...',
                showConfirmButton: false,
                timer: 1900,
            }).then((result) => {
                // Se llama la función consultar después de que se haya cerrado la alerta
                location.reload();
            });
        });
            
        // Verifico por consola si esta enviando los datos correctos
        
});

function calculateAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    document.getElementById('edad').value = age;
  }