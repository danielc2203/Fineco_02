<?php
session_start();
if(!isset($_SESSION['usuario'])){
    header('Location:../index.php');
}else{
    print_r($_SESSION['usuario']);
}
?>