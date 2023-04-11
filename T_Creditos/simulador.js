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
var seguro = document.getElementById("seguro");
var interes_inicial = document.getElementById("c6");
var input7 = document.getElementById("b7");
var gmf = document.getElementById("c7");
var totalCredito = document.getElementById("c8");
var tasa = document.getElementById("c9");
var plazo = document.getElementById("c10");
var cupom = document.getElementById("c11");
var cuota = document.getElementById("c12");


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
seguro.addEventListener("change", updateResult);

function updateResult() {
  // Obtener los valores de los campos de entrada y sumarlos
  var value1 = parseFloat(input1.value);
  var value2 = parseFloat(input2.value);
  var value3 = parseFloat(input3.value);
  var value4 = parseFloat(input4.value);
  var value5 = parseFloat(input5.value);
  var value6 = parseFloat(input6.value);
  var value7 = parseFloat(input7.value);
  var segurom = parseFloat(seguro.value);
  var value8 = parseFloat(totalCredito.value);
  var value9 = parseFloat(tasa.value);
  var value10 = parseFloat(plazo.value);
  var value11 = parseFloat(cupom.value);
  var value12 = parseFloat(cuota.value);

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

  var segurom = seguro.value / 12; // Valor del seguro totol sobre 12 meses
  //console.log("Valor del seguro mensual = " + segurom.toFixed());

  var result = futureValue(resultado_interes, interesDias, 0, loans1);
  iniciales = result - loans1;
  //console.log("Valores iniciales = "+ iniciales.toFixed()); // Resultado 848813

  // Asignar el resultado al campo de INTERESES INICIALES (en dias)
  interes_inicial.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(iniciales.toFixed());

  var valor_Total = result_gmf + iniciales + loans1;
  let valor_Totals = valor_Total.toFixed(); // Pasamos el valor a numero entero
  //console.log("Valor Total = " + valor_Totals); // Resultado 12919905
  
  // Asignar el resultado al campo de INTERESES INICIALES (en dias)
  totalCredito.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(valor_Total.toFixed());

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
  //console.log("Cuota PMT es:" + paymentdd.toFixed()); // 307302
  cuota.value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(paymentdd.toFixed());
    
    var val_11 = document.getElementById("c11");
    var val_11 = parseInt(val_11.value);// Captura el valor del cupo maximo
    var val_12 = paymentdd.toFixed(); // Captura el valor de cuota
  
    if(val_12 > val_11) { // Si el valor de la cupo es mayor a la cuota pinta verde
        $("#c12").css( "background-color", "red");
        $("#c12").css( "color", "white" );
         
    }else { // Si el valor de la cuota es mayor al cupo pinta rojo
        $("#c12").css( "background-color", "green");
        $("#c12").css( "color", "white" );
    };

  console.log("danielc2203@gmail.com");
  // Final....

 
  
}


// Datos del préstamo
const valorPrestamoT = 12919905;
const tasaInteresT = 0.023;
let cuotaT = 309677;
const plazoT = 144;
const seguroT = 10000 / 12;

// Función para calcular la tabla de amortización
function calcularTablaAmortizacion() {
  // Inicializar variables
  let saldoPendienteT = valorPrestamoT;
  let periodoT = 0;
  let fechaT = new Date(2020, 8, 1); // Septiembre 2020
  let tablaT = [];
  let interesesAnterioresT = 0;
  
  // Calcular amortización para cada período
  for (let i = 1; i <= plazoT && saldoPendienteT > 0; i++) {
    periodoT++;
    let interesesT = saldoPendienteT * tasaInteresT / 12;
    let cuotaSinSeguroT = cuotaT - seguroT;
    let capitalT = cuotaSinSeguroT - interesesT;
    if (saldoPendienteT < capitalT) {
      capitalT = saldoPendienteT;
      cuotaSinSeguroT = capitalT + interesesT;
      cuotaT = cuotaSinSeguroT + seguroT;
    }
    let saldoT = saldoPendienteT - capitalT;
    saldoPendienteT = saldoT;
    interesesAnterioresT += interesesT;
    
    // Agregar entrada a la tabla de amortización
    let mesT = fechaT.toLocaleString('default', { month: 'short' }) + '-' + fechaT.getFullYear().toString().substr(-2);
    tablaT.push([periodoT, mesT, capitalT.toFixed(3), seguroT, interesesT.toFixed(3), cuotaT.toFixed(3), saldoT.toFixed(3), (interesesAnterioresT + capitalT).toFixed(3)]);
  
    // Actualizar fecha para el siguiente período
    fechaT.setMonth(fechaT.getMonth() + 1);
  }
  
  return tablaT;
}

// Ejecutar la función y mostrar la tabla de amortización en la consola
let tablaAmortizacionT = calcularTablaAmortizacion();
console.table(tablaAmortizacionT);
