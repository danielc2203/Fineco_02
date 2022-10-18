<?php
include('config.php');

$servidor="mysql:dbname=".BD.";host=".SERVIDOR;

try {
    $pdo= new PDO($servidor,USUARIO,PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES utf8"));

    //echo "<scritp> alert('Conectado...') </script>;";

} catch (PDOException $e) {
    
    echo $e->getMessage();
    //echo "<scritp> alert('Error...') </script>;";
}
?>