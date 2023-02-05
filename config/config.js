var id, opcion, tabla, evento;

// Función para manejar la acción seleccionada
function manejarAccion(accion) {
    switch (accion) {
        case 'usuarios':
            tabla = "grupo_usuarios";
            break;
        case 'convenios':
            tabla = "convenios";
            break;
		case 'ocupacion':
			tabla = "ocupacion";
			break;
		case 'estado_credito':
			tabla = "estado_credito";
			break;
		case 'estados':
			tabla = "estados";
			break;
        default:
            alert("Campo no registrado en config");
            return;
    }
    // Llamada a la función para realizar la consulta
    consultar();
}

// Función para realizar la consulta a la base de datos
function consultar() {
    $.ajax({
        url: "crud.php",
        method: "POST",
        datatype: "json",
        data: { opcion: 4, tabla: tabla },
        success: function(response) {
            // parsear la respuesta en formato json
            response = JSON.parse(response);
            var html = "";
            // Verificar si hay registros disponibles
            if (response.length > 0) {
				// Crear una tabla en HTML
				var table = "<table id='example' class='table table-hover'><thead><tr>";
				// Obtener las llaves (nombres de columna) del primer registro
				var keys = Object.keys(response[0]);
				// Agregar las llaves como encabezados de la tabla
				keys.forEach(function (key) {
				  table += "<th>" + key + "</th>";
				});
				table += "</tr></thead><tbody>";
				// Recorrer los resultados
				response.forEach(function (valores) {
				  table += "<tr>";
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
				$('#example').DataTable();
			  } else {
				html = '<div class="alert alert-warning">No existen registros!</div>';
				// Insertar el HTML
				$("#finecod").html(html);
			  }
		}
		
	});
};


$(document).on('click', '.btn-edit', function() {
	fila = $(this);           
	var id = parseInt($(this).closest('tr').find('td:eq(0)').text());
	opcion = 5;
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

			html += '<button type="button" class="btn btn-primary" id="btnUpdateSubmit">Guardar</button>'
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
	  //console.log(id);

  });

  // Recopilando los datos del formulario y enviandolos al crud
  $(document).on('click', '#btnUpdateSubmit', function() {
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
  

// Funcion para crear un nuevo registro de la selecciòn.
$(document).on('click', '.btnNuevoRegistro', function(){
	var html = "";
	opcion = 1;

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

			html += '<button type="button" class="btn btn-primary" id="btnUpdateSubmit">Guardar</button>'
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
	var nombre = $(this).closest('li').find('.text').text();
	opcion = 3; //eliminar   

		Swal.fire({
			icon: 'warning',
			title: 'Estas seguro de eliminar el registro '+id+' de nombre '+nombre+'?',
			showDenyButton: false,
			showCancelButton: true,
			confirmButtonText: 'SI'
		}).then((result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
		
			$.ajax({
				url: "crud.php",
				type: "POST",
				datatype:"json",    
				data: {tabla:tabla, opcion:opcion, id:id}, 
				success: function(response) {
					Swal.fire('El registro '+ id +' ha sido Eliminado de la base de datos '+ tabla + ' success');
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

