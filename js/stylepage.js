
$(function () {


    // 點擊+跳出商品欄

    $('span.bed_cover').click(function () {
        $('span.mirrow_desk > div.point_image').removeClass('show_up');
        $('span.black_desk > div.point_image').removeClass('show_up');
        $('span.green_chair > div.point_image').removeClass('show_up');
        $(`span.bed_cover > div.point_image`).toggleClass('show_up')
    })

    $('span.mirrow_desk').click(function () {
        $('span.bed_cover > div.point_image').removeClass('show_up');
        $('span.black_desk > div.point_image').removeClass('show_up');
        $('span.green_chair > div.point_image').removeClass('show_up');
        $(`span.mirrow_desk > div.point_image`).toggleClass('show_up');
    })

    $('span.black_desk').click(function () {
        $('span.bed_cover > div.point_image').removeClass('show_up');
        $('span.mirrow_desk > div.point_image').removeClass('show_up');
        $('span.green_chair > div.point_image').removeClass('show_up');
        $(`span.black_desk > div.point_image`).toggleClass('show_up');
    })

    $('span.green_chair').click(function () {
        $('span.mirrow_desk > div.point_image').removeClass('show_up');
        $('span.black_desk > div.point_image').removeClass('show_up');
        $('span.bed_cover > div.point_image').removeClass('show_up');
        $(`span.green_chair > div.point_image`).toggleClass('show_up');
    })


    // 點擊小圖切換大圖

    $('ul.click_small > li:nth-child(1)').click(function () {
        $('div.main_pic > div.chang_pic>ul>li').not('div.main_pic > div.chang_pic>ul>li:nth-child(7)').removeClass('pic_show');
        $('div.main_pic > div.chang_pic>ul>li:nth-child(7)').toggleClass('pic_show');
    });

    $('ul.click_small > li:nth-child(2)').click(function () {
        $('div.main_pic > div.chang_pic>ul>li').not('div.main_pic > div.chang_pic>ul>li:nth-child(5)').removeClass('pic_show');
        $('div.main_pic > div.chang_pic>ul>li:nth-child(5)').toggleClass('pic_show');
    });

    $('ul.click_small > li:nth-child(3)').click(function () {
        $('div.main_pic > div.chang_pic>ul>li').not('div.main_pic > div.chang_pic>ul>li:nth-child(4)').removeClass('pic_show');
        $('div.main_pic > div.chang_pic>ul>li:nth-child(4)').toggleClass('pic_show');
    });

    $('ul.click_small > li:nth-child(4)').click(function () {
        $('div.main_pic > div.chang_pic>ul>li').not('div.main_pic > div.chang_pic>ul>li:nth-child(6)').removeClass('pic_show');
        $('div.main_pic > div.chang_pic>ul>li:nth-child(6)').toggleClass('pic_show');
    });

    $('ul.click_small > li:nth-child(5)').click(function () {
        $('div.main_pic > div.chang_pic>ul>li').not('div.main_pic > div.chang_pic>ul>li:nth-child(3)').removeClass('pic_show');
        $('div.main_pic > div.chang_pic>ul>li:nth-child(3)').toggleClass('pic_show');
    });

    $('ul.click_small > li:nth-child(6)').click(function () {
        $('div.main_pic > div.chang_pic>ul>li').not('div.main_pic > div.chang_pic>ul>li:nth-child(2)').removeClass('pic_show');
        $('div.main_pic > div.chang_pic>ul>li:nth-child(2)').toggleClass('pic_show');
    });


})


// -------------------
// 商品控制按鈕
$(document).ready(function () {
    let slideCount = $("div.product>ul>li").length;
    // alert(slideCount);

    // 右鍵
    $("#next").click(function () {
        let divWidth = parseInt($("div.product").width());
        let liWidth = parseInt($("div.product>ul>li").width() + 40);
        let ulWidth = parseInt($("div.product>ul").width());
        // alert(ulWidth);

        let currentLeft = $("div.product > ul").css("left"); //String
        // alert(parseInt(currentLeft));

        if (-parseInt(currentLeft) >= (ulWidth - divWidth - liWidth * 3)) {
            $("div.product > ul").animate({
                left: -(ulWidth - divWidth),
            });
        } else {
            $("div.product > ul").animate({
                left: parseInt(currentLeft) - liWidth * 3
            });
        }


    });

    // 左鍵
    $("#pre").click(function () {
        let divWidth = parseInt($("div.product").width());
        let liWidth = parseInt($("div.product>ul>li").width() + 40);
        let ulWidth = parseInt($("div.product>ul").width());

        let currentLeft = $("div.product > ul").css("left");
        // alert(currentLeft);
        // $("div.product > ul").animate({
        //     left: parseInt(currentLeft) + (liWidth * 3)
        // });

        if (-parseInt(currentLeft) <= (liWidth * 3)) {
            $("div.product > ul").animate({
                left: 0
            });
        } else {
            $("div.product > ul").animate({
                left: parseInt(currentLeft) + (liWidth * 3)
            });
        };
    });
});

