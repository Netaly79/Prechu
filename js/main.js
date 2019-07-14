$(document).ready(function(){

  $('.nav-toggle').on('click', function(e){
    e.preventDefault();
    $('.burger-menu ul').toggleClass('is-open');	
   
  })

  var swiper = new Swiper('.swiper-container', {
    autoplay:{
      delay:4000

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpointsInverse: true,
    breakpoints:{
      320: {
        delay:4000
      },
      640: {
        autoplay:false
      }
    }
    
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

    