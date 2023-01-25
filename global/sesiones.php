<?php
session_start();
if(!isset($_SESSION['usuario'])){
    header('Location:../index.php');
    exit;
}else{
    //print_r($_SESSION['usuario']);
    $id_usr = ($_SESSION['usuario']['id']);
    $nombres = ($_SESSION['usuario']['nombres']);
    $apellidos = ($_SESSION['usuario']['apellidos']);
    $usuariof= $nombres." ".$apellidos;
    $rol = ($_SESSION['usuario']['rol_id']);
    $fotousuario = ($_SESSION['usuario']['ruta_imagen']);
    if ($fotousuario === ""){
        $fotousuario = "img/avatar.jpg";
    }
    

    //echo '<script type="text/javascript">alert("Su rol desde session es: ' . $rol . ' y su nombre es ' . $nombres . ' ");</script>';
    
}

// Tiempo de inactividad en segundos
$inactivity_time = 1800;

// Comprobar si no existe una sesión activa
if (!isset($_SESSION['start_time'])) {
    $_SESSION['start_time'] = time();
}

// Comprobar si ha pasado el tiempo de inactividad
if (time() - $_SESSION['start_time'] > $inactivity_time) {
    // Eliminar la sesión
    session_unset();
    session_destroy();
    // Redirigir al login
    //header("Location: login.php");
    header("Location: ../index.php");
    exit();
}


?>
<script>
    let fRol = <?php echo $rol ?>;
    //let fNombre = <?php echo $usuariof?>;
    //alert("Su rol desde session es: " +fRol+ "  y su nombre es <?php echo $nombres ?> ");
</script>

