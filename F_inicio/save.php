<?php
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$titulo = $request['titulo']; //get the date of birth from collected data above
	$descripcion = $request['descripcion']; //get the date of birth from collected data above
	$fecha = $request['fecha'];
	$fecha_asigando = $request['fecha_asigando'];
	$estado_tarea = $request['estado_tarea'];
	$id_usr = $request['id_usr'];
	
	include_once '../global/conexiond.php';
	$objeto = new Conexion();
	$conexion = $objeto->Conectar();
	
	// Set the INSERT SQL data
	$sql = "INSERT INTO todo_list (titulo, descripcion, fecha, id_usr, fecha_asigando, estado_tarea)
	VALUES (:titulo, :descripcion, :fecha, :id_usr, :fecha_asigando, :estado_tarea)";
	
	// Prepare the statement
	$stmt = $conexion->prepare($sql);
	
	// Bind the parameters
	$stmt->bindParam(':titulo', $titulo);
	$stmt->bindParam(':descripcion', $descripcion);
	$stmt->bindParam(':fecha', $fecha);
	$stmt->bindParam(':id_usr', $id_usr);
	$stmt->bindParam(':fecha_asigando', $fecha_asigando);
	$stmt->bindParam(':estado_tarea', $estado_tarea);
	
	// Execute the statement
	if ($stmt->execute()) {
	  echo "Employee has been created.";
	} else {
	  echo "Error: " . $stmt->errorInfo()[2];
	}
	
	// Close the connection after using it
	$conexion = null;
	echo json_encode($row);
	header('Location:index.php');
	
?>