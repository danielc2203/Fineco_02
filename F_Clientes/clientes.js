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
                //{ data: 'id', title: 'ID', width: '10%' },
                {
                    data: 'id',
                    title: 'ID',
                    width: '10%',
                    render: function(data, type, row, meta) {
                      return '<button id="'+data+'" class="btn-view btn btn-outline-secondary">' + data + '</button>';
                    }
                  },
                { data: 'primer_nombre', title: 'Primer Nombre', width: '10%' },
                { data: 'segundo_nombre', title: 'Segundo Nombre', width: '15%' },
                { data: 'primer_apellido', title: 'Primer Apellido', width: '15%' },
                { data: 'segundo_apellido', title: 'Segundo Apellido', width: '15%' },
                { data: 'pagaduria', title: 'Pagaduria', width: '10%' },
                { data: 'num_documento', title: 'Número de Documento', width: '15%' },
                {
                    data: 'estado',
                    title: 'Estado',
                    width: '20%',
                    render: function(data, type, row, meta) {
                        return '<button data-id="' + row.id + '" class="btn-edit btn btn-sm btn-' + (data === 'Activo' ? 'success' : 'danger') + '">' + data + '</button>';
                    }
                },
                
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
                "columnDefs": [
                    { "type": "num", "targets": 0 } // 0 es el índice de la columna de ID
                ],
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

$(document).on('click', '.btn-view', function() {
	fila = $(this);      
	tabla = "clientes";     
	var id = parseInt($(this).closest('tr').find('td:eq(0)').text());
	opcion = 5;
	$.ajax({
		url: "crud.php",
		type: "POST",
		datatype:"json",    
		data: {opcion:opcion, id:id, tabla:tabla}, 
		success: function (response) {
            response = JSON.parse(response);
            var cliente = response[0];
            var html = "";
            html += '<div class="modal-body" id="modal-content">';
            html += '<div class="card">';
            html += '<div class="card-body">';
            html += '<h5 class="card-title"></h5>';
            // Mostrar cada uno de los datos del cliente
            $.each(cliente, function(key, val) {
                html += '<div class="row">';
                html += '<div class="col-md-6"><strong>' + key + ': </strong></div>';
                html += '<div class="col-md-6">' + val + '</div>';
                html += '</div>';
            });
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="footer mb-3">';
            // html += '<button type="button" class="btn btn-danger" id="sendtopdf"><i class="fas fa-file-pdf"></i></button>';
            html += '<button type="button" class="btn btn-danger float-right" id="print_modal"><i class="fas fa-file-pdf fa-2x"></i></button>';
            html += '</div>';

            
            $("#contenido_datos").html(html);
          }
          
	  });

	  $(".modal-header").css( "background-color", "#563e7c");
	  $(".modal-header").css( "color", "white" );
	  $(".modal-title").text("Detalles de " +tabla+ " " +id);
      
	  $('#modalClientes').modal('show');
      //$('#modalClientes').toggleClass("modal-dialog modal-xl");
	  var id = id;
	  //console.log(id);

});

