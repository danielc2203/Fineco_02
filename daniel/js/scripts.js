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

					html += '<ul class="todo-list" data-widget="todo-list" >'
					html += '<li style="margin-bottom: 3px;" >'

					html += '<div  class="icheck-primary d-inline ml-2">'
					html += '<input type="checkbox" value="" name="id" id="'+ value.id +'">'
					html += '<label for="'+ value.id +'"></label>'

					html += '<span class="handle"> <i class="fas fa-thumbtack"></i></span>'
					html += "<span>" + value.titulo +' '+ value.descripcion +"</span>";
					html += "<span class='text'>" + value.fecha +"</span>";

					html += '<small class="badge badge-danger"><i class="far fa-clock"></i> 2 mins</small>'
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
				html += 'No records found!';
            }

            // Insert the HTML Template and display all employee records
			$("#finecod").html(html);
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
	        success: function (response) {//once the request successfully process to the server side it will return result here
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
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Processing...");
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);

	            // Reload lists of employees
	            all();

	            // We will display the result using alert
	            Swal.fire({
				  icon: 'success',
				  title: 'Correcto.',
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
		  	confirmButtonText: 'Yes'
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

		            Swal.fire('Success.', response, 'success')
		        }
		    });

		    
		  } else if (result.isDenied) {
		    Swal.fire('Changes are not saved', '', 'info')
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