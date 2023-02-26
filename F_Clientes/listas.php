<?php
include_once '../global/conexiond.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$tabla = (isset($_POST['tabla'])) ? $_POST['tabla'] : '';
//$nombre = (isset($_POST['nombre'])) ? $_POST['nombre'] : '';
$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$id = (isset($_POST['id'])) ? $_POST['id'] : '';
//$id = (isset($_POST['formData']['id'])) ? $_POST['formData']['id'] : '';


$data = array();
foreach($_POST as $key => $value) {
if ($key !== 'formData'
 && $key !== 'opcion'
 && $key !== 'tabla'
 && $key !== 'id_usr'
 && $key !== 'estado_tarea') { //Estas las toma como columnas
$data[$key] = $value;
}
};

$set = array();
foreach ($data as $key => $value) {
$set[] = "$key='$value'";
};



switch($opcion){
    case 1: // Select all rows from a table
        $tabla = $_POST['tabla'];
        $consulta = "SELECT * FROM $tabla";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        print json_encode($data, JSON_UNESCAPED_UNICODE);
        break;
}

$conexion=null;