<?php
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$id = $request['id']; //employee ID we are using it to get the employee record
	$email = $request['email']; //get the date of birth from collected data above
	$first_name = $request['first_name']; //get the date of birth from collected data above
	$last_name = $request['last_name'];
	$address = $request['address'];

	$servername = "localhost"; //set the servername
	$username = "root"; //set the server username
	$password = ""; // set the server password (you must put password here if your using live server)
	$dbname = "demos"; // set the table name

	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	  exit();
	}

	// Set the UPDATE SQL data
	$sql = "UPDATE employees SET email='".$email."', first_name='".$first_name."', last_name='".$last_name."', address='".$address."' WHERE id='".$id."'";

	// Process the query so that we will save the date of birth
	if ($mysqli->query($sql)) {
	  echo "Employee has been updated.";
	} else {
	  echo "Error: " . $sql . "<br>" . $mysqli->error;
	}

	// Close the connection after using it
	$mysqli->close();
?>