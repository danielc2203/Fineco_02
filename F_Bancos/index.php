<!-- Logica -->
<?php include ('../modulos/panel.php');?>

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
            <form id="formModal" class="needs-validation">
              <div class="modal-body">
                <div class="container-fluid">

                  <form id="datosbancos" method="post">

                  <input type="text" name="id_banco" id="id_banco" value="">

                  <div class="form-group">
                    <label for="">Nombre del banco</label>
                    <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre Banco">
                  </div>

                  <div class="form-group">
                    <label for="">num_cuenta</label>
                    <input type="text" class="form-control" name="num_cuenta" id="num_cuenta" placeholder="num_cuenta">
                  </div>

                  <div class="form-group">
                    <label for="">tipo_cuenta</label>
                    <input type="text" class="form-control" name="tipo_cuenta" id="tipo_cuenta" placeholder="tipo_cuenta">
                  </div>

                  <div class="form-group">
                    <label for="">estado_cuenta</label>
                    <input type="text" class="form-control" name="estado_cuenta" id="estado_cuenta" placeholder="">
                  </div>

                  <div class="form-group">
                    <label for="">contacto_cuenta</label>
                    <input type="text" class="form-control" name="contacto_cuenta" id="contacto_cuenta" placeholder="">
                  </div>

                  <div class="form-group">
                    <label for="">logo_banco</label>
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
<!-- SweetAlert2 -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>
<!-- Alertas Toastr  -->
<script src="../plugins/toastr/toastr.min.js"></script>

<!-- Card Sucursales -->
<script src="card_sucursales.js"></script>

