<?php
if(isset($_POST["btnLogin"])){

    include("global/conexion.php");

    //print_r($_POST['txtEmail']);
    //print_r($_POST['txtPassword']);

    $txtEmail=($_POST['txtEmail']);
    $txtPassword=($_POST['txtPassword']);

    $sentenciaSQL=$pdo->prepare("SELECT * FROM usuarios
    WHERE correo=:correo
    AND password=:password");
    
    $sentenciaSQL->bindParam("correo", $txtEmail,PDO::PARAM_STR);
    $sentenciaSQL->bindParam("password", $txtPassword,PDO::PARAM_STR);
    $sentenciaSQL->execute();

    $registro = $sentenciaSQL->fetch(PDO::FETCH_ASSOC);
    print_r($registro);
    session_start();
    $_SESSION['usuario']=$registro;

    $numeroRegistros=$sentenciaSQL->rowCount();

    if($numeroRegistros>=1){
        echo "Bienvenido.....";
        header('Location:template/VistaPanel.php');
    }else{
        echo "No se encuentran registros";
    }
}
?>