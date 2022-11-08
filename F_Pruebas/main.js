$(document).ready(function() {
    var id, opcion;
    opcion = 4;
    
    $(document).ready(function () {
        $('#usuariosf').DataTable();
    });
    
    tablaUsuarios = $('#usuariosf').DataTable({  
        "responsive": false, "lengthChange": false, "autoWidth": false,
        
    
        "dom": '<"container-fluid"<"row"<"col"B><"col"l><"col"f>>>rtip',
    
        "ajax":{            
            "url": "crud.php", 
            "method": 'POST', //usamos el metodo POST
            "data":{opcion:opcion}, //enviamos opcion 4 para que haga un SELECT
            "dataSrc":""
        },
        "columns":[
            {"data": "id"},
            {"data": "titulo"},
            {"data": "descripcion"},
            {"data": "fecha"},
            {"data": "id_usr"}, 
            // {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>Borrar</i></button></div></div>"}
            {"defaultContent": "<a class='btn btn-outline-secondary openVer disabled'><i class='fas fa-eye'></i></a>"},
            {"defaultContent": "<a class='btn btn-outline-warning btnEditar'><i class='fas fa-edit'></i></a>"},
            {"defaultContent": "<a class='btn btn-outline-danger btnBorrar '><i class='fas fa-eraser'></i></a>"}
    
        ],
        
    });
    
    
    var fila; //captura la fila, para editar o eliminar
    //submit para el Alta y Actualización
    $('#formUsuarios').submit(function(e){                         
        e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
        titulo = $.trim($('#titulo').val());
        apellidos = $.trim($('#apellidos').val());    
        correo = $.trim($('#correo').val());    
        password = $.trim($('#password').val());
        estado = $.trim($('#estado').val());
        rol_id = $.trim($('#rol_id').val());       
        $.ajax({
              url: "crud.php",
              type: "POST",
              datatype:"json",    
              data:  {id:id, titulo:titulo, apellidos:apellidos, correo:correo, password:password ,estado:estado, rol_id:rol_id ,opcion:opcion},    
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
        $("#formUsuarios").trigger("reset");
        $(".modal-header").css( "background-color", "#17a2b8");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").text("Alta de Usuario");
        $('#modalCRUD').modal('show');
    });
    
    //Editar        
    $(document).on("click", ".btnEditar", function(){		        
        opcion = 2;//editar
        fila = $(this).closest("tr");	        
        id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
        titulo = fila.find('td:eq(1)').text();
        apellidos = fila.find('td:eq(2)').text();
        correo = fila.find('td:eq(3)').text();
        password = "Fineco";
        estado = fila.find('td:eq(4)').text();
        rol_id = fila.find('td:eq(5)').text();
        $("#titulo").val(titulo);
        $("#apellidos").val(apellidos);
        $("#correo").val(correo);
        $("#password").val(password);
        $("#estado").val(estado);
        $("#rol_id").val(rol_id);
        $(".modal-header").css("background-color", "#007bff");
        $(".modal-header").css("color", "white" );
        $(".modal-title").text("Editar Usuario");		
        $('#modalCRUD').modal('show');		   
    });
    
    //Borrar
    $(document).on("click", ".btnBorrar", function(){
        fila = $(this);           
        id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;
        titulo = $(this).closest("tr").find('td:eq(1)').text();	// Nombre de Usuario
        opcion = 3; //eliminar        
        var respuesta = confirm("¿Está seguro de borrar el registro " +id+ " del usuario " +titulo+"?");                
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
    