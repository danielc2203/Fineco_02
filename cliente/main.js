$(document).ready(function() {
var id, opcion;
opcion = 4;

$(document).ready(function () {
    $('#clientes').DataTable();
});

tablaClientes = $('#clientes').DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false,

    "dom": 'Btipr',
		buttons: {
			buttons: ["copy", "csv", "excel", "pdf", "print"]
		},

    "dom": '<"container-fluid"<"row"<"col"B><"col"l><"col"f>>>rtip',

    "ajax":{
        "url": "bd/crud.php",
        "method": 'POST', //usamos el metodo POST
        "data":{opcion:opcion}, //enviamos opcion 4 para que haga un SELECT
        "dataSrc":""
    },
    "columns":[
        {"data": "id"}, // Como esta nombrado en la BD
        {"data": "primer_nombre"},// Como esta nombrado en la BD
        {"data": "segundo_nombre"},
        {"data": "primer_apellido"},
        {"data": "segundo_apellido"},
        {"data": "tipo_documento"},
        // {"data": "num_documento"},
         //{"data": "correo_electronico"},
        // {"data": "telefono"},
        // {"data": "estado"},
        // {"data": "ocupacion"},
        // {"data": "empresa"},
        // {"data": "fecha_incorporacion"},

        {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>Editar</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>Borrar</i></button></div></div>"}
    ],

});

var fila; //captura la fila, para editar o eliminar
//submit para el Alta y Actualización
$('#formClientes').submit(function(e){
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    pnombre = $.trim($('#primer_nombre').val());
    segundo_nombre = $.trim($('#segundo_nombre').val());
    correo = $.trim($('#correo_electronico').val());
        $.ajax({
          url: "bd/crud.php",
          type: "POST",
          datatype:"json",
          data:  {id:id, primer_nombre:pnombre, segundo_nombre:segundo_nombre, correo_electronico:correo ,opcion:opcion},
          success: function(data) {
            tablaClientes.ajax.reload(null, false);
           }
        });
    $('#modalCRUD').modal('hide');
});

//para limpiar los campos antes de dar de Alta a un registro
$("#btnNuevo").click(function(){
    opcion = 1; //alta
    id=null;
    $("#formClientes").trigger("reset");
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
    pnombre = fila.find('td:eq(1)').text(); //Caputamos los valores por el numero de columna
    segundo_nombre = fila.find('td:eq(2)').text();
    primer_apellido = fila.find('td:eq(3)').text();
    segundo_apellido = fila.find('td:eq(4)').text();
    tipo_documento = fila.find('td:eq(5)').text();
    // num_documento = fila.find('td:eq(6)').text();
    // correo = fila.find('td:eq(7)').text();
    // telefono = fila.find('td:eq(8)').text();
    // estado = fila.find('td:eq(9)').text();
    // ocupacion = fila.find('td:eq(10)').text();
    // empresa = fila.find('td:eq(11)').text();
    // fecha_incorporacion = fila.find('td:eq(12)').text();
    $("#primer_nombre").val(pnombre);
    $("#segundo_nombre").val(segundo_nombre);
    $("#primer_apellido").val(primer_apellido);
    $("#segundo_apellido").val(segundo_apellido);
    $("#tipo_documento").val(tipo_documento);
    // $("#num_documento").val(num_documento);
     //$("#correo_electronico").val(correo);
    // $("#telefono").val(telefono);
    // $("#estado").val(estado);
    // $("#ocupacion").val(ocupacion);
    // $("#empresa").val(empresa);
    // $("#fecha_incorporacion").val(fecha_incorporacion);

    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white" );
    $(".modal-title").text("Editar Cliente");
    $('#modalCRUD').modal('show');
});

//Borrar
$(document).on("click", ".btnBorrar", function(){
    fila = $(this);
    id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;
    pnombre = $(this).closest("tr").find('td:eq(1)').text();	// Nombre de Usuario
    opcion = 3; //eliminar
    var respuesta = confirm("¿Está seguro de borrar el registro " +id+ " del usuario " +pnombre+"?");
    if (respuesta) {
        $.ajax({
          url: "bd/crud.php",
          type: "POST",
          datatype:"json",
          data:  {opcion:opcion, id:id},
          success: function() {
            tablaClientes.row(fila.parents('tr')).remove().draw();
           }
        });
    }
 });

});

