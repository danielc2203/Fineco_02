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
          
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">TOTAL COMPRAS DE CARTERA</span>
                <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" id="c1" required>
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">DESEMBOLSO AL CLIENTE</span>
                <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" id="c2" ">
              <!-- <input type="text" class="form-control" id="c2"   onchange="formatCOP(this.value, 'c2-display')" required> -->

              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">SERVICIO DE AVAL</span>
              </div>
              <input type="text" class="form-control col-1" id="b3" value="4,00">
              <div class="input-group-prepend">
              <span class="input-group-text">%</span>
              </div>
              <input type="text" class="form-control" id="c3" readonly>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">ESTUDIO Y ADMINISTRACIÓN DEL CRÉDITO</span>
              </div>
              <input type="text" class="form-control col-1" id="b4" value="13,00">
              <div class="input-group-prepend">
              <span class="input-group-text">%</span>
              </div>
              <input type="text" class="form-control"  id="c4" readonly>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">IMPUESTOS</span>
              </div>
              <input type="text" class="form-control col-1" id="b5" value="19,00">
              <div class="input-group-prepend">
              <span class="input-group-text">%</span>
              </div>
              <input type="text" class="form-control" id="c5" readonly>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">INTERESES INICIALES (en dias)</span>
              </div>
              <input type="text" class="form-control col-1" id="b6" value="90">
              <div class="input-group-prepend">
              <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" id="c6" required>
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">GMF</span>
              </div>
              <input type="text" class="form-control col-1" id="b7" value="0.004">
              <div class="input-group-prepend">
              <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" id="c7" readonly>
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">SEGURO (anual)</span>
                <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" id="c8" required>
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>



            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">TOTAL CREDITO</span>
                <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" id="c10" readonly>
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">TASA</span>
              </div>
              <input type="text" class="form-control col" id="c11" value="2,3" require>
              <div class="input-group-prepend">
              <span class="input-group-text">%</span>
              <span class="input-group-text">PLAZO</span>
              </div>
              <input type="text" class="form-control" id="c12" value="150" required>
              <div class="input-group-append">
                <span class="input-group-text">días</span>
              </div>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">CUPO MÁXIMO</span>
              </div>
              <input type="text" class="form-control col" id="c13" >
              <div class="input-group-prepend">
              <span class="input-group-text">.00</span>
              <span class="input-group-text">VALOR CUOTA </span>
              </div>
              <input type="text" class="form-control" id="c14"  >
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>

          
          <button class="btn btn-primary btn-sm" type="submit">Calcular Amortización</button>
        </form>

        </div>
        <div class="card-footer text-muted">
        Fineco
        </div>
      </div>

      </div><!-- /.container-fluid -->
    </section>
  </div>

  // Quitar saldo refinanciación?
  // Agregar Valor Cuota;
  // Agregar los campos faltantes

<script>
  // Obtener los campos de entrada
  var input1 = document.getElementById("c1");
  var input2 = document.getElementById("c2");
  var input3 = document.getElementById("b3");
  var aval = document.getElementById("c3");
  var input4 = document.getElementById("b4");
  var estudio = document.getElementById("c4");
  var input5 = document.getElementById("b5");
  var impuesto = document.getElementById("c5");
  var input6 = document.getElementById("b6");
  var interes_inicial = document.getElementById("c6");
  var input7 = document.getElementById("b7");
  var gmf = document.getElementById("c7");

  // Agregar eventos de escucha para cuando los valores cambien
  input1.addEventListener("change", updateResult);
  input2.addEventListener("change", updateResult);
  //input3.addEventListener("change", updateResult);

  function updateResult() {
    // Obtener los valores de los campos de entrada y sumarlos
    var value1 = parseFloat(input1.value);
    var value2 = parseFloat(input2.value);
    var value3 = parseFloat(input3.value);
    var value4 = parseFloat(input4.value);
    var value5 = parseFloat(input5.value);
    var value6 = parseFloat(input6.value);
    var value7 = parseFloat(input7.value);
    
    var sum1 = value1 + value2;
    var result_aval = sum1 * (value3/100);
    var result_estudio = sum1 * (value4/100);

    // Asignar el resultado al campo de resultado con formato moneda
    aval.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(result_aval);
    //aval.value = result_aval;
    // Asigna el resulatod del campo Estudio en formato moneda
    estudio.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(result_estudio);
    //estudio.value = result_estudio;

    var sum2 = result_aval + result_estudio;
    var result_impuesto = sum2 * (value5/100);
    // Asignar el resultado al campo de impuestos
    impuesto.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(result_impuesto);
    //impuesto.value = result_impuesto;

    var sum3 = result_impuesto + result_estudio + result_aval + value2;
    var result_gmf = sum3 * value7;
    // Asignar el resultado al campo de gmf
    gmf.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(result_gmf);


    let valorB = 2.3; // valor dinamico
    let interes_compuesto = ((1 + valorB/100) ** 12 - 1)*100;
    console.log(interes_compuesto.toFixed(6));
    let interes_compuesto_porcentaje = interes_compuesto.toFixed(2) + "%";
    console.log(interes_compuesto_porcentaje); // Esto me da 31.37%

    function futureValue(rate, numPeriods, payment, presentValue) {
        return -(presentValue * (1 + rate) ** numPeriods + payment * (((1 + rate) ** numPeriods - 1) / rate));
    }

    var result = futureValue(0.25, 0.313734, 0, -12023000) - 12023000;
    result = result.toFixed();
    console.log(result);

    var resultado = (12023000 * (1 + 0.25) ** 0.313734 + 0 * (((1 + 0.25) ** 0.313734 - 1) / 0.25 ));
    console.log(resultado - 12023000);








  }

</script>



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

<!-- footer -->
<?php include ('../recursos/footer.php') ?>
<!-- fin de footer -->
