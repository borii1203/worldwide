$(function () {
    $('.header_wrap').load('common/header.html')
    $('.footer').load('common/footer.html')


    var swiper = new Swiper(".bestSwiper", {
        slidesPerView: 1.6,
        spaceBetween: 40,
        breakpoints: {
            550: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4.4,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 35,
            },
        },

    });

    var swiper = new Swiper(".itemSwiper", {
        slidesPerView: 2.1,
        spaceBetween: 40,
        breakpoints: {
            550: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
    });
});//scirpt end