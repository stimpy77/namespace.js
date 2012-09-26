// Author: Jon Davis <jon@jondavis.net>
// Version: 1.0
// https://github.com/stimpy77/namespace.js

namespace = function(n) {
    var s = n.split('.');
    var exp = 'var ___v=undefined;try {___v=x} catch(e) {} if (___v===undefined)x={}';
    var e = exp.replace(/x/g, s[0]);
    eval(e);
    for (var i=1; i<s.length; i++) {
        var ns = '';
        for (var p=0; p<i; p++) {
            if (ns.length > 0) ns += '.';
            ns += s[p];
        }
        e = exp.replace(/x/g, ns);
        eval(e);
    }
}