// Скрипт используется для изменения стилей фиксированной шапки при скролле.
// Если скролл больше 50, то добавляется класс scroll.
// Если скролл меньше 100, то добавляется класс scroll-top.

$(document).ready(function() {
    var menu = $(".header__body");  // Поменять на класс фиксированной шапки.
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if ( top >= 50 ) {
            menu.removeClass('scroll-top').addClass('scroll');
        }
        else if ( top <= 100 ) {
            menu.removeClass('scroll').addClass('scroll-top');
        }
    });
});