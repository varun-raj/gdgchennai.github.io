

$( document ).ready(function() {
     $("html, body").animate({ scrollTop: 0 });
});


$(function () {
    $('.curtains').curtain({
        scrollSpeed:1000,
       
    });
});


  $(function(){
      $(".typed").typed({
        strings: ["code", "hack", "invent", "geek out", "grab a drink", "create", "break stuff"],
        typeSpeed: 50,
         backDelay: 1000, // pause before backspacing
            loop: true,
      });
  });