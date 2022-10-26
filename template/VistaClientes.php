<!-- Funciones de la vista clientes -->
<?php include ('../modulos/clientes.php') ?>

<!-- HEADER - UBICADO EN RECURSOS -->

<?php include ('../recursos/header.php') ?>
<!-- FIN DE HEADER -->

  <!-- DataTables -->
  <link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
  <link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
  <link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css">
  <link rel="stylesheet" href="../plugins/toastr/toastr.min.css">


  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- Main Sidebar Container -->

<?php include ('../recursos/sidebar.php') ?>

<!-- Fin de Sidebar -->
  <!-- Contenido de clientes -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Listado de Clientes</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
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
                <h3 class="card-title">Tabla de clientes FINECO APP</h3>
                <button type="button" class="btn btn-info float-right " data-toggle="modal" data-target="#ModalNuevosClientes">
                  Agregar Nuevos clientes
                </button>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="clientes1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>P. Nombre</th>
                    <th>S. Nombre</th>
                    <th>P. Apellido</th>
                    <th>S. Apellido</th>
                    <th>Nº Documento</th>
                    <th>Empresa</th>
                    <th>Acciones</th>
                  </tr>
                  </thead>

                  <tbody>
                  <?php foreach($finecoclientes as $finecoCliente): ?>
                  <tr>
                    <td><?=$finecoCliente['id'];?></td>
                    <td><?=$finecoCliente['primer_nombre'];?></td>
                    <td><?=$finecoCliente['segundo_nombre'];?></td>
                    <td><?=$finecoCliente['primer_apellido'];?></td>
                    <td><?=$finecoCliente['segundo_apellido'];?></td>
                    <td><?=$finecoCliente['num_documento'];?></td>
                    <td><?=$finecoCliente['empresa'];?></td>
                    <td class="project-actions">
                          <!-- <a class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#NombreDelModal" data-bs-whatever="<?php echo $finecoCliente['id'];?>" href="#"> -->
                          <a class="btn btn-primary btn-sm openVer" href="#" >
                          <i class="fas fa-folder">
                              </i>
                              Ver
                          </a>
                          <a class="btn btn-info btn-sm openBtn"  href="#">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Editar
                          </a>
                          <a class="btn btn-danger btn-sm toastrDefaultSuccess" onclick="myFunctionborrar('<?php echo $finecoCliente['id'];?>')">
                              <i class="fas fa-trash">
                              </i>
                              Borrar
                          </a>
                          <a href="#EditarClientes" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                      </td>
                  </tr>
                  <?php endforeach;?>
                  
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>P. Nombre</th>
                    <th>S. Nombre</th>
                    <th>P. Apellido</th>
                    <th>S. Apellido</th>
                    <th>N° Documento</th>
                    <th>Empresa</th>
                    <th>Acciones</th>
                  </tr>
                  </tfoot>
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

<!-- Inicio Modal Nuevos Clientes -->
<div class="modal fade" id="ModalNuevosClientes" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nuevo Cliente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="post" action="../global/clientes.php">

          <div class="form-row">
          <div class="col">
            <label for="recipient-name" class="col-form-label">Primer Nombre:</label>
            <input type="text" class="form-control" id="pnombre">
          </div>
          <div class="col">
            <label for="recipient-name" class="col-form-label">Segundo Nombre:</label>
            <input type="text" class="form-control" id="snombre">
          </div>
          </div>

          <div class="form-row">
          <div class="col">
            <label for="recipient-name" class="col-form-label">Primer Apellido:</label>
            <input type="text" class="form-control" id="papellido">
          </div>
          <div class="col">
            <label for="recipient-name" class="col-form-label">Segundo Apellido:</label>
            <input type="text" class="form-control" id="sapellido">
          </div>
          </div>

          <div class="form-row">
          <div class="col">
            <label for="recipient-name" class="col-form-label">Tipo de Documento:</label>
            <input type="text" class="form-control" id="tipodocumento">
          </div>
          <div class="col">
            <label for="recipient-name" class="col-form-label">N° de Documento:</label>
            <input type="text" class="form-control" id="numerodocumento">
          </div>
          </div>

          <div class="form-row">
          <div class="col">
            <label for="recipient-name" class="col-form-label">Correo:</label>
            <input type="email" class="form-control" id="email">
          </div>
          <div class="col">
            <label for="recipient-name" class="col-form-label">Télefono:</label>
            <input type="tel" id="telefono" class="form-control">
          </div>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="adduser()">Enviar - Guardar</button>
      </div>
    </div>
  </div>
