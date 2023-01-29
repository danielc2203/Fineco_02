function calcularPolicia(){
  var C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C18;
  var devengados, deducidos, maximo, cupo;

  for(var i=1; i<=18; i++){
      eval("C"+i+" = Number($('#C"+i+"').val());");
  }

  if (C1 > 0 && C2 > 0 && C3 > 0 && C4 > 0 && C5 > 0 && C6 > 0) {
      devengados = C1 + C3 + C5 + C7 + C9 + C11 + C13 + C15;
      deducidos = C2 + C4 + C6 + C8 + C10 + C12 + C14 + C16 + C18;
      maximo = (devengados - C3 - C5 - C2 - C4) / 2;
      cupo = maximo - C6 - C8 - C10 - C12 - C14 - C16 - C18;
      $("#devengados").text(devengados.toFixed(2));
      $("#tdeducidos").text(deducidos.toFixed(2));
      $("#maximo").text(maximo.toFixed(2));
      $("#cupo").text(cupo.toFixed(2));
  } else {
      Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Introduzca números mayores que cero',
      });
  } 
}


// Funcion para rellenar los datos de ejemplo
function rellenarDatosPolicia(){
    //Swal.fire('Ingresando valores de ejemplo.', response, 'success');
    Swal.fire('Se han ingresando valores de ejemplo en el formulario', '', 'info');
    //document.getElementById('fCalculadora').reset();
    $("#C1").val("2316871.93");
    $("#C2").val("120465.53");
    $("#C3").val("805465.50");
    $("#C4").val("92674.88");
    $("#C5").val("17311.00");
    $("#C6").val("11584.36");
    $("#C7").val("-15292.27");
    $("#C8").val("15500.00");
    $("#C9").val("463374.39");
    $("#C10").val("4700.00");
    $("#C11").val("347530.79");
    $("#C12").val("25339.00");
    $("#C13").val("12158.29");
    $("#C14").val("1004795.00");
    $("#C15").val("68658.00");
    $("#C18").val("17311.00");
       
};

function calcularPensionados(){

  var C1 = $("#C1").val();
  var C1 = Number(C1);
  var C2 = $("#C2").val(); // 
  var C2 = Number(C2);
  var C3 = $('#C3').val();
  var C3 = Number(C3);
  var C4 = $('#C4').val();
  var C4 = Number(C4);
  var C5 = $('#C5').val();
  var C5 = Number(C5);
  var C6 = $('#C6').val();
  var C6 = Number(C6);
  var C7 = $('#C7').val();
  var C7 = Number(C7);
  var C8 = $('#C8').val();
  var C8 = Number(C8);
  var C9 = $('#C9').val();
  var C9 = Number(C9);
  var C10 = $('#C10').val();
  var C10 = Number(C10);
  var C11 = $('#C11').val();
  var C11 = Number(C11);
  var C12 = $('#C12').val();
  var C12 = Number(C12);
  var C13 = $('#C13').val();
  var C13 = Number(C13);
  var C14 = $('#C14').val();
  var C14 = Number(C14);
  var C15 = $('#C15').val();
  var C15 = Number(C15);
  var C16 = $('#C16').val();
  var C16 = Number(C16);
  var C18 = $('#C18').val();
  var C18 = Number(C18);


  if (C1 > 0 ) {
    //var deducidos;
    //var maximo;
    //var cupo;
    if (C1 < 1160001){
      var porcentaje = 4;
      var dato = Math.floor(C1 * porcentaje)/100;
    }else if ( C1 < 2320001 ){
      var porcentaje = 10;
      //var calculo = Math.floor(C1*10)/100;
      var dato =Math.floor(C1 * porcentaje)/100;
    }else{
      var porcentaje = 12;
      var dato = Math.floor(C1 * porcentaje)/100;
    }
    
    
    $("#C2").val(dato);
    var capacidad = ((C1-dato) / 2)-C3;
    $("#capacidad").text(capacidad.toFixed(2));
    $("#aportes").text(dato.toFixed(2));
  } else {
    //Swal.fire('Introduzca números mayores que cero', '', 'error');
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: 'El Salario Bàsico es menor a cero $0',
    })
  } 

};

function calcularDocentes(){

  var C1 = $("#C1").val();
  var C1 = Number(C1);
  var C2 = $("#C2").val(); // 
  var C2 = Number(C2);
  var C3 = $('#C3').val();
  var C3 = Number(C3);
  var C4 = $('#C4').val();
  var C4 = Number(C4);
  var C5 = $('#C5').val();
  var C5 = Number(C5);
  var C6 = $('#C6').val();
  var C6 = Number(C6);
  var C7 = $('#C7').val();
  var C7 = Number(C7);
  var C8 = $('#C8').val();
  var C8 = Number(C8);
  var C9 = $('#C9').val();
  var C9 = Number(C9);
  var C10 = $('#C10').val();
  var C10 = Number(C10);

  if (C1 > 0 ) {
    var porcentaje; //
    var dato; // Dato final de aportes
    var capacidad;
    if (C1 < 1000001){
      var porcentaje = 4;
      var dato = Math.floor(C1 * porcentaje)/100;
    }else if ( C1 < 2000001 ){
      var porcentaje = 10;
      //var calculo = Math.floor(C1*10)/100;
      var dato =Math.floor(C1 * porcentaje)/100;
    }else{
      var porcentaje = 12;
      var dato = Math.floor(C1 * porcentaje)/100; 
    }
    
    $("#C2").val(dato);
    var capacidad = ((C1-dato) / 2)-C3;
    $("#capacidad").text(capacidad.toFixed(2));
    $("#C4").val(capacidad);
    $("#aportes").text(dato.toFixed(2));
  } else {
    //Swal.fire('Introduzca números mayores que cero', '', 'error');
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: 'El Salario Bàsico es menor a cero $0',
    })
  } 

};


// Borrar todos los campos
function clearInput(){
  Swal.fire({
    title: 'Estas Seguro?',
    text: "Esta acción no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar campos!'
  }).then((result) => {
    if (result.isConfirmed) {
      $("#C1,#C2,#C3,#C4,#C5,#C6,#C7,#C8,#C9,#C10,#C11,#C12,#C13,#C14,#C15,#C16,#C17,#C18,#capacidad,#aportes,#devengados,#tdeducidos,#maximo,#cupo").val("");
      $("#cupo").text("");
      $("#devengados").text("");
      $("#tdeducidos").text("");
      $("#maximo").text("");
      Swal.fire(
        'Borrando!',
        'Los campos han sido borrados.',
        'success'
      )
    }
  })
    
};
