<?php
include_once '../global/conexiond.php';
//include_once "global/conexiond.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();
$data = "";
$opcion = 4;

//Variable= si el POST NO ESTA VACIO - ENTONCES $_POST POST = VARIABLE; 
$id_documento = (isset($_POST['id_documento'])) ? $_POST['id_documento'] : '';
$solicitud_credito = (isset($_POST['solicitud_credito'])) ? $_POST['solicitud_credito'] : '';
$monto = (isset($_POST['monto'])) ? $_POST['monto'] : '';
$plazo = (isset($_POST['plazo'])) ? $_POST['plazo'] : '';
$amortizacion = (isset($_POST['amortizacion'])) ? $_POST['amortizacion'] : '';
$tipo_credito = (isset($_POST['tipo_credito'])) ? $_POST['tipo_credito'] : '';
$deudas_actuales = (isset($_POST['deudas_actuales'])) ? $_POST['deudas_actuales'] : '';
$egresos = (isset($_POST['egresos'])) ? $_POST['egresos'] : '';
$datacreditos = (isset($_POST['datacreditos'])) ? $_POST['datacreditos'] : '';
$capacidad_endeudamiento = (isset($_POST['capacidad_endeudamiento'])) ? $_POST['capacidad_endeudamiento'] : '';
$calificacion_interna = (isset($_POST['calificacion_interna'])) ? $_POST['calificacion_interna'] : '';
$tasa = (isset($_POST['tasa'])) ? $_POST['tasa'] : '';
$resultado = (isset($_POST['resultado'])) ? $_POST['resultado'] : '';
$cuota_mensual = (isset($_POST['cuota_mensual'])) ? $_POST['cuota_mensual'] : '';
$intereses_anticipados = (isset($_POST['intereses_anticipados'])) ? $_POST['intereses_anticipados'] : '';
$seguro = (isset($_POST['seguro'])) ? $_POST['seguro'] : '';
$asesoria = (isset($_POST['asesoria'])) ? $_POST['asesoria'] : '';
$iva = (isset($_POST['iva'])) ? $_POST['iva'] : '';
$comentarios = (isset($_POST['comentarios'])) ? $_POST['comentarios'] : '';
$fecha_solicitud = (isset($_POST['fecha_solicitud'])) ? $_POST['fecha_solicitud'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';


switch($opcion){
    case 1:
        $consulta = "INSERT INTO creditos (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_documento, num_documento, correo_electronico, telefono, estado, ocupacion, empresa, fecha_incorporacion, fecha_nacimiento, direccion_residencia, pais, departamento, ciudad, estrato, sexo, ingreso_mensual, salud, foto_cedula)
                     VALUES('$pnombre', '$snombre', '$papellido', '$sapellido', '$tipo_documento', '$num_documento', '$correo_electronico', '$telefono', '$estado', '$ocupacion', '$empresa', '$fecha_incorporacion', '$fecha_nacimiento', '$direccion_residencia', '$pais', '$departamento', '$ciudad', '$estrato', '$sexo', '$ingreso_mensual', '$salud', '$foto_cedula') ";
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
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;