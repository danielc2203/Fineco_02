<?php
include_once '../global/conexiond.php';
//include_once "global/conexiond.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();
$data = "";


//Variable= si el POST NO ESTA VACIO - ENTONCES $_POST POST = VARIABLE; 
$pnombre = (isset($_POST['primer_nombre'])) ? $_POST['primer_nombre'] : '';
$snombre = (isset($_POST['segundo_nombre'])) ? $_POST['segundo_nombre'] : '';
$papellido = (isset($_POST['primer_apellido'])) ? $_POST['primer_apellido'] : '';
$sapellido = (isset($_POST['segundo_apellido'])) ? $_POST['segundo_apellido'] : '';
$tipo = (isset($_POST['tipo_documento'])) ? $_POST['tipo_documento'] : '';
$num_documento = (isset($_POST['num_documento'])) ? $_POST['num_documento'] : '';
$correo = (isset($_POST['correo_electronico'])) ? $_POST['correo_electronico'] : '';
$telefono = (isset($_POST['telefono'])) ? $_POST['telefono'] : '';
$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
$ocupacion = (isset($_POST['ocupacion'])) ? $_POST['ocupacion'] : '';
$empresa = (isset($_POST['empresa'])) ? $_POST['empresa'] : '';
$fecha = (isset($_POST['fecha_incorporacion'])) ? $_POST['fecha_incorporacion'] : '';


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';


switch($opcion){
    case 1:
        $consulta = "INSERT INTO clientes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_documento, num_documento, correo_electronico, telefono, estado, ocupacion, empresa, fecha_incorporacion) 
        VALUES('$pnombre', '$snombre', '$papellido', '$sapellido', '$tipo_documento', '$num_documento', '$correo', '$telefono', '$estado', '$ocupacion','$empresa', '$fecha') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM clientes ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;    
    case 2:        
        $consulta = "UPDATE clientes SET primer_nombre='$pnombre', segundo_nombre='$snombre', primer_apellido='$papellido', segundo_apellido='$sapellido', tipo_documento='$tipo', num_documento='$num_documento', correo_electronico='$correo', telefono='$telefono', estado='$estado', ocupacion='$ocupacion', empresa='$empresa', fecha_incorporacion='$fecha' WHERE id='$id' ";		
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