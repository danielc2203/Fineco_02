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
$estado = (isset($_POST['estado'])) ? $_POST['estado'] : '';
$fecha_solicitud = (isset($_POST['fecha'])) ? $_POST['fecha'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';


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
        $consulta = "SELECT * FROM clientes WHERE cedula='$num_documento' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        // Verificar si el usuario existe
        if (mysqli_num_rows($result) == 0) {
            // aca debe regresar si el usuario existe o no en la base de datos
            echo "<script>alert('Usuario no encontrado');</script>";
        } else {
            // El usuario existe, hacer algo aquí
        }
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;
