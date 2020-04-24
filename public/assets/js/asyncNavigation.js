"use strict";

// https://developer.mozilla.org/en-US/docs/Web/API/History_API/Example
(function(){

    var debug = false;

    var attrHref = "data-href";
    var attrType = "data-type";
    var routerOutlet = "router-outlet";
    var links = document.querySelectorAll("a["+attrHref+"]");

    window.onpopstate = function(event) {
        
        ajax({
            method: "GET", 
            url: event.state.url,
            onStart: function(){
                changeState(event.state.url, event.state.title);
            },
            onSuccess: function(response) {
                
                var html  = new DOMParser().parseFromString(response, "text/html");
                var title = html.title;
                
                changeState(event.state.url, title);

                try {
                    var segment = html.getElementById(routerOutlet).innerHTML;
                }
                catch(e){
                    var segment = response;
                }

                document.getElementById(routerOutlet).innerHTML = segment;
            }
        });
      };

    links.forEach(function(link) {
    
        link.addEventListener('click', function() {
    
            let url = this.getAttribute(attrHref);
            let contentType = this.getAttribute(attrType) || "text/html";
            
            ajax({
                method: "GET", 
                url: url,
                onStart: function(){
                    changeState(url, "-");
                },
                onSend: function(){
                },
                onHeaders: function(type){
                },
                onLoading: function(){
                },
                onSuccess: function(response) {
                    
                    var html  = new DOMParser().parseFromString(response, contentType);
                    var title = html.title;
                    
                    changeState(url, title);
    
                    try {
                        var segment = html.getElementById(routerOutlet).innerHTML;
                    }
                    catch(e){
                        var segment = response;
                    }

                    document.getElementById(routerOutlet).innerHTML = segment;
                    
                },
                onFail: function(response, code) {
                },
                onDone: function(response, code) {
                }
            });

            return false;
        });
    });


    /**
     * 
     * @param {*} options 
     * 
     * Options :
     * onStart
     * onOpen
     * onSend
     * onHeaders
     * onSuccess
     * onFail
     * onDone
     */
    function ajax( options ) 
    {
        var _options = Object.assign({
            method: "GET",
            url: null,
            onStart: function(){
                return false;
            },
            onSend: function(){
                return false;
            },
            onHeaders: function( type ){
                return false;
            },
            onLoading: function(){
                return false;
            },
            onSuccess: function( response, code ){
                return false;
            },
            onFail: function( response, code ){
                return false;
            },
            onDone: function( response, code ){
                return false;
            },
        }, options);


        if ("function" == typeof(_options.onStart))
        {
            _options.onStart();
        }
    
        if (debug)
        {
            console.info('xhr : Started...');
            console.info('xhr : -> Query Method : '+ _options.method);
            console.info('xhr : -> Query URL : '+ _options.url);
        }

        var xhr = createXhrObject();

        if (xhr)
        {
            if (debug)
            {
                console.info('xhr : Initialized...');
            }
    
            xhr.onreadystatechange = function() 
            {
                if (this.readyState == 1)
                {
                    if ("function" == typeof(_options.onSend))
                    {
                        _options.onSend();
                    }
    
                    if (debug)
                    {
                        console.info('xhr : Query sended...');
                    }
                }
                else if (this.readyState == 2)
                {
                    if ("function" == typeof(_options.onHeaders))
                    {
                        _options.onHeaders( xhr.getResponseHeader("Content-Type") );
                    } 
    
                    if (debug)
                    {
                        console.info('xhr : Headers recieved...');
                    }
                }
                else if (this.readyState == 3)
                {
                    if ("function" == typeof(_options.onLoading))
                    {
                        _options.onLoading();
                    }
    
                    if (debug)
                    {
                        console.info('xhr : Loading response...');
                    }
                }
                else if (this.readyState == 4)
                {
                    if (debug)
                    {
                        console.info('xhr : Response recieved.');
                    }
    
                    if (this.status == 200) 
                    {
                        if ("function" == typeof(_options.onSuccess))
                        {
                            _options.onSuccess( this.responseText, this.status );
                        }
    
                        if (debug)
                        {
                            console.info('xhr state : Success');
                        }
                    }
                    else
                    {
                        if ("function" == typeof(_options.onFail))
                        {
                            _options.onFail( this.responseText, this.status );
                        }
    
                        if (debug)
                        {
                            console.warn('xhr state : Fail');
                        }
                    }
                    
                    if ("function" == typeof(_options.onDone))
                    {
                        _options.onDone( this.responseText, this.status );
                    }
    
                    if (debug)
                    {
                        console.info('xhr Status : '+ this.status);
                    }
                }
            };
    
            xhr.open(_options.method, _options.url, true);
            xhr.send();
        }
    }

    /**
     * Create XHR object
     */
    function createXhrObject() 
    {
        if (window.XMLHttpRequest)
        {
            return new XMLHttpRequest();
        }

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
                try{ 
                    return new ActiveXObject(names[i]); 
                }
                catch(e){}
            }
            
        }
        
        return unsupportedBrowser();
    }

    /**
     * Update document address and title
     * 
     * @param {string} url 
     * @param {string} title 
     */
    function changeState(url, title)
    {
        if (typeof (history.pushState) != "undefined") 
        {
            var data = {
                title: title, 
                url: url 
            };

            history.pushState(data, data.title, data.url);

            return true;
        } 
        
        return unsupportedBrowser();
    }

    function unsupportedBrowser() 
    {
        console.error("Browser does not support HTML5.");
        return false;
    }

})();