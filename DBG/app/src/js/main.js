import 'webp-in-css/polyfill';

document.addEventListener('DOMContentLoaded', () => {

    // init Isotope
var $grid = $('.DBG__wrap-item').isotope({
    itemSelector: '.DBG__wrap-item__block',
    layoutMode: 'fitRows',
    getSortData: {
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });  
  
  // bind filter button click
  $('#filters').on( 'click', '.DBG__wrap-menu__nav-button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  
  // change is-checked class on buttons
  $('.DBG__wrap-menu__nav').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.DBG__wrap-menu__nav-button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});