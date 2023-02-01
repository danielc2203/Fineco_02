$(document).ready(function() {
    var id, opcion;
    opcion = 4;
    
    $(document).ready(function () {
        $('#creditosp').DataTable;
    });
    
    tablaUsuarios = $('#creditosp').DataTable({
        
        language: { // Idioma en español
            url: '../dist/json/es-CO_DataTables.json',
            decimal: ',',
            thousands: '.',
        },
            
        "dom": 'lBfrtip',
            buttons: {
                buttons: ['pageLength', "copy", "excel", "pdf", "print"],                
            },
            lengthMenu: [
                [ 6, 12, 24, 48, -1 ],
                [ '6 Filas','12 Filas', '24 Filas', '48 Filas', 'Ver Todos' ]
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
                    return '<a class="btn btn-info VerCredito" role="button">'+full.id_documento+'</a>';
                }},
            //{"data": "monto"}, //Monto en formato original
            {// Datos de monto en formato moneda
                data: 'monto',
                render: function (data, type) {
                    var number = $.fn.dataTable.render
                        .number('.', '.', 0, '$ ')
                        .display(data);
                    return number;               
                },
            },
            {"data": "plazo"},
            // Capacidad con funcion menor a 250mil rojo, menor a 500mil naranja, mayor verde
            {
                data: 'capacidad',
                render: function (data, type) {
                    var number = $.fn.dataTable.render
                        .number('.', '.', 0, '$ ')
                        .display(data);
 
                    if (type === 'display') {
                        let color = 'green';
                        if (data < 250000) {
                            color = 'red';
                        } else if (data < 500000) {
                            color = 'orange';
                        }
                        return '<span style="color:' + color + '">' + number + '</span>';
                    }
                    return number;
                    var capacidadf = number;
                
                },
            },
            //{"data": "Estado"},
            {
                data: 'estado',
                render: function (data, type) {
                    if (type === 'display') {
                        let link = 'btn-light';
 
                        if (data[0] === 'C') {
                            link = 'btn-success';
                        } else if (data[0] === 'N') {
                            link = 'btn-dark';
                        }
                        // Llamamos la función de simulador
                        return '<a class="btn '+link+' Simulador" role="button">'+data+'</a>';
                    }
 
                    return data;
            
                },
            },

 
            {"data": "fecha_solicitud"}, 
    
        ],
        
    })

    
    var fila; //captura la fila, para editar o eliminar

    //submit para Actualización
    $('#formModal').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

        id = $.trim($('#id_cliente').val());
        alert(opcion);
        alert(id);
        cedula = $.trim($('#cedula').val());
        capacidad = $.trim($('#capacidad').val());
        plazo = $.trim($('#plazo').val());
        fecha = $.trim($('#fecha').val());
        monto = $.trim($('#monto').val());
        estado = $.trim($('#estado').val());
        
        
            $.ajax({
              url: "crud.php",
              type: "POST",
              datatype:"json",    
              data:  {id:id, 
                    cedula:cedula,
                    capacidad:capacidad,
                    plazo:plazo,
                    fecha:fecha,
                    monto:monto,
                    estado:estado,
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

    // Funcion de Simulador: llama al modal Simulador de Credito
    $(document).on("click", ".Simulador", function simulador(){
        var filaSeleccionada = tablaUsuarios.row($(this).parents('tr')); //captura los datos de la fila
        var capacidadSeleccionada = filaSeleccionada.data().capacidad; // guardamos en variable la capacidad


        $('#modalSimulador').on('hidden.bs.modal', function () {
            $(this).find('input[id=c1],input[id=c2],input[id=c12]').val('');
            // Limpiamos los valores de los campos C1, C2 y C12 del modal
        });

        $(".modal-header").css( "background-color", "#2e2cb1");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Simulador de Credito");
        $('#modalSimulador').modal('show');
        $('#c11').val(capacidadSeleccionada); // pasamos el valor de capacidad al campo C11
        
        

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
        var id = parseInt($(this).closest('tr').find('td:eq(0)').text());
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
                                html += '<a class="btn btn-outline-primary btnEditar" id='+ value.id +'><i class="fas fa-edit"></i>'
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
    
    
    // Editar Detalles del Credito
    $(document).on("click", ".btnEditar", function(){	
        $('#VerClientes').modal('toggle')	        
        opcion = 5;//Para llamar los datos de la BD
        var id = $(this).attr('id');

        $.ajax({
            url: "crud.php",
            type: "POST",
            datatype:"json",    
            data: {opcion:opcion, id:id},
            
        success: function (response) {//una vez que la solicitud se procese con éxito en el lado del servidor, devolverá el resultado aquí
            // Parse the json result
            response = JSON.parse(response);
            var html = "";
            
            html += '<form action="" method="post" id="actualizarCredito" class="needs-validation" novalidate>'

            html += '<input type="hidden" id="id" value="" class="form-control form-control-sm" required >'

            html += '<div class="form-group row mb-0">'
            html += '<label for="dd1" class="col-sm-3 col-form-label-sm">Nº de Documento</label>'
            html += '<div class="col-sm-3">'
            html += '<input type="number" id="id_documento" value="" class="form-control form-control-sm" readonly >'
            html += '</div>'

            html += '<label for="dd1" class="col-sm-3 col-form-label-sm">Monto del Credito</label>'
            html += '<div class="col-sm-3">'
            html += '<input type="text" id="monto" value="" class="form-control form-control-sm" required >'
            html += '</div>'
            html += '</div>'

            html += '<div class="form-group row mb-0">'
            html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PLAZO</label>'
            html += '<div class="col-sm-3">'
            html += '<input type="text" id="plazo" value="" class="form-control form-control-sm" >'
            html += '</div>'

            html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CAPACIDAD LIBRE INVERSIÓN</label>'
            html += '<div class="col-sm-3">'
            html += '<input type="text" id="capacidad" value="" class="form-control form-control-sm" readonly>'
            html += '</div>'
            html += '</div>'

            html += '<div class="form-group row mb-0">'
            html += '<label for="dd1" class="col-sm-3 col-form-label-sm">ESTADO</label>'
            html += '<div class="col-sm-3">'
            html += '<input type="text" id="estado" value="" class="form-control form-control-sm" >'
            html += '</div>'

            html += '<label for="dd1" class="col-sm-3 col-form-label-sm">FECHA DE SOLICITUD</label>'
            html += '<div class="col-sm-3">'
            html += '<input type="text" id="fecha_solicitud" value="" class="form-control form-control-sm" readonly>'
            html += '</div>'
            html += '</div>'

            // html += '<button type="submit" class="btn btn-outline-success ml-3" ><i class="fas fa-save"></i></button>'
            html += '<button type="button" class="btn btn-outline-success ml-3" onclick= "actualizarCredito()" ><i class="fas fa-save"></i></button>'
            html += '<button type="button" class="btn btn-outline-danger float-right" data-dismiss="modal"><i class="far fa-times-circle"></i></button>'
            
            html += '</form>'

            // Insert the HTML Template and display all employee records
            $("#contenido_credito").html(html);

            
            
            // Check if there is available records
            if(response.length) {
                // Loop the parsed JSON
                $.each(response, function(key,value) {

                    $("#id").val(value.id);
                    $("#id_documento").val(value.id_documento);
                    //$("#solicitud_credito").val(value.solicitud_credito);
                    $("#monto").val(value.monto);
                    $("#plazo").val(value.plazo);
                    //$("#amortizacion").val(value.amortizacion);
                    //$("#tipo_credito").val(value.tipo_credito);
                    // $("#deudas_actuales").val(value.deudas_actuales);
                    // $("#egresos").val(value.egresos);
                    // $("#datacreditos").val(value.datacreditos);
                    $("#capacidad").val(value.capacidad);
                    // $("#calificacion_interna").val(value.calificacion_interna);
                    // $("#tasa").val(value.tasa);
                    // $("#resultado").val(value.resultado);
                    // $("#cuota_mensual").val(value.cuota_mensual);
                    // $("#intereses_anticipados").val(value.intereses_anticipados);
                    // $("#seguro").val(value.seguro);
                    // $("#asesoria").val(value.asesoria);
                    // $("#iva").val(value.iva);
                    // $("#comentarios").val(value.comentarios);
                    $("#fecha_solicitud").val(value.fecha_solicitud);
                    $("#estado").val(value.estado);

                });
            } else {
                html += '<div class="alert alert-warning">';
                html += 'No se encontro este registro en la BD!';
            }
            
        }
        
        
      });
        
        //$("#formModal").trigger("reset");
        $(".modal-header").css("background-color", "#ff9800"); // Color Naranja
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar Detalles del Credito");		
        $('#modalCRUD').modal('show');
        var opcion = 2;//para enviar el update
        
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

//submit para actualizarCredito
function actualizarCredito(){


    opcion = 2;
    id = $.trim($('#id').val());
    id_documento = $.trim($('#id_documento').val());
    monto = $.trim($('#monto').val());
    plazo = $.trim($('#plazo').val());
    capacidad = $.trim($('#capacidad').val());
    estado = $.trim($('#estado').val());


        $.ajax({
          url: "crud.php",
          type: "POST",
          datatype:"json",    
          data:  {id_documento:id_documento,
                monto:monto,
                plazo:plazo,
                capacidad:capacidad,
                estado:estado,
                id:id,
                opcion:opcion},  
          success: function(data) {
          }
        });


    $(function() {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'los detalles del credito han sido actualizados con exito...',
                showConfirmButton: false,
                timer: 2000,
                 willClose: () => {
                     window.location.reload()
                   }
              })
          });

};
