<?php
//include_once "global/conexiond.php";
// $objeto = new Conexion();
// $conexion = $objeto->Conectar();

$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
$id = $request['id']; //employee ID we are using it to get the employee record
$titulo = $request['titulo']; //get the date of birth from collected data above
$descripcion = $request['descripcion']; //get the date of birth from collected data above
$fecha = $request['fecha'];
$id_usr = $request['id_usr'];

$servername = "localhost"; //set the servername
$username = "Fineco2022"; //set the server username
$password = "Admin2admin"; // set the server password (you must put password here if your using live server)
$dbname = "finecoapp"; // set the table name

$mysqli = new mysqli($servername, $username, $password, $dbname);

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}

// Set the UPDATE SQL data
$sql = "UPDATE todo_list SET titulo='".$titulo."', descripcion='".$descripcion."', fecha='".$fecha."', id_usr='".$id_usr."' WHERE id='".$id."'";

// Process the query so that we will save the date of birth
if ($mysqli->query($sql)) {
    echo "La Tarea ha sido actualizada correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

// Close the connection after using it
$mysqli->close();


switch($opcion){
    case 1:
        $consulta = "INSERT INTO todo_list (titulo, descripcion, fecha, id_usr) 
        VALUES('$titulo', '$descripcion', '$fecha', '$id_usr') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM todo_list ORDER BY id DESC";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;    
    case 2:
        // Set the UPDATE SQL data
        $sql = "UPDATE todo_list SET titulo='".$titulo."', descripcion='".$descripcion."', fecha='".$fecha."', id_usr='".$id_usr."' WHERE id='".$id."'";

        // Process the query so that we will save the date of birth
        if ($mysqli->query($sql)) {
            echo "La Tarea ha sido actualizada correctamente.";
        } else {
            echo "Error: " . $sql . "<br>" . $mysqli->error;
        }

        // $consulta = "UPDATE todo_list SET titulo='$titulo', descripcion='$descripcion', fecha='$fecha', id_usr='$id_usr' ";
        // $resultado = $conexion->prepare($consulta);
        // $resultado->execute();        
        
        // $consulta = "SELECT * FROM todo_list WHERE id='$id' ";    
        // $resultado = $conexion->prepare($consulta);
        // $resultado->execute();
        // $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:        
        $consulta = "DELETE FROM todo_list WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                         
        break;
    case 4:    
        $consulta = "SELECT * FROM todo_list";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;