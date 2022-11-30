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

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Clientes Fineco</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="<?php echo $url;?>/F_inicio/index.php">Inicio</a></li>
              <li class="breadcrumb-item active">Clientes</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->

    <section class="content">


    <div class="container-fluid">
        <div class="row">
            <div class="col-12">

            <div class="card">
                <div class="card-header">
                <h3 class="card-title">Tabla de Usuarios de FINECO APP</h3>

                <p class='text-right'><a class='btn btn-success' id='btnNuevo'>Agregar Cliente</a></p>
                
                </div>
                <!-- /.card-header -->
                <div class="card-body">

                <table id="clientes" class="table table-responsive table-hover  ">
                    <thead>
                    <tr> 
                    <th>id</th>
                    <th>Primer Nombre</th>
                    <th>Segundo Nombre</th>                             
                    <th>Primer Apellido</th>
                    <th>Segundo Apellido</th>
                    <!-- <th>Tipo de documento</th> -->
                    <th>N° Documento</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Estado</th>
                    <!-- <th>Ocupaciòn</th> -->
                    <th>Convenio</th>
                    <!-- <th>Fecha</th> -->
                    <!-- <th></th> -->
                
                    </tr>
                    </thead>

                    <tbody class="text-lowercase">              
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
        
    </section>
    
  </div>

<!--Modal para CRUD-->
<div class="modal fade" id="modalCRUD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>

        <form id="formModal" class="needs-validation">    
            <div class="modal-body">
                <div class="row">
                    <input type="hidden" id="id_cliente" value="">

                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Primer Nombre:</label>
                    <input type="text" class="form-control form-control-sm" id="primer_nombre" required>
                    
                    <div class="invalid-tooltip">
                      Este campo no debe estar vacio.
                    </div>

                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Segundo Nombre</label>
                    <input type="text" class="form-control form-control-sm" id="segundo_nombre" >

                    </div> 
                    </div>    
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Primer Apellido:</label>
                    <input type="text" class="form-control form-control-sm" id="primer_apellido" >
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Segundo Apellido</label>
                    <input type="text" class="form-control form-control-sm " id="segundo_apellido">
                    </div> 
                    </div>    
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group mb-0 mb-0">
                    <label for="" class="col-form-label-sm">Tipo de Documento:</label>
                    <!-- <input type="text" class="form-control form-control-sm" id="tdocumento"> -->
                    <select class="form-control form-control-sm" id="tipo_documento">
                      <option selected>Seleccionar...</option>
                      <option value="CC">CC</option>
                      <option value="CE">CE</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group mb-0 mb-0">
                    <label for="" class="col-form-label-sm">Número de Documento</label>
                    <input type="text" class="form-control form-control-sm" id="num_documento" >
                    </div> 
                    </div>    
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Correo:</label>
                    <input type="mail" class="form-control form-control-sm " id="correo_electronico" >
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Télefono</label>
                    <input type="phone" class="form-control form-control-sm " id="telefono" >
                    </div> 
                    </div>    
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Estado:</label>
                    <select class="form-control form-control-sm" id="estado">
                      <option selected>Seleccion...</option>
                      <option value="Activo">Activo</option>
                      <option value="Inactivo">Inactivo</option>
                    </select>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Ocupación</label>
                    <select class="form-control form-control-sm" id="ocupacion">
                      <option selected>Seleccionar...</option>
                      <option value="Fineco">Pensionado</option>
                      <option value="Armada">Docente</option>
                      <option value="Policia">Policia</option>
                      <option value="Fiscalia">Fuerzas Armadas</option>
                      <option value="Empleado">Empleado</option>
                    </select>
                    </div> 
                    </div>    
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Convenio:</label>
                    <select class="form-control form-control-sm" id="empresa">
                      <option selected>Seleccionar...</option>
                      <option value="Fineco">Fineco</option>
                      <option value="Armada">Armada</option>
                      <option value="Fuerza Aerea">Fuerza Aerea</option>
                      <option value="Policia">Policia</option>
                      <option value="Fiscalia">Fiscalia</option>
                      <option value="Empleado">Empleado</option>
                    </select>
                    </div>
                    </div>
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm" >Fecha de Inscripción</label>
                    <input type="date" class="form-control form-control-sm" id="fecha_incorporacion" >
                    </div> 
                    </div>    
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Fecha de Nacimiento:</label>
                    <input type="date" class="form-control form-control-sm " id="fecha_nacimiento" >
                    </div>
                    </div>
                    <div class="col-lg-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">direccion de residencia</label>
                    <input type="text" class="form-control form-control-sm " id="direccion_residencia" >
                    </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">Pais:</label>
                    <input type="text" class="form-control form-control-sm " id="pais" >
                    </div>
                    </div>
                    <div class="col-lg-6">
                    <div class="form-group mb-0">
                    <label for="" class="col-form-label-sm">direccion de residencia</label>
                    <input type="text" class="form-control form-control-sm " id="direccion_residencia" >
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


<!-- Modal Ver Clientes-->
<div class="modal fade" id="VerClientes" tabindex="-1" aria-labelledby="VerClientes" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="VerClientes"></h5>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="contenido_cliente">
      <!-- información del modal -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


<!-- jQuery -->
<!-- <script src="../plugins/jquery/jquery.min.js"></script> -->
<!-- Bootstrap 4 -->
<!-- <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script> -->
<!-- DataTables  & Plugins -->

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
<!-- Alertas Toastr  -->
<script src="../plugins/toastr/toastr.min.js"></script>

<!-- scrip personalizados -->
<script type="text/javascript" src="clientes.js"></script> 

