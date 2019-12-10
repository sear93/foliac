$(function () {
    $('.toggles button').click(function () {
        var get_id = this.id;
        var get_current = $('.cards .' + get_id);

        $('.project').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#all').click(function () {
        $('.project').show(500);
    });
});

// $(document).ready(function () {

//     (function ($) {

//         $('#menu__toggle').click(function (e) {
//             e.preventDefault();
//             $('body').toggleClass('page-overlay');
//         });

//         $('.page-overlay').click(function (e) {
//             $('body').removeClass('page-overlay');
//         });

//     })(jQuery);

// });


$(document).ready(function () {
    $("a[href^='#']").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1200);
        return false;
    });
});