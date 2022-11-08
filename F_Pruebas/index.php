<!-- Logica -->
<?php include ('../modulos/panel.php') ?>
<!-- Fin de Logica Panel -->

<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>
  <!-- DataTables -->
  <link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
  <link rel="stylesheet" href="../plugins/toastr/toastr.min.css">

<!-- Sweetalert 2 CSS -->
<!-- <link rel="stylesheet" href="assets/plugins/sweetalert2/sweetalert2.min.css"> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.6.7/sweetalert2.css" integrity="sha512-JzSVRb7c802/njMbV97pjo1wuJAE/6v9CvthGTDxiaZij/TFpPQmQPTcdXyUVucsvLtJBT6YwRb5LhVxX3pQHQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<!-- FIN DE HEADER -->

<!-- Main Sidebar Container -->
<?php include ('../recursos/sidebar.php') ?>

<!-- Fin de Sidebar -->

<!-- Consulta para el todo_list -->
<?php
    include_once('../global/conexiond.php');
    $consulta = "SELECT * FROM todo_list ORDER BY id DESC ";
    $resultado = $conexion->prepare($consulta);
    $resultado->execute();
    $todo=$resultado->fetchAll(); 
?>


<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Indicadores</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item active">Indicadores</li>
            </ol>
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
          <div class="col-lg-4 col-6">
            <!-- small box Celeste -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3><?php echo $totalClientes; ?></h3>

                <p>Total Clientes</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <a href="#" class="small-box-footer">Más Información <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box Verde -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Costo Por Millón</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <a href="#" class="small-box-footer">Más Información <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box Amarillo -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>44</h3>

                <p>Índice de cartera vencida</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">Más Información <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>

          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box  Rojo -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>
                <p>Prepagos</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">Más Información <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->

          <!-- ./col -->
          <div class="col-lg-4 col-6">
            <!-- small box  azul -->
            <div class="small-box bg-primary">
              <div class="inner">
                <h3>65</h3>
                <p>Total colocación</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
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
                <h3>65</h3>
                <p>Índice de solvencia</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
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

            <!-- TO DO List -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="ion ion-clipboard mr-1"></i>
                  Tareas Pendientes
                </h3>

              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <ul class="todo-list" data-widget="todo-list">
                  
                <?php foreach($todo as $todo) : ?>
                  <li>
                    <!-- drag handle -->
                    <span class="handle">
                    <i class="fas fa-thumbtack"></i>
                    </span>
                    <!-- checkbox -->
                    <div  class="icheck-primary d-inline ml-2">
                      <input type="checkbox" value="" name="id" id="<?php echo ($todo['id']);?>">
                      <label for="<?php echo ($todo['id']);?>"></label>
                    </div>
                    <!-- todo text -->
                    <span class="titulof <?php echo ($todo['id']);?>"><?php echo htmlspecialchars($todo['titulo']);?>,</span>
                    <span class="text">Fecha: <?php echo htmlspecialchars($todo['fecha']); ?></span>
                    <!-- Emphasis label -->
                    <small class="badge badge-danger"><i class="far fa-clock"></i> 2 mins</small>
                    <!-- General tools such as edit or delete-->
                    <div class="tools">
                      <a class='btn btn-outline-warning btnEditar' data-toggle="modal" data-target="#editarTareas"><i class='fas fa-edit'></i></a>
                      <a class='btn btn-outline-info btnEditar' data-toggle="modal" data-target="#editarTareas" href="javascript:void(0);" onclick="document.getElementById('id').value = <?php echo ($todo['id']);?>;document.getElementById('userEdit').value = '<?=$row['user']?>'"><i class='fas fa-edit'></i></a>
                      <a data-toggle="modal" data-target="#EditModal" >
                      <a class='btn btn-outline-danger btn-borrar-tarea'><i class='fas fa-trash'></i></a>
                    </div>
                  </li>
                <?php endforeach; ?>

                </ul>
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#nuevaTarea"><i class="fas fa-plus"></i> Nueva tarea</button>
                
              </div>
            </div>
            <!-- /.card -->
            <div class="card-body">
              <table id="usuariosf" class="table table-bordered table-striped table-responsive-xl table-condensed">
                <thead>
                <tr> 
                  <th>id</th>
                  <th>titulo</th>                                
                  <th>descripcion</th>  
                  <th>fecha</th>
                  <th>id_usr</th>
                </tr>
                </thead>

                <tbody>              
                </tbody>
              </table>
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


<!--Modal para CRUD-->
<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formUsuarios">    
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">titulo:</label>
                    <input type="text" class="form-control" id="titulo">
                    </div>
                    </div>
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Apellidos</label>
                    <input type="text" class="form-control" id="apellidos">
                    </div> 
                    </div>    
                </div>
                <div class="row"> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Correo</label>
                    <input type="email" class="form-control" id="correo">
                    </div>
                    </div>  
                </div>
                <div class="row">
                    <div class="col-lg-9">
                        <div class="form-group">
                        <label for="" class="col-form-label">Password</label>
                        <input type="text" class="form-control" id="password">
                        </div>
                    </div>    
                    <div class="col-lg-6">    
                        <div class="form-group">
                        <label for="" class="col-form-label">Estado</label>
                        <input type="number" class="form-control" id="estado">
                        </div>            
                    </div>
                    <div class="col-lg-6">    
                        <div class="form-group">
                        <label for="" class="col-form-label">Rol de usuario</label>
                        <select class="form-control" id="rol_id">>
                        <option value="">Seleccione:</option>
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
                    </div>
                </div>                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                <button type="submit" id="btnGuardar" class="btn btn-dark">Guardar</button>
            </div>
        </form>    
        </div>
    </div>
</div>  


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script>


<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<script src="scripts.js"></script>
<script src="../dist/js/pages/dashboard.js"></script>
<script type="text/javascript" src="main.js"></script>  
<!-- fin de footer -->

<!-- jQuery -->
<script src="../plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap 4 -->
<script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- DataTables  & Plugins -->
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