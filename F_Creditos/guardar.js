$(document).ready(function() {
    $(document).ready(function () {
        $('#creditosp').DataTable;
    });

//submit para Actualización

$('#fCalculadora').submit(function(e){                        
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
  
    $opcion = 1;
    alert($opcion);

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
          data:  {cedula:cedula,
                capacidad:capacidad,
                plazo:plazo,
                fecha:fecha,
                monto:monto,
                estado:estado,
                opcion:opcion},    
          success: function(data) {
            creditosp.ajax.reload(null, false);
           }
        
        });			        
    $('#modalCREDITOS').modal('hide');
    $(function() {
        creditosp.ajax.reload(null, false);
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


});