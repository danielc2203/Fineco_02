<!-- Logica -->
<?php include ('../modulos/panel.php');?>

<!-- Fin de Logica Panel -->

<!-- HEADER - UBICADO EN RECURSOS -->
<?php include ('../recursos/header.php') ?>
<!-- Sweetalert 2 CSS -->

<!-- <link rel="stylesheet" href="assets/plugins/sweetalert2/sweetalert2.min.css"> -->
<!-- <link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.min.css"> -->
<link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.css">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.6.7/sweetalert2.css" integrity="sha512-JzSVRb7c802/njMbV97pjo1wuJAE/6v9CvthGTDxiaZij/TFpPQmQPTcdXyUVucsvLtJBT6YwRb5LhVxX3pQHQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->

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
            <h1 class="m-0">Créditos Fineco</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item active">Créditos</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
    <div class="container-fluid m-3">
      <button type="button" data-toggle="modal" data-target="#modal-calculadora" class="btn btn-success" btn-lg btn-block"><i class="fas fa-calculator"></i><span> Calculadora de Creditos</span></button>
    </div>

      <div class="container-fluid">

        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <section class="col-lg-12 ">
            <!-- Custom tabs (Charts with tabs)-->


          <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                  <i class="ion ion-clipboard mr-1"></i>
                  Listado de Créditos
                </h3>
            </div>

            <div class="card-body">
            <table class="table table-sm table-responsive">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Monto</th>
                  <th scope="col">Plazo</th>
                  <th scope="col">Amortizacion</th>
                  <th scope="col">Tipo de Crédito</th>
                  <th scope="col">Deudas</th>
                  <th scope="col">Egresos</th>
                  <th scope="col">Datacreditos</th>
                  <th scope="col">Capacidad</th>
                  <th scope="col">Calificacion</th>
                  <th scope="col">Tasa</th>
                  <th scope="col">Resultado</th>
                  <th scope="col">Cuota mensual</th>
                  <th scope="col">Intereses anticipados</th>
                  <th scope="col">Seguro</th>
                  <th scope="col">asesoria</th>
                  <th scope="col">iva</th>
                  <th scope="col">comentarios</th>
                </tr>
              </thead>
              <tbody id="creditos-fineco">
                
              </tbody>
            </table>
            </div>
            <div class="card-footer clearfix">
              <button type="button" class="btn btn-success float-right" data-toggle="modal" data-target="#modal-nueva-tarea"><i class="fas fa-plus"></i> Nueva Solicitud</button>
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

<!-- Modal Ver Datos de Credito-->
<div class="modal fade" id="ver-credito" tabindex="-1" role="dialog" aria-labelledby="ver-creditoLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content view-form">
      <div class="modal-header">
        <h5 class="modal-title" id="ver-credito Label"></h5>
        <input class="form-control" type="text" name="id">
        <h5><script>'+value.id+'</script></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<!-- modal calculadora de creditos -->
