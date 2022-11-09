<?php
if(isset($_POST["btnLogin"])){


    include('global/conexiond.php');
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    

    $txtEmail=($_POST['txtEmail']);
    $txtPassword=($_POST['txtPassword']);

    $clave = MD5($txtPassword);

    $sentenciaSQL=$conexion->prepare("SELECT * FROM usuarios
    WHERE correo=:correo
    AND password=:password");
    
    $sentenciaSQL->bindParam("correo", $txtEmail,PDO::PARAM_STR);
    $sentenciaSQL->bindParam("password", $clave,PDO::PARAM_STR);
    $sentenciaSQL->execute();

    $registro = $sentenciaSQL->fetch(PDO::FETCH_ASSOC);
    //print_r($registro);
    //print_r($clave);

    $numeroRegistros=$sentenciaSQL->rowCount();

    if($numeroRegistros>=1){

    session_start();
    $_SESSION['usuario']=$registro;

        echo "Bienvenido.....";
        header('Location:/F_inicio/index.php');

    }else{
        echo "No se encuentran registros";
    }
}
?>