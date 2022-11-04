<?php
	//incluimos las funciones
	include 'function.php';

	if(isset($_POST['backup'])){
		//Obtenemos las credenciales via Post
		$server = $_POST['server'];
		$username = $_POST['username'];
		$password = $_POST['password'];
		$dbname = $_POST['dbname'];

		//backup usando las funciones
		backDb($server, $username, $password, $dbname);

		exit();	
	}
	else{
		echo 'Rellena las credenciales de la base de datos';
	}

?>