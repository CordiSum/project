import 'webp-in-css/polyfill';

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
  
});