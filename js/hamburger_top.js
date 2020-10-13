// to top btn

$(function () {
    $('#go_top').click(function (e) {
        // preventDefault-->讓<a>連結功能取消
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 750);
        // 750是速度

    });

});


// 漢堡

$(function () {




    // 漢堡

    // hamburger icon 的切換
    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
    });

    $("button.hamburger").on("click", function () {
        $('body').toggleClass("scroll_disable");
    });

});


// function scrollDisable() {
//     $("body").css("overflow", "hidden")

// }

// ----------------
$(function () {

    // 點擊按鈕，選單縮放
    $("button.btn_switch").on("click", function () {
        $("nav.header_nav").slideToggle();
    });

});

// ------------
$(function () {

    $('ul.header_nav_list > li:first-child').click(function () {
        $('div.style_package').slideToggle();
        $('ul.header_nav_list>li:first-child>a>.fas').toggleClass('rotate');
    });

    $('ul.header_nav_list > li:nth-child(2)').click(function () {
        $('div.product_package').slideToggle();
        $('ul.header_nav_list>li:nth-child(2)>a>.fas').toggleClass('rotate');
    });

});


