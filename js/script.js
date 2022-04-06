/*global $,document,window*/
$(document).ready(function () {
    
    "use strict";

    $(".carousel").carousel({
        
        interval: 3000
    });

     // Show Color Option Div When Click On The Gear

    $(".gear-check").click(function () {

        $(".color-option").fadeToggle(600);

    });

     // Change Theme Color On Click By Custom Attr 'data-value'
    var colorLi = $(".color-option ul li"),
        scrollBotton = $(".scroll-top");

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "purple").end()
        .eq(2).css("backgroundColor", "#35477D").end()
        .eq(3).css("backgroundColor", "#90AEFF").end()
        .eq(4).css("backgroundColor", "#0895D1");

    colorLi.click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });

    //Loading Screen

    $(window).on("load", function () {

        $(".loading-overlay .spinner").fadeOut(
            2000,
            function () {
                $("body").css("overflow", "auto");
                $(this).parent().fadeOut(
                    2000,
                    function () {
                        $(this).remove();
                    }
                );
            }
        );
    });

//Caching The Scroll Top Element

    $(window).scroll(function () {

        // $(this).scrollTop() >= 700 ? scrollBotton.fadeIn(1000):scrollBotton.fadeOut(500);

        if ($(this).scrollTop() >= 700) {
            scrollBotton.fadeIn(1000);
        } else {
            scrollBotton.fadeOut(500);
        }
    });

    //Click On Botton To Scroll Top

    scrollBotton.on("click", function () {

        $("html,body").animate({scrollTop: 0}, 900);

    });

});
