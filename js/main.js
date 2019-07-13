$(document).ready(function(){

  var x=0;

  $('.nav-toggle').on('click', function(e){
    e.preventDefault();
    $('.burger-menu ul').toggleClass('is-open');	
   
  })

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    })


    

});
 $(document).ready(function(){
      $('.slider').bxSlider();

      $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 600
        });
      });
    });

