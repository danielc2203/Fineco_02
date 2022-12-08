<!-- Logica -->
<?php include ('../modulos/panel.php');?>

<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>

<!-- Sweetalert 2 CSS -->
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

        <!-- Small boxes (Stat box) -->
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
          <!-- Left col -->
          <section class="col-lg-12 connectedSortable">
            <!-- Custom tabs (Charts with tabs)-->


          <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                  <i class="ion ion-clipboard mr-1"></i>
                  Creditos Pendientes.
                </h3>
            </div>

            <div class="card-body" id="creditosp">
              <!-- Aca se pinta el contenido del JS Finecod de la funcion Daniel -->
            </div>
            <div class="card-footer clearfix">
              <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#modal-nueva-tarea"><i class="fas fa-plus"></i> Nueva tarea</button>
            </div>
          </div>

          </section>
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
          <!-- right col -->
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
<!-- /.content-wrapper -->

<!-- The Modal editar -->
<div class="modal" id="editar-tarea">
    <div class="modal-dialog">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Editar Tareas</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form action="update.php" id="edit-form">
              <input class="form-control" type="hidden" name="id">
            <div class="form-group">
              <label for="titulo">Titulo de la tarea</label>
              <input class="form-control" type="text" name="titulo">
            </div>
            <div class="form-group">
              <label for="descripcion">Descripcion</label>
              <input class="form-control" type="text" name="descripcion">
            </div>
            <div class="form-group">
              <label for="fecha">Fecha de vencimiento</label>
              <input class="form-control" type="date" name="fecha">
            </div>
            <div class="form-group">
                <label for="id_usr" class="col-form-label">Reasiganar Tarea a:</label>
                <select class="form-control" id="id_usr" name="id_usr">
                        <option value="">Usuarios:</option>
                        <?php
                        $consulta = "SELECT * FROM usuarios";
                        $resultado = $conexion->prepare($consulta);
                        $resultado->execute();
                        $grupo=$resultado->fetchAll();
                        foreach ($grupo as $valores):
                        echo '<option value="'.$valores["id"].'">'.$valores["nombres"].'</option>';
                        endforeach;
                        ?>
                      </select>
            </div> 
            <div class="form-group">
              <input class="form-control" type="hidden" name="fecha_asigando">
            </div>
            <div class="form-row">
              <input class="form-control" type="hidden" name="creado_por" value"<?php echo $id_usr?>">
            </div>

            <div class="form-group">
                <label for="estado_tarea" class="col-form-label">Estado:</label>
                <select class="custom-select" id="estado_tarea" name="estado_tarea">
                  <option selected>Seleccione...</option>
                  <option value="activa">Activa</option>
                  <option value="done">Realizada</option>
                </select>
            </div> 

            <button type="btnSubmit" class="btn btn-primary" id="btnUpdateSubmit">Actualizar</button>
            <button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>
        </form>
          </div>

      </div>
    </div>
</div>

<!-- modal Nuevo -->
<div class="modal" id="modal-nueva-tarea">
    <div class="modal-dialog">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Nueva Tareas</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form action="save.php" id="save-form">
              <input class="form-control" type="hidden" name="id">
            <div class="form-group">
              <label for="titulo">Titulo de la tarea</label>
              <input class="form-control" type="text" name="titulo">
            </div>
            <div class="form-group">
              <label for="descripcion">Descripcion</label>
              <input class="form-control" type="text" name="descripcion">
            </div>
            <div class="form-group">
              <label for="fecha">Fecha de vencimiento</label>
              <input class="form-control" type="date" name="fecha">
            </div>
            <div class="form-group">
              <input class="form-control" type="hidden" name="fecha_asigando" value="<?php echo date("Y-m-d"); ?>">
            </div>
            <div class="form-group">
                <input class="form-control" type="hidden" id="id_usr" name="id_usr" value="<?php echo $id_usr?>"> 
            </div>
            <div class="form-group">
                <input class="form-control" type="hidden" id="estado_tarea" name="estado_tarea" value="activa"> 
            </div>
            <button type="btnSubmit" class="btn btn-primary" id="btnUpdateSubmit">Enviar</button>
            <button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>
        </form>
          </div>
      </div>
    </div>
