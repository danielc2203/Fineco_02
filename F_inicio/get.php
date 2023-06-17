<?php
	$request = $_REQUEST; // PHP Super Global variable which is used to collect data after submitting it from the form
	$employeeId = $request['employee_id']; // Define the employee ID
	
	include_once '../global/conexiond.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();
	
	// Set the SELECT SQL data
	$sql = "SELECT * FROM todo_list WHERE id=:employeeId";
	$query = $conexion->prepare($sql);
	$query->bindParam(':employeeId', $employeeId);
	$query->execute();
	
	// Fetch Associative array
	$row = $query->fetch(PDO::FETCH_ASSOC);
	
	// Close the connection after using it
	$conexion = null;
	
	echo json_encode($row);
	
	
?>