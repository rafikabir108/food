$('.popular_items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="left_arrow"><i class="fa-solid fa-angle-left"></i></a>',
    nextArrow: '<a href="#" class="right_arrow"><i class="fa-solid fa-angle-right"></i></a>',
    responsive : [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
                autoplay: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                autoplay: true,
            }
        }
    ]
});

$('.search_items').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="left_arrow"><i class="fa-solid fa-angle-left"></i></a>',
    nextArrow: '<a href="#" class="right_arrow"><i class="fa-solid fa-angle-right"></i></a>',
    autoplay: false,
    responsive : [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
                autoplay: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                autoplay: false,
            }
        }
    ]
});


AOS.init();