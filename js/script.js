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