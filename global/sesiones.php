<?php
session_start();
if(!isset($_SESSION['usuario'])){
    header('Location:../index.php');
}else{
    //print_r($_SESSION['usuario']);
    $nombres = ($_SESSION['usuario']['nombres']);
    $apellidos = ($_SESSION['usuario']['apellidos']);
    $usuariod= $nombres." ".$apellidos;
    //print_r($nombres);

}
?>