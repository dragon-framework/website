"use strict";


    /* **************************************************** */
    /* Sticky Header                                        */
    /* **************************************************** */
    
    // Define the sticky class name
    window.stickyClass = "sticky-header";
    
    // Sticky element who to apply on
    window.stickyElementID = "main-header";
    
    // Start sticky a scroll position (in px)
    window.stickyPosition = 0;
    
    
    
    /* **************************************************** */
    /* Scrolled Class                                       */
    /* **************************************************** */
    
    // Start sticky a scroll position (in px)
    window.scrolledAtPosition = 50;
    
    
    
    /* **************************************************** */
    /* Scrolled Class                                       */
    /* **************************************************** */
    window.aosConfig = {
        duration: 800,
        once: true,
    };
    
    
    
    /* **************************************************** */
    /* Events Trigger                                       */
    /* **************************************************** */
    
    /* On document loaded */
    window.addEventListener('load', function() {
    
        /* Init Animate On Scroll */
        AOS.init(aosConfig);
    
    });
    
    /* On document Scroll */
    window.addEventListener('scroll', function() {
    
        /* apply the Scrolled class */
        window.requestAnimationFrame( scrolled );
    
        /* Sticky header */
        window.requestAnimationFrame( sticky );
    
    });

