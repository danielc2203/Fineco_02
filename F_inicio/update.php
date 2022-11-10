<?php
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$id = $request['id']; 
	$titulo = $request['titulo']; 
	$descripcion = $request['descripcion']; 
	$fecha = $request['fecha'];
	$id_usr = $request['id_usr'];
	$fecha_asigando = $request['fecha_asigando'];
	$creado_por = $request['creado_por'];
	$estado_tarea = $request['estado_tarea'];

	$servername = "localhost"; //set the servername
	$username = "Fineco2022"; //set the server username
	$password = "Admin2admin"; // set the server password (you must put password here if your using live server)
	$dbname = "finecoApp"; // set the table nameame

	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	  exit();
	}

	// Set the UPDATE SQL data
	$sql = "UPDATE todo_list SET titulo='".$titulo."', descripcion='".$descripcion."', fecha='".$fecha."', id_usr='".$id_usr."', fecha_asigando='".$fecha_asigando."', creado_por='".$creado_por."', estado_tarea='".$estado_tarea."' WHERE id='".$id."'";

	// Process the query so that we will save the date of birth
	if ($mysqli->query($sql)) {
	  echo "Tarea actualizada con exito";
	} else {
	  echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

	// Close the connection after using it
	$mysqli->close();
?>