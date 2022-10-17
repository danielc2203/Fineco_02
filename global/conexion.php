<?php
$servidor="mysql:dbname=finecoApp;host=localhost";

try {
    $pdo= new PDO($servidor,"root","", array(PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES utf8"));

    echo "<scritp> alert('Conectado...') </script>;";

} catch (PDOException $e) {
    
    echo "<scritp> alert('Error...') </script>;";
}
?>