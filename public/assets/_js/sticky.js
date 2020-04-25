"use strict";

function sticky()
{
    var el_html = document.documentElement;
    var el_body = document.getElementsByTagName('body')[0];
    
    var header = document.getElementById(stickyElementID),
        animationClass = "sticky-animation";

    var wScrollTop	= window.pageYOffset || el_body.scrollTop;
    var navHeight	= header.offsetHeight;

    var stickyClassRegexp   = new RegExp(stickyClass.replace('-', '\\-')),
        stickyClassFound    = el_html.className.match( stickyClassRegexp );
    var animateClassRegexp  = new RegExp(animationClass.replace('-', '\\-')),
        animateClassFound   = el_html.className.match( animateClassRegexp );
        
    var scrollValue	= stickyPosition;

    if ( wScrollTop > scrollValue && !stickyClassFound ) {
        el_html.className = (el_html.className + ' ' + stickyClass).trim();
        el_body.style.paddingTop = navHeight + 'px';
    }

    if ( wScrollTop < 2 && stickyClassFound ) {
        el_html.className = el_html.className.replace( stickyClassRegexp, '' ).trim();
        el_body.style.paddingTop = '0';
    }
    
    if (wScrollTop > stickyPosition && stickyPosition > navHeight && !animateClassFound)
    {
        el_html.className = (el_html.className + ' ' + animationClass).trim();
    }
    if ( wScrollTop < 2 && animateClassFound ) {
        el_html.className = el_html.className.replace( animateClassRegexp, '' ).trim();
    }
}