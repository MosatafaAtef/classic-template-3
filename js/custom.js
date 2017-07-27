/*global $, console*/
$(function () {
    'use strict';
    // add event to list for chang class active 
    $('.list li').click(function () {

        $(this).addClass('active-li').siblings('li').removeClass('active-li');

    });

    // make background on dimantion

    $(window).resize(function () {

        $('.header').height($(window).height());

        $('.bxslider').css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

    });

    // to make background rander on website load

    $('.header').height($(window).height());

    // lanch the plugins for sliders

    $('.bxslider').bxSlider({

        pager: false,

        auto: true

    });
    //center li for slider 

    $('.bxslider').css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

    // smoth scroll to any section

    $('.list ul li').click(function () {

        console.log($(this).data('value'));

        $('body, html').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top - 50

        }, 1000);

    });

    // make testimonials fade slider 

    (function autoSlider() {


        $('.testimon .slider .active').each(function () {

            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active').next().addClass('active').fadeIn(1000);

                    autoSlider();
                });


            } else {

                $(this).delay(3000).fadeOut(1000, function () {

                    $(this).removeClass('active');

                    $('.slider div').eq(0).addClass('active').fadeIn(1000);

                    autoSlider();

                });
            }
        });
    }());

    // adjust shuffel library 

    $('#Container').mixItUp();

    // add active-li class

    $('.portfolio ul li').click(function () {

        $(this).addClass('active-li').siblings().removeClass('active-li');

    });

    // scroll to top bottom

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 800) {

            $('.scroll').css('display', 'block');

        } else {

            $('.scroll').css('display', 'none');

        }

    });

    $('.scroll').click(function () {

        $('body, html').animate({

            scrollTop: 0

        }, 1200);

    });

    // nice scroll plugin

    $('html').niceScroll({

        cursorcolor: '#1abc9c',

        cursorwidth: '10px',

        cursorborder: '1px solid #1abc9c',

        cursorborderradius: 0,

        zindex: [5],

        scrollspeed: '80'
    });

    // responsive button to show links 

    $('#drop-screen').click(function () {

        $('nav .list').toggleClass('hide');

    });
});
