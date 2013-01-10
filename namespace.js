// Version: 1.2
// https://github.com/stimpy77/namespace.js

function namespace(ns, obj) {
    var g = function(){return this}();
    if (g['WinJS'] && WinJS.Namespace) { // Windows 8 apps have namespaces
        return WinJS.Namespace.define(ns, obj);
    }
    ns = ns.split('.');
    for(var i=0, n=ns.length; i<n; ++i) {
        var x = ns[i];
        if (x in g === false) {
            if (obj !== undefined && i == ns.length-1) {
                g[x] = obj;
            } else {
                g[x]={}; 
            }
        }
        g = g[x];
    }
} 
