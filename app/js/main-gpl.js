jQuery(document).ready(function () {
    new WOW().init();


    /*if (jQuery('.section3__items').visible(true)) {
        jQuery('.section3__item-number').each(function () {
            var jQuerythis = jQuery(this),
                countTo = jQuerythis.attr('data-count');
            jQuery({countNum: jQuerythis.text()}).animate({
                    countNum: countTo
                },
                {
                    duration: 1000,
                    easing: 'linear',
                    step: function () {
                        jQuerythis.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        jQuerythis.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
    }*/


    /*var ignoreScroll = false;
    jQuery(window).scroll(function () {
        if (ignoreScroll) return;
        if (jQuery('.section3__items').visible(true)) {
            // jQuery(window).unbind('scroll');
            ignoreScroll = true;

            setTimeout(function(){
                ignoreScroll = false;
            }, 2000);

            jQuery('.section3__item-number').each(function () {
                var jQuerythis = jQuery(this),
                    countTo = jQuerythis.attr('data-count');
                jQuery({countNum: jQuerythis.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: 1000,
                        easing: 'linear',
                        step: function () {
                            jQuerythis.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            jQuerythis.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
        }
    });*/


    jQuery("#owl1").owlCarousel({
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            1140: {
                items: 1
            }
        }
    });

    jQuery("#owl2").owlCarousel({
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 2,
                margin: 20
            },
            1140: {
                items: 1
            }
        }
    });

    jQuery('.sectionab4__item-circle').circleProgress({
        value: 0,
        size: 200,
        thickness: 10,
        emptyFill: "#df7620",
        fill: "#ffffff",
        reverse: true,
        startAngle: -Math.PI / 2
    });

    jQuery('.sectionab4__item-circle-mob').circleProgress({
        value: 0,
        size: 130,
        thickness: 7,
        emptyFill: "#df7620",
        fill: "#ffffff",
        reverse: true,
        startAngle: -Math.PI / 2
    });


    if (jQuery('.sectionab4__items').visible(true)) {
        jQuery('#circle-1').circleProgress({
            value: 0.95,
            size: 200,
            thickness: 10,
            emptyFill: "#df7620",
            fill: "#ffffff",
            reverse: true,
            startAngle: -Math.PI / 2
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
        });
        jQuery('#circle-1-mob').circleProgress({
            value: 0.95,
            size: 130,
            thickness: 7,
            emptyFill: "#df7620",
            fill: "#ffffff",
            reverse: true,
            startAngle: -Math.PI / 2
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
        });

        jQuery('#circle-2').circleProgress({
            value: 0.9,
            size: 200,
            thickness: 10,
            emptyFill: "#df7620",
            fill: "#ffffff",
            reverse: true,
            startAngle: -Math.PI / 2
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
        });
        jQuery('#circle-2-mob').circleProgress({
            value: 0.9,
            size: 130,
            thickness: 7,
            emptyFill: "#df7620",
            fill: "#ffffff",
            reverse: true,
            startAngle: -Math.PI / 2
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
        });

        jQuery('#circle-3').circleProgress({
            value: 0.9,
            size: 200,
            thickness: 10,
            emptyFill: "#df7620",
            fill: "#ffffff",
            reverse: true,
            startAngle: -Math.PI / 2
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
        });
        jQuery('#circle-3-mob').circleProgress({
            value: 0.9,
            size: 130,
            thickness: 7,
            emptyFill: "#df7620",
            fill: "#ffffff",
            reverse: true,
            startAngle: -Math.PI / 2
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
        });

        jQuery('#circle-4').circleProgress({
            value: 0.95,
            size: 200,
            thickness: 10,
            emptyFill: "#df7620",
            fill: "#ffffff",
            reverse: true,
            startAngle: -Math.PI / 2
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
        });
        jQuery('#circle-4-mob').circleProgress({
            value: 0.95,
            size: 130,
            thickness: 7,
            emptyFill: "#df7620",
            fill: "#ffffff",
            reverse: true,
            startAngle: -Math.PI / 2
        }).on('circle-animation-progress', function (event, progress, stepValue) {
            jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
        });
    } else {
        var ignoreScroll = false;
        jQuery(window).scroll(function () {
            if (ignoreScroll) return;
            if (jQuery('.sectionab4__items').visible(true)) {
                // jQuery(window).unbind('scroll');
                ignoreScroll = true;

                /*setTimeout(function(){
                    ignoreScroll = false;
                }, 2000);*/

                jQuery('#circle-1').circleProgress({
                    value: 0.95,
                    size: 200,
                    thickness: 10,
                    emptyFill: "#df7620",
                    fill: "#ffffff",
                    reverse: true,
                    startAngle: -Math.PI / 2
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
                });
                jQuery('#circle-1-mob').circleProgress({
                    value: 0.95,
                    size: 130,
                    thickness: 7,
                    emptyFill: "#df7620",
                    fill: "#ffffff",
                    reverse: true,
                    startAngle: -Math.PI / 2
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
                });

                jQuery('#circle-2').circleProgress({
                    value: 0.9,
                    size: 200,
                    thickness: 10,
                    emptyFill: "#df7620",
                    fill: "#ffffff",
                    reverse: true,
                    startAngle: -Math.PI / 2
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
                });
                jQuery('#circle-2-mob').circleProgress({
                    value: 0.9,
                    size: 130,
                    thickness: 7,
                    emptyFill: "#df7620",
                    fill: "#ffffff",
                    reverse: true,
                    startAngle: -Math.PI / 2
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
                });

                jQuery('#circle-3').circleProgress({
                    value: 0.9,
                    size: 200,
                    thickness: 10,
                    emptyFill: "#df7620",
                    fill: "#ffffff",
                    reverse: true,
                    startAngle: -Math.PI / 2
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
                });
                jQuery('#circle-3-mob').circleProgress({
                    value: 0.9,
                    size: 130,
                    thickness: 7,
                    emptyFill: "#df7620",
                    fill: "#ffffff",
                    reverse: true,
                    startAngle: -Math.PI / 2
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
                });

                jQuery('#circle-4').circleProgress({
                    value: 0.95,
                    size: 200,
                    thickness: 10,
                    emptyFill: "#df7620",
                    fill: "#ffffff",
                    reverse: true,
                    startAngle: -Math.PI / 2
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
                });
                jQuery('#circle-4-mob').circleProgress({
                    value: 0.95,
                    size: 130,
                    thickness: 7,
                    emptyFill: "#df7620",
                    fill: "#ffffff",
                    reverse: true,
                    startAngle: -Math.PI / 2
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    jQuery(this).find('strong').text(stepValue.toFixed(2).substr(2) + '%');
                });

            }
        });
    }


    jQuery(function () {
        jQuery(".sectionab2__images").twentytwenty({
            default_offset_pct: 0.5, // How much of the before image is visible when the page loads
            orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
            before_label: '', // Set a custom before label
            after_label: '', // Set a custom after label
            no_overlay: true, //Do not show the overlay with before and after
            move_slider_on_hover: false, // Move slider on mouse hover?
            move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
            click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
        });
    });

    jQuery(function () {
        jQuery(".sectionab2__images-mob").twentytwenty({
            default_offset_pct: 0.5, // How much of the before image is visible when the page loads
            orientation: 'horizontal', // Orientation of the before and after images ('horizontal' or 'vertical')
            before_label: '', // Set a custom before label
            after_label: '', // Set a custom after label
            no_overlay: true, //Do not show the overlay with before and after
            move_slider_on_hover: false, // Move slider on mouse hover?
            move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
            click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
        });
    });

    /*var el = jQuery('#circle-1'),
        inited = false;

    el.appear({ force_process: true });

    el.on('appear', function() {
        if (!inited) {
            el.circleProgress({
                value: 0.75,
                size: 200,
                thickness: 10,
                emptyFill: "#df7620",
                fill: "#ffffff"
            });
            inited = true;
        }
    });*/

    var $timeline_block = jQuery('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function () {
        if (jQuery(this).offset().top > jQuery(window).scrollTop() + jQuery(window).height() * 0.75) {
            jQuery(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    jQuery(window).on('scroll', function () {
        $timeline_block.each(function () {
            if (jQuery(this).offset().top <= jQuery(window).scrollTop() + $(window).height() * 0.75 && jQuery(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                jQuery(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});
