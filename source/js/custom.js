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
            top: $(".site-header__content").offset().top
        }
    })
    // go top 
    $(".sprite-gotop").click(function() {
        return $("body,html").animate({ scrollTop: 0 }, 800), !1
    });
    $(document).scroll(function() {
        $(document).scrollTop() > 0 ? $("#gotop").fadeIn() : $("#gotop").hide()
    });
    // toggle floating social
    if ($(".article__summary").length > 0) {
        $(window).scroll(function() {
            if ($(window).scrollTop() > $(".article__summary").offset().top) {
                $('.social-floating').show();
            } else {
                $('.social-floating').hide();
            }
        });
    }
    // add class for story has gif image
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
});