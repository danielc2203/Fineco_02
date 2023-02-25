<?php
include_once '../global/conexiond.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$tabla = (isset($_POST['tabla'])) ? $_POST['tabla'] : '';
//$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
//$id = (isset($_POST['formData']['id'])) ? $_POST['formData']['id'] : '';


$data = array();
foreach($_POST as $key => $value) {
if ($key !== 'formData'
 && $key !== 'opcion'
 && $key !== 'tabla'
 && $key !== 'id_usr'
 && $key !== 'estado_tarea') { //Estas las toma como columnas
$data[$key] = $value;
}
};

$set = array();
foreach ($data as $key => $value) {
$set[] = "$key='$value'";
};



switch($opcion){
    case 0:
        $columns = implode(", ", array_keys($data));
        $values = implode("', '", array_values($data));
        $consulta = "INSERT INTO $tabla ($columns) VALUES('$values') ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
    
        $consulta = "SELECT * FROM $tabla ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;
    case 1: // Consulta para traer información de las columnas de la tabla
        $tabla = $_POST['tabla'];
        $resultado = $conexion->prepare("SHOW COLUMNS FROM " . $tabla);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 2:              
      //$consulta = "UPDATE $tabla SET nombre='$nombre' WHERE id='$id' ";
        $consulta = "UPDATE $tabla SET " . implode(',', $set) . " WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT * FROM $tabla WHERE id='$id' "; 
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:        
        $consulta = "DELETE FROM $tabla WHERE id='$id'";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 4:    
        $consulta = "SELECT * FROM $tabla";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 5:    
        $consulta = "SELECT * FROM $tabla WHERE id='$id'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;