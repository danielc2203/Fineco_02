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
        $consulta = "SELECT * FROM creditos WHERE num_documento ='$id_documento' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 7:              
        //$consulta = "UPDATE $tabla SET nombre='$nombre' WHERE id='$id' ";
            $consulta = "UPDATE creditos SET " . implode(',', $set) . " WHERE id='$id' ";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();        
            $consulta = "SELECT * FROM creditos WHERE id='$id' "; 
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;
