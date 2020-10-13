// banner slider

$(document).ready(function () {


    // divWidth = $('div.banner_slider').width();
    // // alert(divWidth);
    // imgCount = $('li#bannerItem').length;
    // // alert(imgCount);


    // // 增加slider btn
    // for (let i = 0; i < imgCount; i++) {
    //     $('#slider_btn').append(`<li></li>`);
    // }

    // $('#slider_btn li:nth-child(1)').addClass('clickMe');

    // // 圖片li的寬度
    // // $('li.bannerItem').width(divWidth);
    // // ul的寬度
    // // $('ul.banners').width(divWidth * imgCount);

    // // 點擊按鈕後計算圖片ul要推多遠
    // $('#slider_btn li').click(function () {
    //     index = $(this).index();
    //     // alert(index);
    //     $('ul.banners').animate({
    //         left: -divWidth * index,
    //     });

    // });

    // // 點擊按鈕加上click效果，其他去掉

    // $('#slider_btn li').click(function () {
    //     $('#slider_btn li').removeClass('clickMe');
    //     $(this).addClass('clickMe');
    // });

    // $(window).resize(function () {
    //     $('div.banner_slider').width($(window).width());

    //     divWidth = $('div.banner_slider').width() - 1;

    //     $('li.bannerItem').width(divWidth);

    //     imgCount = $('li#bannerItem').length;

    //     // $('ul.banners').width(divWidth * imgCount);

    //     index2 = $('ul#slider_btn .clickMe').index();

    //     $('ul.banners').css({
    //         left: -divWidth * index2,
    //     });
    // });

    // 不點擊3秒後自動播放，直到點擊，再return

    // setInterval(leftSlide, 3000);


    // function leftSlide() {
    //     currentLeft = $('ul.banners').css('left');

    //     if (parseInt(currentLeft) > parseInt(- divWidth * imgCount + divWidth + 10)) {
    //         nextLeft = parseInt(currentLeft) - divWidth;
    //         $('ul.banners').animate({
    //             left: nextLeft,
    //         });
    //         $('#slider_btn > li.clickMe').next().addClass('clickMe');
    //         $('#slider_btn > li.clickMe').prev().removeClass('clickMe');
    //     } else {
    //         $('ul.banners').animate({
    //             left: 0,
    //         });

    //         $('#slider_btn > li').removeClass('clickMe');
    //         $('#slider_btn > li:nth-child(1)').addClass('clickMe');
    //     }
    // }


    // 商品新品&熱門頁籤


    $('#hot').click(function () {
        $('#col_new').addClass('hide');
    });

    $('#new').click(function () {
        $('#col_new').removeClass('hide');
    });




});
