<?php
include_once '../global/conexiond.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$tabla = (isset($_POST['tabla'])) ? $_POST['tabla'] : '';
$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';


if ($imagen = (isset($_FILES['imagen'])) ? $_FILES['imagen'] : ''){
    $ruta = "img/";
    $archivo = $ruta . basename($imagen["name"]);
    move_uploaded_file($imagen["tmp_name"], $archivo);
} else {
    $imagen = "img/avatar.jpg";
}


switch($opcion){
    case 1:
        $consulta = "INSERT INTO $tabla (nombre) VALUES('$nombre') ";
        //$consulta = "INSERT INTO usuarios (nombres, apellidos, correo, password, estado, rol_id) VALUES('$nombres', '$apellidos', '$correo', MD5('".$password."'), '$estado', '$rol_id') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM $tabla ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
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