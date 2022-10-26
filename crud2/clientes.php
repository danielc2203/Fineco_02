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


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
 

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

    <!-- Modal unico -->
<div class="modal" tabindex="-1" role="dialog" id='modal_frm'>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Editar Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id='frm'>
      <input type='hidden' name='action' id='action' value='Insert'>
      <input type='text' name='id' id='uid' value='0'>
      <div class='form-group'>
        <label>Nombre</label>
        <input type='text' name='name' id='name' required class='form-control'>
      </div>
      <div class='form-group'>
        <label>Apellido</label>
        <input type='text' name='primer_apellido' id='primer_apellido' required class='form-control'>
      </div>
      <!-- <div class='form-group'>
        <label>Gender</label>
        <select name='gender' id='gender' required class='form-control'>
          <option value=''>Select</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Others'>Others</option>
        </select>
      </div> -->
      <div class='form-group'>
        <label>Correo</label>
        <input type='text' name='contact' id='contact' required class='form-control'>
      </div>
      <input type='submit' value='Submit' class='btn btn-success'>
    </form>
      </div>
    </div>
  </div>
</div>

<!-- Fin de modal  -->


    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Tabla de clientes FINECO APP</h3>
                <p class='text-right'><a href='#' class='btn btn-success' id='add_record'>Agregar Cliente</a></p>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="clientes1" class="table table-bordered table-striped table-responsive">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>P. Nombre</th>
                    <th>S. Nombre</th>
                    <th>P. Apellido</th>
                    <th>S. Apellido</th>
                    <th>Nº Documento</th>
                    <th>Correo</th>
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
                    <td><?=$finecoCliente['correo_electronico'];?></td>
                    <td><?=$finecoCliente['empresa'];?></td>
                    <td class="project-actions">
                          <!-- <a class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#NombreDelModal" data-bs-whatever="<?php echo $finecoCliente['id'];?>" href="#"> -->
                          <a class="btn btn-primary btn-sm openVer" href="#" >
                          <i class="fas fa-folder">
                              </i>
                              Ver
                          </a>
                          <a class="btn btn-info btn-sm openBtn edit" href="#">
                              <i class="fas fa-pencil-alt">
                              </i>
                              Editar
                          </a>
                          <a class="btn btn-danger btn-sm toastrDefaultSuccess delete" >
                              <i class="fas fa-trash">
                              </i>
                              Borrar
                          </a>
                      </td>
                  </tr>
                  <?php endforeach;?>
                  
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>P. Nombre</th>
                    <th>S. Nombre</th>
                    <th>P. Apellido</th>
                    <th>S. Apellido</th>
                    <th>N° Documento</th>
                    <th>Correo</th>
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



  <script>
      $(document).ready(function(){
        var current_row=null;
        $("#add_record").click(function(){
          $("#modal_frm").modal();
        });
        
        $("#frm").submit(function(event){
          event.preventDefault();
          $.ajax({
            url:"ajax_action.php",
            type:"post",
            data:$("#frm").serialize(),
            beforeSend:function(){
              $("#frm").find("input[type='submit']").val('Cargando...');
            },
            success:function(res){
              if(res){
                if($("#uid").val()=="0"){
                  $("#tbody").append(res);
                }else{
                  $(current_row).html(res);
                }
              }else{
                alert("Failed Try Again");
              }
              $("#frm").find("input[type='submit']").val('Submit');
              clear_input();
              $("#modal_frm").modal('hide');
            }
          });
        });
        
        $("body").on("click",".edit",function(event){
          event.preventDefault();
          current_row=$(this).closest("tr");
          $("#modal_frm").modal();
          var id=$(this).closest("tr").attr("uid");
          var name=$(this).closest("tr").find("td:eq(1)").text();
          var apellido=$(this).closest("tr").find("td:eq(3)").text();
          var contact=$(this).closest("tr").find("td:eq(6)").text();
          
          $("#action").val("Update");
          $("#uid").val(id);
          $("#name").val(name);
          $("#primer_apellido").val(apellido);
          $("#contact").val(contact);
        });
        
        $("body").on("click",".delete",function(event){
          event.preventDefault();
          var id=$(this).closest("tr").attr("uid");
          var cls=$(this);
          if(confirm("Are You Sure")){
            $.ajax({
              url:"ajax_action.php",
              type:"post",
              data:{uid:id,action:'Delete'},
              beforeSend:function(){
                $(cls).text("Loading...");
              },
              success:function(res){
                if(res){
                  $(cls).closest("tr").remove();
                }else{
                  alert("Failed TryAgain");
                  $(cls).text("Try Again");
                }
              }
            });
          }
        });
        
        function clear_input(){
          $("#frm").find(".form-control").val("");
          $("#action").val("Insert");
          $("#uid").val("0");
        }
      });
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
      "responsive": false, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#clientes1_wrapper .col-md-6:eq(0)');

  });
</script>


<!-- Toastr -->
<!-- <script src="../../plugins/toastr/toastr.min.js"></script> -->
<script src="../plugins/toastr/toastr.min.js"></script>



</body>
</html>