/*!
* Start Bootstrap - Border-Pass v1.0.0 (undefined)
* Copyright 2013-2021 BITS Marcin Bojar
* Licensed under undefined (https://github.com/StartBootstrap/undefined/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    console.log(
        `Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)`
    );

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on(
        "click",
        function () {
            if (
                location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    anime({
                        targets: "html, body",
                        scrollTop: target.offset().top - 54,
                        duration: 1000,
                        easing: "easeInOutExpo",
                    });
                    return false;
                }
            }
        }
    );

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 54,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        var isMenuOpen = $("#navbarResponsive").hasClass("show");
        if ($("#mainNav").offset().top > 100 || isMenuOpen) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).on("scroll", navbarCollapse);

    $(".navbar-toggler").on("click", function () {
        var isMenuOpen = $("#navbarResponsive").hasClass("show");
        if (!isMenuOpen) {
            $(".navbar.navbar-expand-lg").addClass("navbar-shrink");
        } else {
            if ($("#mainNav").offset().top < 100)
                setTimeout(function () {
                    $(".navbar.navbar-expand-lg").removeClass("navbar-shrink");
                }, 245);
        }
    });

    $(".badge-button").on("click", function () {
        if (this.id === "android") {
            $("#ios-instructions").removeClass("show");
            $("#android-instructions").toggleClass("show");
        } else if (this.id === "ios") {
            $("#android-instructions").removeClass("show");
            $("#ios-instructions").toggleClass("show");
        }
        anime({
            targets: "html, body",
            scrollTop: $(this).offset().top - 54,
            duration: 500,
            easing: "easeInExpo",
        });
    });
})(jQuery); // End of use strict
