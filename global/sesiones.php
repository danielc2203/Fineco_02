<?php
session_start();
if(!isset($_SESSION['usuario'])){
    header('Location:../F_inicio/index.php');
    exit;
}else{
    //print_r($_SESSION['usuario']);
    $id_usr = ($_SESSION['usuario']['id']);
    $nombres = ($_SESSION['usuario']['nombres']);
    $apellidos = ($_SESSION['usuario']['apellidos']);
    $usuariof= $nombres." ".$apellidos;
    $rol = ($_SESSION['usuario']['rol_id']);

    //echo '<script type="text/javascript">alert("Su rol desde session es: ' . $rol . ' y su nombre es ' . $nombres . ' ");</script>';
}
?>
<script>
    let fRol = <?php echo $rol ?>;
    //let fNombre = <?php echo $usuariof?>;
    //alert("Su rol desde session es: " +fRol+ "  y su nombre es <?php echo $nombres ?> ");
</script>