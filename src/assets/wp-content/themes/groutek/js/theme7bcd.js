"use strict";
var fixed_menu = true;

jQuery(document).ready(function () {
    "use strict";

    //Fader
    var bodytimer = setTimeout(function () {
        jQuery('body').animate({'opacity': '1'}, 500);
        clearTimeout(bodytimer);
    }, 500);

    //Fixed Top Menu
    if (jQuery('.fixed-menu').size() && fixed_menu == true) {
        jQuery('.fixed-menu').append(jQuery('.header_parent_wrap').html());

        jQuery(window).on('scroll', function () {
            if (jQuery('.first-module').hasClass("module_slider") || jQuery('div').hasClass("events_countdown") || jQuery('div').hasClass("portfolio_gallery")) {
                var header_offset = jQuery(window).height() - 80;
            }
            else if (jQuery('.main_header').hasClass('type2') || jQuery('.main_header').hasClass('type3')) {
                var header_offset = jQuery('.header_parent_wrap').offset().top + jQuery('.header_parent_wrap').height();
            }
            else {
                var header_offset = jQuery('.header_parent_wrap').offset().top;
            }
            if (jQuery(window).scrollTop() > header_offset) {
                jQuery('.fixed-menu').addClass('fixed_show');
            } else {
                jQuery('.fixed-menu').removeClass('fixed_show');
            }
        });
    }

    //Top Search Focus
    if (jQuery('.top_search').size() > 0) {
        var $ctsearch = jQuery('#top_search'),
            $ctsearchinput = $ctsearch.find('input.ct-search-input'),
            $tagline_items = jQuery('.cart_btn'),
            $body = jQuery('html,body'),
            openSearch = function () {
                $ctsearch.data('open', true).addClass('ct-search-open');
                $tagline_items.hide();
                $ctsearchinput.focus();
                return false;
            },
            closeSearch = function () {
                $ctsearch.data('open', false).removeClass('ct-search-open');
                $tagline_items.css({'display': 'inline-block'});
            };
        $ctsearchinput.on('click', function (e) {
            e.stopPropagation();
            $ctsearch.data('open', true);
        });
        $ctsearch.on('click', function (e) {
            e.stopPropagation();
            if (!$ctsearch.data('open')) {
                openSearch();
                $body.off('click').on('click', function (e) {
                    closeSearch();
                });
            }
            else {
                if ($ctsearchinput.val() === '') {
                    closeSearch();
                    return false;
                }
            }
        });
    }

    // Magnific Popup
    if (jQuery('.photozoom').size() > 0) {
        if (jQuery('.photozoom').parents('.photo_gallery').hasClass('photo_gallery')) {
            jQuery('.photo_gallery').each(function () {
                jQuery(this).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true
                    },
                    iframe: {
                        markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>'
                    },
                    callbacks: {
                        markupParse: function (template, values, item) {
                            values.title = item.el.attr('title');
                        }
                    }
                });
            });
        } else {
            jQuery('.photozoom').magnificPopup({type: 'image'});
        }
    }

    //Post hover info position
    jQuery('.featured_items .item .gallery_item_wrapper, .featured_items .item .img_block, .featured_posts .item .img_block, .shop_list_item .item .img_block,	div.images .img_block').hover(function () {
        var wrap_h = jQuery(this).height(),
            post_info_block = jQuery(this).find('.post_hover_info');

        jQuery(post_info_block).css({'top': (wrap_h - post_info_block.height()) / 2});
    }, function () {
        var post_info_block = jQuery(this).find('.post_hover_info');

        jQuery(post_info_block).css('top', '60%');
    });

    //Header menu type 2
    jQuery('.top_menu_toggler').on('click', function () {
        jQuery(this).toggleClass("close_toggler")
            .parents('.header_parent_wrap').toggleClass("close_toggler_wrap");
    });

    // Table Info Toggle
    if (jQuery('.module_table_info').size() > 0) {
        jQuery('.table_info_details').on("click", function () {
            jQuery(this).parents('div.table_info_title').next().slideToggle('fast');
            jQuery(this).parents('div.table_info_title').toggleClass('current-section');
        });
        jQuery('.table_info_title.expanded_yes').each(function (index) {
            jQuery(this).next().slideDown('fast');
            jQuery(this).addClass('current-section');
        });
    }

    // MobileMenu
    jQuery('header').append('<a href="javascript:void(0)" class="menu_toggler"></a><div class="mobile_menu_wrapper"><ul class="mobile_menu container"/></div>');
    jQuery('.mobile_menu').html(jQuery('header').find('.menu').html());
    jQuery('.mobile_menu_wrapper').hide();
    jQuery('.menu_toggler').on('click', function () {
        jQuery('.mobile_menu_wrapper').slideToggle(300);
        jQuery(this).toggleClass("close_toggler");
    });
    jQuery('.mobile_menu a').each(function () {
        jQuery(this).addClass("mob_link");
    });
    if (jQuery('.megamenu_wrap').size() > 0) {
        jQuery('.megamenu_wrap a').each(function () {
            jQuery(this).removeClass("mob_link");
        });
    }
    jQuery('.mobile_menu li').find('a').on('click', function () {
        jQuery(this).parent().toggleClass("showsub");
    });
});

jQuery(window).resize(function () {

});

jQuery(window).load(function () {
    "use strict";

});