$(document).ready(function() {
    var id, opcion;
    opcion = 4;
    
    $(document).ready(function () {
        $('#clientes').DataTable;
    });
    
    tablaUsuarios = $('#clientes').DataTable({
        
        language: {
            url: '../dist/json/es-CO_DataTables.json',
        },
            
        "dom": 'lBfrtip',
            buttons: {
                buttons: ['pageLength', "copy", "excel", "pdf", "print"],                
            },
            lengthMenu: [
                [ 5, 10, 25, 50, -1 ],
                [ '5 Filas','10 Filas', '25 Filas', '50 Filas', 'Ver Todos' ]
            ],


        "dom": '<"container-fluid"<"row"<"col"B><"col"l><"col"f>>>rtip',

        "responsive": false, "lengthChange": false, "autoWidth": false,

        "ajax":{            
            "url": "crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:opcion}, //enviamos opcion 4 para que haga un SELECT
            "dataSrc":""
        },
        "columns":[
            {"data": "id"},
            {"data": "primer_nombre"},
            {"data": "segundo_nombre"},
            {"data": "primer_apellido"},
            {"data": "segundo_apellido"}, 
            //{"data": "tipo_documento"},
            {"data": "num_documento"},
            {"data": "correo_electronico"},
            {"data": "telefono"},
            {"data": "estado"},
            //{"data": "ocupacion"},
            {"data": "empresa"},
            //{"data": "fecha_incorporacion"},
            
            
            // {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>Borrar</i></button></div></div>"}
            {"defaultContent": "<a class='btn btn-outline-success btn-sm VerCliente'><i class='fas fa-eye'></i></a>"},
            // {"defaultContent": "<a class='btn btn-outline-warning btn-sm btnEditar'><i class='fas fa-edit'></i></a>"},
            //{"defaultContent": "<a class='btn btn-outline-danger btn-sm btnBorrar '><i class='fas fa-eraser'></i></a>"}
    
        ],
        
    })

    
    var fila; //captura la fila, para editar o eliminar

    //submit para Actualización
    $('#formModal').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

        id = $.trim($('#id_cliente').val());
        primer_nombre = $.trim($('#primer_nombre').val());
        segundo_nombre = $.trim($('#segundo_nombre').val());    
        primer_apellido = $.trim($('#primer_apellido').val());    
        segundo_apellido = $.trim($('#segundo_apellido').val());
        tipo_documento = $.trim($('#tipo_documento').val());
        num_documento = $.trim($('#num_documento').val());
        correo_electronico = $.trim($('#correo_electronico').val());
        telefono = $.trim($('#telefono').val());
        estado = $.trim($('#estado').val());
        ocupacion = $.trim($('#ocupacion').val());
        empresa = $.trim($('#empresa').val());
        fecha_incorporacion = $.trim($('#fecha_incorporacion').val());
        fecha_nacimiento = $.trim($('#fecha_nacimiento').val());
                                 
            $.ajax({
              url: "crud.php",
              type: "POST",
              datatype:"json",    
              data:  {id:id, primer_nombre:primer_nombre, segundo_nombre:segundo_nombre, primer_apellido:primer_apellido, segundo_apellido:segundo_apellido ,tipo_documento:tipo_documento, num_documento:num_documento, correo_electronico:correo_electronico, telefono:telefono, estado:estado, ocupacion:ocupacion, empresa:empresa, fecha_incorporacion:fecha_incorporacion, fecha_nacimiento:fecha_nacimiento, opcion:opcion},    
              success: function(data) {
                tablaUsuarios.ajax.reload(null, false);
               }
            
            });			        
        $('#modalCRUD').modal('hide');
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
        $(".modal-title").text("Nuevo Registro");
        $('#modalCRUD').modal('show');
    });
    
    //Ver Cliente 
    $(document).on("click", ".VerCliente", function cliente(){

        fila = $(this);           
        var id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;
        //const cliente_id = id;

        //alert(id);
        opcion = 5; //alta

        $.ajax({
            url: "crud.php",
            type: "POST",
            datatype:"json",    
            data: {opcion:opcion, id:id}, 

            success: function (response) {//once the request successfully process to the server side it will return result here
            
                // Parse the json result
                response = JSON.parse(response);
    
                var html = "";
                
                // Check if there is available records
                if(response.length) {
                    // Loop the parsed JSON
                    $.each(response, function(key,value) {
    
                            html += '<div class="card-header text-center" > <h2>'+ value.primer_nombre +' '+ value.segundo_nombre +' '+ value.primer_apellido +' '+ value.segundo_apellido +'</h2> </div>'
    
                            html += '<div class="card-body pt-0">'
                                html += '<div class="row">'
                                    html += '<div class="col-12">'
                                        html += '<p class="text-muted text-sm" name="ida" id="ida"><b>Tipo de documento: </b> '+ value.tipo_documento +' </p>'
                                        html += '<p class="text-muted text-sm"><b>Número de documento: </b> '+ value.num_documento +' </p>'
                                        html += '<p class="text-muted text-sm"><b>Correo electronico: </b> '+ value.correo_electronico +'</p>'
                                        html += '<p class="text-muted text-sm"><b>Número de contacto: </b> '+ value.telefono +'</p>'
                                        html += '<p class="text-muted text-sm"><b>Estado: </b> '+ value.estado +'</p>'
                                        html += '<p class="text-muted text-sm"><b>Ocupación: </b> '+ value.ocupacion +'</p>'
                                        html += '<p class="text-muted text-sm"><b>Empresa: </b> '+ value.empresa +'</p>'
                                        html += '<p class="text-muted text-sm"><b>Fecha de registro: </b> '+ value.fecha_incorporacion +'</p>'
                                        html += '<p class="text-muted text-sm"><b>Fecha de nacimiento: </b> '+ value.fecha_nacimiento +'</p>'
                                        html += '<p class="text-muted text-sm"><b>Fecha de nacimiento: </b> '+ value.direccion_residencia +'</p>'
       
                                    html += '</div>'

                                html += '</div>'
                            html += '</div>'
    
                            html += '<div class="card-footer">'
                                html += '<div class="">'
                                // html += '<a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#bancoModal"><i class="fas fa-eye"></i></a>'
                                //html += '<a href="#" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#formModal"><i class="fas fa-edit"></i></a>'
                                html += '<a class="btn btn-outline-primary btnEditar " id='+ value.id +'><i class="fas fa-edit"></i>'
                                html += '<a class="btn btn-outline-danger float-right btnBorrar " id='+ value.id +'><i class="fas fa-trash-alt"></i>'
                                html += '</div>'
                            html += '</div>'
    
    
                    });
                } else {
                    html += '<div class="alert alert-warning">';
                    html += 'No records found!';
                }
    
                // Insert the HTML Template and display all employee records
                $("#contenido_cliente").html(html);
            }
            

          });

       // $("#detalles-clientes").trigger("reset");
        $(".modal-header").css( "background-color", "#17a2b8");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Datos del Cliente");
        $('#VerClientes').modal('show');
        
    });
    
    
    //Editar        
    $(document).on("click", ".btnEditar", function(){	
        $('#VerClientes').modal('toggle')	        
        opcion = 5;//Para llamar los datos de la BD
        var id = $(this).attr('id');
        //alert(id);

        $.ajax({
            url: "crud.php",
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
                $.each(response, function(key,value) {

                    $("#primer_nombre").val(value.primer_nombre);
                    $("#segundo_nombre").val(value.segundo_nombre);
                    $("#primer_apellido").val(value.primer_apellido);
                    $("#segundo_apellido").val(value.segundo_apellido);
                    $("#tipo_documento").val(value.tipo_documento);
                    $("#num_documento").val(value.num_documento);
                    $("#correo_electronico").val(value.correo_electronico);
                    $("#telefono").val(value.telefono);
                    $("#estado").val(value.estado);
                    $("#ocupacion").val(value.ocupacion);
                    $("#empresa").val(value.empresa);
                    $("#fecha_incorporacion").val(value.fecha_incorporacion);
                    $("#fecha_nacimiento").val(value.fecha_nacimiento);
                    $("#id_cliente").val(value.id);

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
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar Usuario");		
        $('#modalCRUD').modal('show');
        opcion = 2;//para enviar el update
        //var id = id;
    
    });

    // //submit para el Alta y Actualización
    // $('#modalCRUD').submit(function(e){                         
    //     e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    //     //var id = $(this).attr('#id_cliente');
    //     id = $.trim($('#id_cliente').val());
    //     primer_nombre = $.trim($('#primer_nombre').val());
    //     //alert("id" + id)
    //     segundo_nombre = $.trim($('#segundo_nombre').val());    
    //     primer_apellido = $.trim($('#primer_apellido').val());    
    //     segundo_apellido = $.trim($('#segundo_apellido').val());
    //     tipo_documento = $.trim($('#tipo_documento').val());
    //     num_documento = $.trim($('#num_documento').val());
    //     correo_electronico = $.trim($('#correo_electronico').val());
    //     telefono = $.trim($('#telefono').val());
    //     estado = $.trim($('#estado').val());
    //     ocupacion = $.trim($('#ocupacion').val());
    //     empresa = $.trim($('#empresa').val());
    //     fecha_incorporacion = $.trim($('#fecha_incorporacion').val());
    //     fecha_nacimiento = $.trim($('#fecha_nacimiento').val());
        
                                 
    //         $.ajax({
    //           url: "crud.php",
    //           type: "POST",
    //           datatype:"json",    
    //           data:  {id:id, primer_nombre:primer_nombre, segundo_nombre:segundo_nombre, primer_apellido:primer_apellido, segundo_apellido:segundo_apellido ,tipo_documento:tipo_documento, num_documento:num_documento, correo_electronico:correo_electronico, telefono:telefono, estado:estado, ocupacion:ocupacion, empresa:empresa, fecha_incorporacion:fecha_incorporacion, fecha_nacimiento:fecha_nacimiento, opcion:opcion},    
    //           success: function(data) {
    //             tablaUsuarios.ajax.reload(null, false);
    //            }
            
    //         });;	        
    //     $('#modalCRUD').modal('hide');
    //     $(function() {
    //         toastr.success('Se ha creado el registro correctamente')
    //         Swal.fire({
    //             position: 'center',
    //             icon: 'success',
    //             title: 'Cliente Actualizado Correctamente',
    //             showConfirmButton: false,
    //             timer: 1900
    //           })
    //       });										     			
    // });

        
    
    //Borrar con Swal2
	$(document).delegate(".btnBorrar", "click", function() {

        var id = $(this).attr('id'); // Pasamos el id del modal a la funcion borrar desde el boton
        //alert(id);
        opcion = 3; //eliminar   

            Swal.fire({
                icon: 'warning',
                title: 'Estas seguro de eliminar este cliente?',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'SI'
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                
                $('#VerClientes').modal('toggle')

                $.ajax({
                    url: "crud.php",
                    type: "POST",
                    datatype:"json",    
                    data: {opcion:opcion, id:id}, 
                    success: function(response) {
                        tablaUsuarios.row(fila.parents('tr')).remove().draw();    
                        Swal.fire('El clente ha sido Eliminado de la base de datos.', response, 'success');
                     }
                  });

                
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

});