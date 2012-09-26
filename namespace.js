// Author: steve <sjakubowsi@hotmail.com>
// Maintainer: Jon Davis <jon@jondavis.net>
// Version: 1.1
// https://github.com/stimpy77/namespace.js

function namespace(ns) {
    var g = function(){return this}();
    ns = ns.split('.');
    for(var i=0, n=ns.length; i<n; ++i) {
        var x = ns[i];
        if (x in g === false) g[x]={}; 
        g = g[x];
    }
} 