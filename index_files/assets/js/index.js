jQuery(document).ready(function () {
    "use strict";

    /**
     * Search form
     */
    let btnDelete = document.getElementById('clear');
    let primaryNav = document.getElementById('pr-nav');
    let primaryMenu = document.getElementById('primary-menu');
    let inputFocus = document.getElementById('inputFocus');
    let magicSearch = document.getElementById('magic-search');

    document.addEventListener('click', function (e) {
        if (document.getElementById('first').contains(e.target) && !btnDelete.contains(e.target)) {
            inputFocus.classList.add('isFocus');
            magicSearch.classList.add('focus-search');
            primaryNav.classList.add('search-open');
            primaryMenu.classList.add('search-open');
            inputFocus.focus();
        } else {
            // Clicked outside the input
            inputFocus.value = '';
            inputFocus.classList.remove('isFocus');
            magicSearch.classList.remove('focus-search');
            primaryNav.classList.remove('search-open');
            primaryMenu.classList.remove('search-open');
        }
    });

    let dropdownSwitcher;
    let dropdownMenus = jQuery('.dropdown');
    let dropdownMenusUl = jQuery('.dropdown-menu');
    let prNav = jQuery('#pr-nav');
    let prMenu = jQuery('#primary-menu');
    let mTglIcon = jQuery('#m-tgl-icon');
    let pageBody = jQuery('body');
    let nBC1 = jQuery('#navbarColor01');

    /**
     * Mobile menu
     */
    jQuery(window).on('resize', function () {
        mobileScriptsToggle();
        hideMobileMenuResizing();
    });

    function hideMobileMenuResizing() {
        if (window.matchMedia('(min-width: 1200px)').matches) {
            if (prNav.hasClass('open-pr-nav')) {
                jQuery('#mobile-toggle').click();
            }
        }
    }

    function mobileScriptsToggle() {
        dropdownSwitcher = window.matchMedia('(max-width: 1199px)').matches;
    }

    mobileScriptsToggle();

    // Add slideDown animation to Bootstrap dropdown when expanding.
    dropdownMenus.on('show.bs.dropdown', function () {
        if (dropdownSwitcher) {
            jQuery(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
        }
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    dropdownMenus.on('hide.bs.dropdown', function () {
        if (dropdownSwitcher) {
            jQuery(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function () {
                jQuery(this).css('display', '');
            });
        }
    });


    // Prevent dropdown-menu from misclicking during transition.
    dropdownMenusUl.on('transitionstart', function () {
        if (!dropdownSwitcher) {
            jQuery(this).css('pointer-events', 'none');
        }
    });

    dropdownMenusUl.on('transitionend', function () {
        if (!dropdownSwitcher) {
            jQuery(this).css('pointer-events', 'all');
        }
    });

    dropdownMenus.hover(function () {
        if (!dropdownSwitcher) {
            jQuery(this).addClass('f-drop-tr-open');
        }
    }, function () {
        if (!dropdownSwitcher) {
            jQuery(this).removeClass('f-drop-tr-open');
        }
    });


    jQuery(document).on('click', '#pr-nav .dropdown-menu', function (e) {
        e.stopPropagation();
    });

    nBC1.on('show.bs.collapse', function () {
        magicFullHeight();
        mTglIcon.toggleClass('open');
    });

    nBC1.on('shown.bs.collapse', function () {
        prNav.toggleClass('open-pr-nav');
        pageBody.css('overflow', 'hidden');
    });

    nBC1.on('hide.bs.collapse', function () {
        mTglIcon.toggleClass('open');
        pageBody.css('overflow', 'auto');
        prNav.toggleClass('open-pr-nav');
    });

    nBC1.on('hidden.bs.collapse', function () {
        prMenu.css('padding-bottom', '0');
    });

    function magicFullHeight() {
        let prNavHeight = nBC1.height();
        let wH = window.innerHeight;
        if (wH > prNavHeight) {
            prMenu.css('padding-bottom', (wH - prNavHeight - 54) + 'px');
        }
    }
});