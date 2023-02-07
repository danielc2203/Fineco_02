$(document).ready(function() {
var id, opcion, evento, tabla;
var tabla = "clientes"; 

// Función para realizar la consulta a la base de datos y mostrar el Datatable
$(document).ready(function () {
	consultar();
});

function consultar() { 
	$.ajax({
	url: "crudU.php",
	method: "POST",
	datatype: "json",
	data: { opcion: 4, tabla: "clientes" },
	success: function(response) {
		var columns = [];
		// parsear la respuesta en formato json
		response = JSON.parse(response);
		var html = "";
		// Verificar si hay registros disponibles
		if (response.length > 0) {
		  // Crear una tabla en HTML
		  var table = "<table id='clientes' class='table table-hover'><thead><tr>";
		  // Obtener las llaves (nombres de columna) del primer registro
		  var keys = Object.keys(response[0]);
		  console.log("Encabezados:", keys);
		  //var columns = [];
		  keys.forEach(function (key) {
			columns.push({ data: key, title: key, width: "20%" });
		  });
		  console.log("Columnas: ", columns);
		  // Agregar las llaves como encabezados de la tabla
		  keys.forEach(function (key) {
			table += "<th>" + key + "</th>";
		  });
		  table += "</tr></thead><tbody class='text-lowercase'>";
		  // Recorrer los resultados
		  response.forEach(function (valores) {
			table += "<tr>";
			console.log("Filas:", valores);
			// Agregar los valores como celdas de la tabla
			keys.forEach(function (key) {
			  table += "<td>" + valores[key] + "</td>";
			});
				table += '<td><button type="button" class="btn btn-primary btn-edit" data-toggle="modal" data-target="#editModal">Editar</button></td>';
				table += '<td><button type="button" class="btn btn-danger btnBorrar" >Borrar</button></td>';
				table += "</tr>";
			  });
			  table += "</tbody></table>";
			  // Insertar la tabla en el HTML
			  $("#finecod").html(table);
			  // Inicializar el DataTable
			  var table = $('#finecod').DataTable();
			  
			  $('#finecod').DataTable({
				columns: columns,
				"lengthMenu": [ [20, 50, 100, -1], [20, 50, 100, "All"] ],
				"searching": true,
				"initComplete": function () {
					$('#finecod tbody').on('click', 'tr', function () {
						var rowData = $('#finecod').DataTable().row(this).data();
						console.log(rowData);
					});
				}
			});
			
			} else {
			  html = '<div class="alert alert-warning">No existen registros!</div>';
			  // Insertar el HTML
			  $("#finecod").html(html);
			}
		  },
		  error: function(xhr, status, error) {
			console.error("Error en la petición AJAX: " + error);
		  }
		
	});
	
};
	
	

$(document).on('click', '.btn-edit', function() {
	fila = $(this);      
	tabla = "clientes";     
	var id = parseInt($(this).closest('tr').find('td:eq(0)').text());
	opcion = 5;
	//console.log(id, tabla, opcion);
	$.ajax({
		url: "crudU.php",
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
	  $('#modalEditarC').modal('show');
	  var id = id;
	  //console.log(id);

  });

  // Recopilando los datos del formulario y enviandolos al crud para hacer update
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
			url: "crudU.php",
			type: "POST",
			//(...formData) es un operador de propagación que permite expandir el objeto 
			data: {opcion: opcion, tabla:tabla, id:id, ...formData}, 
			success: function (data) {
				consultar();
			}
		  });

	  	$('#modalEditarC').modal('hide');
		$(function() {
			//toastr.success('Se ha creado el registro correctamente')
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Los cambios han sido efectuados exitosamente...',
				showConfirmButton: false,
				timer: 1900,
			})
		});	
		// Verifico por consola si esta enviando los datos correctos
		
  
	});

	$(document).on('click', '#btnUpdateSubmitNew', function() {
		opcion = 0;
		var formData = {}; //Se declara una variable "formData" que será un objeto vacío.
		var inputs = document.querySelectorAll("input"); //Se declara una variable "inputs" que almacenará una lista de todos los elementos "input" utilizando la función "querySelectorAll" 
		for (var i = 0; i < inputs.length; i++) { //Se usa un ciclo "for" para iterar a través de todos los elementos "input" en la lista.
		formData[inputs[i].id] = inputs[i].value; //Dentro del ciclo, se agrega una propiedad al objeto "formData" utilizando el "id" del elemento de entrada actual como la clave y el "value" como el valor.
		}
	
		//formData['id'] = parseInt(id);
		var id = parseInt(formData['id']);
	
			$.ajax({
				url: "crudU.php",
				type: "POST",
				//(...formData) es un operador de propagación que permite expandir el objeto 
				data: {opcion: opcion, tabla:tabla, id:id, ...formData}, 
				success: function (data) {
					consultar();
				}
			  });
	
			  $('#modalEditarC').modal('hide');
			$(function() {
				//toastr.success('Se ha creado el registro correctamente')
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Los cambios han sido efectuados exitosamente...',
					showConfirmButton: false,
					timer: 1900,
				})
			});	
			// Verifico por consola si esta enviando los datos correctos
			
	  
		});
  

// Funcion para crear un nuevo registro de la selecciòn.
$(document).on('click', '.btnNuevo', function(){
	var html = "";
	opcion = 1;

	$.ajax({
		url: "crudU.php",
		type: "POST",
		datatype:"json",    
		data: {opcion:opcion, tabla:tabla}, 
	
		success: function (response) {
			response = JSON.parse(response);
			var html = "";
	
			html += '<div class="modal-body">'
			html += '<form id="save-form">'
		  
			$.each(response, function(index, val) {
				html += '<div class="form-group row mb-0">';
				html += '<label class="col-6 col-form-label-sm">' + val.Field + ' : </label>';
				html += '<div class="col-6">';
				html += '<input type="text" id="' + val.Field + '" value="" class="form-control form-control-sm">';
				html += '</div>';
				html += '</div>';
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
	  $('#modalEditarC').modal('show');
	  var id = id;

});



// Funcion para borrar los datos seleccionados con Swal2:
$(document).delegate(".btnBorrar", "click", function() {

	fila = $(this);           
	var id = parseInt($(this).closest('tr').find('td:eq(0)').text());
	var nombre = $(this).closest('tr').find('td:eq(6)').text();;
	opcion = 3; //eliminar   

		Swal.fire({
			icon: 'warning',
			title: 'Estas seguro de eliminar el registro '+id+' de documento Nº: '+nombre+'?',
			showDenyButton: false,
			showCancelButton: true,
			confirmButtonText: 'SI'
		}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
		
			$.ajax({
				url: "crudU.php",
				type: "POST",
				datatype:"json",    
				data: {tabla:tabla, opcion:opcion, id:id}, 
				success: function(response) {
					Swal.fire('El registro '+ id +' ha sido Eliminado de la tabla '+ tabla + ' success');
					consultar();
				 }
			  });
			  consultar();
			
		} else if (result.isDenied) {
			Swal.fire('Cambios No Efectuados', '', 'info')
		}else{
			$(function() {
				Swal.fire('Cambios No Efectuados', '', 'info')
				//toastr.info('Se ha cancelado la acción de eliminar')
			  });
		}
		});
	});

});