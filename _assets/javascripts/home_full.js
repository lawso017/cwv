$(document).ready(wrapResize);
$(window).resize(wrapResize);

function wrapResize (){
    var nav = $('.navbar');
    var full = $('#header-full');
    var bottom = $('.wrap-dark-color');

    var sizeTop = nav.offset().top + nav.height();
    var sizeWrap = $(window).height() - sizeTop - bottom.height();
    wrap.css('min-height', sizeWrap + "px");
}
