"use strict";

import { HttpFoundation } from './HttpFoundation';

// const HttpFoundation = require('./HttpFoundation.js')

/**
 * 
 * Add clickable elements
 * -- 
 * let http = new AsyncNav({ elements: ['tr'] });
 * http.elements = ['tr'];
 * 
 */
export class AsyncNavigation {
    
    constructor( options ) 
    {
        // Plugin Options
        // --

        /* Defaults plugin Options */
        this.options = {
            elements: []
        };

        /* Merge Options with custom options */
        if (typeof options === "object")
        {
            this.options = Object.assign(this.options, options);
        }


        // Allowed Clickable Elements
        // --

        /* Default clickable elements */
        this._elements = ['a'];

        /* Add clickable element by constructor options */
        this.elements = this.options.elements;


        // Links list
        this._links = [];

        

        this._debug = false;
        this._dataHref = "data-href";
        this._dataMethod = "data-method";
        this._dataType = "data-type";
        this._dataTarget = "data-target";

        this._defaultMethod = "get";
        this._defaultType = "text/html";
        this._defaultTarget = "router-outlet";
        
        this.refresh();
    }

    /**
     * Get allowed clickable elements
     */
    get elements()
    {
        return this._elements;
    }

    /**
     * Set / Add to allowed clickable elements
     */
    set elements( elements )
    {
        this._elements = this._elements.concat( elements );
    }


    /**
     * Set clickable links
     */
    set links(links)
    {
        links.forEach( link => { this._links.push( link ); } );
    }


    refresh() {

        var that = this;

        // Build QuerySelector list
        this.elements.forEach( element => {
            
            let selector = element.concat(`[${this._dataHref}]`);
            this.links = document.querySelectorAll( selector );
            
        });

        // Click event
        this._links.forEach( link => {

            // Add css cursor
            link.style.cursor = "pointer";

            // Click on link
            link.addEventListener('click', event => {

                event.preventDefault();
                event.stopImmediatePropagation();

                let url = link.getAttribute( this._dataHref );
                let method = link.getAttribute( this._dataMethod ) || this._defaultMethod;
                let type = link.getAttribute( this._dataType ) || this._defaultType;
                let target = link.getAttribute( this._dataTarget ) || this._defaultTarget;
                
                // Prevent click on same URL
                if (window.location.href == url || window.location.pathname == url)
                {
                    return false;
                }

                let http = new HttpFoundation;
                http.request( that._requestParameters({
                    url: url,
                    method: method,
                    type: type,
                    target: target,
                }) );
                
                return false;
            });

        });

        // Navigate by History
        window.onpopstate = (event) => {
            let options = Object.assign( event.state, { _changeState: false } );
            
            let http = new HttpFoundation;
            http.request( that._requestParameters( options ) );
        };
        
    }

    _requestParameters( options ) {

        var that = this;

        return {
            method: options.method, 
            // method: "POST", 
            // headers: {
            //     "Content-Type": "application/x-www-form-urlencoded"
            // },
            // data: {
            //     'test': "yep",
            //     'test2': "Yop"
            // },
            url: options.url,
            type: options.type,
            debug: this._debug,
            onBefore: function( client ) {
                // console.log('ON BEFORE');
                // changeHistoryState(url, "-");
                return false;
            },
            onLoadStart: function( client ) {
                // console.log('ON LOAD START');
                return false;
            },
            onLoad: function( client, response, responseType, responseURL, status, statusText ) {
                // console.log('ON LOAD');
                return false;
            },
            onLoadEnd: function( client, response, responseType, responseURL, status, statusText ) {
                // console.log('ON LOAD END');
                return false;
            },
            onProgress: function( client, response, responseType, responseURL, status, statusText ) {
                // console.log('ON PROGRESS');
                return false;
            },
            onError: function( client, response, responseType, responseURL, status, statusText ) {
                // console.log('ON ERROR');
                return false;
            },
            onAbort: function( client ) {
                // console.log('ON ABORT');
                return false;
            },
            onTimeout: function( client, response, responseType, responseURL, status, statusText ) {
                // console.log('ON TIMEOUT');
                return false;
            },
            onHeadersRecieved: function( client, headers ) {
                // console.log('ON HEADERS RECEIVDED ', headers);

                // Get content type from Header
                let contentType = client.getResponseHeader("Content-Type");
                let mimeType = '';

                // Check content type result as string
                if ('string' === typeof(contentType))
                {
                    let contentTypeData = contentType.split(';');

                    if (contentTypeData[0] != undefined)
                    {
                        mimeType = contentTypeData[0];
                    }
                }
                
                // If header "content type" value is not the same as "type" variable
                if ( mimeType != options.type )
                {
                    client.abort();
                }
             
                return false;
            },
            onDone: function( client, httpCode, statusText ) {
                that.refresh();

                return false;
            },
            onSuccess: function( client, response, status, statusText, responseURL ) {

                let html  = new DOMParser().parseFromString(response, options.type);
                let title = html.title;
                
                that._changeHistoryState({
                    url: responseURL, 
                    title: title,
                    method: options.method, 
                    type: options.type,
                    target: options.target,
                    _changeState: typeof(options._changeState) == 'boolean' ? options._changeState : true
                });

                switch (status)
                {
                    case 403:
                        window.location.href = responseURL;
                    break;

                    default:
                    case 200:
                        try {
                            var segment = html.getElementById( options.target ).innerHTML;
                        }
                        catch(e){
                            var segment = response;
                        }

                        document.getElementById( options.target ).innerHTML = segment;
                }
            },
        };
    }

    /**
     * Update document address and title
     * 
     * @param {string} url 
     * @param {string} title 
     */
    _changeHistoryState( data )
    {
        if (typeof (history.pushState) != "undefined") 
        {
            // Change document title
            document.title = data.title;

            // Add element to the nav history
            if (data._changeState)
            {
                history.pushState(data, data.title, data.url);
            }

            return true;
        } 
        
        console.error("Browser does not support HTML5.");
        return false;
    }
}