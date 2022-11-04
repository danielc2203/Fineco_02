<!-- HEADER - UBICADO EN RECURSOS -->
<?php
  include('../global/sesiones.php');
  include ('../recursos/header.php');

  //$rol = ($_SESSION['usuario']['rol_id']);
  if ($rol == 1 or 0 ){
    //echo '<script type="text/javascript">alert("Su rol desde index es: ' . $rol . ' y su nombre es ' . $nombres . '");</script>';
  }else{
    echo'<script type="text/javascript">
    alert("No tienes permiso para ingresar a este sitio debes ser un Administrador, tu rol es: ' . $rol . ' ");
    window.location.href="../template/";
    </script>';
  }
?>
<!-- FIN DE HEADER -->


<!-- Main Sidebar Container -->
<?php include ('../recursos/sidebar.php') ?>
<!-- Fin de Sidebar -->


<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Backus BD Fineco</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="<?php echo $url;?>/template/index.php">Inicio</a></li>
              <li class="breadcrumb-item active">Backups</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

    <!-- Contenido de Backups Fineco -->

    <div class="container">
      <h1 class="text-center" style="margin-top:30px;">Respaldo de base de datos</h1>
      <hr>
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h3>Credenciales de la base de datos</h3>
              <br>
              <form method="POST" action="backup.php">
                  <div class="form-group row">
                    <label for="server" class="col-sm-3 col-form-label">Servidor</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" id="server" name="server" value="localhost" placeholder="Ejemplo: 'localhost'" required>
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="username" class="col-sm-3 col-form-label">Usuario</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" id="username" name="username" value="Fineco2022" placeholder="Ejemplo: 'root'" required>
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="password" class="col-sm-3 col-form-label">Contraseña</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" id="password" name="password" value="Admin2admin" placeholder="db password">
                      </div>
                  </div>
                  <div class="form-group row">
                      <label for="dbname" class="col-sm-3 col-form-label">Base de datos</label>
                      <div class="col-sm-9">
                        <input type="text" class="form-control" id="dbname" name="dbname" value="finecoApp" placeholder="Nombre de la base de datos a respaldar" required>
                      </div>
                  </div>
                  <button type="submit" class="btn btn-primary" name="backup">Crear Respaldo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fin de contenido de Backups Fineco -->

      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
<!-- /.content-wrapper -->


<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<!-- fin de footer -->

<!-- jQuery -->
<script src="../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>



