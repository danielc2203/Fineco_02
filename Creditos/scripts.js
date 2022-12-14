function all() 
{
	// Ajax config
	$.ajax({
        type: "GET", //we are using GET method to get all record from the server
        url: 'all.php', // get the route value
        success: function (response) {//once the request successfully process to the server side it will return result here
            
            // Parse the json result
        	response = JSON.parse(response);

            var html = "";
			
            // Check if there is available records
            if(response.length) {
	            // Loop the parsed JSON
	            $.each(response, function(key,value) {
	            	// Our employee list template

					html += '<ul class="todo-list" data-widget="todo-list"  >'
					html += '<li style="margin-bottom: 3px;" class="'+ value.estado_tarea +'" >'

					html += '<div  class="d-inline ml-2">'
					if(value.estado_tarea == "done"){
						html += '<i class="fas fa-check-circle text-success"></i>'
					}else{
						html += '<i class="fas fa-circle-notch text-"></i>'
					};
					html += '<span class="handle"> <i class="fas fa-tasks"></i></span>'
					html += "<span>" + value.titulo +' '+ value.descripcion +"</span>";
					html += "<span class='text'>" + value.fecha +"</span>";

					var fechaFin = new Date(value.fecha).getTime();
					var di = moment().diff(moment(fechaFin), 'days');

					html += '</div>'

					html += '<div class="tools">' // Botones
					html += '<a class="btn btn-outline-warning btnEditar" data-toggle="modal" data-target="#editar-tarea" data-id="'+value.id+'"><i class="fas fa-edit"></i></a>'
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
			$("#creditosp").html(html);
        }
    });
}

function save() 
{
	$("#btnSubmit").on("click", function() {
		// Reset form
		resetForm(form);
		var $this 		    = $(this); //submit button selector using ID
        var $caption        = $this.html();// We store the html content of the submit button
        var form 			= "#form"; //defined the #form ID
        var formData        = $(form).serializeArray(); //serialize the form into array
        var route 			= $(form).attr('action'); //get the route using attribute action

        // Ajax config
    	$.ajax({
	        type: "POST", //we are using POST method to submit the data to the server side
	        url: route, // get the route value
	        data: formData, // our serialized array data for server side
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Processing...");
	        },
	        success: function (response) { //once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);

	            // Reload lists of employees
	            all();

	            // We will display the result using alert
	            Swal.fire({
				  icon: 'success',
				  title: 'Success.',
				  text: response
				});

	            // Close modal
	            $('#editar-tarea').modal('toggle');

	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('Error ...');
	        	// You can put something here if there is an error from submitted request
	        }
	    });
	});
}

function resetForm(selector) 
{
	$(selector)[0].reset();
}


function get() 
{
	$(document).delegate("[data-target='#editar-tarea']", "click", function() {

		var employeeId = $(this).attr('data-id');

		// Ajax config
		$.ajax({
	        type: "GET", //we are using GET method to get data from server side
	        url: 'get.php', // get the route value
	        data: {employee_id:employeeId}, //set data
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            response = JSON.parse(response);
	            $("#edit-form [name=\"id\"]").val(response.id);
	            $("#edit-form [name=\"titulo\"]").val(response.titulo);
	            $("#edit-form [name=\"descripcion\"]").val(response.descripcion);
	            $("#edit-form [name=\"fecha\"]").val(response.fecha);
	            $("#edit-form [name=\"id_usr\"]").val(response.id_usr);
				$("#edit-form [name=\"estado_tarea\"]").val(response.estado_tarea);
	        }
	    });
	});
}

function update() 
{
	$("#btnUpdateSubmit").on("click", function() {
		var $this 		    = $(this); //submit button selector using ID
        var $caption        = $this.html();// We store the html content of the submit button
        var form 			= "#edit-form"; //defined the #form ID
        var formData        = $(form).serializeArray(); //serialize the form into array
        var route 			= $(form).attr('action'); //get the route using attribute action

        // Ajax config
    	$.ajax({
	        type: "POST", //we are using POST method to submit the data to the server side
	        url: route, // get the route value
	        data: formData, // our serialized array data for server side
	        beforeSend: function () { //We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Processing...");
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);

	            // Reload lists of employees
	            all();

	            // We will display the result using alert
	            Swal.fire({
				  icon: 'success',
				  title: 'Actualizada.',
				  text: response
				});

	            // Reset form
	            resetForm(form);

	            // Close modal
	            $('#editar-tarea').modal('toggle');
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        	// You can put something here if there is an error from submitted request
	        }
	    });
	});
}


function del() 
{
	$(document).delegate(".btn-borrar-tarea", "click", function() {

		
		Swal.fire({
			icon: 'warning',
		  	title: 'Estas seguro de eliminar esta tarea?',
		  	showDenyButton: false,
		  	showCancelButton: true,
		  	confirmButtonText: 'SI'
		}).then((result) => {
		  /* Read more about isConfirmed, isDenied below */
		  if (result.isConfirmed) {

		  	var tareaId = $(this).attr('id');

		  	// Ajax config
			$.ajax({
		        type: "GET", //we are using GET method to get data from server side
		        url: 'delete.php', // get the route value
		        data: {employee_id:tareaId}, //set data
		        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
		            
		        },
		        success: function (response) {//once the request successfully process to the server side it will return result here
		            // Reload lists of employees
	            	all();

		            Swal.fire('Tarea Eliminada.', response, 'success')
		        }
		    });
		    
		  } else if (result.isDenied) {
		    Swal.fire('Cambios No Efectuados', '', 'info')
		  }
		});

		
	});
}


$(document).ready(function() {

	// Get all employee records
	all();

	// Submit form using AJAX To Save Data
	save();

	// Get the data and view to modal
	get();
	 
	// Updating the data
	update();

	// Delete record via ajax
	del();
});