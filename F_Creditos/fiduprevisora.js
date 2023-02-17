$( document ).ready(function() {
  
let nombreF = "Fiduprevisora";
let ColorF = "#a95638";
let iconPre = 'fab';
let iconoF = 'fa-facebook-f';
let colorFuente = "#ffffff";



// llamammos la funcion para crear el cuadro de calculadora
cuadroDiv(nombreF, ColorF, iconoF, colorFuente, iconPre);

//Abre el modal y muestra el formulario para la calculadora
$("#" + nombreF).click(function(){
  opcion = 1; //opcion 1 para envio de credito al crud           
  id=null; // Id nulo para nuevo registro

    //Llamamos al Formulario dentro del modal enviandole los datos
    formularioModal(nombreF, ColorF, iconoF);

    // Funcion que agrega campos nuevos a la derecha o a la izquierda
    nuevosCampos();



    // Obtener una referencia al campo C1 y G1
    const campoC1 = document.getElementById('C1');
    const campoG1 = document.getElementById('G1');

    // Agregar un listener al evento "input" del campo C1
    campoC1.addEventListener('input', function() {
    // Obtener el valor de C1
    const valorC1 = parseFloat(campoC1.value);

    // Calcular el valor de G1 en función del valor de C1
    let valorG1;
    if (valorC1 < 1160001) {
        valorG1 = valorC1 * 0.04;
    } else if (valorC1 < 2320001) {
        valorG1 = valorC1 * 0.10;
    } else {
        valorG1 = valorC1 * 0.12;
    }

    // Mostrar el valor de G1 en el campo correspondiente
   
    const redondeado = Math.ceil(valorG1/100)*100; // Redondea hacia arriba
    const sinDecimales = Math.round(redondeado / 100) * 100; // Redondea a múltiplos de 100
    campoG1.value = sinDecimales; // Agrega automaticamente el valode de aportes ley
    });


  

  // Suma de los valores devengados y deducidos
  function sumar(prefix) {
    var elementos = document.querySelectorAll("[id^='" + prefix + "']");
    var suma = 0;
    for (var i = 0; i < elementos.length; i++) {
      suma += parseFloat(elementos[i].value) || 0;
    }
    document.getElementById(prefix === "C" ? "devengados" : "tdeducidos").textContent = suma.toFixed(0);
    
  }

  // Escucha cambios en los imput C y G para la suma automatica
  document.addEventListener("input", function (event) {
    if (event.target.id.startsWith("C")) {
      sumar("C");
      calcularDiferencia();
    } else if (event.target.id.startsWith("G")) {
      sumar("G");
      calcularDiferencia();
    }
  });

  function calcularDiferencia() {
    // Obtener los valores de los ingresos y gastos
    var ingresos = parseFloat(document.getElementById("devengados").textContent);
    var gastos = parseFloat(document.getElementById("tdeducidos").textContent);
    // var bonfam = parseFloat(document.getElementById("C2").value) || 0;
    // var segurov = parseFloat(document.getElementById("C3").value) || 0;
    var G1 = parseFloat(document.getElementById("G1").value) || 0;
    var G2 = parseFloat(document.getElementById("G2").value) || 0;
    var eps = G1 + G2;
    var maximo = ((ingresos - G1 )/2) - G2;

    // Calcular la diferencia entre los ingresos y gastos
    var cupo = (maximo - gastos + eps);
    //console.log(cupo);
    
    // Mostrar la diferencia en el elemento de texto correspondiente
    document.getElementById("cupo").innerText = cupo.toFixed(0);
    //document.getElementById("maximo").innerText = maximo.toFixed(0);

    valorG = (cupo.toFixed(0));// Guarda el valor de cupo en valorG para guardar los datos
  }
  
 });


});