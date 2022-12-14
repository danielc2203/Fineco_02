$(document).ready(function() {
    $("#calc").click(function() {
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
      //var pension = $("#pension").val() / 100; //

      if (C1 > 0 && C2 > 0 && C3 > 0 && C4 > 0 && C5 > 0 && C6 > 0 ) {
        var devengados; //
        var deducidos;
        var maximo;
        var cupo;
        devengados = (C1 + C3 + C5 + C7 + C9 + C11 + C13 + C15 );
        //devengados = Math.floor(devengados);
        deducidos = (C2 + C4 + C6 + C8 + C10 + C12 + C14 + C16 + C18 );
        //deducidos = Math.floor(deducidos);
        maximo = (devengados - C3 - C5 - C2 - C4 ) / 2;
        //payment = (pension / 12 * asignacion) / (1 - Math.pow((1 + pension / 12),(-BonAsFam)));
        cupo = (maximo - C6 - C8 - C10 - C12 - C14 - C16 - C18);
      //	payment = Math.floor(payment);
        $("#devengados").text(devengados.toFixed(2));
        $("#tdeducidos").text(deducidos.toFixed(2));
        //$("#maximo").text((deducidos * deducidos).toFixed(2));
        $("#maximo").text(maximo.toFixed(2));
        $("#cupo").text(cupo.toFixed(2));
      } else {
        alert("Introduzca números mayores que cero");
      } 
    });
});

// Funcion para rellenar los datos de ejemplo
function rellenarDatos(){
    alert("Ingresando valores de ejemplo")
    document.getElementById('fCalculadora').reset();
};
    

// Borrar todos los campos
function clearInput(){
    $("#C1,#C2,#C3,#C4,#C5,#C6,#C7,#C8,#C9,#C10,#C11,#C12,#C13,#C14,#C15,#C16,#C17,#C18").val("");
};