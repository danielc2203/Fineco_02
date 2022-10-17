<?php
if(isset($_POST["btnLogin"])){

    include("global/conexion.php");

    $txtEmail=($_POST['txtEmail']);
    $txtPassword=($_POST['txtPassword']);

    $sentenciaSQL=$pdo->prepare("SELECT * FROM usuario WHERE email=:correo AND password=:password");
    
}
?>