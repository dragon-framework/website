"use strict";

export class HttpFoundation 
{
    constructor() 
    {
        this.options = {
            method: "GET",
            url: null,
            async: true,
            user: null,
            password: null,
            headers: {},
            data: {},
            timeout: 0,
            credentials: false,
            // type: this._defaultType,
            debug: false,
            onBefore: function() {
                return false;
            },
            onLoadStart: function() {
                return false;
            },
            onLoad: function() {
                return false;
            },
            onLoadEnd: function() {
                return false;
            },
            onProgress: function() {
                return false;
            },
            onError: function() {
                return false;
            },
            onAbort: function() {
                return false;
            },
            onTimeout: function() {
                return false;
            },
            onHeadersRecieved: function( type ) {
                return false;
            },
            onDone: function( response, code ) {
                return false;
            },
            onSuccess: function( response, code ) {
                return false;
            },
            onFail: function( response, code ) {
                return false;
            }
        };
    }
    
    _ajax( options ) 
    {
        var that = this;

        // Define Query Options
        // --

        options = Object.assign(this.options, options);

        // Override Header option
        options.headers = Object.assign(options.headers, {
            "X-Requested-With": "XMLHttpRequest"
        })


        // Define XHR
        // --

        let xhr;


        // On Before
        // -- 

        if ("function" == typeof(options.onBefore)) 
        {
            this._log('Do action onBefore...');
            options.onBefore( xhr );
        }
    
        this._log('Started...');
        this._log('-> Query Method : '+ options.method);
        this._log('-> Query URL : '+ options.url);


        // Define XHR
        // --

        if (xhr = this._createXhrObject())
        {
            this._log('Initialized...');

            // On load start event...
            xhr.addEventListener('loadstart', event => {
                this._log( `${event.type}: ${event.loaded} bytes transferred.` );

                if ("function" == typeof(options.onLoadStart)) 
                {
                    this._log('Do action onLoadStart...');
                    options.onLoadStart( xhr );
                }
            });

            // On load event...
            xhr.addEventListener('load', event => {
                this._log( `${event.type}: ${event.loaded} bytes transferred.` );

                if ("function" == typeof(options.onLoad)) 
                {
                    this._log('Do action onLoad...');

                    options.onLoad( xhr, xhr.response, xhr.responseType, xhr.responseURL, xhr.status, xhr.statusText );
                }
            });
            
            // On load end event...
            xhr.addEventListener('loadend', event => {
                this._log( `${event.type}: ${event.loaded} bytes transferred.` );

                if ("function" == typeof(options.onLoadEnd)) 
                {
                    this._log('Do action onLoadEnd...');
                    options.onLoadEnd( xhr, xhr.response, xhr.responseType, xhr.responseURL, xhr.status, xhr.statusText );
                }
            });

            // On prgogress event
            xhr.addEventListener('progress', event => {
                this._log( `${event.type}: ${event.loaded} bytes transferred.` );

                if ("function" == typeof(options.onProgress)) 
                {
                    this._log('Do action onProgress...');
                    options.onProgress( xhr, xhr.response, xhr.responseType, xhr.responseURL, xhr.status, xhr.statusText );
                }
            });

            // On Error
            xhr.addEventListener('error', event => {
                this._log( `${event.type}: ${event.loaded} bytes transferred.` );

                if ("function" == typeof(options.onError)) 
                {
                    this._log('Do action onError...');
                    options.onError( xhr, xhr.response, xhr.responseType, xhr.responseURL, xhr.status, xhr.statusText );
                }
            });

            // On Abort
            xhr.addEventListener('abort', event => {
                this._log( `${event.type}: ${event.loaded} bytes transferred.` );

                if ("function" == typeof(options.onAbort)) 
                {
                    this._log('Do action onAbort...');
                    options.onAbort( xhr );
                }
            });

            // On Abort
            xhr.addEventListener('timeout', event => {
                this._log( `${event.type}: ${event.loaded} bytes transferred.` );

                if ("function" == typeof(options.onTimeout)) 
                {
                    this._log('Do action onTimeout...');
                    options.onTimeout( xhr, xhr.response, xhr.responseType, xhr.responseURL, xhr.status, xhr.statusText );
                }
            });

            // State change
            xhr.onreadystatechange = function() 
            {
                switch (xhr.readyState)
                {
                    case xhr.HEADERS_RECEIVED: // 2
                        if ("function" == typeof(options.onHeadersRecieved)) 
                        {
                            that._log('Headers received...');
                            options.onHeadersRecieved( xhr, xhr.getAllResponseHeaders() );
                        }
                    break;

                    case xhr.DONE: // 4
                        let status = xhr.status;
                        
                        // Success
                        // In local files, status is 0 upon success in Mozilla Firefox
                        if (status === 0 || (status >= 200 && status < 400)) 
                        {
                            if ("function" == typeof(options.onSuccess)) 
                            {
                                that._log('Response Success...');
                                options.onSuccess( xhr, xhr.response, xhr.status, xhr.statusText, xhr.responseURL );
                            }
                        }

                        // Fail
                        else 
                        {
                            if ("function" == typeof(options.onFail)) 
                            {
                                that._log('Response fail...');
                                options.onFail( xhr, xhr.response, xhr.status, xhr.statusText, xhr.responseURL );
                            }
                        }

                        that._log('Done...');
                        if ("function" == typeof(options.onDone)) 
                        {
                            that._log('Headers received...');
                            options.onDone( xhr, xhr.status, xhr.statusText );
                        }
                    break;
                }
            }


            // Open XHR Connection
            xhr.open(options.method, options.url, options.async, options.user, options.password);

            // Timeout
            xhr.timeout = options.timeout;

            // With Credential
            xhr.withCredentials = options.credentials;

            // Define Request headers
            for (const header in options.headers) 
            {
                this._log(`Add header "${header}" with value : "${options.headers[header]}".`);

                xhr.setRequestHeader( header, options.headers[header] );
            }
            
            // Send request
            if ( options.data.length ) 
            {
                for (const data in options.data) 
                {
                    this._log(`Sending with data "${data}=${options.data[data]}"...`);
                }
            }
            else {
                this._log('Sending with no data...');
            }

            xhr.send( options.data );
        }


        // console.log("Send AJAX", options);
    }

    /**
     * Create XHR Object
     */
    _createXhrObject()
    {
        // All browser, except IE
        if (window.XMLHttpRequest) return new XMLHttpRequest();

        // For IE
        if (window.ActiveXObject)
        {
            var names = [
                "Msxml2.XMLHTTP.6.0",
                "Msxml2.XMLHTTP.3.0",
                "Msxml2.XMLHTTP",
                "Microsoft.XMLHTTP"
            ];

            for(var i in names)
            {
                try{ return new ActiveXObject(names[i]); } catch(e){}
            }
            
        }
        
        console.error("Browser does not support HTML5.");
        return false;
    }

    _log(message)
    {
        if (this.options.debug) console.log( 'xhr: '+ message );
    }

    request ( options ) { this._ajax( options ); }
    get     ( options ) { this._ajax( Object.assign( options, { method: 'GET' }) ); }
    post    ( options ) { this._ajax( Object.assign( options, { method: 'POST' }) ); }
    put     ( options ) { this._ajax( Object.assign( options, { method: 'PUT' }) ); }
    patch   ( options ) { this._ajax( Object.assign( options, { method: 'PATCH' }) ); }
    delete  ( options ) { this._ajax( Object.assign( options, { method: 'DELETE' }) ); }

}