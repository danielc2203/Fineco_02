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
         $consulta = "UPDATE creditos SET primer_nombre='$pnombre',
                                        segundo_nombre='$snombre',
                                        primer_apellido='$papellido',
                                        segundo_apellido='$sapellido',
                                        tipo_documento='$tipo_documento',
                                        num_documento='$num_documento',
                                        correo_electronico='$correo_electronico',
                                        telefono='$telefono',
                                        estado='$estado',
                                        ocupacion='$ocupacion',
                                        empresa='$empresa',
                                        fecha_incorporacion='$fecha_incorporacion',
                                        fecha_nacimiento='$fecha_nacimiento',
                                        direccion_residencia='$direccion_residencia',
                                        pais='$pais',
                                        departamento='$departamento',
                                        ciudad='$ciudad',
                                        estrato='$estrato',
                                        sexo='$sexo',
                                        ingreso_mensual='$ingreso_mensual',
                                        salud='$salud',
                                        foto_cedula='$foto_cedula'
                                        WHERE id='$id' ";	
         $resultado = $conexion->prepare($consulta);
         $resultado->execute();

         $consulta = "SELECT * FROM creditos WHERE id='$id' ";    
         $resultado = $conexion->prepare($consulta);
         $resultado->execute();
         $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
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
    case 5:
        $consulta = "SELECT * FROM creditos WHERE id='$id' ";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;