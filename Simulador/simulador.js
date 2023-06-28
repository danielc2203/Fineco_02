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
var seguroP = document.getElementById("seguroP");
var seguro = document.getElementById("seguro");
var interes_inicial = document.getElementById("c6");
var input7 = document.getElementById("b7");
var gmf = document.getElementById("c7");
var totalCredito = document.getElementById("c8");
var tasa = document.getElementById("c9");
var plazo = document.getElementById("c10");
var cupom = document.getElementById("c11");
var cuota = document.getElementById("c12");
var corretaje = document.getElementById("c13");
var corretajeTotal = document.getElementById("c14");
var usuaraEA = document.getElementById("usuaraEA");
var usuaraMV = document.getElementById("usuaraMV");
var MontoSinFees = document.getElementById("MontoSinFees");
var TasaFees = document.getElementById("TasaFees");
var DiferenciaUsura = document.getElementById("DiferenciaUsura");


// Agregar eventos de escucha para cuando los valores cambien
input1.addEventListener("change", updateResult);
input2.addEventListener("change", updateResult);
input3.addEventListener("change", updateResult);
input4.addEventListener("change", updateResult);
input5.addEventListener("change", updateResult);
input6.addEventListener("change", updateResult);
input7.addEventListener("change", updateResult);
tasa.addEventListener("change", updateResult);
plazo.addEventListener("change", updateResult);
seguroP.addEventListener("change", updateResult);
seguro.addEventListener("change", updateResult);
corretaje.addEventListener("change", updateResult);
corretajeTotal.addEventListener("change", updateResult);
usuaraEA.addEventListener("change", updateResult);


