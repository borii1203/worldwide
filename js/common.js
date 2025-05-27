$(function () {
    $('.header .nav_wrap .gnb > li').on('mouseenter', function () {
        $(this).find('.subMenu_wrap').addClass('open')
    }).on('mouseleave', function () {
        $(this).find('.subMenu_wrap').removeClass('open')
    });//2차 메뉴 열림
});//script end