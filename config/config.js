var id, opcion, tabla, rol;
    opcion = 4;
	
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
		consultaf();
	  }
	  

function consultaf(){
	
	//alert("Esta es la funcion Daniel");
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
			if(response.length > 0) {
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

					var nombre = value.nombre;
	
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


// editar IA
$(document).on("click", ".btnEditar", function(){
    opcion = 5; //Para llamar los datos de la BD
    var id = $(this).attr('id');
	alert(tabla);

    //Aquí haces una llamada ajax para obtener los datos del usuario con el id correspondiente
    $.ajax({
        url: "crud.php",
        method: "POST",
        dataType: "json",
        data: {opcion: 5, id:id, tabla:tabla},
        success: function (response) {
			response = JSON.parse(response);
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


			$(".modal-header").css("background-color", "#0267EB");
			$(".modal-header").css( "color", "white" );
			$(".modal-title").text(+nombre + "Formulario de edición de  " +tabla );
			$('#modalConfig').modal('show');
        }
		
    });
	
});



//Editar
$(document).on("click", ".btnEditarss", function(){
		opcion = 5;//Para llamar los datos de la BD
        var id = $(this).attr('id');
		var nombre = nombre;
        alert(id);
		alert(nombre);

		$.ajax({
			//tabla: "convenios",
			url: "crud.php",
			method: "POST",
			datatype:"json",    
			data:  {opcion:opcion, tabla:tabla},    
			success: function (response) {
				
				// Parse the json result
				response = JSON.parse(response);
				
				var html = "";
				
				// Check if there is available records
				if(response.length) {
					// Loop the parsed JSON
					$.each(response, function(key,value) {
						// Our employee list template
						var nombre = value.nombre;
						//$("#nombre").val(nombre);
						alert(nombre);
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
    html += '<input type="text" class="form-control id" id="nombre" value="">'
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