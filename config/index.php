<!-- Logica -->
<?php include ('../modulos/panel.php');?>
<?php include ('../recursos/header.php');?>

<link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.css">


<?php include ('../recursos/sidebar.php');?>


<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Configuraciòn Fineco</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        <!-- Small boxes (Stat box) -->
        <div class="row">
          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box Verde -->
            <div class="small-box bg-secondary">
              <div class="inner">
                <h3>Grupos de Usuarios</h3>
                <?php
                  $consulta = "SELECT * FROM grupo_usuarios LIMIT 3";
                  $resultado = $conexion->prepare($consulta);
                  $resultado->execute();
                  $grupo=$resultado->fetchAll();
                  echo "<ul>";
                    foreach ($grupo as $valores):
                      echo '<li>'.$valores["nombre"].'</li>';
                    endforeach;
                  echo "</ul>"
                ?>
              </div>
              <div class="icon">
                <i class="fas fa-tasks"></i>
              </div>
              <a href="#" class="small-box-footer" onclick="manejarAccion('usuarios')" >Ver Más <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box Amarillo -->
            <div class="small-box bg-secondary">
              <div class="inner">
              <h3>Convenios</h3>
                <?php
                  $consulta = "SELECT * FROM convenios LIMIT 3";
                  $resultado = $conexion->prepare($consulta);
                  $resultado->execute();
                  $grupo=$resultado->fetchAll();
                  echo "<ul>";
                    foreach ($grupo as $valores):
                      echo '<li>'.$valores["nombre"].'</li>';
                    endforeach;
                  echo "</ul>"
                ?>
              </div>
              <div class="icon">
                <!-- <i class="ion ion-person-add"></i> -->
                <i class="fas fa-tasks"></i>
              </div>
              <a href="#" class="small-box-footer" onclick="manejarAccion('convenios')" >Ver Más <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box Verde -->
            <div class="small-box bg-secondary">
              <div class="inner">
                <h3>Ocupaciòn</h3>
                <?php
                  $consulta = "SELECT * FROM ocupacion LIMIT 3";
                  $resultado = $conexion->prepare($consulta);
                  $resultado->execute();
                  $grupo=$resultado->fetchAll();
                  echo "<ul>";
                    foreach ($grupo as $valores):
                      echo '<li>'.$valores["nombre"].'</li>';
                    endforeach;
                  echo "</ul>"
                ?>
              </div>
              <div class="icon">
                <i class="fas fa-tasks"></i>
              </div>
              <a href="#" class="small-box-footer" onclick="manejarAccion('ocupacion')" >Ver Más <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->

          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box Verde -->
            <div class="small-box bg-secondary">
              <div class="inner">
                <h3>Estados</h3>
                <?php
                  $consulta = "SELECT * FROM estados LIMIT 3";
                  $resultado = $conexion->prepare($consulta);
                  $resultado->execute();
                  $grupo=$resultado->fetchAll();
                  echo "<ul>";
                    foreach ($grupo as $valores):
                      echo '<li>'.$valores["estados"].'</li>';
                    endforeach;
                  echo "</ul>"
                ?>
              </div>
              <div class="icon">
                <i class="fas fa-tasks"></i>
              </div>
              <a href="#" class="small-box-footer" onclick="manejarAccion('estados')" >Ver Más <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->

          

          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box  azul -->
            <div class="small-box bg-secondary">
              <div class="inner">
                <h3>Otro Listado</h3>
                <p>Total colocación</p>
              </div>
              <div class="icon">
                <i class="fas fa-tasks"></i>
              </div>
              <a href="#" class="small-box-footer">Más Información <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->

          <!-- ./col  Gris -->
          <div class="col-lg-4 col-6">
            <!-- small box -->
            <div class="small-box bg-secondary">
              <div class="inner">
                <h3>Otro Listado</h3>
                <p>Índice de solvencia</p>
              </div>
              <div class="icon">
                <i class="fas fa-tasks"></i>
              </div>
              <a href="#" class="small-box-footer">Más Información <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->

        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <section class="col-lg-12 connectedSortable">
            <!-- Custom tabs (Charts with tabs)-->


          <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                  <i class="ion ion-clipboard mr-1" id="tituloUno"></i>
                  Modulo de Ediciòn.
                </h3>
            </div>

            <div class="card-body" id="finecod">
              <!-- Aca se pinta el contenido del JS Finecod de la funcion Daniel -->
            </div>
            <div class="card-footer clearfix">
            <div class="footEdit">
            <button type="button" class="btn btn-success btnNuevoRegistro" id="btnNuevoRegistro">Nuevo</button>
            </div>
              
            </div>
          </div>

          </section>
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <!-- right col -->
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
<!-- /.content-wrapper -->

<!-- Modal config-->
<div class="modal fade" id="modalEditar" tabindex="-1" >
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalConfig"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="contenido_config">
      <!-- información del modal -->
      <div class="form-group">
        <label for="">id</label>
        <input type="text" name="id" id="id" class="form-control" placeholder="" aria-describedby="helpId">
        <small id="helpId" class="text-muted">Help text</small>

        <label for="">Nombre</label>
        <input type="text" name="nombre" id="nombre" class="form-control" placeholder="" aria-describedby="helpId">
        <small id="helpId" class="text-muted">Help text</small>
      </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal EditarD -->
<div class="modal fade" id="modalEditarC" tabindex="-1" role="dialog" aria-labelledby="modalEditarC" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      
      <div class="modal-header">
      <h5 class="modal-title" id="modalEditarC">Modal Credito</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div id="contenido_datos">
      <!-- Datos -->
    </div>
    </div>
  </div>
</div>


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



<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<!-- <script src="../dist/js/pages/dashboard.js"></script> -->
<!-- fin de footer -->


<script src="../plugins/datatables/jquery.dataTables.min.js"></script>
<script src="../plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="../plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="../plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="../plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="../plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="../plugins/jszip/jszip.min.js"></script>
<script src="../plugins/pdfmake/pdfmake.min.js"></script>
<script src="../plugins/pdfmake/vfs_fonts.js"></script>
<script src="../plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="../plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="../plugins/datatables-buttons/js/buttons.colVis.min.js"></script>

<!-- SweetAlert2 -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<script src="config.js"></script>
<!-- fin de footer -->

