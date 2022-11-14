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

    <section class="content">
      <div class="container-fluid">
        <button type="button" class="btn btn-outline-success" style="margin-bottom: 5px;"> <span><i class="fas fa-file-excel"></i></span> Reporte general</button>


      <!-- Bancos Fineco -->

      <div class="card card-solid">
        <div class="card-body pb-0">
          <div class="row">

             <div class="col-12 col-sm-3 col-md-3 d-flex align-items-stretch flex-column">
  
            </div>

            <div class="col-12 col-sm-6 col-md-6 d-flex flex-column">
              <div class="card bg-light d-flex flex-fill">
                <div class="card-header text-center ">
                  <h2>BanColombia</h2>
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="lead"><b>Datos de la cuenta</b></h2>
                      <p class="text-muted text-sm"><b>N° de Cuenta: </b> 123-4567-890 / Cuenta Corriente / </p>
                      <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small"><span class="fa-li"><i class="fas fa-toggle-on"></i></span> Estado de la cuenta: Activa </li>
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> Contacto del Banco: + 601 - 12 12 23 52</li>
                      </ul>
                    </div>
                    <div class="col-5 text-center">
                      <img src="../dist/img/Bancos/Bancolombia.jpg" alt="Bancolombia" class="img-circle img-fluid" data-toggle="modal" data-target="#bancoModal">
                    </div>
                  </div>
                </div>
                <div class="card-footer class="tools"">
                  <div class="text-right">
                    <a href="#" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#bancoModal">
                      <i class="fas fa-eye"></i>
                    </a>
                    <a href="#" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#bancoModal-cards">
                      <i class="far fa-address-card"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

             <div class="col-12 col-sm-3 col-md-3 d-flex align-items-stretch flex-column">
              
            </div> 


          </div>
        </div>
        
    </section>
    
  </div>

  <!-- Modal de Bancos vista de tarjetas cards-->
<div class="modal fade" id="bancoModal-cards" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detalles de la cuenta bancaria / <span style="font-weight:bold; color:darkgreen">FINECO</span> </h5> 
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <div class="row" id="contenido">
            <!-- Contenido desde JavaScript -->
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>

  <!-- Modal de Bancos-->
<div class="modal fade" id="bancoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detalles de la cuenta bancaria / <span style="font-weight:bold; color:darkgreen">FINECO</span> </h5> 
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table id="movimientosf" class="table table-bordered table-striped table-responsive-xl table-condensed">
            <thead>
            <tr> 
              <th>id</th>
              <th>Fecha</th>                                
              <th>Descripción</th>  
              <th>Sucursal</th>
              <th>Descuento</th>
              <th>Valor</th>
              <th>Saldo</th>
            </tr>
            </thead>

            <tbody>              
            </tbody>
          </table>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
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

<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<!-- scrip personalizados -->
<script src="../plugins/toastr/toastr.min.js"></script>
<script type="text/javascript" src="fbancos3.js"></script>
<script type="text/javascript" src="fbancos.js"></script>


<!-- <script src="./scripts.js"></script>; -->
<!-- <script src="../dist/js/pages/dashboard.js"></script> -->
<!-- fin de footer -->
