<?php
include_once '../global/conexiond.php';
//include_once "global/conexiond.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();


//Variable= si el POST NO ESTA VACIO - ENTONCES $_POST POST = VARIABLE; 
$banco = (isset($_POST['banco'])) ? $_POST['banco'] : '';
$fecha = (isset($_POST['fecha'])) ? $_POST['fecha'] : '';
$descipcion = (isset($_POST['descipcion'])) ? $_POST['descipcion'] : '';
$sucursal = (isset($_POST['sucursal'])) ? $_POST['sucursal'] : '';
$descuento = (isset($_POST['descuento'])) ? $_POST['descuento'] : '';
$valor = (isset($_POST['valor'])) ? $_POST['valor'] : '';
$saldo = (isset($_POST['saldo'])) ? $_POST['saldo'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';


switch($opcion){
    case 1:
        $consulta = "SELECT * FROM movimientos";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;   
    case 2:        
        $consulta = "UPDATE movimientos SET primer_nombre='$pnombre', segundo_nombre='$snombre', primer_apellido='$papellido', segundo_apellido='$sapellido', tipo_documento='$tipo', num_documento='$num_documento', correo_electronico='$correo', telefono='$telefono', estado='$estado', ocupacion='$ocupacion', empresa='$empresa', fecha_incorporacion='$fecha' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT * FROM movimientos WHERE id='$id' ";    
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:        
        $consulta = "DELETE FROM movimientos WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                         
        break;
    case 4:     
        $consulta = "INSERT INTO movimientos (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_documento, num_documento, correo_electronico, telefono, estado, ocupacion, empresa, fecha_incorporacion) 
        VALUES('$pnombre', '$snombre', '$papellido', '$sapellido', '$tipo', '$num_documento', '$correo', '$telefono', '$estado', '$ocupacion','$empresa', '$fecha') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM movimientos ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break; 
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;