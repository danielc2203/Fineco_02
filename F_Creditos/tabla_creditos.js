$(document).ready(function() {
    var id, opcion;
    opcion = 4;
    
    $(document).ready(function () {
        $('#creditosp').DataTable;
    });
    
    tablaUsuarios = $('#creditosp').DataTable({
        
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
            {sortable: true,
                "render": function ( data, type, full, meta ) {
                    //var buttonID = +full.id;
                    return '<a class="btn btn-success VerCredito" role="button">'+full.id_documento+'</a>';
                }},
            {"data": "monto"},
            {"data": "plazo"},
            {"data": "capacidad"},
            {"data": "estado"},
            //{"data": "correo_electronico"},
            //{"data": "telefono"},
            {"data": "fecha_solicitud"},

                // Muestra de Boton con id desde la consulta + funcion
            // {sortable: false,
            // "render": function ( data, type, full, meta ) {
            //     var buttonID = "delete_"+full.id;
            //     return '<a id='+buttonID+' class="btn btn-danger deleteBtn" role="button">Delete</a>';
            // }},
            
            
            // {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>Borrar</i></button></div></div>"}
            //{"defaultContent": "<a class='btn btn-outline-success btn-sm VerCredito'><i class='fas fa-eye'></i></a>"},
            // {"defaultContent": "<a class='btn btn-outline-warning btn-sm btnEditar'><i class='fas fa-edit'></i></a>"},
            
    
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
        direccion_residencia = $.trim($('#direccion_residencia').val());
        pais = $.trim($('#pais').val());
        departamento = $.trim($('#departamento').val());
        ciudad = $.trim($('#ciudad').val());
        estrato = $.trim($('#estrato').val());
        sexo = $.trim($('#sexo').val());
        ingreso_mensual = $.trim($('#ingreso_mensual').val());
        salud = $.trim($('#salud').val());
        foto_cedula = (num_documento+'CC.jpg')
        //filename = $_FILES['foto_cedula']['name'];
        //img = $.trim($('#foto_cedula').attr('src'));
        
        
            $.ajax({
              url: "crud.php",
              type: "POST",
              datatype:"json",    
              data:  {id:id, 
                    primer_nombre:primer_nombre,
                    segundo_nombre:segundo_nombre,
                    primer_apellido:primer_apellido,
                    segundo_apellido:segundo_apellido,
                    tipo_documento:tipo_documento,
                    num_documento:num_documento,
                    correo_electronico:correo_electronico,
                    telefono:telefono,
                    estado:estado,
                    ocupacion:ocupacion,
                    empresa:empresa,
                    fecha_incorporacion:fecha_incorporacion,
                    fecha_nacimiento:fecha_nacimiento,
                    direccion_residencia:direccion_residencia,
                    pais:pais,
                    departamento:departamento,
                    ciudad:ciudad,
                    estrato:estrato,
                    sexo:sexo,
                    ingreso_mensual:ingreso_mensual,
                    salud:salud,
                    foto_cedula:foto_cedula,
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
            
    //para limpiar los campos antes de dar de Alta a un registro
    $("#btnNuevo").click(function(){
        opcion = 1; //alta           
        id=null;
        //alert(id);
        $("#formModal").trigger("reset");
        $(".modal-header").css( "background-color", "#17a2b8");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Nuevo Registro"); 
        $('#modalCRUD').modal('show');
    });

    
    //Ver Credito 
    $(document).on("click", ".VerCredito", function cliente(){

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
    
                            html += '<div class="card-header text-center" > <h5> Credito Nº '+ value.id +'</h5> </div>'
    
                            html += '<div class="card-body pt-0">'
                                html += '<div class="row">'
                                    html += '<div class="col-12">'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm" id="id_documento"><b>Número de documento: </b> '+ value.id_documento +' </p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>monto: </b> '+ value.monto +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>plazo: </b> '+ value.plazo +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>amortizacion: </b> '+ value.amortizacion +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>tipo de credito: </b> '+ value.tipo_credito +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>deudas actuales: </b> '+ value.deudas_actuales +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>egresos: </b> '+ value.egresos +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>capacidad: </b> '+ value.capacidad +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>calificacion_interna: </b> '+ value.calificacion_interna +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>cuota_mensual: </b> '+ value.cuota_mensual +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>seguro: </b> '+ value.seguro +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>asesoria: </b> '+ value.asesoria +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>comentarios: </b> '+ value.comentarios +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>fecha_solicitud: </b> '+ value.fecha_solicitud +'</p>'
                                        html += '<p style="margin-bottom: 5px;" class="text-muted text-sm"><b>estado: </b> '+ value.estado +'</p>'
       
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
                $("#contenido_credito").html(html);
            }
            

          });

    
       // $("#detalles-clientes").trigger("reset");
        $(".modal-header").css( "background-color", "#17a2b8");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Detalles del Credito");
        $('#VerCredito').modal('show');
        
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

                    $("#id_documento").val(value.id_documento);
                    $("#solicitud_credito").val(value.solicitud_credito);
                    $("#monto").val(value.monto);
                    $("#plazo").val(value.plazo);
                    $("#amortizacion").val(value.amortizacion);
                    $("#tipo_credito").val(value.tipo_credito);
                    $("#deudas_actuales").val(value.deudas_actuales);
                    $("#egresos").val(value.egresos);
                    $("#datacreditos").val(value.datacreditos);
                    $("#capacidad").val(value.capacidad);
                    $("#calificacion_interna").val(value.calificacion_interna);
                    $("#tasa").val(value.tasa);
                    $("#resultado").val(value.resultado);
                    $("#cuota_mensual").val(value.cuota_mensual);
                    $("#intereses_anticipados").val(value.intereses_anticipados);
                    $("#seguro").val(value.seguro);
                    $("#asesoria").val(value.asesoria);
                    $("#iva").val(value.iva);
                    $("#comentarios").val(value.comentarios);
                    $("#fecha_solicitud").val(value.fecha_solicitud);
                    $("#estado").val(value.estado);

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

    

    //Borrar con Swal2
	$(document).delegate(".btnBorrar", "click", function() {

        var id = $(this).attr('id'); // Pasamos el id del modal a la funcion borrar desde el boton
        //alert(id);
        opcion = 3; //eliminar   

            Swal.fire({
                icon: 'warning',
                title: 'Estas seguro de eliminar este credito?',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'SI'
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                
                $('#VerCredito').modal('toggle')

                $.ajax({
                    url: "crud.php",
                    type: "POST",
                    datatype:"json",    
                    data: {opcion:opcion, id:id}, 
                    success: function(response) {
                        tablaUsuarios.row(fila.parents('tr')).remove().draw();    
                        Swal.fire('El credito ha sido Eliminado de la base de datos.', response, 'success');
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

    // Funcion para validar los campos requeridos
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
            });
        }, false);
        })();

});