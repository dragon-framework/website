"use strict";

function scrolled() 
{
    var el_html = document.documentElement;
    var el_body = document.getElementsByTagName('body')[0];
    
    var wScrollTop          = window.pageYOffset || el_body.scrollTop;
    var scrolledClassFound  = el_html.className.match( 'scrolled' );
    
    // var scrollValue	= stickyTriggerPosition;

    if ( wScrollTop > scrolledAtPosition && !scrolledClassFound ) {
        el_html.className = (el_html.className + ' scrolled').trim();
    }

    if ( wScrollTop < scrolledAtPosition && scrolledClassFound ) {
        el_html.className = el_html.className.replace('scrolled', '').trim();
    }
}