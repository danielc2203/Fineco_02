

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
            	html += '<div class="list-group">';
				html += '<ul class="todo-list">';
	            // Loop the parsed JSON
	            $.each(response, function(key,value) {
	            	// Our employee list template
					html += '<li href="#" class="list-group-item list-group-item-action">';
					html += '<div class="icheck-primary d-inline ml-2"><input type="checkbox" value="" name="id" id="' + value.id_usr + '"><label for="5"></label></div>';
					html += "<span>" + value.titulo +' '+ value.descripcion + " <span class='text'>(" + value.fecha + ")</span>" + "</span>";
					html += "<span class='list-address'>" + value.id_usr + "</span>";
					html += "<div class='tools'> <a class='btn btn-outline-info' data-toggle='modal' data-target='#edit-employee-modal' data-id='"+value.id+"' ><i class='fas fa-edit'></i></a> </div> "
					//html += "<button class='btn btn-sm btn-primary mt-2' data-toggle='modal' data-target='#edit-employee-modal' data-id='"+value.id+"'>Edit</button>";
					html += "<div class='tools'> <a class='btn btn-outline-danger btn-delete-employee' data-id='"+value.id+"' type='button'><i class='fas fa-trash'></i></a> </div>"
					//html += "<button class='btn btn-sm btn-danger mt-2 ml-2 btn-delete-employee' data-id='"+value.id+"' typle='button'>Delete</button>";
					html += '</li>';
	            });
				html += '</ul>';
	            html += '</div>';
            } else {
            	html += '<div class="alert alert-warning">';
				  html += 'No records found!';
				html += '</ul>';
				html += '</div>';
            }

            

            // Insert the HTML Template and display all employee records
			$("#employees-list").html(html);
        }
    });
}

function save() 
{
	$("#btnSubmit").on("click", function() {
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

	            // Reset form
	            resetForm(form);
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
	$(document).delegate("[data-target='#edit-employee-modal']", "click", function() {

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
				  title: 'Success.',
				  text: response
				});

	            // Reset form
	            resetForm(form);

	            // Close modal
	            $('#edit-employee-modal').modal('toggle');
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        	// You can put something here if there is an error from submitted request
	        }
	    });
	});
}


function del() 
{
	$(document).delegate(".btn-delete-employee", "click", function() {

		
		Swal.fire({
			icon: 'warning',
		  	title: 'Are you sure you want to delete this record?',
		  	showDenyButton: false,
		  	showCancelButton: true,
		  	confirmButtonText: 'Yes'
		}).then((result) => {
		  /* Read more about isConfirmed, isDenied below */
		  if (result.isConfirmed) {

		  	var employeeId = $(this).attr('data-id');

		  	// Ajax config
			$.ajax({
		        type: "GET", //we are using GET method to get data from server side
		        url: 'delete.php', // get the route value
		        data: {employee_id:employeeId}, //set data
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