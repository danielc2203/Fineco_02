<?php
include('../global/sesiones.php');
include('../global/conexiond.php');
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();


$sentenciaSQL=$conexion->prepare("SELECT * FROM clientes ");
$sentenciaSQL->execute();
$finecoclientes = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);

//$finecoclientes=$registro['finecoclientes'];

?>