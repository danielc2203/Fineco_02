<!-- Logica -->
<?php include ('../modulos/panel.php');?>

<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>

<!-- Sweetalert 2 CSS -->
<link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.css">

<!-- FIN DE HEADER -->

<!-- Main Sidebar Container -->
<?php include ('../recursos/sidebar.php');
//echo $id_usr;
 ?>
<!-- Fin de Sidebar -->


<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Modulo Creditos</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item active">Creditos</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        <!-- Calculadoras de Creditos -->
        <div class="row">
          <div class="col-sm-4">
            <!-- small box Celeste -->
            <div class="small-box bg-success text-center" id="policia">
              <div class="inner">
                <h3>Policia</h3>
                <h4>Calculadora</h4>
              </div>
              <div class="icon">
                <i class="fas fa-sun"></i>
              </div>
              <a class="small-box-footer">Calcular <i class="fas fa-calculator"></i></i></a>
            </div>
          </div>

          <!-- ./col -->
          <div class="col-sm-4">
            <!-- small box Celeste -->
            <div class="small-box bg-primary text-center" id="pensionados">
              <div class="inner">
                <h3>Pensionados</h3>
                <h4>Calculadora</h4>
              </div>
              <div class="icon">
                <i class="fab fa-jenkins"></i>
              </div>
              <a class="small-box-footer">Calcular <i class="fas fa-calculator"></i></i></a>
            </div>
          </div>

          <!-- ./col -->
          <div class="col-sm-4">
            <!-- small box Celeste -->
            <div class="small-box bg-info text-center" id="docentes">
              <div class="inner">
                <h3>Docentes</h3>
                <h4>Calculadora</h4>
              </div>
              <div class="icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <a class="small-box-footer">Calcular <i class="fas fa-calculator"></i></i></a>
            </div>
          </div>

        </div>
        <!-- /.row -->


        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <section class="col-lg-12 connectedSortable">

          <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                  <i class="ion ion-clipboard mr-1"></i>
                  Listado de Creditos Pendientes.
                </h3>
            </div>

            <div class="card-body" id="creditosp">
              <!-- Aca se pinta el contenido del JS Finecod de la funcion Daniel -->
            </div>
            <div class="card-footer clearfix">
              <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#modal-nueva-tarea"><i class="fas fa-plus"></i> Nueva tarea</button>
            </div>
          </div>

          </section>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
<!-- /.content-wrapper -->

<!-- The Modal editar -->
<div class="modal" id="editar-tarea">
    <div class="modal-dialog">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Editar Tareas</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form action="update.php" id="edit-form">
              <input class="form-control" type="hidden" name="id">
            <div class="form-group">
              <label for="titulo">Titulo de la tarea</label>
              <input class="form-control" type="text" name="titulo">
            </div>
            <div class="form-group">
              <label for="descripcion">Descripcion</label>
              <input class="form-control" type="text" name="descripcion">
            </div>
            <div class="form-group">
              <label for="fecha">Fecha de vencimiento</label>
              <input class="form-control" type="date" name="fecha">
            </div>
            <div class="form-group">
                <label for="id_usr" class="col-form-label">Reasiganar Tarea a:</label>
                <select class="form-control" id="id_usr" name="id_usr">
                        <option value="">Usuarios:</option>
                        <?php
                        $consulta = "SELECT * FROM usuarios";
                        $resultado = $conexion->prepare($consulta);
                        $resultado->execute();
                        $grupo=$resultado->fetchAll();
                        foreach ($grupo as $valores):
                        echo '<option value="'.$valores["id"].'">'.$valores["nombres"].'</option>';
                        endforeach;
                        ?>
                      </select>
            </div> 
            <div class="form-group">
              <input class="form-control" type="hidden" name="fecha_asigando">
            </div>
            <div class="form-row">
              <input class="form-control" type="hidden" name="creado_por" value"<?php echo $id_usr?>">
            </div>

            <div class="form-group">
                <label for="estado_tarea" class="col-form-label">Estado:</label>
                <select class="custom-select" id="estado_tarea" name="estado_tarea">
                  <option selected>Seleccione...</option>
                  <option value="activa">Activa</option>
                  <option value="done">Realizada</option>
                </select>
            </div> 

            <button type="btnSubmit" class="btn btn-primary" id="btnUpdateSubmit">Actualizar</button>
            <button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>
        </form>
          </div>

      </div>
    </div>
</div>

<!-- modal Nuevo -->
<div class="modal" id="modal-nueva-tarea">
    <div class="modal-dialog">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Nueva Tareas</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form action="save.php" id="save-form">
              <input class="form-control" type="hidden" name="id">
            <div class="form-group">
              <label for="titulo">Titulo de la tarea</label>
              <input class="form-control" type="text" name="titulo">
            </div>
            <div class="form-group">
              <label for="descripcion">Descripcion</label>
              <input class="form-control" type="text" name="descripcion">
            </div>
            <div class="form-group">
              <label for="fecha">Fecha de vencimiento</label>
              <input class="form-control" type="date" name="fecha">
            </div>
            <div class="form-group">
              <input class="form-control" type="hidden" name="fecha_asigando" value="<?php echo date("Y-m-d"); ?>">
            </div>
            <div class="form-group">
                <input class="form-control" type="hidden" id="id_usr" name="id_usr" value="<?php echo $id_usr?>"> 
            </div>
            <div class="form-group">
                <input class="form-control" type="hidden" id="estado_tarea" name="estado_tarea" value="activa"> 
            </div>
            <button type="btnSubmit" class="btn btn-primary" id="btnUpdateSubmit">Enviar</button>
            <button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>
        </form>
          </div>
      </div>
    </div>
</div>

<!-- Modal Credito Prueba-->
<div class="modal fade" id="modalCREDITOS" tabindex="-1" role="dialog" aria-labelledby="modalCREDITOS" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      
      <div class="modal-header">
      <h5 class="modal-title" id="modalCREDITOS">Modal Credito</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form action="" method="post" id="fCalculadora" class="needs-validation" novalidate>

      </form>
    </div>
    </div>
  </div>
</div>





<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script> -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<script src="./scripts.js"></script>
<script src="./creditos.js"></script>
<script src="./calculadora.js"></script>
<!-- <script src="../dist/js/pages/dashboard.js"></script> -->
<!-- fin de footer -->
