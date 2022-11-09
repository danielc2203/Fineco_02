<?php
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$titulo = $request['titulo']; //get the date of birth from collected data above
	$descripcion = $request['descripcion']; //get the date of birth from collected data above
	$fecha = $request['fecha'];
	$id_usr = $request['id_usr'];

	$servername = "localhost"; //set the servername
	$username = "Fineco2022"; //set the server username
	$password = "Admin2admin"; // set the server password (you must put password here if your using live server)
	$dbname = "finecoapp"; // set the table nameame

	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	  exit();
	}

	// Set the INSERT SQL data
	$sql = "INSERT INTO todo_list (titulo, descripcion, fecha, id_usr)
	VALUES ('".$titulo."', '".$descripcion."', '".$fecha."', '".$id_usr."')";

	// Process the query so that we will save the date of birth
	if ($mysqli->query($sql)) {
	  echo "Employee has been created.";
	} else {
	  return "Error: " . $sql . "<br>" . $mysqli->error;
	}

	// Close the connection after using it
	$mysqli->close();
?>