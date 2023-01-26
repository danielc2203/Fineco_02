<!-- Logica -->
<?php include ('../modulos/panel.php');?>

<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>

<!-- Sweetalert 2 CSS -->
<link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.css">

<!-- FIN DE HEADER -->

<!-- Main Sidebar Container -->
<?php include ('../recursos/sidebar.php');
//echo $id_usr;
 ?>

<!-- Fin de Sidebar -->


  <!-- Contenido de clientes -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Funcionarios - Fineco</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <!-- <li class="breadcrumb-item"><a href="#">Inicio</a></li> -->
              <li class="breadcrumb-item"><a href="<?php echo $url;?>/template/index.php">Inicio</a></li>
              <li class="breadcrumb-item active">Funcionarios</li>
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
                <h3 class="card-title">Lista de Funcionarios - Fineco</h3>

                <?php if ($rol === 1 or 0): ?>
                  <p class='text-right'><a class='btn btn-primary active' id='btnNuevo'>Agregar Funcionario</a></p>
                <?php else: ?>
                  <p class='text-right'><a class='btn btn-secondary disabled' id='btnNuevo'>Agregar Funcionario</a></p>
                <?php endif; ?>

              </div>
              <!-- /.card-header -->
              <div class="card-body">

                <table id="usuariosf" class="table table-bordered table-striped table-responsive-xl table-condensed">
                  <thead>
                  <tr> 
                    <th>id</th>
                    <th>nombres</th>                                
                    <th>apellidos</th>  
                    <th>correo</th>
                    <th>estado</th>
                    <th>rol</th>
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
        <form id="formUsuarios">    
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                    <div class="form-group">
                    <label for="" class="col-form-label">Nombres:</label>
                    <input type="text" class="form-control" id="nombres">
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

                        $consulta = "SELECT * FROM grupo_usuarios";
                        $resultado = $conexion->prepare($consulta);
                        $resultado->execute();
                        $grupo=$resultado->fetchAll();

                        foreach ($grupo as $valores):
                        echo '<option value="'.$valores["id"].'">'.$valores["nombre"].'</option>';
                        endforeach;
                        ?>
                      </select>
                        </div>            
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label for="" class="col-form-label">Imagen</label>
                        <input type="file" class="form-control" id="imagen">
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


<script src="../plugins/toastr/toastr.min.js"></script>
<script type="text/javascript" src="main.js"></script>  

</body>
</html>