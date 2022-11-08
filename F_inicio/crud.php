<?php
include_once '../global/conexiond.php';
//include_once "global/conexiond.php";
$objeto = new Conexion();
$conexion = $objeto->Conectar();

//Variable= si el POST NO ESTA VACIO - ENTONCES $_POST POST = VARIABLE; 
$titulo = (isset($_POST['titulo'])) ? $_POST['titulo'] : '';
$descripcion = (isset($_POST['descripcion'])) ? $_POST['descripcion'] : '';
$fecha = (isset($_POST['fecha'])) ? $_POST['fecha'] : '';
$id_usr = (isset($_POST['id_usr'])) ? $_POST['id_usr'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';


switch($opcion){
    case 1:
        $consulta = "INSERT INTO todo_list (titulo, descripcion, fecha, id_usr) 
        VALUES('$titulo', '$descripcion', '$fecha', '$id_usr') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM todo_list ORDER BY id DESC";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;    
    case 2:
        $consulta = "UPDATE todo_list SET titulo='$titulo', descripcion='$descripcion', fecha='$fecha', id_usr='$id_usr' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT * FROM todo_list WHERE id='$id' ";    
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:        
        $consulta = "DELETE FROM todo_list WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                         
        break;
    case 4:    
        $consulta = "SELECT * FROM todo_list";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;