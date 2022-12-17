var valorG;
let date = new Date().toLocaleDateString();
function calcularPolicia(){

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
        valorG = (cupo.toFixed(0));
      } else {
        //Swal.fire('Introduzca números mayores que cero', '', 'error');
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Introduzca números mayores que cero',
        })
      } 

    };

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

// Funcion Calculo de Credito Pensionados
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
    var aportesley; //
    var deducidos;
    var maximo;
    var cupo;
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
    $("#aportes").text(dato.toFixed(2));
    valorG = capacidad;
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
    valorG = capacidad;
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
    title: 'Deseas limpiar el formulario?',
    text: "Esta acción no se puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, limpiar campos!'
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

function guardarDatos(){
  
  var C1 = $("#C1").val();
  var CAPACIDAD  = $('#capacidad').val();

  if (valorG) {
    Swal.fire({
      title: 'Deseas crear',
      text: "Un nuevo registro de credito?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Crear nuevo credito!'
    }).then((result) => {
      if (result.isConfirmed) {
          
        var html = "";

        
        html += '<div class="form-group row mb-0">'
        html += '<form id="formNuevoCredito" class="needs-validation">  '
        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CEDULA:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="number" id="cedula" value="" class="form-control form-control-sm" placeholder="CC" >'
        html += '</div>'

        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">CAPACIDAD:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="text" id="capacidad"  value="'+valorG+'" step="0.01" class="form-control form-control-sm" placeholder="$" readonly>'
        html += '</div>'
        html += '</div>'

        html += '<div class="form-group row mb-0">'
        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">PLAZO EN DÌAS</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="number"  id="plazo" value="" class="form-control form-control-sm" placeholder="365" >'
        html += '</div>'

        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">FECHA DE SOLICITUD:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="text" id="fecha" value='+date+' class="form-control form-control-sm" placeholder="$" readonly>'
        html += '</div>'
        html += '</div>'

        html += '<div class="form-group row mb-0">'
        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">MONTO DEL CREDITO:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="number" id="monto" value="" class="form-control form-control-sm" placeholder="$" >'
        html += '</div>'

        html += '<label for="dd1" class="col-sm-3 col-form-label-sm">ESTADO DEL CREDITO:</label>'
        html += '<div class="col-sm-3">'
        html += '<input type="text" id="estado" value="Pendiente" class="form-control form-control-sm" placeholder="$" readonly>'
        html += '</div>'
        html += '</div>'

        html += '<button type="submit" class="btn btn-primary formNuevoCredito" id="formNuevoCredito">Guardar</button>'
        html += '<button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cerrar</button>'
        html += '</form>'

    html += '<div id="answer"><table class="table table-striped"><tbody>'

    html += '</tbody></table></div>'
    
        $("#fCalculadora").html(html);
        $(".modal-header").css("background-color", "#ff5722");
        $(".modal-header").css( "color", "white" );
        $(".modal-title").css("font-weight: bold", "font-size: 18px");
        $(".modal-title").text("Agregar Nuevo Credito");

      }
    })
  }else{
    Swal.fire('Se requiere de calcular capacidad de libre inversiòn')
  }

 };

 function modalnuevo(){
  var html = "";

  //$("#fCalculadora").html(html);
  $(".modal-header").css("background-color", "#0267EB");
  $(".modal-header").css( "color", "white" );
  $(".modal-title").text("Agregar Nuevo Credito");
};

