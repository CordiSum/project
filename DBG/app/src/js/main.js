import $ from 'jquery';
import 'webp-in-css/polyfill';
import 'slick-carousel';
window.$ = $;
window.jQuery = $;

$(window).on('load', function () {
  var $preloader = $('#DBG__education'),
      $svg_anm   = $preloader.find('.DBG__loading');
  $svg_anm.fadeOut();
  $preloader.delay(350).fadeOut('slow');
});

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


});