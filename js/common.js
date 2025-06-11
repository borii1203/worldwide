$(function () {
    let prevScrollBar = 0;

    $(window).on('scroll', function () {
        let scrollBar = $(window).scrollTop();

        if (scrollBar > prevScrollBar) {
            $('.header_wrap').addClass('scroll_up');
        } else {
            $('.header_wrap').removeClass('scroll_up');
        }

        prevScrollBar = scrollBar;
    });//배너 스크롤 시에 사라지게

    $('.header .nav_wrap .gnb > li').on('mouseenter', function () {
        $(this).find('.subMenu_wrap').addClass('open')
    }).on('mouseleave', function () {
        $(this).find('.subMenu_wrap').removeClass('open')
    });//2차 메뉴 열림

    $('.search_ico').on('click', function () {
        $('.search_box').show();
    });//검색박스 열림

    $('.close_btn').on('click', function () {
        $('.search_box').hide();
    })//검색박스 닫힘
});//script end