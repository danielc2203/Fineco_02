<?php
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$id = $request['employee_id']; //employee ID we are using it to get the employee record

	$servername = "localhost"; //set the servername
	$username = "root"; //set the server username
	$password = ""; // set the server password (you must put password here if your using live server)
	$dbname = "demos"; // set the table name

	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	  exit();
	}

	// Set the DELETE SQL data
	$sql = "DELETE FROM employees WHERE id='".$id."'";

	// Process the query so that we will save the date of birth
	if ($mysqli->query($sql)) {
	  echo "Employee has been deleted.";
	} else {
	  echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

	// Close the connection after using it
	$mysqli->close();
?>