function updateResult() {
  // Obtener los valores de los campos de entrada y sumarlos
  var value1 = parseFloat(input1.value);
  var value2 = parseFloat(input2.value);
  var value3 = parseFloat(input3.value);
  var value4 = parseFloat(input4.value);
  var value5 = parseFloat(input5.value);
  var value6 = parseFloat(input6.value);
  var value7 = parseFloat(input7.value);
 //var seguroP = parseFloat(seguroP.value);
  var segurom = parseFloat(seguro.value);
  var value8 = parseFloat(totalCredito.value);
  var value9 = parseFloat(tasa.value);
  var value10 = parseFloat(plazo.value);
  var value11 = parseFloat(cupom.value);
  var value12 = parseFloat(cuota.value);
  var value13 = parseFloat(corretaje.value);
  var value14 = parseFloat(corretajeTotal.value);
  var usuaraEAF = parseFloat(usuaraEA.value);


  var sum1 = value1 + value2;
  var result_aval = sum1 * (value3/100);
  var result_estudio = sum1 * (value4/100);

  console.log(" ");
  console.log("_m_(..)_m_") 

  // Asignar el resultado al campo de resultado con formato moneda
  aval.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(result_aval);
  //aval.value = result_aval;
  // Asigna el resulatod del campo Estudio en formato moneda
  estudio.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(result_estudio);
  //estudio.value = result_estudio;

  //   Corretaje
  let corretajeF = sum1 * value13 /100;
  corretajeTotal2 = corretajeF.toFixed();
  corretajeTotal.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(corretajeTotal2);

  var sum2 = result_aval + result_estudio + corretajeF ;
  var result_impuesto = sum2 * (value5/100);
  // Asignar el resultado al campo de impuestos
  impuesto.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(result_impuesto);
  //impuesto.value = result_impuesto;

  var sum3d = parseFloat(sum1) + parseFloat(result_aval) + parseFloat(result_estudio) + parseFloat(corretajeTotal2) + parseFloat(result_impuesto);
  var sum3e = sum3d * value7;
  var sum3 = result_impuesto + result_estudio + result_aval + value2 + corretajeF;
  var result_gmf = sum3 * value7;
  // Asignar el resultado al campo de gmf
  gmf.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(sum3e);


  let interesDias = (value6/360); // Operación para sacar el porcentaje de 90 días sobre 360.

  let loans1 = sum3; // Cifra total del prestamo + los impuestos
  //console.log("loans1 = " + loans1);

  // Valor de Tasa
  let percent = value9;
  let decimal = percent / 100;
  //console.log("Decimal es ="+ decimal); // 0.023


  //numero de periodos necesarios para alcanzar un valor con una tasa de interés del 2,3%.
  let rate = decimal;
  let periods = 12;
  let resultado_interes = Math.round((Math.pow((1 + rate),periods) - 1)*1000000)/1000000;
  //console.log(resultado_interes); // El resultado es 0.313734


  // Funcion Buscada:
  function futureValue(rate, numPeriods, payment, presentValue) {
      if (rate <= 0 || numPeriods <= 0 || presentValue <= 0) {
          return "Por favor ingrese valores válidos para la tasa de interés, número de períodos y valor presente";
      }
      var futureValue = presentValue * (1 + rate) ** numPeriods + payment * (((1 + rate) ** numPeriods - 1) / rate);
      return futureValue;
  }
  

  var result = futureValue(resultado_interes, interesDias, 0, loans1);
  iniciales = result - loans1;
  //console.log("Valores iniciales = "+ iniciales.toFixed()); // Resultado 848813


  // Asignar el resultado al campo de INTERESES INICIALES (en dias)
  interes_inicial.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(iniciales.toFixed());

  var valor_Total = result_gmf + iniciales + loans1;
  let valor_Totals = valor_Total.toFixed(); // Pasamos el valor a numero entero
 
  // Asignar el resultado al campo de INTERESES INICIALES (en dias)
  totalCredito.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(valor_Total.toFixed());

  //  Valor de Seguro 
  var seguroPValue = seguroP.value;
  var seguroV = seguroPValue * valor_Totals /100;
  seguro.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(seguroV.toFixed());

  var segurom = seguroV / 12; // Valor del seguro totol sobre 12 meses
  
  // intereses mediante la funcion PMT 
  function PMT(tasaf, plazof, total_N, fvdd, v_cuota) {
      if (tasaf === 0) {
          return -(total_N + fvdd) / plazof;
      } else {
          var pvifdd = Math.pow(1 + tasaf, plazof);
          return (-(total_N * pvifdd + fvdd) / ((pvifdd - 1) / tasaf) + segurom);
      }
  }

  let tasaf = decimal; //0.023;
  let plazof = value10; // Plazo 150
  let total_N = -valor_Totals; // Valot total en negativo
  let fvdd = 0;
  let v_cuota = 0;
  let paymentdd = PMT(tasaf, plazof, total_N, fvdd, v_cuota);

  //paymentdd = paymentdd + segurom;
  //console.log("Cuota PMT es:" + paymentdd.toFixed()); // 307302
  cuota.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(paymentdd.toFixed());
  

    //Tasa de Usura MV
    usuaraEAF /= 100; // Convertir el valor a %
    var resultadoMV = Math.pow(1 + usuaraEAF, 1 / 12) - 1;
    resultadoMV *= 100; // Convertir el resultado a porcentaje
    usuaraMV.value = (resultadoMV.toFixed(2)); // pasamos el resultado al campo

    // Monto Sin Fees

    var sinfees = parseFloat(result_estudio)  + parseFloat(corretajeTotal2) + parseFloat(result_impuesto) + parseFloat(iniciales) + parseFloat(result_gmf);
    var grantotal = valor_Totals - sinfees;
    MontoSinFees.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(grantotal.toFixed());

    // Importar la biblioteca "mathjs"
    // const math = require('mathjs');

    // Definir los valores necesarios
    function calcularTasa(numPeriods, payment, presentValue, futureValueAA) {
        const maxIterations = 100;
        const tolerance = 1e-6;
      
        let rate = 0.1; // Valor inicial de la tasa de interés
        let guess = 0;
        let factor = 0;
        let residual = 0;
        let iteration = 0;
      
        while (iteration < maxIterations) {
          guess = presentValue * Math.pow(1 + rate, numPeriods) + payment * ((Math.pow(1 + rate, numPeriods) - 1) / rate) - futureValueAA;
          factor = presentValue * numPeriods * Math.pow(1 + rate, numPeriods - 1) + payment * (Math.pow(1 + rate, numPeriods - 1) * (numPeriods - 1) + 1) / rate - payment * ((Math.pow(1 + rate, numPeriods) - 1) / Math.pow(rate, 2));
          residual = guess / factor;
      
          rate -= residual;
      
          if (Math.abs(residual) < tolerance) {
            return rate;
          }
      
          iteration++;
        }
      
        return NaN; // Si no se alcanza la convergencia, devuelve NaN
      }
      
      // Ejemplo de uso
      const numPeriods = plazof; // Número de períodos
      const payment = paymentdd.toFixed(); // Valor de la cuota
      const presentValue = grantotal * -1; // Valor convertido a negativo // Valor presente
      const futureValueAA = 0; // Valor futuro
      
      // valor de Tasa Sin Fees
      const interestRate = calcularTasa(numPeriods, payment, presentValue, futureValueAA);
      const interestRatePercentage = (interestRate * 100).toFixed(2); // Multiplica por 100 y redondea a 2 decimales
      TasaFees.value = interestRatePercentage; // Paso los valores al campo

      // Valor de Diferencia
      var diferenciaValue = (interestRatePercentage) - (resultadoMV)
      DiferenciaUsura.value = diferenciaValue.toFixed(2)

  console.log("_m_('')_m_");
  console.log("jdanielcastro.com");
  // Final....
}

