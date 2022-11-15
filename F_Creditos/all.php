<?php
	session_start();
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$rol_id = ($_SESSION['usuario']['id']);
	//echo $rol_id;
	
	$servername = "localhost"; //set the servername
	$username = "Fineco2022"; //set the server username
	$password = "Admin2admin"; // set the server password (you must put password here if your using live server)
	$dbname = "finecoApp"; // set the table name

	$mysqli = new mysqli($servername, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
	  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	  exit();
	}

	// Set the INSERT SQL data
	//$sql = "SELECT * FROM todo_list ";
	$sql = "SELECT * FROM creditos ";
	//echo $rol_id."ok" ;

	// Process the query so that we will save the date of birth
	$results = $mysqli->query($sql);

	// Fetch Associative array
	$row = $results->fetch_all(MYSQLI_ASSOC);

	// Free result set
	$results->free_result();

	// Close the connection after using it
	$mysqli->close();

	echo json_encode($row);
?>