<div class="modal" id="modal-calculadora">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">CALCULADORA CAPACIDAD</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form  id="save-form" class="needs-validation" novalidate>
              <input class="form-control" type="hidden" name="id">

              <div class="form-group row mb-0">
                <label for="dd1" class="col-3 col-form-label-sm">ASIGNACIÓN BÁSICA</label>
                <div class="col-sm-3">
                  <!-- <input type="text" class="form-control form-control-sm" id="typeNumber" placeholder="$ 0"> -->
                  <!-- <input type="text" name="currency-field" id="dd1" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$1,000,000.00"> -->
                  <input type="number" id="credit" class="form-control input-md" placeholder="$" >
                </div>
              
                <label for="2" class="col-3 col-form-label-sm">PENSIÓN - CASUR</label>
                <div class="col-sm-3">
                  <!-- <input type="text" class="form-control form-control-sm" id="typeNumber" placeholder="$ 0"> -->
                  <!-- <input type="text" name="currency-field" id="dd2" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency" placeholder="$1,000,000.00"> -->
                  <input type="number" id="interest" class="form-control input-md" placeholder="%">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">BONIFICACIÓN ASISTENCIA FAMILIAR</label>
                <div class="col-sm-3">
                  <!-- <input type="text" class="form-control form-control-sm" id="datoa1" placeholder="$ 0"> -->
                  <input type="number" id="period" class="form-control input-md" placeholder="$ 0">
                </div>
              
                <label for="EPS" class="col-3 col-form-label-sm">EPS</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="eps" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="BONIFICACIÓN SEGURO DE VIDA" class="col-3 col-form-label-sm">BONIFICACIÓN SEGURO DE VIDA</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="s-vida" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">CLUBAGESOSTE</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="CLUBAGESOSTE" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">DISTINCIÓN</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="distincion" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">SEGURO VOLUNT</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="seg-volunt" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">PRIMA NIVEL EJECUTIVO</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="prim-ejecutivo" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">PAGADIBIE</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="pagadibie" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">PRIMA ORDEN PÚBLICO</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="dato1" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">COORSERPACK</label>
                <div class="col-sm-3">
                  <input type="number" class="form-control form-control-sm" id="dato1" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">PRIMA RETORNO A LA EXPERIENCIA</label>
                <div class="col-sm-3">
                  <input type="text" class="form-control form-control-sm" id="dato1" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">BBVA</label>
                <div class="col-sm-3">
                  <input type="text" class="form-control form-control-sm" id="dato1" placeholder="$ 0">
                </div>
              </div>

              <div class="form-group row mb-0">
                <label for="dato1" class="col-3 col-form-label-sm">SUBSIDIO ALIMENTACIÓN</label>
                <div class="col-sm-3">
                  <input type="text" class="form-control form-control-sm" id="dato1" placeholder="$ 0">
                </div>
              
                <label for="dato2" class="col-3 col-form-label-sm">PROEXEASCENCI</label>
                <div class="col-sm-3">
                  <input type="text" class="form-control form-control-sm" id="dato1" placeholder="$">
                </div>
              </div>

              <div id="answer">
						<table class="table table-striped" >
							<tbody>
								<tr>
									<td>TOTAL DEVENGADOS</td>
									<td id="summ">0</td>	
								</tr>
								<tr>
									<td>TOTAL DEDUCIDOS</td>
									<td id="payment">0</td>
								</tr>
								<tr>
									<td>VALOR MÁXIMO</td>
									<td id="totalSumm">0</td>
								</tr>
                <tr>
									<td>CUPO LIBRE INVERSIÓN</td>
									<td id="totalLibrei">0</td>
								</tr>
							</tbody>
						</table>					
			
	</div>

              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

              <script>

                $(document).ready(function() {
                $("#calc").click(function() {
                  var credit = $("#credit").val();
                  var period = $("#period").val(); // количество платежных периодов, месяцев
                  var interestRate = $("#interest").val() / 100; //процент по займу

                  if (credit > 0 && period > 0 && interestRate > 0) {
                    var payment; //ежемесячный платеж
                    var paymentDecimal;
                    payment = (interestRate / 12 * credit) / (1 - Math.pow((1 + interestRate / 12),(-period)));
                  //	payment = Math.floor(payment);
                    $("#summ").text(credit);
                    $("#payment").text(payment.toFixed(2));
                    $("#totalSumm").text((payment * period).toFixed(2));
                    $("#totalLibrei").text((payment * period).toFixed(2));
                  } else {
                    alert("Введите числа больше ноля");
                  }
                });

              });

              </script>


            <button type="button" class="btn btn-primary" id="calc">Calcular</button>
            <button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>
        </form>
          </div>
      </div>
    </div>
</div>



<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script> -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<script src="./scripts.js"></script>
<script src="../dist/js/pages/dashboard.js"></script>
<!-- fin de footer -->
