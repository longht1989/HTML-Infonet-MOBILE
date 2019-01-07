/* ====================================
   Onload functions
   ==================================== */

$(function() {
    //lazy load images
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    var myLazyLoad = new LazyLoad({
        elements_selector: ".story__thumb img , .lazyload"
    });
    // toggle header search
    $('.btn-menu').click(function() {
        $(this).toggleClass('is-active');
        $('.btn-search').removeClass('is-active');
        $('.mobile-search').slideUp('fast');
        $(".mobile-menu").slideToggle('fast');
    });
    // toggle header search
    $('.btn-search').click(function() {
        $(this).toggleClass('is-active');
        $('.btn-menu').removeClass('is-active');
        $('.mobile-menu').slideUp('fast');
        $(".mobile-search").slideToggle('fast');
    });
    // affix navigator
    $('.site-header__content').affix({
        offset: {
            top: $(".site-header__content").outerHeight()
        }
    })
    // go top 
    $(".sprite-gotop").click(function() {
        return $("body,html").animate({ scrollTop: 0 }, 800), !1
    });
    $(document).scroll(function() {
        $(document).scrollTop() > 0 ? $("#gotop").fadeIn() : $("#gotop").hide()
    });
    // add class for story has gif image
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    $('.story__thumb img[data-src$=".gif"]').parents('.story').addClass('story--gif');
    $(".mobile-menu .menu .sprite-more ").on('click', function() {
        $(this).toggleClass('is-active');
        $(this).siblings(".menu__sub").slideToggle('fast');
    })
});