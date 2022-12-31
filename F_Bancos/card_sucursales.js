$(document).ready(function() {
    var id, opcion, rol;
    rol = "<?php echo $rol; ?>";
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


                        html += '<div class="card-header text-center" > <h1>'+ value.nombre +'</h1> </div>'

                        html += '<div class="card-body pt-0">'
                            html += '<div class="row">'
                                html += '<div class="col-7">'
                                    html += '<h2 class="lead text-info"><b>Datos de la cuenta</b></h2>'
                                    html += '<br></br>'
                                    html += '<p class="text-muted "><b>N° de Cuenta: </b> '+ value.num_cuenta +' </p>'
                                    html += '<p class="text-muted "><b>Tipo de Cuenta: </b> '+ value.tipo_cuenta +' </p>'
                                    html += '<p class="text-muted "><b>Estado de Cuenta: </b> '+ value.estado_cuenta +' </p>'
                                    html += '<ul class="ml-4 mb-0 fa-ul text-muted">'
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
                            html += '<a class="btn btn-sm btn-warning btnEditar" id='+ value.id +'><i class="fas fa-edit"></i></a>'
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
    $('#modalBanco').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        
        id = $.trim($('#id_banco').val());
        nombre = $.trim($('#nombre').val());
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
                //$("#contenido_cliente").html(html);
                //contenido_sucursales.ajax.reload(null, false);
               }
            
            });			        
        $('#modalBanco').modal('hide');
        $(function() {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Los cambios han sido efectuados exitosamente...',
                showConfirmButton: false,
                timer: 2500,
                willClose: () => {
                    location.reload()
                  }
              })
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
        
        opcion = 5;//Para llamar los datos de la BD
        var id = $(this).attr('id');
        //alert(fRol);

        //Validamos si tiene permisos de administrador para editar
        if (fRol === 1){
            $.ajax({
                url: "sucursales.php",
                type: "POST",
                datatype:"json",    
                data: {opcion:opcion, id:id},
                
            success: function (response) {//una vez que la solicitud se procese con éxito en el lado del servidor, devolverá el resultado aquí
                // Parse the json result
                response = JSON.parse(response);
                var html = "";
                            
                // Check if there is available records
                if(response.length) {
                    // Loop the parsed JSON
                    //alert(id);
                    $.each(response, function(key,value) {
                        
                        $("#id_banco").val(value.id);
                        $("#nombre").val(value.nombre);
                        $("#num_cuenta").val(value.num_cuenta);
                        $("#tipo_cuenta").val(value.tipo_cuenta);
                        $("#estado_cuenta").val(value.estado_cuenta);
                        $("#contacto_cuenta").val(value.contacto_cuenta);
                        $("#logo_banco").val(value.logo_banco);
    
                    });
                } else {
                    html += '<div class="alert alert-warning">';
                    html += 'No se encontro este registro en la BD!';
                }
    
                // Insert the HTML Template and display all employee records
                $("#contenido_cliente").html(html);
            }
            
          });

          //$("#formModal").trigger("reset");
        $(".modal-header").css("background-color", "green");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar Banco");		
        $('#modalBanco').modal('show');
        opcion = 2;//para enviar el update
        //var id = id;	 

        }else{
            errord();
        }
          
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
    
function errord() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lo siento, no tienes permiso para esta acciòn!',
        footer: '<a href="">Solicitar permisos?</a>'
        })
};
    
    