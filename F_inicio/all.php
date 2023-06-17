<?php
	session_start();
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$rol_id = ($_SESSION['usuario']['id']);
	//echo $rol_id;
	
	include_once '../global/conexiond.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();


	$sql = "SELECT * FROM todo_list WHERE id_usr='".$rol_id."' ORDER BY id DESC";

	$results = $conexion->query($sql);

	$row = $results->fetchAll(PDO::FETCH_ASSOC);

	$conexion = null; // Cierra la conexión estableciendo la variable a null

	echo json_encode($row);

?>