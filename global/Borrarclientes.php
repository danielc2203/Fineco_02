<?php
include ("conexion.php");


$unique=$_POST['deletesend'];


if(isset($_POST['deletesend'])){

// Preparar
$stmt = $pdo->prepare("DELETE FROM clientes WHERE id=$unique ");

//$stmt->bindParam(':pnombre', $pnombre);


// Establecer parámetros
//$pnombre = $pnombreSend;


// Ejecutar Parametros
$stmt->execute();


}

  

?>