$(document).ready(function() {
    var id, opcion;
    opcion = 4;
    //alert(opcion);

    $.ajax({
        url: "sucursales.php",
        //type: "GET", //we are using GET method to get all record from the server
        method: 'POST', //usamos el metodo POST
        data:{opcion:opcion}, //enviamos opcion 1 para que haga un SELECT

        success: function (response) {//once the request successfully process to the server side it will return result here
            
            // Parse the json result
        	response = JSON.parse(response);


            var html = "";
			
            // Check if there is available records
            if(response.length) {
	            // Loop the parsed JSON
	            $.each(response, function(key,value) {


                        html += '<div class="card-header text-center" > <h2>'+ value.nombre +'</h2> </div>'

                        html += '<div class="card-body pt-0">'
                            html += '<div class="row">'
                                html += '<div class="col-7">'
                                    html += '<h2 class="lead"><b>Datos de la cuenta</b></h2>'
                                    html += '<p class="text-muted text-sm"><b>N° de Cuenta: </b> '+ value.num_cuenta +' / '+ value.tipo_cuenta +' / </p>'
                                    html += '<ul class="ml-4 mb-0 fa-ul text-muted">'
                                    html += '<li class="small"><span class="fa-li"><i class="fas fa-toggle-on"></i></span> Estado de la cuenta: '+ value.estado_cuenta +' </li>'
                                    html += '<li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> Contacto del Banco: '+ value.contacto_cuenta +'</li>'
                                    html += '</ul>'
                                html += '</div>'
                                html += '<div class="col-5 text-center">'
                                    html += '<img src="../dist/img/Bancos/Bancolombia.jpg" alt="Bancolombia" class="img-circle img-fluid" data-toggle="modal" data-target="#bancoModal">'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'

                        html += '<div class="card-footer">'
                            html += '<div class="text-right">'
                            html += '<a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#bancoModal"><i class="fas fa-eye"></i></a>'
                            html += '<a href="#" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#formModal"><i class="fas fa-edit"></i></a>'
                            html += '<button class="btn btn-primary btn-sm btnEditar"><i class="material-icons">Editar</i></button>'
                            html += '</div>'
                        html += '</div>'


	            });
            } else {
				html += '<div class="alert alert-warning">';
				html += 'No records found!';
            }

            // Insert the HTML Template and display all employee records
			$("#contenido_sucursales").html(html);
        }
    });

    
    var html; //captura la fila, para editar o eliminar

    //submit para el Alta y Actualización
    $('#datosbancos').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        
        num_cuenta = $.trim($('#num_cuenta').val());    
        tipo_cuenta = $.trim($('#tipo_cuenta').val());    
        estado_cuenta = $.trim($('#estado_cuenta').val());
        contacto_cuenta = $.trim($('#contacto_cuenta').val());
        logo_banco = $.trim($('#logo_banco').val());
                      
            $.ajax({
              url: "sucursales.php",
              type: "POST",
              datatype:"json",    
              data:  {id:id, nombre:nombre, num_cuenta:num_cuenta, tipo_cuenta:tipo_cuenta, estado_cuenta:estado_cuenta, contacto_cuenta:contacto_cuenta, logo_banco:logo_banco, opcion:opcion},    
              success: function(data) {
                $("#contenido_sucursales").html(html);
                //contenido_sucursales.ajax.reload(null, false);
               }
            
            });			        
        $('#formModal').modal('hide');
        $(function() {
            toastr.success('Se ha creado el registro correctamente')
          });										     			
    });
            
    //para limpiar los campos antes de dar de Alta a un registro
    $("#btnNuevo").click(function(){
        opcion = 1; //alta           
        id=null;
        $("#formModal").trigger("reset");
        $(".modal-header").css( "background-color", "#17a2b8");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Nuevo Banco");
        $('#formModal').modal('show');
    });
    
    //Editar        
    $(document).on("click", ".btnEditar", function(){
        
       

            var $this 		    = $(this); //submit button selector using ID
            var $caption        = $this.html(id);// We store the html content of the submit button
            var form 			= "#formModal"; //defined the #form ID
            //var formData        = $(form).serializeArray(); //serialize the form into array
            //var route 			= $(form).attr('action'); //get the route using attribute action
            opcion = 2;//editar

           var num_cuenta = $.trim($('#id').val()); 
           alert($caption);
    
            // // Ajax config
            // $.ajax({
            //     //type: "POST", //we are using POST method to submit the data to the server side
            //     //url: route, // get the route value
            //     data: formData, // our serialized array data for server side
            //     beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
            //         $this.attr('disabled', true).html("Processing...");
            //     },
            //     success: function (response) {//once the request successfully process to the server side it will return result here
            //        // $this.attr('disabled', false).html($caption);
    
            //         // Reload lists of employees
            //         //sucursales();
    
            //         // We will display the result using alert
            //         // Swal.fire({
            //         //   icon: 'success',
            //         //   title: 'Actualizada.',
            //         //   text: response
            //         // });
    
            //         // Reset form
            //         //resetForm(form);
    
            //         // Close modal
            //         //$('#formModal').modal('toggle');
            //     },
            //     error: function (XMLHttpRequest, textStatus, errorThrown) {
            //         // You can put something here if there is an error from submitted request
            //     }
            // });
        
        
        //fila = $(this).closest("tr");	        
        //id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID
        //id = $request['id'];
        //nombre = (value.nombre);
        //alert(nombre);

        //$id = $request['id']; 
        //$nombre = $request['nombre'];

        // fecha = fila.find('td:eq(1)').text();
        // descripcion = fila.find('td:eq(2)').text();
        // sucursal = fila.find('td:eq(3)').text();
        // dcto = fila.find('td:eq(4)').text();
        // tdocumento = fila.find('td:eq(5)').text();
        // saldo = fila.find('td:eq(6)').text();
        // id_banco = fila.find('td:eq(7)').text();


        //$("#nombre").val(nombre);
        // $("#descripcion").val(descripcion);
        // $("#sucursal").val(sucursal);
        // $("#dcto").val(dcto);
        // $("#tdocumento").val(tdocumento);
        // $("#saldo").val(saldo);
        // $("#id_banco").val(id_banco);


        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar bancosss");		
        $('#formModal').modal('show');		   
    });
    
    //Borrar
    $(document).on("click", ".btnBorrar", function(){
        fila = $(this);           
        id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;
        nombres = $(this).closest("tr").find('td:eq(1)').text();	// Nombre de Usuario
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " +id+ " del usuario " +nombres+"?");                
        if (respuesta) {            
            $.ajax({
              url: "crud.php",
              type: "POST",
              datatype:"json",    
              data:  {opcion:opcion, id:id},    
              success: function() {
                  tablaUsuarios.row(fila.parents('tr')).remove().draw();                  
               }
            });	
    
            $(function() {
                toastr.success('Se ha eliminado el registro correctamente')
              });
        }else{
            $(function() {
                toastr.info('Se ha cancelado la acción')
              });
        }
     });
         
    });    
    
    