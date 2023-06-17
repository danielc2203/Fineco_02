<?php
	$request = $_REQUEST; // PHP Super Global variable which is used to collect data after submitting it from the form
	$id = $request['id'];
	$titulo = $request['titulo'];
	$descripcion = $request['descripcion'];
	$fecha = $request['fecha'];
	$id_usr = $request['id_usr'];
	$estado_tarea = $request['estado_tarea'];
	
	include_once '../global/conexiond.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();
	
	// Prepare the UPDATE SQL statement
	$sql = "UPDATE todo_list SET titulo=?, descripcion=?, fecha=?, id_usr=?, estado_tarea=? WHERE id=?";
	$stmt = $conexion->prepare($sql);
	
	if (!$stmt) {
	  echo "Error preparing statement: " . $conexion->errorInfo()[2];
	  exit();
	}
	
	// Bind the parameters
	$stmt->bindParam(1, $titulo);
	$stmt->bindParam(2, $descripcion);
	$stmt->bindParam(3, $fecha);
	$stmt->bindParam(4, $id_usr);
	$stmt->bindParam(5, $estado_tarea);
	$stmt->bindParam(6, $id);
	
	// Execute the statement
	if ($stmt->execute()) {
	  echo "Su tarea ha sido actualizada correctamente.";
	} else {
	  echo "Error: " . $stmt->errorInfo()[2];
	}
	
	// Close the statement and connection after using them
	$stmt = null;
	$conexion = null;
	
	
	
?>