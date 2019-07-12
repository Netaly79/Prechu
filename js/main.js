$(document).ready(function(){

  var x=0;

  $('.nav-toggle').on('click', function(e){
    e.preventDefault();
    $('.burger-menu ul').toggleClass('is-open');	
    if (x%2===0) {
      $('.nav-toggle').css("margin-bottom", "80px");
      x=x+1;
    }
    else{
      $('.nav-toggle').css("margin-bottom", "0px");
      x=x+1;
    };
  })

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    });
})


