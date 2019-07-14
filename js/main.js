$(document).ready(function(){

  $('.nav-toggle').on('click', function(e){
    e.preventDefault();
    $('.burger-menu ul').toggleClass('is-open');	
   
  })

  var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
    },
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

    