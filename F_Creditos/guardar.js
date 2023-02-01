//submit para Actualización
$('#fCalculadora').submit(function(e){                        
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
  
    $opcion = 1;
    cedula = $.trim($('#cedula').val());
    capacidad = $.trim($('#capacidad').val());
    plazo = $.trim($('#plazo').val());
    fecha = $.trim($('#fecha').val());
    monto = $.trim($('#montoCredito').val());
    estado = $.trim($('#estado').val());

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

//submit para actualizarCredito
$('#actualizarCredito').submit(function(e){                        
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'el credito ha sido guardado exitosamentesssss...',
        showConfirmButton: false,
        timer: 2000,
        willClose: () => {
            //window.location.reload()
          }
      })


    // cedula = $.trim($('#cedula').val());
    // capacidad = $.trim($('#capacidad').val());
    // plazo = $.trim($('#plazo').val());
    // fecha = $.trim($('#fecha').val());
    // monto = $.trim($('#monto').val());
    // estado = $.trim($('#estado').val());

    //     $.ajax({
    //       url: "crud.php",
    //       type: "POST",
    //       datatype:"json",    
    //       data:  {cedula:cedula,
    //             capacidad:capacidad,
    //             plazo:plazo,
    //             fecha:fecha,
    //             monto:monto,
    //             estado:estado,
    //             opcion:opcion},    
    //       success: function(data) {
    //       }
    //     });


});