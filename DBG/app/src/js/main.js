import $ from 'jquery';
import 'webp-in-css/polyfill';
import 'slick-carousel';
window.$ = $;
window.jQuery = $;

document.addEventListener('DOMContentLoaded', () => {

  // init Isotope
  var $grid = $('.DBG__wrap-item').isotope({
    itemSelector: '.DBG__wrap-item__block',
    layoutMode: 'fitRows',
  });

  // bind filter button click
  $('#DGB_filters').on( 'click', '.DBG__wrap-menu__nav-li', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // slick-slider

    $('#DBG__myslider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1054,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


    // $('#DBG__myslider').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    //   asNavFor: '#DBG__myslider-nav-ul'
    // });
    // $('#DBG__myslider-nav-ul').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   asNavFor: '#DBG__myslider',
    //   dots: true,
    //   centerMode: true,
    //   focusOnSelect: true
    // });

  
});