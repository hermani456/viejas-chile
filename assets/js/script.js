$(document).ready(function(){
   // habilita los tooltips
   $('[data-toggle="tooltip"]').tooltip()
   // muestra una alerta al presionar el boton enviar correo
   $('#enviarCorreo').click(function(){
   alert("El correo fue enviado correctamente.")
   })
   // cambia de color los h1 al hacerles doble click
   $('h1').on('click', function(){
   $(this).toggleClass('toggle-color');
   })
   // esconde el contenido de las cards
   $('.hh5').click(function(){
   $('.cards').toggle();
   })

   $('a').click(function(){
      var gato = this.hash

      $('html, body').animate(
         {
            scrollTop: $(gato).offset().top
         },
         800
      )
   })
})