<?php
include ("conexion.php");

extract($_POST);


if(isset($_POST['pnombreSend']) && isset($_POST['snombreSend'])
 && isset($_POST['papellidoSend']) && isset($_POST['sapellidoSend'])){

// Preparar
$stmt = $pdo->prepare("INSERT INTO clientes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, tipo_documento, num_documento)
 VALUES (:pnombre, :snombre, :papellido, :sapellido, :tipodocumento, :num_documento)");

$stmt->bindParam(':pnombre', $pnombre);
$stmt->bindParam(':snombre', $snombre);
$stmt->bindParam(':papellido', $papellido);
$stmt->bindParam(':sapellido', $sapellido);
$stmt->bindParam(':tipodocumento', $tipodocumento);
$stmt->bindParam(':num_documento', $num_documento);



// Establecer parámetros
$pnombre = $pnombreSend;
$snombre = $snombreSend;
$papellido = $papellidoSend;
$sapellido = $sapellidoSend;
$tipodocumento = $tipodocumentoSend;
$num_documento = $numerodocumentoSend;


// Ejecutar Parametros
$stmt->execute();

// Mensaje de éxito en la inserción
echo "Se han creado las entradas exitosamente";

// Cerrar conexiones
$db = null;
 }



?>