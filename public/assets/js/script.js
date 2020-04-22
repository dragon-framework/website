"use strict";

/* **************************************************** */
/* Sticky Header                                        */
/* **************************************************** */

// Define the sticky class name
var stickyClass = "sticky-header";

// Sticky element who to apply on
var stickyElementID = "main-header";

// Start sticky a scroll position (in px)
var stickyPosition = 0;



/* **************************************************** */
/* Scrolled Class                                       */
/* **************************************************** */

// Start sticky a scroll position (in px)
var scrolledAtPosition = 50;



/* **************************************************** */
/* Events Trigger                                       */
/* **************************************************** */

window.addEventListener('scroll', function() {

    /* apply the Scrolled class */
    window.requestAnimationFrame( scrolled );

    /* Sticky header */
    window.requestAnimationFrame( sticky );

});
