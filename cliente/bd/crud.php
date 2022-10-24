<?php
include_once 'conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$pnombre = (isset($_POST['primer_nombre'])) ? $_POST['primer_nombre'] : '';
$segundo_nombre = (isset($_POST['segundo_nombre']))? $_POST['segundo_nombre'] : '';
$primer_apellido = (isset($_POST['primer_apellido']))? $_POST['primer_apellido'] : '';
$segundo_apellido = (isset($_POST['segundo_apellido']))? $_POST['segundo_apellido'] : '';
$tipo_documento = (isset($_POST['tipo_documento']))? $_POST['tipo_documento'] : '';
$num_documento = (isset($_POST['num_documento']))? $_POST['num_documento'] : '';
$correo = (isset($_POST['correo_electronico'])) ? $_POST['correo_electronico'] : '';
$telefono = (isset($_POST['telefono']))? $_POST['telefono'] : '';
$estado = (isset($_POST['estado']))? $_POST['estado'] : '';
$ocupacion = (isset($_POST['ocupacion']))? $_POST['ocupacion'] : '';
$empresa = (isset($_POST['empresa']))? $_POST['empresa'] : '';
$fecha_incorporacion = (isset($_POST['fecha_incorporacion']))? $_POST['fecha_incorporacion'] : '';


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';


switch($opcion){
    case 1: //Para insertar datos deben estar todas las variables nombradas
        $consulta = "INSERT INTO clientes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_documento, num_documento, correo_electronico, telefono, estado, ocupacion, empresa, fecha_incorporacion) 
        VALUES ('$pnombre', '$segundo_nombre', '$primer_apellido', '$segundo_apellido', '$tipo_documento', '$num_documento', '$correo', '$telefono', '$estado', '$ocupacion', '$empresa', '$fecha_incorporacion') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM clientes ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;    
    case 2: 
        $consulta = "UPDATE clientes SET primer_nombre='$pnombre', segundo_nombre='$segundo_nombre', correo_electronico='$correo' WHERE id='$id' ";	
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT * FROM clientes WHERE id='$id' ";    
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:        
        $consulta = "DELETE FROM clientes WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                         
        break;
    case 4:    
        $consulta = "SELECT * FROM clientes";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;