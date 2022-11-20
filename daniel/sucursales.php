<?php
	// session_start();
	// $request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	// $rol_id = ($_SESSION['usuario']['id']);
	// $id_banco = 1;

    //echo '<script> alert($opcion)</script>';


include_once '../global/conexiond.php';
//include_once "global/conexiond.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();
$data = "";

$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$num_cuenta = (isset($_POST['num_cuenta'])) ? $_POST['num_cuenta'] : '';
$tipo_cuenta = (isset($_POST['tipo_cuenta'])) ? $_POST['tipo_cuenta'] : '';
$estado_cuenta = (isset($_POST['estado_cuenta'])) ? $_POST['estado_cuenta'] : '';
$contacto_cuenta = (isset($_POST['contacto_cuenta'])) ? $_POST['contacto_cuenta'] : '';
$nologo_bancombre = (isset($_POST['logo_banco'])) ? $_POST['logo_banco'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

//echo $nombre;

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
        echo '<script>alert("Daniel" $nombre)</script>';
        $id = $request['id'];
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