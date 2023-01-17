<?php
    // Validar que se han recibido todos los datos del formulario
    if (isset($_POST['montoPrestamo']) && isset($_POST['interesAnual']) && isset($_POST['plazoPrestamo'])) {
        // Recibir los datos del formulario
        $montoPrestamo = $_POST['montoPrestamo'];
        $interesAnual = $_POST['interesAnual'];
        $plazoPrestamo = $_POST['plazoPrestamo'];

        // Calcular el interés mensual
        $interesMensual = $interesAnual / 12 / 100;
        // Calcular la cuota mensual
        $cuota = $montoPrestamo * $interesMensual / (1 - pow(1 + $interesMensual, -$plazoPrestamo));
        // Inicializar el saldo pendiente
        $saldo = $montoPrestamo;
        // Inicializar la tabla de amortización
        $amortizacion = array();
        // Realizar los cálculos para cada período
        for ($i = 1; $i <= $plazoPrestamo; $i++) {
            // Calcular el interés
            $interes = $saldo * $interesMensual;
            // Calcular la amortización del capital
            $amortizacionCapital = $cuota - $interes;
            // Actualizar el saldo pendiente
            $saldo -= $amortizacionCapital;
            // Agregar el período a la tabla de amortización
            $pago = array(
                "periodo" => $i,
                "fecha" => date('Y-m-d', strtotime("+" . $i . " months")),
                "cuota" => $cuota,
                "interes" => $interes,
                "amortizacionCapital" => $amortizacionCapital,
                "saldo" => $saldo,
            );
            $amortizacion[] = $pago;
        }

    // Devolver la tabla de amortizacion en formato JSON
    echo json_encode($amortizacion);


// Incluir la librería de formateo de números
           ?>;
                    
<script src="https://cdnjs.cloudflare.com/ajax/libs/accounting.js/0.4.1/accounting.min.js"></script>
// Incluir el plugin DataTables

<script src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">
