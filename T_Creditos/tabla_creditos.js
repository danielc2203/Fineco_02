// Funcion que muestra el datatable con la informaciòn de todos los clientes
$(document).ready(function() {
    var id, opcion;
    opcion = 4;
    
    $(document).ready(function () {
        $('#creditosp').DataTable();
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
        "responsive": true, "autoFill": true, "lengthChange": true, "autoWidth": true, "scroll": true,
        "ajax":{            
            "url": "crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:opcion}, //enviamos opcion 4 para que haga un SELECT
            "dataSrc":""

        },
        "columns":[
            {"data": "id"},
            //{"data": "id_documento"},
            {sortable: false,
                "render": function (data, type, full, meta) {
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
                data: 'monto_solicitado',
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
            {"data": "cuota_mensual"},
            //{"data": "Estado"},
            {
                data: 'estado',
                render: function (data, type) {
                    
                    return '<a class="btn btn-secondary Simulador" role="button">'+data+'</a>';       
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
    var id = filaSeleccionada.data().id; // Guardamos el ID
    var capacidadSeleccionada = filaSeleccionada.data().capacidad; // guardamos en variable la capacidad
    var plazof = filaSeleccionada.data().plazo; // Plazo
    var documentoF = filaSeleccionada.data().id_documento;
    var montoF = filaSeleccionada.data().monto_solicitado;
    var cartera = filaSeleccionada.data().cartera;
    var seguro = filaSeleccionada.data().seguro;


    $('#modalSimulador').on('hidden.bs.modal', function () {
        $(this).find('input[id=c1],input[id=c2],input[id=c12]').val('');
        // Limpiamos los valores de los campos C1, C2 y C12 del modal
    });

    $(".modal-header").css( "background-color", "#2e2cb1");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Simulador de Crédito para cliente: " +documentoF);
    $('#modalSimulador').modal('show');
    $('#id').val(id); // pasamos el valor de Total compras de cartera al campo C1
    //$('#c1').val("0"); // pasamos el valor de Total compras de cartera al campo C1
    $('#c2').val(montoF); // pasamos el valor de Monto solicitado compras de cartera al campo C2
    $('#c11').val(capacidadSeleccionada); // pasamos el valor de capacidad al campo C11
    $('#c10').val(plazof); // pasamos el valor de plazo al campo C10
    $('#c1').val(cartera); // pasamos el valor de plazo al campo C10
    $('#seguro').val(seguro); // pasamos el valor de plazo al campo C10
    //$('#c12').val(documentoF); // pasamos el valor de plazo al campo C10
    setTimeout(updateResult, 2000);
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
                        html += '<p class="text-muted mb-1"><b>pagaduria:</b> ' + value.pagaduria + '</p>'
                        html += '<p class="text-muted mb-1"><b>Asesor de Fineco:</b> ' + value.asesor + '</p>'
                        html += '<p class="text-muted mb-1"><b>Fecha de solicitud:</b> ' + value.fecha_solicitud + '</p>'
                        html += '<p class="text-muted mb-1"><b>Ingresos Mensuales:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.ingresos) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Monto Solicitado:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.monto_solicitado) + '</p>';
                        html += '<p class="text-muted mb-1"><b>Monto Desembolsado:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.monto_desembolsado) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Descuentos Mensuales:</b> '+ Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.gastos) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Capacidad:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.capacidad) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Plazo en Meses:</b> ' + value.plazo + '</p>'
                        html += '<p class="text-muted mb-1"><b>Tasa:</b> ' + value.tasa + '</p>'
                    html +=' </div>'
                    
                    html +=' <div class="col-6">'
                        html += '<p class="text-muted mb-1"><b>Servicio Aval:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.servicio_aval) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Estudio Adm:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.estudio_adm) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Impuestos:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.impuestos) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Intereses Iniciales:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.intereses_iniciales) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Seguro:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.seguro) + '</p>'
                        html += '<p class="text-muted mb-1"><b>GMF:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.gmf) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Cartera:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.cartera) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Total Credito:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.totalCredito) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Cuota Mensual:</b> ' + Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value.cuota_mensual) + '</p>'
                        html += '<p class="text-muted mb-1"><b>Estado:</b> ' + value.estado + '</p>'
                        
                        
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
                html += '<button type="button" class="btn btn-warning float-right" idF=' + value.id + ' id="lista_amortizacion"><i class="fas fa-tasks"></i></button>';
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

// Funcion para editar detalles de Solicitud de Credito
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
            var estados = {
                '1.0 INGRESADO': '1.0 INGRESADO',
                '1.1 COMITÉ DE CRÉDITO': '1.1 COMITÉ DE CRÉDITO',
                '1.2 INGRESADO PDTE SOPORTES Y DOCUMENTOS': '1.2 INGRESADO PDTE SOPORTES Y DOCUMENTOS',
                '2.0 VALIDACIÓN DOCUMENTAL Y PROFORENSE': '2.0 VALIDACIÓN DOCUMENTAL Y PROFORENSE',
                '2.1 INGRESADO PDTE SOPORTES': '2.1 INGRESADO PDTE SOPORTES',
                '3.0 RADICADO SOPORTES COMPLETOS': '3.0 RADICADO SOPORTES COMPLETOS',
                '3.1 RAD. VALIDACIÓN DE CRÉDITO': '3.1 RAD. VALIDACIÓN DE CRÉDITO',
                '3.2 REFERENCIACIÓN': '3.2 REFERENCIACIÓN',
                '4.0 VISADO E INCORPORACIÓN': '4.0 VISADO E INCORPORACIÓN',
                '4.1 APROBADO PDTE CERTIFICACIONES': '4.1 APROBADO PDTE CERTIFICACIONES',
                '4.2 APROBADO PDTE VISADO': '4.2 APROBADO PDTE VISADO',
                '4.3 APROBADO PDTE INCORPORACIÓN': '4.3 APROBADO PDTE INCORPORACIÓN',
                '4.4 VALIDACIÓN DOCUMENTAL': '4.4 VALIDACIÓN DOCUMENTAL',
                '5.0 APROBADO DEFINITIVO': '5.0 APROBADO DEFINITIVO',
                '5.1 TESORERÍA COMPRAS DE CARTERA': '5.1 TESORERÍA COMPRAS DE CARTERA',
                '5.2 TESORERÍA COMPRAS Y DESEMBOLSO': '5.2 TESORERÍA COMPRAS Y DESEMBOLSO',
                '5.3 DESEMBOLSADO PDTE GIRO': '5.3 DESEMBOLSADO PDTE GIRO',
                '6.0 DESEMBOLSO CLIENTE': '6.0 DESEMBOLSO CLIENTE'
              };
              

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
                // else if (key === "estado") {
                // var estadoActual = data[key];
                // html += '<div class="form-group row mb-0">';
                // html += '<label class="col-6 col-form-label-sm">' + key + ':</label>';
                // html += '<div class="col-6">';
                // html += '<select id="' + key + '" class="form-control form-control-sm">';
                // if (estadoActual === "Pendiente") {
                // html += '<option value="Pendiente" selected>Pendiente</option>';
                // html += '<option value="Con Cupo">Con Cupo</option>';
                // } else {
                // html += '<option value="Pendiente">Pendiente</option>';
                // html += '<option value="Con Cupo" selected>Con Cupo</option>';
                // }
                // html += '</select>';
                // html += '</div>';
                // html += '</div>';
                // }

                // Verificamos si el campo es "estado" para crear un select con opciones
                else if (key === "estado") {
                    var estadoActual = data[key];
                    html += '<div class="form-group row mb-0">';
                    html += '<label class="col-6 col-form-label-sm">' + key + ':</label>';
                    html += '<div class="col-6">';
                    html += '<select id="' + key + '" class="form-control form-control-sm">';
                    for (var estado in estados) {
                    if (estados.hasOwnProperty(estado)) {
                        if (estado === estadoActual) {
                        html += '<option value="' + estado + '" selected>' + estados[estado] + '</option>';
                        } else {
                        html += '<option value="' + estado + '">' + estados[estado] + '</option>';
                        }
                    }
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
        $('#VerCredito').modal('toggle')
        location.reload();
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

// Envio al post save
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

// Envio al post save desde Simulador
$(document).on('click', '#btnUpdateSimulador', function() {
    
    opcion = 7;

    var id = document.getElementById("id").value;
    var cartera = document.getElementById("c1").value;
    var totalCredito = document.getElementById("c8").value;
    let F_totalCredito = parseInt(totalCredito.replace(/\D/g, '').slice(0,-2)); // Quito el formato moneda y convierto a numero simple
    var plazo = document.getElementById("c10").value;
    var monto_desembolsado = document.getElementById("c2").value;
    var cuota = document.getElementById("c12").value;
    let F_cuota = parseInt(cuota.replace(/\D/g, '').slice(0,-2));
    var seguro = document.getElementById("seguro").value;
    var estado = document.getElementById("estadoFF").value;
    var tasa = document.getElementById("c9").value;
    var servicio_aval = document.getElementById("c3").value;
    let F_servicio_aval = parseInt(servicio_aval.replace(/\D/g, '').slice(0,-2)); // Quito el formato moneda y convierto a numero simple
    var estudio_adm = document.getElementById("c4").value;
    let F_estudio_adm = parseInt(estudio_adm.replace(/\D/g, '').slice(0,-2));
    var impuestos = document.getElementById("c5").value;
    let F_impuestos = parseInt(impuestos.replace(/\D/g, '').slice(0,-2));
    var intereses_iniciales = document.getElementById("c6").value;
    let F_intereses_iniciales = parseInt(intereses_iniciales.replace(/\D/g, '').slice(0,-2));
    var gmf = document.getElementById("c7").value;
    let F_gmf = parseInt(gmf.replace(/\D/g, '').slice(0,-2));


    var formData = {
        'id': id,
        'cartera': cartera,
        'totalCredito': F_totalCredito,
        'plazo': plazo,
        'monto_desembolsado': monto_desembolsado,
        'seguro': seguro,
        'cuota_mensual': F_cuota,
        'estado': estado,
        'tasa': tasa,
        'servicio_aval': F_servicio_aval,
        'estudio_adm': F_estudio_adm,
        'impuestos': F_impuestos,
        'intereses_iniciales': F_intereses_iniciales,
        'gmf': F_gmf
    };

    var id = parseInt(formData['id']);

    $.ajax({
        url: "crud.php",
        type: "POST",
        //(...formData) es un operador de propagación que permite expandir el objeto 
        data: {opcion: opcion, id:id, ...formData}, 
        success: function (data) {
        }
    });

    $('#modalSimulador').modal('hide');
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

// Funcion para imprimir la tabla de amortizacion en PDF
$(document).on('click', '#print_modal_amortizacion', function() {
    var element = document.getElementById('contenido_credito');
    html2pdf().from(element).save();
});

var id_prestamo; // Funcion Global

// Funcion para ver la lista de Amortizaciones
$(document).on('click', '#lista_amortizacion', function() {
    fila = $(this);      
	tabla = "creditos";     
    var id = $(this).attr('idF'); // traemos el id del btn-editar para usar el resposive de datatable
	opcion = 5;
	console.log(id, tabla, opcion);
	$.ajax({
		url: "crud.php",
		type: "POST",
		datatype:"json",    
		data: {opcion:opcion, id:id, tabla:tabla}, 

		success: function (response) {
			response = JSON.parse(response);
			var html = "";
            var data = response[0];
            var monto = data.totalCredito;
            var tiempo = data.plazo;
            var interes = data.tasa;
            var seguro = data.seguro;
            var cuota = data.cuota_mensual;
            id_prestamo = id;
            console.log(id_prestamo + "id prestamo D"); // Trae todos los datos del actual credito
            $(".modal-header").html(`
                <button type="button" class="btn btn-success float-left " id="guardar_amortizacion"><i class="fas fa-save"></i></i></button>
                <h5 class="modal-title" style="text-align: center;">Tabla de Amortizacion</h5>
                <button type="button" class="btn btn-danger float-right" id="print_modal_amortizacion"><i class="fas fa-file-pdf fa-1x"></i></button>
            `);
    // Crear la tabla
    let fechas = [];
    let fechaActual = Date.now();
    let mes_actual = moment(fechaActual);
    mes_actual.add(1, 'month');
    let pagoInteres = 0, pagoCapital = 0;
    const tablaAmortizacion = document.createElement('table');
    tablaAmortizacion.classList.add('table', 'table-striped', 'table-hover');
    tablaAmortizacion.innerHTML = `
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Pago Capital</th>
                <th>Seguro</th>
                <th>Pago Interes</th>
                <th>Cuota</th>
                <th>Saldo Restante</th>
            </tr>
        </thead>
        <tbody id="lista-tabla">
        </tbody>
    `;
    const llenarTabla = tablaAmortizacion.querySelector('#lista-tabla');
    let saldo = monto;
    cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);
    //cuota = cuota + seguro;
    for(let i = 1; i <= tiempo; i++) {

        pagoInteres = parseFloat(saldo * (interes/100));
        pagoCapital = cuota - pagoInteres;
        saldo -= pagoCapital;
        seguro = seguro;

        //Formato fechas
        fechas[i] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${pagoCapital.toFixed(0)}</td>
            <td>${parseFloat(seguro/12).toFixed(0)}</td>
            <td>${pagoInteres.toFixed(0)}</td>
            <td>${parseFloat(cuota + (seguro/12)).toFixed(0)}</td>
            <td>${parseFloat(saldo).toFixed(0)}</td>
        `;
        llenarTabla.appendChild(row)
    }
    // Mostrar la tabla en el modal
    $('#VerCredito .modal-body').html(tablaAmortizacion);
    $("#formModal").trigger("reset");
    $(".modal-header").css("background-color", "#b7f8db"); // Color Naranja
    $(".modal-header").css("color", "black");
    $(".modal-header").css("color", "black");
    $(".modal-title").text("Tabla de Amortizacion, Credito # " + data.id + " - CC: " + data.id_documento);
    $('#VerCredito').modal('show');
}
});
});

var tablaAmortizacion = []; // Define la variable en el ámbito global o del documento


// Guardar tabla de amortizacion en la base de datos
$(document).on('click', '#guardar_amortizacion', function() {
    // Recorrer las filas de la tabla de amortización;
    console.log(id_prestamo);
    
  
});


$(document).on('click', '#guardar_amortizacion', function() {
    // Verificar si ya existe una tabla de amortización para este préstamo
    $.ajax({
      method: 'POST',
      url: 'crud.php',
      data: {
        opcion: 10,
        id_prestamo: id_prestamo
      },
      success: function(data) {
        if (data == 'true') {
          // Ya existe una tabla de amortización para este préstamo
          //alert('Ya existe una tabla de amortización para este préstamo');
          Swal.fire({
            title: 'Error al guardar!',
            text: 'Ya existe una tabla de amortización para este préstamo en la base de datos',
            icon: 'error',
            confirmButtonText: 'Ok'
            })
        } else {
            
          // No existe una tabla de amortización para este préstamo, proceder con la inserción
            let contador = 1; // Inicializar el contador en 1
$('#lista-tabla tr').each(function() {
    // Extraer los valores de cada columna
    
    const fecha = $(this).find('td').eq(0).text();
            const capital = parseFloat($(this).find('td').eq(1).text());
            const seguro = parseFloat($(this).find('td').eq(2).text());
            const interes = parseFloat($(this).find('td').eq(3).text());
            const cuota = parseFloat($(this).find('td').eq(4).text());
            const saldoRestante = parseFloat($(this).find('td').eq(5).text());
            const periodo = contador; // Asignar el valor del contador como periodo
        
            // Insertar los datos en la base de datos
            $.ajax({
            method: 'POST',
            url: 'crud.php',
            data: {
                opcion:9,
                periodo: periodo,
                id_prestamo: id_prestamo,
                fecha: fecha,
                capital: capital,
                seguro: seguro,
                interes: interes,
                cuota: cuota,
                saldo: saldoRestante
            },
            success: function(data) {
                console.log('Datos insertados en la base de datos');
            },
            error: function(error) {
                console.log(error);
            }
            });
            contador++; // Incrementar el contador en cada iteración
        });
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
  