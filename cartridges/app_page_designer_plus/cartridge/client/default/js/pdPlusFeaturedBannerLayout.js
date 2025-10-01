'use strict';

$(document).ready(function () {
    var bannerOffsetTop = $(".banner-content").offset().top;

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > bannerOffsetTop) {
            $(".is-sticky").addClass("sticky-active");
        } else {
            $(".is-sticky").removeClass("sticky-active");
        }
    });

    $(".openBtn").on("click", function () {
        $("body").addClass("modal-open");
        $(".overlay-modal").addClass("active");
    });

    $(".overlay-banner").on("click", function () {
        $("body").removeClass("modal-open");
        $(".overlay-modal").removeClass("active");
    });
});

// $(window).scroll(reOrder)
// $(window).resize(reOrder)

// function reOrder() {
//     var mq = window.matchMedia("(min-width: 768px)");
//     if (mq.matches) {
//         $('.banner-content').addClass('customm');

//         var scroll = $(window).scrollTop(),
//             topContent = $('.one').position().top - 25,
//             sectionHeight = $('.left').height(),
//             rightHeight = $('.right-child').height(),
//             bottomContent = topContent + sectionHeight - rightHeight - 45;

//         if (scroll > topContent && scroll < bottomContent) {
//             $('.customm').removeClass('posAbs').addClass('posFix');
//         } else if (scroll > bottomContent) {
//             $('.customm').removeClass('posFix').addClass('posAbs');
//         } else if (scroll < topContent) {
//             $('.customm').removeClass('posFix');
//         }
//     } else {
//         $('.right-child').removeClass('customm posAbs posFix');
//         $('.right-child h2').text("fixed")
//     }
// }