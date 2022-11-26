<?php
include('../global/sesiones.php');
include('../global/conexiond.php');
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$sentenciaSQL=$conexion->prepare("SELECT count(*) totalClientes FROM `clientes`");
$sentenciaSQL->execute();
$registro = $sentenciaSQL->fetch(PDO::FETCH_ASSOC);
$totalClientes=$registro['totalClientes'];


//$id_usr = ($_SESSION['usuario']['id']);
//echo ("<script> alert ('$id_usr')</script> ");
$sentenciaSQL=$conexion->prepare("SELECT count(*) totalTareas FROM `todo_list` WHERE id_usr='".$id_usr."' and estado_tarea = 'activa' ");
$sentenciaSQL->execute();
$registro = $sentenciaSQL->fetch(PDO::FETCH_ASSOC);
$totalTareas=$registro['totalTareas'];

?>