<?php include ('../modulos/usuarios.php') ?>
<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>
<!-- FIN DE HEADER -->

  <!-- DataTables -->
  <link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
<!-- Main Sidebar Container -->


<?php include_once ('../recursos/sidebar.php') ?>


<!-- Fin de Sidebar -->


  <!-- Contenido de clientes -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Lista de Clientes del Sistema</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <!-- <li class="breadcrumb-item"><a href="#">Inicio</a></li> -->
              <li class="breadcrumb-item"><a href="<?php echo $url;?>/template/index.php">Inicio</a></li>
              <li class="breadcrumb-item active">Clientes</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Tabla de Clientes de FINECO APP</h3>
                
    <div class="container">
      <div class="row">
          <div class="col-lg-12">            
            <button id="btnNuevo" type="button" class="btn btn-warning" data-toggle="modal">Agregar Nuevo</button>    
          </div>    
      </div>    
    </div>  
                
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="clientes" class="table table-bordered table-striped" class="table table-striped table-bordered table-condensed">
                  <thead>
                  <tr> 
                    <th>Primer Nombre</th>
                    <th>Segundo Nombre</th>                               
                    <th>Primer Apellidos</th>
                    <th>Segundo Apellidos</th>  
                    <th>Tipo de Documento</th>
                    <th>Número de Documento</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Estado</th>
                    <th>Ocupación</th>
                    <th>Empresa</th>
                    <th>Fecha de Incorporación</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>

                  <tbody>              
                  </tbody>
                </table>

              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.Fin de contenido -->

<!--Modal para CRUD-->
<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formClientes">    
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Primer Nombre:</label>
                    <input type="text" class="form-control" id="primer_nombre">
                    </div>
                    </div>
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Segundo Nombre:</label>
                    <input type="text" class="form-control" id="segundo_nombre">
                    </div> 
                    </div>    
                </div>
                <div class="row">
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Primer Apellido:</label>
                    <input type="text" class="form-control" id="primer_apellido">
                    </div>
                    </div>
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Segundo Apellido:</label>
                    <input type="text" class="form-control" id="segundo_apellido">
                    </div> 
                    </div>    
                </div>
                <div class="row"> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Tipo de Documento</label>
                    <input type="text" class="form-control" id="tipo_documento">
                    </div>
                    </div> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Numero de Documento</label>
                    <input type="text" class="form-control" id="num_documento">
                    </div>
                    </div>  
                </div>
                <div class="row"> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Correo</label>
                    <input type="email" class="form-control" id="correo_electronico">
                    </div>
                    </div> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Telefono</label>
                    <input type="text" class="form-control" id="telefono">
                    </div>
                    </div>  
                </div>
                <div class="row"> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Estado</label>
                    <input type="number" class="form-control" id="estado">
                    </div>
                    </div> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Ocupacion</label>
                    <input type="text" class="form-control" id="ocupacion">
                    </div>
                    </div>  
                </div>
                <div class="row"> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Empresa</label>
                    <input type="text" class="form-control" id="empresa">
                    </div>
                    </div> 
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Fecha de Incorporación</label>
                    <input type="date" class="form-control" id="fecha_incorporacion">
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



<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<!-- fin de footer -->

<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->


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
<!-- AdminLTE App -->
<script src="../dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<!-- <script src="../dist/js/demo.js"></script> -->
<!-- Page specific script -->


<script type="text/javascript" src="main.js"></script>  

</body>
</html>