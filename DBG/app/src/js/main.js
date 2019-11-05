import 'webp-in-css/polyfill';

document.addEventListener('DOMContentLoaded', () => {

// init Isotope
var $grid = $('.DBG__wrap-item').isotope({
  itemSelector: '.DBG__wrap-item__block',
  layoutMode: 'fitRows',
});

// bind filter button click
$('#filters').on( 'click', '.DBG__wrap-menu__nav-li', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', '.DBG__wrap-menu__nav-li', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.DBG__wrap-menu__nav-li', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
});