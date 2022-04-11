//tooltip de bootstrap
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});


//carrusel de bootstrap
$(document).ready(function() {
  $('.carousel').carousel({interval: 5000});
});

// modal de bootstrap
$(document).ready(function(){
  $('[data-target="#carta1"]').click(function(){
    $('#carta1').modal({
      backdrop: false
    })
  });
  $('[data-target="#carta2"]').click(function(){
    $('#carta2').modal({
      backdrop: false
    })
  });
  $('[data-target="#carta3"]').click(function(){
    $('#carta3').modal({
      backdrop: false
    })
  });
  $('[data-target="#carta4"]').click(function(){
    $('#carta4').modal({
      backdrop: false
    })
  });
});

// cambair de color viajes chile del footer
$(document).ready(function(){
  etiqueta = $(".cambiar")
  footer = $("footer")
  etiqueta = etiqueta[0]
  $(etiqueta).on("dblclick", function(){
    var elementStyle = window.getComputedStyle(etiqueta);
    var elementColor = elementStyle.getPropertyValue('color');
    if(elementColor == "rgb(255, 255, 255)" || elementColor == "rgb(0, 0, 0)"){
      $(etiqueta).css("color", "red");
      elementStyle = window.getComputedStyle(etiqueta);
      elementColor = elementStyle.getPropertyValue('color');
    }
    else if(elementColor == "rgb(255, 0, 0)"){
      $(etiqueta).css("color", "white");
      elementStyle = window.getComputedStyle(etiqueta);
      elementColor = elementStyle.getPropertyValue('color');
    }
  });
});

// mostrar contenido tarjetas
$(document).ready(function(){
  $(".mostrar-tarjeta").click(function(){
    $(this).next("p").toggle();
  });
});

// alerta de envio de correo
$(document).ready(function(){
  document.getElementById("contacto").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  alert("El correo fue enviado correctamente...")
  location.reload();
}
