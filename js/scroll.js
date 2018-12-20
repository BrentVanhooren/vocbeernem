jQuery(document).ready(function() {
    console.log(window.location.pathname);

    if ( window.location.pathname == '/' ){
        // Index (home) page
        var scrollLink = jQuery('.nav-link');

        // Smooth scrolling
        scrollLink.click(function(e) {
            e.preventDefault();
            jQuery('body,html').animate({
                scrollTop: jQuery(this.hash).offset().top
            }, 1500 );
        });

        // Active classe link verandering
        jQuery(window).scroll(function() {
            var scrollbarLocation = jQuery(this).scrollTop();

            scrollLink.each(function() {

                var sectionOffset = jQuery(this.hash).offset().top - 20;

                if ( sectionOffset <= scrollbarLocation ) {
                    jQuery(this).parent().addClass('active');
                    jQuery(this).parent().siblings().removeClass('active');
                }
            })
        })
    } else {
        // andere pagina
    }
});