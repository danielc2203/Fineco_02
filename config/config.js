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
        default:
            alert("Acción no válida");
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
                // Recorrer los resultados
                response.forEach(function(valores) {
                    html += '<ul class="todo-list" data-widget="todo-list" >'
					html += '<li style="margin-bottom: 3px;" class="' + valores.id + '">'
					html += "<span class='text'>" + valores.nombre + "</span>"
					html += '</div>'
					html += '<div class="tools">' // Botones
					html += '<a class="btn btn-outline-primary btnEditar" id=' + valores.id + '><i class="fas fa-edit"></i></a>'
					html += '<a class="btn btn-outline-danger btnBorrar" id=' + valores.id + '><i class="fas fa-trash"></i></a>'
					html += '</div>'
					html += '</li>'
					html += '</ul>'
				});
			} else {
				html += '<div class="alert alert-warning">';
				html += 'No tienes tareas pendientes!';
			}
			// Insertar el HTML Template y mostrar todos los registros
			$("#finecod").html(html);
			}
		});
		
	}

// Boton Editar Muestra Modal con la fila correspondiente.
$(document).on('click', '.btnEditar', function(){
	opcion = 6;
	var id = $(this).attr('id');
	var nombre = $(this).closest('li').find('.text').text();
	var html = "";

	html += '<form>'
	html += '<div class="form-group">'
	html += '<label for="id" class="col-form-label">ID</label>'
	html += '<div class="col-sm">'
	html += '<input type="text" class="form-control id" id="id" value="'+id+'" readonly>'
	html += '</div>'
	html += '</div>'
	html += '<div class="form-group">'
	html += '<label for="id" class="col-form-label">Nombre</label>'
	html += '<div class="col-sm">'
	html += '<input type="text" class="form-control nombre" id="nombre" value="'+nombre+'" >'
	html += '</div>'
	html += '</div>'
	html += '<div class="modal-footer">'
	html += '<button type="submit" class="btn btn-success" id="guardar">Guardar</button>'
	html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
	html += '</div>'
	html += '</form>'

	$("#contenido_config").html(html);
	$(".modal-header").css("background-color", "#0267EB");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Calculadora de Creditos - Docentes");
	$('#id').val(id);
	$('#nombre').val(nombre);
	$('#modalEditar').modal('show');

});

// Funcion para crear un nuevo registro de la selecciòn.

$(document).on('click', '.btnNuevoRegistro', function(){
	var html = "";
	opcion = 1;

	html += '<form>'
	html += '<input type="hidden" class="form-control id" id="id"  readonly>'
	html += '<div class="form-group">'
	html += '<label for="id" class="col-form-label">Nombre</label>'
	html += '<div class="col-sm">'
	html += '<input type="text" class="form-control nombre" id="nombre" >'
	html += '</div>'
	html += '</div>'
	html += '<div class="modal-footer">'
	html += '<button type="submit" class="btn btn-success" id="guardar">Agregar</button>'
	html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
	html += '</div>'
	html += '</form>'

	$("#contenido_config").html(html);
	$(".modal-header").css("background-color", "#0267EB");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Formulario de " +tabla);
	$('#modalEditar').modal('show');

});



// Funcion de Enviar los datos del formulario a la base de datos
$('#modalEditar').submit(function(e){                         
	e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

	id = $.trim(document.getElementById('id').value);
	nombre = $.trim(document.getElementById('nombre').value);

	console.log(id, nombre, tabla, opcion);
	
		$.ajax({
		  url: "crud.php",
		  type: "POST",
		  datatype:"json",    
		  data:  {id:id, 
				nombre:nombre,
				opcion:opcion,
				tabla:tabla},    
		  success: function(data) {
			
		   }
		
		});			        
	$('#modalEditar').modal('hide');
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
	  consultar();	
});

// Funcion para borrar los datos seleccionados:
//Borrar con Swal2
$(document).delegate(".btnBorrar", "click", function() {

	var id = $(this).attr('id'); // Pasamos el id del modal a la funcion borrar desde el boton
	var nombre = $(this).closest('li').find('.text').text();
	console.log(id, tabla);
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
					Swal.fire('El registro '+ nombre +' ha sido Eliminado de la base de datos '+ tabla + ' success');
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
		consultar();
		});
	});

