// $(document).ready(function () {
//     $('div.facet_open > h4').lick(function () {
//         $('div.facet_attributes > ul').slideToggle()
//     });
// })

$(function () {

    $(window).resize(function () {
        if (window.innerWidth > 1130) {

            //$('.drop_down').css('display', 'block');
            //$('.drop_down').addClass("no_display");
            $('div.facet_open > h4').removeClass('h4_click');
        }
    })

    $('.slid_down_1').click(function () {
        if (window.innerWidth < 1130) {
            $('div.facet_open > h4').removeClass('h4_click');
            $('.size').slideToggle();
            $(this).toggleClass('h4_click');
        }
    });

    $('.slid_down_2').click(function () {
        if (window.innerWidth < 1130) {
            $('div.facet_open > h4').removeClass('h4_click');
            $('.material').slideToggle();
            $(this).toggleClass('h4_click');
        }
    });

    $('.slid_down_3').click(function () {
        if (window.innerWidth < 1130) {
            $('div.facet_open > h4').removeClass('h4_click');
            $('.color').slideToggle();
            $(this).toggleClass('h4_click');
        }
    });



});

// -------------------
// 商品控制按鈕
$(document).ready(function () {
    let slideCount = $("div.product>ul>li").length;
    // alert(slideCount);

    // 左鍵
    $("#pre").click(function () {
        let liWidth = parseInt($("div.product>ul>li").width() + 20);

        let currentLeft = $("div.product > ul").css("left");
        // alert(currentLeft);
        $("div.product > ul").animate({
            left: parseInt(currentLeft) - liWidth
        });
    });

    // 右鍵
    $("#next").click(function () {
        let liWidth = parseInt($("div.product>ul>li").width() + 20);

        let currentLeft = $("div.product > ul").css("left");
        // alert(currentLeft);
        $("div.product > ul").animate({
            left: parseInt(currentLeft) + liWidth
        });
    });
});

