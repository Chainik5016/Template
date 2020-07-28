@@include("app.js")

$(document).ready(function() {
    $('.icon-menu').click(function(event) {
        $('.icon-menu,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});