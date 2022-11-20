<?php
	session_start();
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$rol_id = ($_SESSION['usuario']['id']);
	$id_banco = 1;
	echo $opcion;


include_once '../global/conexiond.php';
//include_once "global/conexiond.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();
$data = "";



switch($opcion){
    case 1:
        $consulta = "INSERT INTO bancos (nombre, num_cuenta, tipo_cuenta, estado_cuenta, contacto_cuenta, logo_banco) 
        VALUES('$nombre', '$num_cuenta', '$tipo_cuenta', '$estado_cuenta', '$contacto_cuenta', '$logo_banco') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM bancos ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;    
    case 2:        
        $consulta = "UPDATE bancos SET nombre='$nombre', num_cuenta='$num_cuenta', tipo_cuenta='$tipo_cuenta', estado_cuenta='$estado_cuenta', contacto_cuenta='$contacto_cuenta', logo_banco='$logo_banco' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT * FROM bancos WHERE id='$id' ";    
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:        
        $consulta = "DELETE FROM bancos WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                         
        break;
    case 4:    
        $consulta = "SELECT * FROM bancos";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

//print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
echo json_encode($data);

$conexion=null;
?>