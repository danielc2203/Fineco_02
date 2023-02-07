<!-- Logica -->
<?php include ('../modulos/panel.php');?>

<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>

<!-- Sweetalert 2 CSS -->
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4-4.6.0/jq-3.6.0/dt-1.13.2/af-2.5.2/b-2.3.4/fc-4.2.1/kt-2.8.0/rg-1.3.0/rr-1.3.2/sc-2.0.7/sb-1.4.0/sp-2.1.1/sl-1.6.0/sr-1.2.1/datatables.min.css"/>
 
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
                    <h3 class="card-title">Tabla de Clientes de FINECO APP</h3>
                    <p class='text-right'><a class='btn btn-success btnNuevo' id='btnNuevo'>Agregar Cliente</a></p>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body">
                    <table id="finecod" class="table table-responsive table-hover  ">
                    <!-- Aqui van los datos de clientes -->
                    </table>
                  </div><!-- Fin de card-body -->
              </div>
            <!-- /.card -->
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div>
        
    </section>
    
  </div>

<!-- Modal clientes-->
<div class="modal fade" id="modalEditarC" tabindex="-1" aria-labelledby="modalEditarC" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalClientes"></h5>
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="contenido_datos">
      <!-- información del modal -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>





<!-- footer -->
<?php include ('../recursos/footer.php') ?>


<script type="text/javascript" src="https://cdn.datatables.net/v/bs4-4.6.0/jq-3.6.0/dt-1.13.2/af-2.5.2/b-2.3.4/fc-4.2.1/kt-2.8.0/rg-1.3.0/rr-1.3.2/sc-2.0.7/sb-1.4.0/sp-2.1.1/sl-1.6.0/sr-1.2.1/datatables.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>

<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script> -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<!-- scrip personalizados -->
<script type="text/javascript" src="clientes.js"></script> 