'use strict';

/**
 * Mega Menu Header
 */

$(document).ready(function () {
    var productsBtn = $(".top-menu");
    var megaMenuWrapper = $(".menu-group");
    var rootCategoriesWrapper = $(".navbar-nav");
    var rootCategory = $(".nav-item");
    var subCategoriesWrapper = $(".sub-menu-wrapper");
    var categoryTitle = $(".sub-menu-category-title");

    // Show root categories menu on hover
    if(productsBtn.length){
        productsBtn.hover(function () {
            rootCategoriesWrapper.fadeIn();
        });
    }

    // Show subcategories on root category nav item hover
    if(rootCategory.length){
        rootCategory.hover(function () {
            subCategoriesWrapper.show();

            // Display category name as title on right panel
            categoryTitle.html($(this).attr("data-category"));
        });
    }

    // Hide mega menu on mouseleave
    if(megaMenuWtapper.length){
        megaMenuWrapper.mouseleave(function () {
            rootCategoriesWrapper.hide();
            subCategoriesWrapper.hide();
        });
    }

});