</div>


<!-- Modal Editar Clientes -->
<div class="modal fade" id="EditarClientes" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nuevo Cliente</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="post" action="../global/clientes.php">

          <div class="form-row">
          <div class="col">
            <label for="recipient-name" class="col-form-label">Primer Nombre:</label>
            <input type="text" class="form-control" id="pnombre">
          </div>
          <div class="col">
            <label for="recipient-name" class="col-form-label">Segundo Nombre:</label>
            <input type="text" class="form-control" id="snombre">
          </div>
          </div>

          <div class="form-row">
          <div class="col">
            <label for="recipient-name" class="col-form-label">Primer Apellido:</label>
            <input type="text" class="form-control" id="papellido">
          </div>
          <div class="col">
            <label for="recipient-name" class="col-form-label">Segundo Apellido:</label>
            <input type="text" class="form-control" id="sapellido">
          </div>
          </div>

          <div class="form-row">
          <div class="col">
            <label for="recipient-name" class="col-form-label">Tipo de Documento:</label>
            <input type="text" class="form-control" id="tipodocumento">
          </div>
          <div class="col">
            <label for="recipient-name" class="col-form-label">N° de Documento:</label>
            <input type="text" class="form-control" id="numerodocumento">
          </div>
          </div>

          <div class="form-row">
          <div class="form-outline">
            <input type="email" id="typeEmail" class="form-control" />
            <label class="form-label" for="typeEmail">Email input</label>
          </div>
          <div class="col">
            <label for="recipient-name" class="col-form-label">Télefono:</label>
            <input type="tel" id="telefono" class="form-control">
          </div>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="adduser()">Enviar - Guardar</button>
      </div>
    </div>
  </div>
</div>


<!-- Fin de Modal de Editar Clientes -->
<script>
  function adduser(){
    var pnombreAdd=$('#pnombre').val();
    var snombreAdd=$('#snombre').val();
    var papellidoAdd=$('#papellido').val();
    var sapellidoAdd=$('#sapellido').val();
    var tipodocumentoAdd=$('#tipodocumento').val();
    var numerodocumentoAdd=$('#numerodocumento').val();

    $.ajax({
      type:'POST',
      url:"../global/clientes.php",
      data:{
        pnombreSend:pnombreAdd,
        snombreSend:snombreAdd,
        papellidoSend:papellidoAdd,
        sapellidoSend:sapellidoAdd,
        tipodocumentoSend:tipodocumentoAdd,
        numerodocumentoSend:numerodocumentoAdd
      },
      success:function(data,status){
        // funcion para mostrar datos;
        //console.log(data);
        //console.log(status);
        //console.log(pnombreSend);
        location.reload();
      },
      error: function(xhr, status, error){
      console.error(xhr);
      }
    });
  }

  
</script>

 <!-- Fin de Modal Nuevos Clientes -->

  <!-- /.Fin de contenido -->

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
<script src="../dist/js/demo.js"></script>

<!-- Page specific script -->
<script>
  $(function() {
    $("#clientes1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#clientes1_wrapper .col-md-6:eq(0)');

  });

</script>



<!-- Script Alerta Borrar -->
<script>
function myFunctionborrar(borrarid) {
  let text = "Confirmar para eliminar este registro!\nAceptar o Cancelar.";
  if (confirm(text) == true) {
    $.ajax({
      type:'POST',
      url:"../global/Borrarclientes.php",
      data:{
        deletesend:borrarid
      },
      success:function(data,status){
        console.log(data);
        console.log(status);
        //clientes1.reload();
        //location.reload();
      }
    })

    $(function() {
      toastr.success('Se ha ejecutado la acción correctamente')
    });


  } else {

    $(function() {
      toastr.info('Se ha cancelado la acción')
    });

  }
}

</script>

<script>

</script>

<!-- Toastr -->
<!-- <script src="../../plugins/toastr/toastr.min.js"></script> -->
<script src="../plugins/toastr/toastr.min.js"></script>


<!-- <script>
$('.openBtn').on('click',function(){
    $('.modal-body').load('modales.php?id=2',function(){
        $('#ModalEditarClientes').modal({show:true});
    });
});

$('.openVer').on('click',function(){
    $('.modal-body').load('modales.php',function(){
        $('#ModalVerClientes').modal({show:true});
    });
});
</script> -->


</body>
</html>