<?php
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$id = $request['employee_id']; //employee ID we are using it to get the employee record
	
	include_once '../global/conexiond.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();
	
	// Set the DELETE SQL data
	$sql = "DELETE FROM todo_list WHERE id=:id";
	$stmt = $conexion->prepare($sql);
	
	if (!$stmt) {
	  echo "Error preparing statement: " . $conexion->errorInfo()[2];
	  exit();
	}
	
	// Bind the parameter
	$stmt->bindParam(':id', $id);
	
	// Execute the statement
	if ($stmt->execute()) {
	  echo "La tarea ha sido eliminada correctamente.";
	} else {
	  echo "Error: " . $stmt->errorInfo()[2];
	}
	
	// Close the statement and connection after using them
	$stmt = null;
	$conexion = null;
	
?>