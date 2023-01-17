<!-- Logica -->
<?php include ('../modulos/panel.php');?>
<?php include ('../recursos/header.php');?>

<link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.css">

<?php include ('../recursos/sidebar.php');?>


<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Simulador de Fineco</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        <div class="card w-75 text-center mx-auto">
        <div class="card-header bg-gradient-primary text-white">
        CONDICIONES DE CRÉDITO-FINECO
        </div>
        <div class="card-body">

        <form id="simulador-credito">
            <label for="monto-prestamo">Monto del Préstamo:</label>
            <input type="text" id="monto-prestamo" name="monto-prestamo">

            <label for="interes-anual">Interés Anual:</label>
            <input type="text" id="interes-anual" name="interes-anual">

            <label for="plazo-prestamo">Plazo del Préstamo (en meses):</label>
            <input type="text" id="plazo-prestamo" name="plazo-prestamo">

            <button type="submit" id="calcular-amortizacion">Calcular</button>
        </form>

        <div id="mensaje-error"></div>

        <table id="tabla-amortizacion">
            <thead>
                <tr>
                    <th>Período</th>
                    <th>Fecha de pago</th>
                    <th>Pago mensual</th>
                    <th>Pago de intereses</th>
                    <th>Pago de amortización</th>
                    <th>Saldo pendiente</th>
                </tr>
            </thead>
            <tbody id="tabla-amortizacion-body"></tbody>
        </table>
      
        

        </div>
        <div class="card-footer text-muted">
        Fineco
        </div>
      </div>

      </div><!-- /.container-fluid -->
    </section>
  </div>

  <script>

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

    // Validacion de los datos
    if (montoPrestamo == "" || interesAnual == "" || plazoPrestamo == "") {
        alert("Debe ingresar todos los datos del formulario");
        return;
    }

    // Realizar la petición AJAX al servidor
    $.ajax({
        type: "POST",
        url: "amortiza.php",
        data: {
            "monto-prestamo": montoPrestamo,
            "interes-anual": interesAnual,
            "plazo-prestamo": plazoPrestamo
        },
        success: function(response) {
            // Procesar la respuesta del servidor
            var amortizacion = JSON.parse(response);

            // Crear tabla de amortizacion
            var tabla = document.getElementById("tabla-amortizacion-body");
            tabla.innerHTML = "";
            for (var i = 0; i < amortizacion.length; i++) {
                var fila = tabla.insertRow();
                var periodo = fila.insertCell(0);
                var fecha = fila.insertCell(1);
                var cuota = fila.insertCell(2);
                var interes = fila.insertCell(3);
                var amortizacionCapital = fila.insertCell(4);
                var saldo = fila.insertCell(5);
                
                periodo.innerHTML = amortizacion[i].periodo;
                fecha.innerHTML = amortizacion[i].fecha;
                cuota.innerHTML = accounting.formatMoney(amortizacion[i].cuota);
                interes.innerHTML = accounting.formatMoney(amortizacion[i].interes);
                amortizacionCapital.
                innerHTML = accounting.formatMoney(amortizacion[i].amortizacionCapital);
                saldo.innerHTML = accounting.formatMoney(amortizacion[i].saldo);
                }
                // Reinicializar DataTables
                $('#tabla-amortizacion').DataTable().destroy();
                $('#tabla-amortizacion').DataTable();
                }
                });
                });


</script>

  <!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script> -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>
<!-- footer -->
<?php include ('../recursos/footer.php') ?>




