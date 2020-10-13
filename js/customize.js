$(document).ready(function () {



    $('.list').click(function () {
        $(this).next(".scroll_down").slideToggle();
        $(this).children(".fas").toggleClass('rotate');
        $(this).children('span').toggleClass('highlight');


    });




});