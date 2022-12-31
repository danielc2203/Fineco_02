<!-- Logica -->
<?php
include_once ('../modulos/panel.php');
include_once ('../global/sesiones.php');
include_once ('../global/conexiond.php');
?>

<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>

<!-- Sweetalert 2 CSS -->
<link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
<link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<!-- FIN DE HEADER -->

<!-- Main Sidebar Container -->
<?php include ('../recursos/sidebar.php');
//echo $id_usr;
$rol = $rol;
 ?>

<!-- Fin de Sidebar -->

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Bancos Fineco</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item active">Bancos</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->

    <!-- bancos bd -->
    <section class="content">
      <div class="container-fluid">
        <button type="button" class="btn btn-outline-success" style="margin-bottom: 5px;"> <span><i class="fas fa-file-excel"></i></span> Reporte general</button>

        <div class="card card-solid">
          <div class="card-body pb-0">
            <div class="row">

              <div class="col-12 col-sm-3 col-md-3 d-flex align-items-stretch flex-column"></div>
              
              <div class="col-12 col-sm-6 col-md-6 d-flex flex-column">
                <div class="card bg-light d-flex flex-fill" id="contenido_sucursales">
                  <!-- Contenido de los bancos -->
                </div>
              </div>

              <div class="col-12 col-sm-3 col-md-3 d-flex align-items-stretch flex-column"></div> 

            </div>
          </div>
        </div>

      </div>
        
    </section>
    
  </div>

<!-- Modal ediciòn Banco -->
<div class="modal fade" id="modalBanco" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Editar Datos del Banco</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>

          <div class="modal-body">
            <div class="container-fluid">

              <form id="datosbancos" class="needs-validation" method="post">

                  <input type="hidden" name="id_banco" id="id_banco" value="">

                  <div class="form-group">
                    <label for="">Nombre del banco</label>
                    <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre Banco">
                  </div>

                  <div class="form-group">
                    <label for="">Numero de cuenta</label>
                    <input type="text" class="form-control" name="num_cuenta" id="num_cuenta" placeholder="num_cuenta">
                  </div>

                  <div class="form-group">
                    <label for="">Tipo de cuenta</label>
                    <select class="form-control form-control-sm" id="tipo_cuenta" name="tipo_cuenta">
                      <option selected>Seleccion...</option>
                      <option value="Ahorros">Ahorros</option>
                      <option value="Corriente">Corriente</option>
                      <option value="Corporativa">Corporativa</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="">Estado de la cuenta</label>
                    <select class="form-control form-control-sm" id="estado_cuenta" name="estado_cuenta">
                      <option selected>Seleccion...</option>
                      <option value="Activo">Activa</option>
                      <option value="Inactivo">Inactiva</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="">Nùmero de contacto del banco</label>
                    <input type="text" class="form-control" name="contacto_cuenta" id="contacto_cuenta" placeholder="">
                  </div>

                  <div class="form-group">
                    <label for="">Logo del banco</label>
                    <input type="file" class="form-control-file" name="logo_banco" id="logo_banco" >
                  </div>

                  <div class="modal-footer">
                  <button type="submit" class="btn btn-primary" id="btnGuardar">Guardar</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
              </form>

            </div>
          </div>
      
    </div>
  </div>
</div>


<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<!-- <script src="../dist/js/pages/dashboard.js"></script> -->
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
<!-- SweetAlert2 -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>
<!-- Alertas Toastr  -->
<script src="../plugins/toastr/toastr.min.js"></script>

<!-- Card Sucursales -->
<script src="card_sucursales.js"></script>

