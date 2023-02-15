//submit para Actualización de
$('#fCalculadora').submit(function(e){                        
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página

    $opcion = 1;
    cedula = $.trim($('#F_cedula').val());
    capacidad = $.trim($('#F_capacidad').val());
    plazo = $.trim($('#F_plazo').val());
    fecha = $.trim($('#F_fecha').val());
    monto = $.trim($('#F_montoCredito').val());
    estado = $.trim($('#F_estado').val());

    if (!!cedula && !!monto && !!plazo){
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
                $(function() {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'el credito ha sido guardado exitosamente...',
                        showConfirmButton: false,
                        timer: 2000,
                        willClose: () => {
                            window.location.reload()
                          }
                      })
                  });
            }
          });
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Los campos son obligatorios',
            showConfirmButton: false,
            
          })
    };
    

});
