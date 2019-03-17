'use strict';

/**
 * Mega Menu Header
 */

$(document).ready(function () {

    // Show root categories menu on hover
    if($(".top-menu").length){
        $(".top-menu").hover(function () {
            $(".navbar-nav").fadeIn();
        });
    }

    // Show subcategories on root category nav item hover
    if($(".nav-item").length){
        $(".nav-item").hover(function () {
            $(".sub-menu-wrapper").show();

            // Display category name as title on right panel
            var categoryTitle = $(".sub-menu-category-title");
            categoryTitle.html($(this).attr("data-category"));
        });
    }

    // Hide mega menu on mouseleave
    if($(".menu-group").length){
        $(".menu-group").mouseleave(function () {
            $(".navbar-nav").hide();
            $(".sub-menu-wrapper").hide();
        });
    }

});