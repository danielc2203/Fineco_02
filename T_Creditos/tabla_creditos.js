// Funcion que muestra el datatable con la informaciòn de todos los clientes
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
                }
            },
            //Nombre de la pagadira o calculadora
            {data: 'pagaduria',
                render: function(data){
                    return '<span style="text-transform:capitalize;">' + data + '</span>';
                    return data; 
                }
            }, 
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
});

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
    $(".modal-title").text("Simulador de Crédito");
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
$(document).on("click", ".VerCredito", function(){        
    var id = parseInt($(this).closest('tr').find('td:eq(0)').text());
    //var id_documento = ""
    var opcion = 5; //alta
    $.ajax({
        url: "crud.php",
        type: "POST",
        datatype:"json",    
        data: {opcion:opcion, id:id}, 
        success: function (response) {
            response = JSON.parse(response);
            var html = "";
            var id_documento = response[0].id_documento; // Obtener el valor de id_documento
            if(response.length) {
            // Loop the parsed JSON
            $.each(response, function(key,value) {

                html += '<div class="card" id="modal-content">'
                  html += '<div class="card-header text-center">'
                    html += '<h5 class="mb-0">Credito Nº ' + value.id + '</h5>'
                  html += '</div>'
                  html += '<div class="card-body">'
                    html += '<div class="row">'

                      html += '<div class="col-6">'
                        html += '<p class="text-muted mb-1"><b>Número de documento:</b> ' + value.id_documento + '</p>'
                        html += '<p class="text-muted mb-1"><b>Monto:</b> ' + value.monto + '</p>'
                        html += '<p class="text-muted mb-1"><b>Plazo:</b> ' + value.plazo + '</p>'
                        html += '<p class="text-muted mb-1"><b>Amortización:</b> ' + value.amortizacion + '</p>'
                        html += '<p class="text-muted mb-1"><b>Tipo de crédito:</b> ' + value.tipo_credito + '</p>'
                        html += '<p class="text-muted mb-1"><b>Deudas actuales:</b> ' + value.deudas_actuales + '</p>'
                        html += '<p class="text-muted mb-1"><b>Egresos:</b> ' + value.egresos + '</p>'
                        html += '<p class="text-muted mb-1"><b>Capacidad:</b> ' + value.capacidad + '</p>'
                        html += '<p class="text-muted mb-1"><b>Ingresos:</b> ' + value.ingresos + '</p>'
                        html += '<p class="text-muted mb-1"><b>tasa:</b> ' + value.tasa + '</p>'
                        html += '<p class="text-muted mb-1"><b>intereses anticipados:</b> ' + value.intereses_anticipados + '</p>'
                      html += '</div>'

                      html +=' <div class="col-6">'
                        html += '<p class="text-muted mb-1"><b>Calificación interna:</b> ' + value.calificacion_interna + '</p>'
                        html += '<p class="text-muted mb-1"><b>Cuota mensual:</b> ' + value.cuota_mensual + '</p>'
                        html += '<p class="text-muted mb-1"><b>Seguro:</b> ' + value.seguro + '</p>'
                        html += '<p class="text-muted mb-1"><b>Asesor de Fineco:</b> ' + value.asesor + '</p>'
                        html += '<p class="text-muted mb-1"><b>Comentarios:</b> ' + value.comentarios + '</p>'
                        html += '<p class="text-muted mb-1"><b>Fecha de solicitud:</b> ' + value.fecha_solicitud + '</p>'
                        html += '<p class="text-muted mb-1"><b>Estado:</b> ' + value.estado + '</p>'
                        html += '<p class="text-muted mb-1"><b>pagaduria:</b> ' + value.pagaduria + '</p>'
                        html += '<p class="text-muted mb-1"><b>gastos:</b> ' + value.gastos + '</p>'
                        html += '</div>'
                    html += '</div>'

                    html += '<hr>'
                  
                    html += '</div>'
                    html += '<div class="card-footer">'
                        html += '<p class="card-text" > <small class="text-muted"> Creditos Fineco App </small> </p>'
                    html += '</div>'
                    html += '</div>'

                html += '<div>'
                html += '<button type="button" class="btn btn-danger float-right" id="print_modal"><i class="fas fa-file-pdf fa-1x"></i></button>';
                html += '<a class="btn btn-primary btnEditar" id=' + value.id + '><i class="fas fa-edit"></i></a>'
                html += '<a class="btn btn-danger float-left btnBorrar" id=' + value.id + '><i class="fas fa-trash-alt"></i></a>'
                html += '</div>'
              
              });            
            $(".modal-title").text("Detalles del Credito para: " + id_documento);

            } else {
                html += '<div class="alert alert-warning">';
                html += 'No records found!';
            }
            $("#contenido_credito").html(html);
        }
        });

    $(".modal-header").css( "background-color", "#73c6fe");
    $(".modal-header").css( "color", "white" );
   // $(".modal-title").text("Detalles del Credito para: " + id_documento);
    $('#VerCredito').modal('show');
    
});
    
