// Version: 1.3.4
// https://github.com/stimpy77/namespace.js
(function () {
    function namespace(nss, obj) {
        var g = (function () { return this ? this : window; }).call(this);
        var ns = nss.split('.');
        for (var i = 0, n = ns.length; i < n; i++) {
            var x = ns[i];
            var exist = (x in g === true);
            var isns = i == ns.length - 1 && obj !== undefined && obj !== null;
            if (!exist || isns) {
                if (isns) {
                    if (typeof (obj) === 'function') {
                        var ctx = isns ? g[x] : {};
                        obj = obj.call(ctx) || ctx;
                        for (var p in ctx) { // merge
                            if (ctx.hasOwnProperty(p) && !obj.hasOwnProperty(p)) obj[p] = ctx[p];
                        }
                    }
                    g[x] = obj;
                } else {
                    g[x] = {};
                }
            }
            g = g[x];
        }
        return g;
    }
    if (typeof (module) !== "undefined" && !!module.exports) {
        module.exports.namespace = namespace;
    }
    var ctx = ((function () { return this ? this : window; }).call(this));
    if (!ctx.namespace) {
        ctx.namespace = namespace;
    }
    if (!ctx.globaldefine) {
        ctx.globaldefine = function globaldefine(ns, deps, obj) {
            return define(ns, deps, function () {
                return namespace.call(ctx, ns, obj);
            });
        };
    }
}());
