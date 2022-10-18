<?php
include('../global/sesiones.php');
include('../global/conexion.php');

$sentenciaSQL=$pdo->prepare("SELECT * FROM usuarios ");
$sentenciaSQL->execute();
$finecousuarios = $sentenciaSQL->fetchAll(PDO::FETCH_ASSOC);

//$finecoclientes=$registro['finecoclientes'];

?>