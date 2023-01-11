<?php
include_once '../global/conexiond.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$nombres = (isset($_POST['nombres'])) ? $_POST['nombres'] : '';
$apellidos = (isset($_POST['apellidos'])) ? $_POST['apellidos'] : '';
$correo = (isset($_POST['correo'])) ? $_POST['correo'] : '';
$password = (isset($_POST['password'])) ? $_POST['password'] : '';
$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
$rol_id = (isset($_POST['rol_id'])) ? $_POST['rol_id'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';

if ($imagen = (isset($_FILES['imagen'])) ? $_FILES['imagen'] : ''){
    $ruta = "img/";
    $archivo = $ruta . basename($imagen["name"]);
    move_uploaded_file($imagen["tmp_name"], $archivo);
}



switch($opcion){
    case 1:
        $consulta = "INSERT INTO usuarios (nombres, apellidos, correo, password, estado, rol_id, ruta_imagen) VALUES('$nombres', '$apellidos', '$correo', MD5('".$password."'), '$estado', '$rol_id', '$archivo') ";
        //$consulta = "INSERT INTO usuarios (nombres, apellidos, correo, password, estado, rol_id) VALUES('$nombres', '$apellidos', '$correo', MD5('".$password."'), '$estado', '$rol_id') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM usuarios ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;    
    case 2:        
        $consulta = "UPDATE usuarios SET nombres='$nombres', apellidos='$apellidos', correo='$correo', password=MD5('".$password."'), estado='$estado', rol_id='$rol_id', ruta_imagen='$archivo' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT * FROM usuarios WHERE id='$id' ";    
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:        
        $consulta = "DELETE FROM usuarios WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                         
        break;
    case 4:    
        $consulta = "SELECT * FROM usuarios";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;