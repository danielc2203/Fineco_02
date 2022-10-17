<?php
include('../global/sesiones.php');
include('../global/conexion.php');

$sentenciaSQL=$pdo->prepare("SELECT count(*) totalClientes FROM `clientes`");
$sentenciaSQL->execute();
$registro = $sentenciaSQL->fetch(PDO::FETCH_ASSOC);

$totalClientes=$registro['totalClientes'];

?>