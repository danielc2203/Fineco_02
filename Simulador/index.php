<!-- Logica -->
<?php include ('../modulos/panel.php');?>
<?php include ('../recursos/header.php');?>

<link rel="stylesheet" href="../plugins/sweetalert2/sweetalert2.css">

<?php include ('../recursos/sidebar.php');?>




<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Simulador de Fineco</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        <div class="card w-75 text-center mx-auto">
        <div class="card-header bg-gradient-primary text-white">
        CONDICIONES DE CRÉDITO-FINECO
        </div>
        <div class="card-body">
      
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
              <span class="input-group-text">Estudio y Administración de crédito</span>
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
              <span class="input-group-text">Corretaje</span>
          </div>
            <input type="text" class="form-control col-2" id="c13" value="7.00">
          <div class="input-group-prepend">
            <span class="input-group-text">%</span>
          </div>
            <input type="text" class="form-control" id="c14" readonly>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Intereses Iniciales (en días)</span>
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
              <span class="input-group-text">Total Crédito</span>
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
              <span class="input-group-text">Cupo Máximo</span>
            </div>
            <input type="text" class="form-control col" id="c11" >
            <div class="input-group-prepend">
            <span class="input-group-text">.00</span>
            <span class="input-group-text">Valor Cuota</span>
            </div>
            <input type="text" class="form-control" id="c12"  >
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-6">
          <div class="input-group-prepend">
              <span class="input-group-text">Seguro (anual)</span>
          </div>
            <input type="text" class="form-control col-2" id="seguroP" value="0.70">
          <div class="input-group-prepend">
            <span class="input-group-text">%</span>
          </div>
            <input type="text" class="form-control" id="seguro" readonly>
          </div>
          


        <div class="form-row mt-5">
          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Tasa de Usura EA</span>
            </div>
            <input type="text" class="form-control" id="usuaraEA" value="44.64" required>
            <div class="input-group-append">
              <span class="input-group-text">%</span>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Tasa de Usura MV</span>
            </div>
            <input type="text" class="form-control" id="usuaraMV" readonly>
            <div class="input-group-append">
            <span class="input-group-text">%</span>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="input-group input-group-sm mb-3 col-md-6">
            <div class="input-group-prepend">
              <span class="input-group-text">Monto Sin Fees</span>
              <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" id="MontoSinFees" readonly>
            <div class="input-group-append">
            <span class="input-group-text">%</span>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Tasa Sin Fees</span>
            </div>
            <input type="text" class="form-control" id="TasaFees" readonly>
            <div class="input-group-append">
            <span class="input-group-text">%</span>
            </div>
          </div>

          <div class="input-group input-group-sm mb-3 col-md-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Diferencia</span>
            </div>
            <input type="text" class="form-control" id="DiferenciaUsura" readonly>
            <div class="input-group-append">
            <span class="input-group-text">%</span>
            </div>
          </div>
        </div>
          
          <!-- <button class="btn btn-primary btn-sm" type="submit">Calcular Amortización</button> -->
      </form>

        </div>
        <div class="card-footer text-muted">
        Simulador de crédito Fineco
        </div>
      </div>


      </div><!-- /.container-fluid -->
    </section>
  </div>



<!-- Script de validaciòn de los campos -->
<script>
  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
</script>



<!-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.4/dist/sweetalert2.all.min.js"></script> -->
<script src="../plugins/sweetalert2/sweetalert2.all.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.8.2/math.js" integrity="sha512-ap888g/h47w/Rp6mra1vA5NJtdPZJRxOuF/x7jkrL2NdRB8XrKwXIt/PMvre+oMPUdYt+6NNDjwbdwl/PkYXrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

 
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="./html.js"></script>

<!-- Codigo de control para el simulador de credito -->
<script src="simulador.js"></script>


<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<!-- fin de footer -->