$(document).on('click', '.btn-edit', function() {
	fila = $(this);      
	tabla = "clientes";     
    var id = $(this).attr('data-id'); // traemos el id del btn-editar para usar el resposive de datatable
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
                } else if(key.toLowerCase().includes('fecha')) {
                  html += '<div class="form-group row mb-0">';
                  html += '<label class="col-6 col-form-label-sm">' + key + ' : </label>';
                  html += '<div class="col-6">';
                  html += '<input type="date" id="' + key + '" value="' + val + '" class="form-control form-control-sm">';
                  html += '</div>';
                  html += '</div>';
                } else if (key === "estado") {
                  html += '<div class="form-group row mb-0">';
                  html += '<label class="col-6 col-form-label-sm">' + key + ' : </label>';
                  html += '<div class="col-6">';
                  html += '<select id="' + key + '" class="form-control form-control-sm">';
                  html += '<option value="Activo">Activo</option>';
                  html += '<option value="Retirado">Retirado</option>';
                  html += '</select>';
                  html += '</div>';
                  html += '</div>';
                } else {
                  html += '<div class="form-group row mb-0">';
                  html += '<label class="col-6 col-form-label-sm">' + key + ' : </label>';
                  html += '<div class="col-6">';

                  if (key === "pagaduria") {
                    // Código HTML para el input "pagaduria"
                    html += '<select id="' + key + '" class="form-control form-control-sm">';
                
                    // Hacer la solicitud AJAX para obtener los convenios
                    $.ajax({
                        url: "listas.php",
                        type: "POST",
                        datatype:"json",
                        data: {opcion: 1, tabla: 'convenios'},
                        success: function(response) {
                            response = JSON.parse(response);
                            var options = '';
                            var selected = '';
                            var encontrado = false;
                            // Recorrer el array de convenios y buscar el valor almacenado en la base de datos
                            $.each(response, function(i, val2) {
                                options += '<option value="' + val2.nombre + '"';
                                if (val2.nombre == val) {
                                    options += 'selected';
                                    encontrado = true;
                                }
                                options += '>' + val2.nombre + '</option>';
                            });
                            // Si no se encontró el valor almacenado en la base de datos, crear una opción para este valor
                            if (!encontrado) {
                                options += '<option value="' + val + '" selected>' + val + '</option>';
                            }
                            // Agregar las opciones al select
                            $('#' + key).append(options);
                        }
                    });
                    html += '</select>';
                } else {
                    html += '<input type="text" id="' + key + '" value="' + val + '" class="form-control form-control-sm">';
                }
                html += '</div>';
                html += '</div>';
                
                }

              });

			
			html += '</form>'
			html += '</div>'// Cierro "modal-body"

            html += '<div class="footer mb-5">'
            html += '<button type="button" class="btn btn-primary float-sm-left" id="btnUpdateSubmitEdit">Guardar</button>'
            html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
            html += '</div>'// Cierro "modal-footer"
		  
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

    //Agregamos la eleccion de estado a su campo
    formData['estado'] = $('#estado').val();
    formData['pagaduria'] = $('#pagaduria').val();
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
                }else if (val.Field == "estado") {
                    html += '<div class="form-group row mb-0">';
                    html += '<label class="col-6 col-form-label-sm">' + val.Field + ' : </label>';
                    html += '<div class="col-6">';
                    html += '<select id="' + val.Field + '" class="form-control form-control-sm">';
                    html += '<option value="Activo">Activo</option>';
                    html += '<option value="Retirado">Retirado</option>';
                    html += '</select>';
                    html += '</div>';
                    html += '</div>';
                }else if (val.Field == "pagaduria") {
                    // Código HTML para el input "convenio"
                    html += '<div class="form-group row mb-0">';
                    html += '<label class="col-6 col-form-label-sm">' + val.Field + ' : </label>';
                    html += '<div class="col-6">';
                    html += '<select id="' + val.Field + '" class="form-control form-control-sm">';
                    // Hacer la solicitud AJAX para obtener los convenios
                    $.ajax({
                        url: "listas.php",
                        type: "POST",
                        datatype:"json",
                        data: {opcion: 1, tabla: 'convenios'},
                        success: function(response) {
                            response = JSON.parse(response);
                            var options = '';
                            // Recorrer el array de convenios y construir la cadena HTML para las opciones
                            $.each(response, function(i, val) {
                                options += '<option value="' + val.nombre + '">' + val.nombre + '</option>';
                            });
                            // Agregar las opciones al select
                            $('#pagaduria').append(options);
                        }
                    });
                    //html += '<option value="Uno">Uno</option>';
                    html += '</select>';
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
    formData['estado'] = $('#estado').val();
    formData['pagaduria'] = $('#pagaduria').val();

    // Validar si los campos están vacíos excepto el id
    var camposVacios = false;
    for (var key in formData) {
        if (formData.hasOwnProperty(key) && key !== "id" && key !== "segundo_nombre" && key !== "segundo_apellido" && key !== "segundo_apellido" && formData[key] === "") {
            camposVacios = true;
            break;
        }
    }    
    if (camposVacios) {
        Swal.fire({
            title: 'Campos Obligatorios!',
            text: 'Por favor complete todos los campos ya que son obligatorios',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    } else {
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
    }
     
});

//Funcion para calcular la edad segun la Fecha de nacimiento
function calculateAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    document.getElementById('edad').value = age;
};

// Funcion para imprimir el modal en PDF
$(document).on('click', '#print_modal', function() {
    var element = document.getElementById('modal-content');
    html2pdf().from(element).save();
});