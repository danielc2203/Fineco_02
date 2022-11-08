<?php

include_once '../global/conexiond.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();


$consulta = "SELECT * FROM grupo_usuarios";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $grupo=$resultado->fetchAll();

    foreach ($grupo as $valores):
    echo '<option value="'.$valores["id"].'">'.$valores["nombre_grupo"].'</option>';
    endforeach;

?>

