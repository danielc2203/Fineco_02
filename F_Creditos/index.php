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
          <!-- Listado de Creditos pendientes-->
          <div class="col-12">
          
           <table id="creditosp" class="table table-hover">
            <thead>
              <tr> 
              <th>id</th>
              <th>Nº Documento</th>
              <th>Monto</th>                             
              <th>Plazo</th>
              <th>Capacidad</th>
              <th>Estado</th>
              <th>Fecha de Solicitud</th>
              </tr>
            </thead>
            <tbody class="text-lowercase">
            </tbody>
          </table>

          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
<!-- /.content-wrapper -->

<!-- Modal -->
<div class="modal fade" id="VerCredito" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body" id="contenido_credito">
        Body
      </div>
      <div class="modal-footer">

      </div>
    </div>
  </div>
</div>

<!-- Modal Simulador de Credito -->
<div class="modal fade" id="modalSimulador" tabindex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitleId">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

      </div>
      <div class="modal-body">
        
      <form class="needs-validation" novalidate>

        <div class="form-row">
            <div class="input-group input-group-sm mb-3 col-md-6">
              <div class="input-group-prepend">
                <span class="input-group-text">Total compras de cartera</span>
                <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" id="c1" required>
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-group input-group-sm mb-3 col-md-6">
              <div class="input-group-prepend">
                <span class="input-group-text">Desembolso al cliente</span>
                <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" id="c2" ">
              <!-- <input type="text" class="form-control" id="c2"   onchange="formatCOP(this.value, 'c2-display')" required> -->
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>
        </div>
        
        <div class="form-row">
          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Servicio Aval</span>
            </div>
            <input type="text" class="form-control col-2" id="b3" value="4.00">
            <div class="input-group-prepend">
            <span class="input-group-text">%</span>
            </div>
            <input type="text" class="form-control" id="c3" readonly>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Estudio y Administraciòn de credito</span>
            </div>
            <input type="text" class="form-control col-2" id="b4" value="13.00">
            <div class="input-group-prepend">
            <span class="input-group-text">%</span>
            </div>
            <input type="text" class="form-control"  id="c4" readonly>
          </div>
        </div>

        <div class="form-row">
          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Impuestos</span>
            </div>
            <input type="text" class="form-control col-2" id="b5" value="19.00">
            <div class="input-group-prepend">
            <span class="input-group-text">%</span>
            </div>
            <input type="text" class="form-control" id="c5" readonly>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Intereses Iniciales (en dias)</span>
            </div>
            <input type="text" class="form-control col-2" id="b6" value="90">
            <div class="input-group-prepend">
            <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" id="c6" readonly>
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Seguro (anual)</span>
              <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" id="seguro" value="0" required>
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">GMF</span>
            </div>
            <input type="text" class="form-control col-2" id="b7" value="0.004">
            <div class="input-group-prepend">
            <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" id="c7" readonly>
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Total Credito</span>
              <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" id="c8" readonly>
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Tasa M.V.</span>
            </div>
            <input type="text" class="form-control col" id="c9" value="2.3" require>
            <div class="input-group-prepend">
            <span class="input-group-text">%</span>
            <span class="input-group-text">PLAZO</span>
            </div>
            <input type="text" class="form-control" id="c10" value="144" required>
            <div class="input-group-append">
              <span class="input-group-text">meses</span>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Cupo Màximo</span>
            </div>
            <input type="text" class="form-control col" id="c11" readonly>
            <div class="input-group-prepend">
            <span class="input-group-text">.00</span>
            <span class="input-group-text">Valor Cuota</span>
            </div>
            <input type="text" class="form-control" id="c12"  >
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>
          
          
      </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>





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
