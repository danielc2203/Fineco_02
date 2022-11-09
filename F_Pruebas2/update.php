<?php
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$id = $request['id']; //employee ID we are using it to get the employee record
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

	// Set the UPDATE SQL data
	$sql = "UPDATE todo_list SET titulo='".$titulo."', descripcion='".$descripcion."', fecha='".$fecha."', id_usr='".$id_usr."' WHERE id='".$id."'";

	// Process the query so that we will save the date of birth
	if ($mysqli->query($sql)) {
	  echo "Employee has been updated.";
	} else {
	  echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

	// Close the connection after using it
	$mysqli->close();
?>