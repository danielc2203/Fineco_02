<?php

	function backDb($host, $user, $pass, $dbname, $tables = '*'){
		//Crear la conexión con la BD
		$conn = new mysqli($host, $user, $pass, $dbname);
		if ($conn->connect_error) {
		    die("La conexión falló: " . $conn->connect_error);
		}

		//Obtener todas las tablas
		if($tables == '*'){
			$tables = array();
			$sql = "SHOW TABLES";
			$query = $conn->query($sql);
			while($row = $query->fetch_row()){
				$tables[] = $row[0];
			}
		}
		else{
			$tables = is_array($tables) ? $tables : explode(',',$tables);
		}

		//Obteniendo la estructura de las tablas
		$outsql = '';
		foreach ($tables as $table) {
    
		    // Preparando ScriptSQL para crear la tabla
		    $sql = "SHOW CREATE TABLE $table";
		    $query = $conn->query($sql);
		    $row = $query->fetch_row();
		    
		    $outsql .= "\n\n" . $row[1] . ";\n\n";
		    
		    $sql = "SELECT * FROM $table";
		    $query = $conn->query($sql);
		    
		    $columnCount = $query->field_count;

		    // Preparando ScriptSQL para copiar datos con for each en la tabla
		    for ($i = 0; $i < $columnCount; $i ++) {
		        while ($row = $query->fetch_row()) {
		            $outsql .= "INSERT INTO $table VALUES(";
		            for ($j = 0; $j < $columnCount; $j ++) {
		                $row[$j] = $row[$j];
		                
		                if (isset($row[$j])) {
		                    $outsql .= '"' . $row[$j] . '"';
		                } else {
		                    $outsql .= '""';
		                }
		                if ($j < ($columnCount - 1)) {
		                    $outsql .= ',';
		                }
		            }
		            $outsql .= ");\n";
		        }
		    }
		    
		    $outsql .= "\n"; 
		}

		// Guardando el SQL script en un archivo de backup
	    $backup_file_name = $dbname . '_backup.sql';
	    $fileHandler = fopen($backup_file_name, 'w+');
	    fwrite($fileHandler, $outsql);
	    fclose($fileHandler);

	    // Descargando el Backup en un archivo SQL
	    header('Content-Description: File Transfer');
	    header('Content-Type: application/octet-stream');
	    header('Content-Disposition: attachment; filename=' . basename($backup_file_name));
	    header('Content-Transfer-Encoding: binary');
	    header('Expires: 0');
	    header('Cache-Control: must-revalidate');
	    header('Pragma: public');
	    header('Content-Length: ' . filesize($backup_file_name));
	    ob_clean();
	    flush();
	    readfile($backup_file_name);
	    exec('rm ' . $backup_file_name);

	}

?>