</div>

<!-- Modal Credito Prueba-->
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




<!-- Policia -->
<!-- modal calculadora de creditos -->
  <div class="modal border border-success" id="fCalculadora">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">CALCULADORA CAPACIDAD POLICIA</h4>
            <!-- <a class="btn btn-outline-danger float-right btnBorrar " id='+ value.id +'><i class="fas fa-broom"></i> -->
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form  id="fCalculadora" class="needs-validation" novalidate>
              <input class="form-control" type="hidden" name="id">

              <div class="form-group row mb-0">
                <label for="dd1" class="col-3 col-form-label-sm">ASIGNACIÓN BÁSICA</label>
                <div class="col-sm-3">
                 <input type="number" maxIntegerDigits="3" id="C1" value="2316871.93" step="0.01" class="form-control form-control-sm" placeholder="$" >
                </div>
              
                <label for="2" class="col-3 col-form-label-sm">PENSIÓN - CASUR</label>
                <div class="col-sm-3">
                 <input type="number" id="C2" value="120465.53" step="0.01" class="form-control form-control-sm" placeholder="$">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">BONIFICACIÓN ASISTENCIA FAMILIAR</label>
                <div class="col-sm-3">
                  <!-- <input type="text" class="form-control form-control-sm" id="datoa1" placeholder="$ 0"> -->
                  <input type="number" id="C3" value="805465.50" step="0.01" class="form-control form-control-sm" placeholder="$ 0">
                </div>
              
                <label for="EPS" class="col-3 col-form-label-sm">EPS</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C4" value="92674.88" step="0.01" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="BONIFICACIÓN SEGURO DE VIDA" class="col-3 col-form-label-sm">BONIFICACIÓN SEGURO DE VIDA</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C5" value="17311.00" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">CLUBAGESOSTE</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C6" value="11584.36" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">DISTINCIÓN</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C7" value="-15292.27" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">SEGURO VOLUNT</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C8" value="15500.00" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">PRIMA NIVEL EJECUTIVO</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C9" value="463374.39" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">PAGADIBIE</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C10" value="4700.00" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">PRIMA ORDEN PÚBLICO</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C11" value="347530.79" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">COORSERPACK</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C12" value="25339.00" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">PRIMA RETORNO A LA EXPERIENCIA</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C13" value="12158.29" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">BBVA</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C14" value="1004795.00" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">SUBSIDIO ALIMENTACIÓN</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C15" value="68658.00" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">PROEXEASCENCI</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C16" value="" placeholder="$">
                </div>

              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm"></label>
                <div class="col-sm-3">
                  <input type="hidden" class="form-control form-control-sm" id="" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">SEGURO PONAL</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="C18" value="17311.00" placeholder="$">
                </div>
                
              </div>

            <div id="answer">
          <table class="table table-striped" >
            <tbody>
              <tr>
                <td>TOTAL DEVENGADOS</td>
                <td id="devengados">0</td>	
              </tr>
              <tr>
                <td>TOTAL DEDUCIDOS</td>
                <td id="tdeducidos">0</td>
              </tr>
              <tr>
                <td>VALOR MÁXIMO</td>
                <td id="maximo">0</td>
              </tr>
              <tr>
                <td>CUPO LIBRE INVERSIÓN</td>
                <td id="cupo">0</td>
              </tr>
            </tbody>
          </table>					
	</div>

<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script> -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<script src="./scripts.js"></script>
<script src="./creditos.js"></script>
<script src="./calculadora.js"></script>
<!-- <script src="../dist/js/pages/dashboard.js"></script> -->
<!-- fin de footer -->
