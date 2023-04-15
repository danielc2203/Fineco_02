<?php
include_once '../global/conexiond.php';
//include_once "global/conexiond.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();
$data = "";
$opcion = 4;

//Variable= si el POST NO ESTA VACIO - ENTONCES $_POST POST = VARIABLE; 
$id_documento = (isset($_POST['cedula'])) ? $_POST['cedula'] : '';
$pagaduria = (isset($_POST['pagaduria'])) ? $_POST['pagaduria'] : '';
$ingresos = (isset($_POST['ingresos'])) ? $_POST['ingresos'] : '';
$gastos = (isset($_POST['gastos'])) ? $_POST['gastos'] : '';
$capacidad = (isset($_POST['capacidad'])) ? $_POST['capacidad'] : '';
$monto_solicitado = (isset($_POST['monto'])) ? $_POST['monto'] : '';
$plazo = (isset($_POST['plazo'])) ? $_POST['plazo'] : '';
$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
$asesor = (isset($_POST['asesor'])) ? $_POST['asesor'] : '';
$fecha_solicitud = (isset($_POST['fecha'])) ? $_POST['fecha'] : '';


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';


switch($opcion){
    case 1:
        $consulta = "INSERT INTO creditos (id_documento, pagaduria, ingresos, gastos, monto_solicitado, plazo, capacidad, asesor, fecha_solicitud, estado)
                     VALUES('$id_documento', '$pagaduria', '$ingresos', '$gastos', '$monto_solicitado', '$plazo', '$capacidad', '$asesor', '$fecha_solicitud', '$estado') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM creditos ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;
    case 2:
         $consulta = "UPDATE creditos SET monto='$monto',
                                        plazo='$plazo',
                                        capacidad='$capacidad',
                                        estado='$estado'
                                        WHERE id='$id' ";	
         $resultado = $conexion->prepare($consulta);
         $resultado->execute();
        break;
    case 3:        
        $consulta = "DELETE FROM creditos WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                         
        break;
    case 4:    
        $consulta = "SELECT * FROM creditos";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 5:
        $consulta = "SELECT * FROM creditos WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 6: // Busqueda de Cedula en BD
        $consulta = "SELECT * FROM clientes WHERE num_documento ='$id_documento' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;