// // Modal de Ediciòn de los Detalles del Credito
// $(document).on("click", ".btnEditar", function(){	
//     $('#VerClientes').modal('toggle')	        
//     opcion = 5;//Para llamar los datos de la BD
//     var id = $(this).attr('id');

//     $.ajax({
//         url: "crud.php",
//         type: "POST",
//         datatype:"json",    
//         data: {opcion:opcion, id:id},
        
//     success: function (response) {//una vez que la solicitud se procese con éxito en el lado del servidor, devolverá el resultado aquí
//         // Parse the json result
//         response = JSON.parse(response);
//         var html = "";
        
//         html += '<form action="" method="post" id="actualizarCredito" class="needs-validation" novalidate>'

//         html += '<input type="hidden" id="id" value="" class="form-control form-control-sm" required >'

//         html += '<div class="form-group row mb-0">'
//         html += '<label for="dd1" class="col-sm-3 col-form-label-sm">Nº de Documento</label>'
//         html += '<div class="col-sm-3">'
//         html += '<input type="number" id="id_documento" value="" class="form-control form-control-sm" readonly >'
//         html += '</div>'

//         html += '<label for="dd1" class="col-sm-3 col-form-label-sm">Monto del Credito</label>'
//         html += '<div class="col-sm-3">'
//         html += '<input type="text" id="monto" value="" class="form-control form-control-sm" required >'
//         html += '</div>'
//         html += '</div>'

//         html += '<div class="form-group row mb-0">'
//         html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PLAZO</label>'
//         html += '<div class="col-sm-3">'
//         html += '<input type="text" id="plazo" value="" class="form-control form-control-sm" >'
//         html += '</div>'

//         html += '<label for="dd1" class="col-sm-3 col-form-label-sm">Pagaduria</label>'
//         html += '<div class="col-sm-3">'
//         html += '<input type="text" id="Pagaduria" value="" class="form-control form-control-sm" readonly>'
//         html += '</div>'
//         html += '</div>'

//         html += '<div class="form-group row mb-0">'
//         html += '<label for="dd1" class="col-sm-3 col-form-label-sm">Tipo de Credito</label>'
//         html += '<div class="col-sm-3">'
//         html += '<input type="text" id="tipo_credito" value="" class="form-control form-control-sm" >'
//         html += '</div>'

//         html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CAPACIDAD LIBRE INVERSIÓN</label>'
//         html += '<div class="col-sm-3">'
//         html += '<input type="text" id="capacidad" value="" class="form-control form-control-sm" readonly>'
//         html += '</div>'
//         html += '</div>'

//         html += '<div class="form-group row mb-0">'
//         html += '<label for="dd1" class="col-sm-3 col-form-label-sm">ESTADO</label>'
//         html += '<div class="col-sm-3">'
//         html += '<input type="text" id="estado" value="" class="form-control form-control-sm" >'
//         html += '</div>'

//         html += '<label for="dd1" class="col-sm-3 col-form-label-sm">FECHA DE SOLICITUD</label>'
//         html += '<div class="col-sm-3">'
//         html += '<input type="text" id="fecha_solicitud" value="" class="form-control form-control-sm" readonly>'
//         html += '</div>'
//         html += '</div>'

//         // html += '<button type="submit" class="btn btn-outline-success ml-3" ><i class="fas fa-save"></i></button>'
//         html += '<button type="button" class="btn btn-outline-success ml-3" onclick= "actualizarCredito()" ><i class="fas fa-save"></i></button>'
//         html += '<button type="button" class="btn btn-outline-danger float-right" data-dismiss="modal"><i class="far fa-times-circle"></i></button>'
        
//         html += '</form>'

//         // Insert the HTML Template and display all employee records
//         $("#contenido_credito").html(html);

        
        
