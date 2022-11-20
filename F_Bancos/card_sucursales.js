$(document).ready(function() {
    var id, opcion;
    opcion = 4;

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


	            });
            } else {
				html += '<div class="alert alert-warning">';
				html += 'No records found!';
            }

            // Insert the HTML Template and display all employee records
			$("#contenido_sucursales").html(html);
        }
    });
    



    //     "columns":[
    //         {"data": "id"},
    //         {"data": "fecha"},
    //         {"data": "descripcion"},
    //         {"data": "sucursal"},
    //         {"data": "dcto"}, 
    //         {"data": "valor"},
    //         {"data": "saldo"},
    //         //{"data": "id_banco"},

    //         // {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>Borrar</i></button></div></div>"}
    //         // {"defaultContent": "<a class='btn btn-outline-success openVer'><i class='fas fa-eye'></i></a>"}
            
    
    //     ],
        
    // })

    
    var fila; //captura la fila, para editar o eliminar

    //submit para el Alta y Actualización
    $('#formModal').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        fecha = $.trim($('#fecha').val());
        descripcion = $.trim($('#descripcion').val());    
        sucursal = $.trim($('#sucursal').val());    
        dcto = $.trim($('#dcto').val());
        valor = $.trim($('#valor').val());
        saldo = $.trim($('#saldo').val());
        id_banco = $.trim($('#id_banco').val());
                      
            $.ajax({
              url: "crud.php",
              type: "POST",
              datatype:"json",    
              data:  {id:id, fecha:fecha, descripcion:descripcion, sucursal:sucursal, dcto:dcto, valor:valor, saldo:saldo, id_banco:id_banco, opcion:opcion},    
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
        opcion = 4; //alta           
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

        fecha = fila.find('td:eq(1)').text();
        descripcion = fila.find('td:eq(2)').text();
        sucursal = fila.find('td:eq(3)').text();
        dcto = fila.find('td:eq(4)').text();
        tdocumento = fila.find('td:eq(5)').text();
        saldo = fila.find('td:eq(6)').text();
        id_banco = fila.find('td:eq(7)').text();


        $("#fecha").val(fecha);
        $("#descripcion").val(descripcion);
        $("#sucursal").val(sucursal);
        $("#dcto").val(dcto);
        $("#tdocumento").val(tdocumento);
        $("#saldo").val(saldo);
        $("#id_banco").val(id_banco);


        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar Usuario");		
        $('#modalCRUD').modal('show');		   
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
    
    