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
            <h1 class="m-0">Calculadoras de Creditos</h1>
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

    <!-- Modulo de Creditos -->
    <section class="content">
      <div class="container-fluid">

        
        <div class="row"> <!-- Botones -->
          <!-- Policia -->
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

          <!-- Pensionados -->
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

          <!-- Docentes -->
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
        </div> <!-- Fin de Botones -->
        



      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
<!-- /.content-wrapper -->






<!-- Modal Creditos -->
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



<!-- footer -->
<?php include ('../recursos/footer.php') ?>

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


<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script> -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<script src="./guardar.js"></script>
<script src="./tabla_creditos.js"></script>
<script src="./creditos.js"></script>
<script src="./calculadora.js"></script>
<script src="./simulador.js"></script>
<!-- <script src="../dist/js/pages/dashboard.js"></script> -->
<!-- fin de footer -->
