var id, opcion, tabla;

// Función para manejar la acción seleccionada
function manejarAccion(accion) {
    switch (accion) {
        case 'usuarios':
            tabla = "grupo_usuarios";
            break;
        case 'convenios':
            tabla = "convenios";
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
					html += "<span class='text'>" + valores.nombre + "</span>";
					html += '</div>'
					html += '<div class="tools">' // Botones
					html += '<a class="btn btn-outline-primary btnEditar" id=' + valores.id + '><i class="fas fa-edit"></i>'
					html += "<a class='btn btn-outline-danger btn-borrar-tarea' id='" + valores.id + "' type='button'><i class='fas fa-trash'></i></a>"
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



$(document).on('click', '.btnEditar', function(){
	var id = $(this).attr('id');
	var nombre = $(this).closest('li').find('.text').text();
	var html = "";
           
	//$('#modalConfig').modal('show');

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
	html += '<button type="button" class="btn btn-success" id="guardar">Guardar</button>'
	html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
	html += '</div>'


	$("#contenido_config").html(html);
	$(".modal-header").css("background-color", "#0267EB");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Calculadora de Creditos - Docentes");
	$('#id').val(id);
	$('#nombre').val(nombre);
	$('#modalEditar').modal('show');


	//console.log(nombre);

});



//Enviar   

$('#formModal').submit(function(e){                         
	e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

	id = $.trim(document.getElementById('id').value);
	nombre = $.trim(document.getElementById('nombre').value);
	
		$.ajax({
		  url: "crud.php",
		  type: "POST",
		  datatype:"json",    
		  data:  {id:id, 
				nombre:nombre,
				opcion:opcion},    
		  success: function(data) {
			
		   }
		
		});			        
	$('#modalCRUD').modal('hide');
	$(function() {
		toastr.success('Se ha creado el registro correctamente')
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Los cambios han sido efectuados exitosamente...',
			showConfirmButton: false,
			timer: 1900
		  })
	  });										     			
});

