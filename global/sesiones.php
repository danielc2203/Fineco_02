<?php
session_start();
if(!isset($_SESSION['usuario'])){
    header('Location:../F_inicio/index.php');
}else{
    //print_r($_SESSION['usuario']);
    $id_usr = ($_SESSION['usuario']['id']);
    $nombres = ($_SESSION['usuario']['nombres']);
    $apellidos = ($_SESSION['usuario']['apellidos']);
    $usuariof= $nombres." ".$apellidos;
    $rol = ($_SESSION['usuario']['rol_id']);

    //echo '<script type="text/javascript">alert("Su rol desde session es: ' . $rol . ' y su nombre es ' . $nombres . ' ");</script>';
}
?>