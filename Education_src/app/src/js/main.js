import 'webp-in-css/polyfill';
var $ = jQuery.noConflict();

document.addEventListener('DOMContentLoaded', () => {


});

// patform,live-tv collapsible, Education center
jQuery(document).ready(function($) {
    $(document).ready(function() {
        $('.spoiler_links').click(function() {
            $(this).parent().children('div.spoiler_body').slideToggle();
            $(this).children('h2').toggleClass('spoiler-icon-toggle');
            return false;
        });
    });
});
// patform,live-tv collapsible, Education center