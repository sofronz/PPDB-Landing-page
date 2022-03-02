$(document).ready(function() {

    $('.img-book').addClass('showing');

    $('.heading-1').addClass('show-h');
    $('.heading-2').addClass('show-h');

    $('.p-1').addClass('show-p');
    $('.regis').addClass('show-r');
});

$(window).scroll(function() {
     var wScroll = $(this).scrollTop();
     
     console.log(wScroll);

     if (wScroll > 100) {
        $('.card').addClass('show');
     } 

     if (wScroll > 500) {
        $('.contact').addClass('show-contact');
     }
});