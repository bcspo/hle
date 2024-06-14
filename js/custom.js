$(function () {

    const h = $('.y_img').height();

    $('#content').fullpage({
        afterLoad: function (e, idx) {
            $(".y_img").animate({ top: -(h / 7 * (idx - 1)) }, 1500)
        }
    });

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