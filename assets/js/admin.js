"use strict";

import { AsyncNavigation } from './AsyncNavigation';

/* **************************************************** */
/* Events Trigger                                       */
/* **************************************************** */

/* On document loaded */
window.addEventListener('load', function() {

    /* Init Async Nav with additionnal clickalbe elements */
    new AsyncNavigation({
        elements: ['tr']
    });

    /* Init feather Icon */
    feather.replace()

});