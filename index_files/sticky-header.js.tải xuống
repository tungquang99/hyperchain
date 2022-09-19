jQuery(document).ready(function () {
    "use strict";

    let prNavScroll = jQuery('#pr-nav');
    let swScrollTop = false;
    let swScrollTopShow = false;
    let swScrollTopAnim = false;
    let scrollTopPosition = 0;

    jQuery(window).on('scroll', function () {

        scrollTopPosition = jQuery(document).scrollTop();

        if (swScrollTop === false) {
            if (scrollTopPosition >= 80) {
                prNavScroll.addClass('navbar-fixed');
                swScrollTop = true;
            }
        }

        if (swScrollTop === true) {
            if (scrollTopPosition < 80) {
                prNavScroll.removeClass('navbar-fixed');
                swScrollTop = false;
            }
        }

        if (swScrollTopAnim === false) {
            if (scrollTopPosition >= 250) {
                prNavScroll.addClass('navbar-fixed-anim');
                swScrollTopAnim = true;
            }
        }

        if (swScrollTopAnim === true) {
            if (scrollTopPosition < 250) {
                prNavScroll.removeClass('navbar-fixed-anim');
                swScrollTopAnim = false;
            }
        }

        if (swScrollTopShow === false) {
            if (scrollTopPosition >= 1000) {
                prNavScroll.addClass('navbar-fixed-show');
                swScrollTopShow = true;
            }
        }

        if (swScrollTopShow === true) {
            if (scrollTopPosition < 1000) {
                prNavScroll.removeClass('navbar-fixed-show');
                swScrollTopShow = false;
            }
        }

    });

});