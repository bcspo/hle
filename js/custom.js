$(function () {
    $('#content').fullpage();

    $('#header .utils .lang>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggle();
    });

    $('.slide_p').slick({

        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
})