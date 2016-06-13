$(document).ready(function () {
    $('a').click(function(){
        var link = $( this );
        var timeout = false;
        if( $.attr(this, 'href') )
        {
            var href = $( link ).attr('href');
            console.log(href);
            if( $( link ).hasClass( 'fly' ) ) {
                $( href ).toggleClass( 'flied' );
            }
            $('html, body').animate({
                scrollTop: $( href ).offset().top - 75
            }, 400, "swing", function () {
                if(!timeout) $( href + ' .more-text').slideToggle();
                timeout = setTimeout(function () {
                    timeout = false;
                }, 500)
            });
            return false;
        }
    });
});