//         // Check if there is available records
//         if(response.length) {
//             // Loop the parsed JSON
//             $.each(response, function(key,value) {

//                 $("#id").val(value.id);
//                 $("#id_documento").val(value.id_documento);
//                 //$("#solicitud_credito").val(value.solicitud_credito);
//                 $("#monto").val(value.monto);
//                 $("#plazo").val(value.plazo);
//                 $("#Pagaduria").val(value.pagaduria);
//                 //$("#amortizacion").val(value.amortizacion);
//                 $("#tipo_credito").val(value.tipo_credito);
//                 // $("#deudas_actuales").val(value.deudas_actuales);
//                 // $("#egresos").val(value.egresos);
//                 // $("#datacreditos").val(value.datacreditos);
//                 $("#capacidad").val(value.capacidad);
//                 // $("#calificacion_interna").val(value.calificacion_interna);
//                 // $("#tasa").val(value.tasa);
//                 // $("#resultado").val(value.resultado);
//                 // $("#cuota_mensual").val(value.cuota_mensual);
//                 // $("#intereses_anticipados").val(value.intereses_anticipados);
//                 // $("#seguro").val(value.seguro);
//                 // $("#asesoria").val(value.asesoria);
//                 // $("#iva").val(value.iva);
//                 // $("#comentarios").val(value.comentarios);
//                 $("#fecha_solicitud").val(value.fecha_solicitud);
//                 $("#estado").val(value.estado);

//             });
//         } else {
//             html += '<div class="alert alert-warning">';
//             html += 'No se encontro este registro en la BD!';
//         }
        
//     }
    
    
//     });
    
//     //$("#formModal").trigger("reset");
//     $(".modal-header").css("background-color", "#ff9800"); // Color Naranja
//     $(".modal-header").css("color", "white" );
//     $(".modal-title").text("Editar Detalles de Solicitud de Credito");		
//     $('#modalCRUD').modal('show');
//     var opcion = 2;//para enviar el update
    
// });

$(document).on('click', '.btnEditar', function() {
    $('#VerCredito').modal('toggle')
	fila = $(this);      
	tabla = "creditos";     
    var id = $(this).attr('id'); // traemos el id del btn-editar para usar el resposive de datatable
	opcion = 5;
	//console.log(id, tabla, opcion);
	$.ajax({
		url: "crud.php",
		type: "POST",
		datatype:"json",    
		data: {opcion:opcion, id:id, tabla:tabla}, 

		success: function (response) {
			response = JSON.parse(response);
			var html = "";
            var data = response[0];

			html += '<div class="modal-body">'
			html += '<form id="save-form">'
		  
			$.each(response[0], function(key, val) {
                // Verificamos si el campo es "id" para bloquearlo
                if (key === "id") {
                html += '<div class="form-group row mb-0">';
                html += '<label class="col-6 col-form-label-sm">' + key + ':</label>';
                html += '<div class="col-6">';
                html += '<input type="text" id="' + key + '" value="' + val + '" class="form-control form-control-sm" readonly>';
                html += '</div>';
                html += '</div>';
                }
                // Verificamos si el campo es "estado" para crear un select con opciones
                else if (key === "estado") {
                var estadoActual = data[key];
                html += '<div class="form-group row mb-0">';
                html += '<label class="col-6 col-form-label-sm">' + key + ':</label>';
                html += '<div class="col-6">';
                html += '<select id="' + key + '" class="form-control form-control-sm">';
                if (estadoActual === "Pendiente") {
                html += '<option value="Pendiente" selected>Pendiente</option>';
                html += '<option value="Con Cupo">Con Cupo</option>';
                } else {
                html += '<option value="Pendiente">Pendiente</option>';
                html += '<option value="Con Cupo" selected>Con Cupo</option>';
                }
                html += '</select>';
                html += '</div>';
                html += '</div>';
                }
                // Para cualquier otro campo, creamos un input
                else {
                html += '<div class="form-group row mb-0">';
                html += '<label class="col-6 col-form-label-sm">' + key + ':</label>';
                html += '<div class="col-6">';
                // Si el campo es "pagaduria", creamos un select con opciones cargadas desde una solicitud AJAX
                if (key === "pagaduria") {
                html += '<select id="' + key + '" class="form-control form-control-sm">';
                $.ajax({
                url: "../F_Clientes/listas.php",
                type: "POST",
                datatype:"json",
                data: {opcion: 1, tabla: 'convenios'},
                success: function(response) {
                response = JSON.parse(response);
                var options = '';
                var selected = '';
                var encontrado = false;
                $.each(response, function(i, val2) {
                options += '<option value="' + val2.nombre + '"';
                if (val2.nombre == val) {
                options += 'selected';
                encontrado = true;
                }
                options += '>' + val2.nombre + '</option>';
                });
                if (!encontrado) {
                options += '<option value="' + val + '" selected>' + val + '</option>';
                }
                $('#' + key).append(options);
                }
                });
                html += '</select>';
                }
                // Para cualquier otro campo, creamos un input tipo texto
                else {
                    html += '<input type="text" id="' + key + '" value="' + (val ? val : '') + '" class="form-control form-control-sm">';

                }
                html += '</div>';
                html += '</div>';
                }
                });
			
			html += '</form>'
			html += '</div>'// Cierro "modal-body"

            html += '<div class="footer mb-5">'
            html += '<button type="button" class="btn btn-primary float-sm-left" id="btnUpdateSubmitEdit">Guardar</button>'
            html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
            html += '</div>'// Cierro "modal-footer"
		  
			// Insert the HTML Template and display all employee records
			$("#contenido_datos").html(html);
		  }
		  
	  });
        $("#formModal").trigger("reset");
        $(".modal-header").css("background-color", "#ff9800"); // Color Naranja
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar Detalles de Solicitud de Credito");		
        $('#modalF').modal('show');
        var opcion = 2;//para enviar el update
        var id = id;
        //console.log(id);

});

