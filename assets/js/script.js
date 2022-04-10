$(document).ready(function(){   
    //Funcion que agrega efecto de smoth scroll al pinchar una opcion del menu de opciones
    $("a").click(function(){
        var gato = this.hash;//se obtiene la direccion donde apunta el hiperenlace

        $("html, body").animate(            
            {
                scrollTop: $(gato).offset().top - 60 //se resta la altura del navbar              
            },
            1200, //1500 mS            
        );
    });
});

//habilitacion de ToolTip de Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});