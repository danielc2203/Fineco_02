<?php
include('../global/sesiones.php');
include('../global/conexiond.php');
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$sentenciaSQL=$conexion->prepare("SELECT count(*) totalClientes FROM `clientes`");
$sentenciaSQL->execute();
$registro = $sentenciaSQL->fetch(PDO::FETCH_ASSOC);

$totalClientes=$registro['totalClientes'];

?>