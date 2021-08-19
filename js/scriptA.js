$('.page-scroll').on('click', function(e) {
     
    var tujuan = $(this).attr('href');
    // console.log(tujuan);
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan);

    $('html, body').animate({
      scrollTop : elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});



// Parallax
// jumbotron
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);

    $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
      'transform' : 'translate(0px, '+ wScroll +'%)'
    });


     // about
     $(window).on('load', function() {       
      $('.pKiri').addClass('pMuncul');
      $('.pKanan').addClass('pMuncul');
   });



    // Portofolio
    if(wScroll > $('.portofolio').offset().top - 250){
      $('.portofolio .thumbnail').each(function(i) {
         setTimeout(function(){
           $('.portofolio .thumbnail').eq(i).addClass('muncul')
         }, 300 * i+1);
    });
    }   

});