//Borrar con Swal2
$(document).delegate(".btnBorrar", "click", function() {

    var id = $(this).attr('id'); // Pasamos el id del modal a la funcion borrar desde el boton
    //alert(id);
    opcion = 3; //eliminar   

        Swal.fire({
            icon: 'warning',
            title: 'Estas seguro de eliminar esta solicitud de credito?',
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
                    Swal.fire('La solicitud de credito ha sido Eliminado de la base de datos.', response, 'success');
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

//submit para actualizar la solicitud de Credito, Recibe los datos cuando se da guardar en editar detalles del credito
function actualizarCredito(){

    opcion = 2;
    id = $.trim($('#id').val());
    id_documento = $.trim($('#id_documento').val());
    tipo_credito = $.trim($('#tipo_credito').val());
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
                tipo_credito:tipo_credito,
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
                title: 'los detalles de solicitud de credito han sido actualizados con exito...',
                showConfirmButton: false,
                timer: 2000,
                 willClose: () => {
                     window.location.reload()
                   }
              })
          });

};


$(document).on('click', '#btnUpdateSubmitEdit', function() {
    opcion = 7;
    var formData = {}; //Se declara una variable "formData" que será un objeto vacío.
    var saveForm = document.getElementById("save-form"); //Se obtiene el elemento del formulario "save-form" utilizando su id
    var inputs = saveForm.querySelectorAll("input"); //Se declara una variable "inputs" que almacenará una lista de todos los elementos "input" dentro del formulario "save-form" utilizando la función "querySelectorAll" 
    for (var i = 0; i < inputs.length; i++) { //Se usa un ciclo "for" para iterar a través de todos los elementos "input" en la lista.
        formData[inputs[i].id] = inputs[i].value; //Dentro del ciclo, se agrega una propiedad al objeto "formData" utilizando el "id" del elemento de entrada actual como la clave y el "value" como el valor.
    }

    //Agregamos la eleccion de estado a su campo
    formData['estado'] = $('#estado').val();
    formData['pagaduria'] = $('#pagaduria').val();
    var id = parseInt(formData['id']);

    $.ajax({
        url: "crud.php",
        type: "POST",
        //(...formData) es un operador de propagación que permite expandir el objeto 
        data: {opcion: opcion, tabla:tabla, id:id, ...formData}, 
        success: function (data) {
        }
    });

    $('#modalClientes').modal('hide');
    $(function() {
        //toastr.success('Se ha creado el registro correctamente')
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Los cambios han sido efectuados exitosamente...',
            showConfirmButton: false,
            timer: 1900,
        }).then((result) => {
            // Se llama la función consultar después de que se haya cerrado la alerta
            location.reload();
        });
    });
            
    // Verifico por consola si esta enviando los datos correctos
});



// Funcion para imprimir el modal en PDF
$(document).on('click', '#print_modal', function() {
    var element = document.getElementById('modal-content');
    html2pdf().from(element).save();
});