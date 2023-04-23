<?php
include_once '../global/conexiond.php';
//include_once "global/conexiond.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();
$data = "";
$opcion = 4;

//Variable= si el POST NO ESTA VACIO - ENTONCES $_POST POST = VARIABLE; 
$id_documento = (isset($_POST['cedula'])) ? $_POST['cedula'] : '';
$capacidad = (isset($_POST['capacidad'])) ? $_POST['capacidad'] : '';
$monto = (isset($_POST['monto'])) ? $_POST['monto'] : '';
$plazo = (isset($_POST['plazo'])) ? $_POST['plazo'] : '';
$tipo_credito = (isset($_POST['tipo_credito'])) ? $_POST['tipo_credito'] : '';
$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
$fecha_solicitud = (isset($_POST['fecha'])) ? $_POST['fecha'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';

$data = array();
foreach($_POST as $key => $value) {
if ($key !== 'formData'
 && $key !== 'opcion'
 && $key !== 'tabla'
 && $key !== 'id_usr'
 && $key !== 'estado_tarea') { //Estas las toma como columnas
$data[$key] = $value;
}};

$set = array();
foreach ($data as $key => $value) {
$set[] = "$key='$value'";
};


switch($opcion){
    case 1:
        $consulta = "INSERT INTO creditos (id_documento, monto, plazo, capacidad, fecha_solicitud, estado)
                     VALUES('$id_documento', '$monto', '$plazo', '$capacidad', '$fecha_solicitud', '$estado') ";
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
                                        tipo_credito='$tipo_credito',
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
        //$consulta = "SELECT * FROM creditos";
        $consulta = "SELECT * FROM creditos WHERE estado NOT LIKE '%Sin Cupo%'";
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
        $consulta = "SELECT * FROM creditos WHERE num_documento ='$id_documento' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 7:              
        $consulta = "UPDATE creditos SET " . implode(',', $set) . " WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $consulta = "SELECT * FROM creditos WHERE id='$id' "; 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 8:
        $id_credito = (isset($_POST['id_credito'])) ? $_POST['id_credito'] : '';
        $fecha_inicio = (isset($_POST['fecha_inicio'])) ? $_POST['fecha_inicio'] : '';
        $cuota = (isset($_POST['cuota'])) ? $_POST['cuota'] : '';
        $interes = (isset($_POST['interes'])) ? $_POST['interes'] : '';
        $amortizacion = (isset($_POST['amortizacion'])) ? $_POST['amortizacion'] : '';
        
        //Realizar la inserción en la tabla de amortización
        $consulta = "INSERT INTO tabla_amortizacion (id_credito, fecha_inicio, cuota, interes, amortizacion) VALUES ('$id_credito', '$fecha_inicio', '$cuota', '$interes', '$amortizacion')";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        break;
        
    case 9: // Actualizar la tabla de amortizacion       
        $consulta = "UPDATE tabla_amortizacion SET " . implode(',', $set) . " WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $consulta = "SELECT * FROM tabla_amortizacion WHERE id='$id' "; 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;
