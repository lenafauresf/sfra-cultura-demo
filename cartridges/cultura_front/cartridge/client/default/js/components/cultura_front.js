'use strict';

/**
 * Mega Menu Header
 */

$(document).ready(function () {

    // Show / Hide on hover
    $(".top-menu").hover(function () {
        $(".navbar-nav").fadeIn();
    });

    $(".dropdown-item").mouseout(function () {
        $(".dropdown-item").show();
    });

    $(".nav-item").hover(function () {
        $(".sub-menu-wrapper").show();

        // Display category name as title on right panel
        var categoryTitle = $(".sub-menu-category-title");
        categoryTitle.html($(this).attr("data-category"));
    });

    $(".sub-menu-wrapper").mouseleave(function () {
        $(".sub-menu-wrapper").hide();
    });

    $(".menu-group").mouseleave(function () {
        $(".navbar-nav").hide();
        $(".sub-menu-wrapper").hide();
    });

});