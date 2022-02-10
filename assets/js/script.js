$(document).ready(function(){
   // habilita los tooltips
   $('[data-toggle="tooltip"]').tooltip()

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