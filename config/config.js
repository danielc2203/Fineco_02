var id, opcion, tabla, rol;
    opcion = 4;
	
function usuarios(){
	alert("Click en usuarios");
	tabla = "grupo_usuarios";
	consultaf();
}

function convenios(){
	alert("Click en Convenios");
	tabla = "convenios";
	consultaf();
}

function consultaf(){
	
	//alert("Esta es la funcion Daniel");
	document.getElementById('tituloUno').value="okokok";
	$.ajax({
		//tabla: "convenios",
		url: "crud.php",
		method: "POST",
		datatype:"json",    
		data:  {opcion:opcion, tabla:tabla},    
		success: function (response) {//once the request successfully process to the server side it will return result here
			
			// Parse the json result
			response = JSON.parse(response);

			var html = "";
			
			// Check if there is available records
			if(response.length) {
				// Loop the parsed JSON
				$.each(response, function(key,value) {
					// Our employee list template
					
					
					html += '<ul class="todo-list" data-widget="todo-list" >'
					html += '<li style="margin-bottom: 3px;" class="'+ value.id +'">'

					html += "<span class='text'>" + value.id + " - " + "</span>";
					html += "<span>" + value.nombre +"</span>";
											
					html += '</div>'

					html += '<div class="tools">' // Botones
					html += '<a class="btn btn-outline-primary btnEditar " id='+ value.id +'><i class="fas fa-edit"></i>'
					
					html += "<a class='btn btn-outline-danger btn-borrar-tarea' id='"+value.id+"' type='button'><i class='fas fa-trash'></i></a>"
					html += '</div>'

					html += '</li>'
					html += '</ul>'
	
				});
			} else {
				html += '<div class="alert alert-warning">';
				html += 'No tienes tareas pendientes!';
			}

			// Insert the HTML Template and display all employee records
			$("#finecod").html(html);
		}
		
	  });
}

//Editar   



$('#formModal').submit(function(e){                         
	e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

	id = $.trim($('#id').val());
	nombre = $.trim($('#nombre').val());
	
		$.ajax({
		  url: "crud.php",
		  type: "POST",
		  datatype:"json",    
		  data:  {id:id, 
				primer_nombre:primer_nombre,
				opcion:opcion},    
		  success: function(data) {
			tablaUsuarios.ajax.reload(null, false);
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

//Docentes
$(document).on("click", ".btnEditar", function(){
		opcion = 5;//Para llamar los datos de la BD
        var id = $(this).attr('id');
        alert(id);

		$.ajax({
			//tabla: "convenios",
			url: "crud.php",
			method: "POST",
			datatype:"json",    
			data:  {opcion:opcion, tabla:tabla},    
			success: function (response) {//once the request successfully process to the server side it will return result here
				
				// Parse the json result
				response = JSON.parse(response);
	
				var html = "";
				
				// Check if there is available records
				if(response.length) {
					// Loop the parsed JSON
					$.each(response, function(key,value) {
						// Our employee list template
						$("#nombre").val(nombre);
					});


				}
				
	html += '<div class="form-group">'
    html += '<label for="id" class="col-form-label">ID</label>'
    html += '<div class="col-sm">'
    html += '<input type="text" class="form-control id" id="id" value="'+id+'" readonly>'
    html += '</div>'
    html += '</div>'

    html += '<div class="form-group">'
    html += '<label for="id" class="col-form-label">Nombre</label>'
    html += '<div class="col-sm">'
    html += '<input type="text" class="form-control id" id="nombre" value="'+nombre+'">'
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
    $('#modalConfig').modal('show');
				
			}
			
		  });	

    
});