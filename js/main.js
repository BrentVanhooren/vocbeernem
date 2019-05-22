$(document).ready(function () {
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            scrollDistance: 300, // Distance from top/bottom before showing element (px)
            scrollFrom: 'top', // 'top' or 'bottom'
            scrollSpeed: 300, // Speed back to top (ms)
            easingType: 'linear', // Scroll to top easing (see http://easings.net/)
            animation: 'fade', // Fade, slide, none
            animationSpeed: 200, // Animation in speed (ms)
            scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
            //scrollTarget: false, // Set a custom target element for scrolling to the top
            scrollText: '<i class="fas fa-angle-up"></i>', // Text for element, can contain HTML
            scrollTitle: false, // Set a custom <a> title if required.
            scrollImg: false, // Set true to use image
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647 // Z-Index for the overlay
        });
    });
});
$("#button_kijker").click(function () {
    $("#tekst_kijker").toggleClass("tekst_kijker_minder");
    $(".tekst_button_kijker").toggleClass("d-none");
});
$("#card1").click(function () {
    $(".card-info1").toggleClass("d-none");
    $(".tekst_button_kalender").toggleClass("d-none");
});
$("#card2").click(function () {
    $(".card-info2").toggleClass("d-none");
    $(".tekst_button_kalender").toggleClass("d-none");
});
$("#card3").click(function () {
    $(".card-info3").toggleClass("d-none");
    $(".tekst_button_kalender").toggleClass("d-none");
});
$("#card4").click(function () {
    $(".card-info4").toggleClass("d-none");
    $(".tekst_button_kalender").toggleClass("d-none");
});
$("#card5").click(function () {
    $(".card-info5").toggleClass("d-none");
    $(".tekst_button_kalender").toggleClass("d-none");
});
$("#card6").click(function () {
    $(".card-info6").toggleClass("d-none");
    $(".tekst_button_kalender").toggleClass("d-none");
});

function updateTextInput() {
    var value1 = Number(document.getElementById("range").value);

    if (value1 <= 50) {
        $(".card").show();
    }
    else if (value1 > 50 && value1 <= 150) {
        $(".card").hide();
        $(".december").show();
    }
    else if (value1 > 150 && value1 <= 250) {
        $(".card").hide();
        $(".januari").show();
    }
    else if (value1 > 250 && value1 <= 350) {
        $(".card").hide();
        $(".februari").show();
    }
    else if (value1 > 350 && value1 <= 450) {
        $(".card").hide();
        $(".maart").show();
    }
    else if (value1 > 450 && value1 <= 550) {
        $(".card").hide();
        $(".april").show();
    }
    else if (value1 > 550 && value1 <= 650) {
        $(".card").hide();
        $(".mei").show();
    }
    else if (value1 > 650 && value1 <= 750) {
        $(".card").hide();
        $(".juni").show();
    }
    else if (value1 > 750 && value1 <= 850) {
        $(".card").hide();
        $(".juli").show();
    }
    else if (value1 > 850 && value1 <= 950) {
        $(".card").hide();
        $(".augustus").show();
    }
    else if (value1 > 950 && value1 <= 1050) {
        $(".card").hide();
        $(".september").show();
    }
    else if (value1 > 1050 && value1 <= 1150) {
        $(".card").hide();
        $(".oktober").show();
    }
    else if (value1 > 1150) {
        $(".card").hide();
        $(".november").show();
    }
    document.getElementById('value2').innerHTML = value2;
};

$("#ster_1").click(function () {
    $(".rating_5").removeClass("volle_ster");
    $(".rating_1").addClass("volle_ster");
});
$("#ster_2").click(function () {
    $(".rating_5").removeClass("volle_ster");
    $(".rating_2").addClass("volle_ster");
});
$("#ster_3").click(function () {
    $(".rating_5").removeClass("volle_ster");
    $(".rating_3").addClass("volle_ster");
});
$("#ster_4").click(function () {
    $(".rating_5").removeClass("volle_ster");
    $(".rating_4").addClass("volle_ster");
});
$("#ster_5").click(function () {
    $(".rating_5").removeClass("volle_ster");
    $(".rating_5").addClass("volle_ster");
});

$("#ster_5").click(function () {
    $(".rating_5").removeClass("volle_ster");
    $(".rating_5").addClass("volle_ster");
});

