$(document).ready(function() {
    var id, opcion;
    opcion = 4;
    
    $(document).ready(function () {
        $('#clientes').DataTable;
    });
    
    tablaUsuarios = $('#clientes').DataTable({

        language: {
            lengthMenu: 'Display _MENU_ records per page',
            zeroRecords: 'Nothing found - sorry',
            info: 'Showing page _PAGE_ of _PAGES_',
            infoEmpty: 'No records available',
            infoFiltered: '(filtered from _MAX_ total records)',
            search: "Buscar:",
            Copy: "Copiar",
        },

        "dom": 'lBfrtip',
            buttons: {
                buttons: ["copy", "csv", "excel", "pdf", "print"],                
            },

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
            {"data": "tipo_documento"},
            {"data": "num_documento"},
            {"data": "correo_electronico"},
            {"data": "telefono"},
            {"data": "estado"},
            {"data": "ocupacion"},
            {"data": "empresa"},
            //{"data": "fecha_incorporacion"},
            
            // {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>Borrar</i></button></div></div>"}
            {"defaultContent": "<a class='btn btn-outline-success btn-sm openVer'><i class='fas fa-eye'></i></a>"},
            {"defaultContent": "<a class='btn btn-outline-warning btn-sm btnEditar'><i class='fas fa-edit'></i></a>"},
            {"defaultContent": "<a class='btn btn-outline-danger btn-sm btnBorrar '><i class='fas fa-eraser'></i></a>"}
    
        ],
        
    })

    
    var fila; //captura la fila, para editar o eliminar

    //submit para el Alta y Actualización
    $('#formModal').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
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
            $.ajax({
              url: "crud.php",
              type: "POST",
              datatype:"json",    
              data:  {id:id, primer_nombre:primer_nombre, segundo_nombre:segundo_nombre, primer_apellido:primer_apellido, segundo_apellido:segundo_apellido ,tipo_documento:tipo_documento, num_documento:num_documento, correo_electronico:correo_electronico, telefono:telefono, estado:estado, ocupacion:ocupacion, empresa:empresa, fecha_incorporacion:fecha_incorporacion ,opcion:opcion},    
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
    
    //Editar        
    $(document).on("click", ".btnEditar", function(){		        
        opcion = 2;//editar
        fila = $(this).closest("tr");	        
        id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID

        primer_nombre = fila.find('td:eq(1)').text();
        segundo_nombre = fila.find('td:eq(2)').text();
        primer_apellido = fila.find('td:eq(3)').text();
        segundo_apellido = fila.find('td:eq(4)').text();
        tdocumento = fila.find('td:eq(5)').text();
        num_documento = fila.find('td:eq(6)').text();
        correo_electronico = fila.find('td:eq(7)').text();
        telefono = fila.find('td:eq(8)').text();
        estado = fila.find('td:eq(9)').text();
        ocupacion = fila.find('td:eq(10)').text();
        empresa = fila.find('td:eq(11)').text();
        fecha_incorporacion = fila.find('td:eq(12)').text();

        $("#primer_nombre").val(primer_nombre);
        $("#segundo_nombre").val(segundo_nombre);
        $("#primer_apellido").val(primer_apellido);
        $("#segundo_apellido").val(segundo_apellido);
        $("#tdocumento").val(tdocumento);
        $("#num_documento").val(num_documento);
        $("#correo_electronico").val(correo_electronico);
        $("#telefono").val(telefono);
        $("#estado").val(estado);
        $("#ocupacion").val(ocupacion);
        $("#empresa").val(empresa);
        $("#fecha_incorporacion").val(fecha_incorporacion);


        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar Usuario");		
        $('#modalCRUD').modal('show');		   
    });
    
    //Borrar
    $(document).on("click", ".btnBorrarss", function(){
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

    //Borrar 2
	$(document).delegate(".btnBorrar", "click", function() {

        fila = $(this);           
        id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;
        nombres = $(this).closest("tr").find('td:eq(1)').text();	// Nombre de Usuario
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

