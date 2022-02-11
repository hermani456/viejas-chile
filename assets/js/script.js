$(document).ready(function(){
   // habilita los tooltips
   $('[data-toggle="tooltip"]').tooltip()
   $('[data-toggle="popover"]').popover()
   // smooth scroll
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