// Inicializar DataTables
$(document).ready(function() {
    $('#tabla-amortizacion').DataTable();
});

// Obtener los datos del formulario y validarlos
$("#calcular-amortizacion").click(function(e){
    e.preventDefault();
    var montoPrestamo = document.getElementById("monto-prestamo").value;
    var interesAnual = document.getElementById("interes-anual").value;
    var plazoPrestamo = document.getElementById("plazo-prestamo").value;

    // Validar los datos del formulario
    if(!montoPrestamo || !interesAnual || !plazoPrestamo){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe ingresar todos los datos del formulario.'
        });
        return;
    }

    // Enviar los datos del formulario al servidor mediante AJAX
    var formData = new FormData();
    formData.append("monto-prestamo", montoPrestamo);
    formData.append("interes-anual", interesAnual);
    formData.append("plazo-prestamo", plazoPrestamo);

    $.ajax({
        type: 'POST',
        url: 'amortiza.php',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response){
            var amortizacion = JSON.parse(response);
            if(amortizacion.length > 0){
                // Limpiar la tabla
                $("#tabla-amortizacion-body").empty();

                // Añadir los datos a la tabla
                for (var i = 0; i < amortizacion.length; i++) {
                    var fila = $("<tr />");
                    $("#tabla-amortizacion-body").append(fila);
                    fila.append($("<td>" + amortizacion[i].periodo + "</td>"));
                    fila.append($("<td>" + amortizacion[i].fecha + "</td>"));
                    fila.append($("<td>" + accounting.formatMoney(amortizacion[i].cuota) + "</td>"));
                    fila.append($("<td>" + accounting.formatMoney(amortizacion[i].interes) + "</td>"));
                    fila.append($("<td>" + accounting.formatMoney(amortizacion[i].amortizacionCapital) + "</td>"));
                    fila.append($("<td>" + accounting.formatMoney(amortizacion[i].saldo) + "</td>"));
                    }
                    $('#tabla-amortizacion').DataTable();
                    }
                    });
                    });
                    