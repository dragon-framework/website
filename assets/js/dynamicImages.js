"use strict";

(function() {

    var dynamicImgTags = document.querySelectorAll("[data-img]");
    
    dynamicImgTags.forEach(element => {
    
        let filename = element.getAttribute( 'data-img' );
        let sourceData = require( "../images/" + filename );
    
        let source = sourceData.default.match(/^data:/) ? sourceData.default : "assets/".concat(sourceData.default);
    
        switch (element.tagName) {
            case 'LINK':
                element.href = source;
            break;
        
            default:
            case 'IMG':
                element.src = source;
            break;
        }
        
    });
    
})();