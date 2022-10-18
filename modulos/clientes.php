<?php
include('../global/sesiones.php');
include('../global/conexion.php');

$sentenciaSQL=$pdo->prepare("SELECT * FROM clientes ");
$sentenciaSQL->execute();
$finecoclientes = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);

//$finecoclientes=$registro['finecoclientes'];

?>