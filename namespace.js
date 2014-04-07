// Version: 1.3.3
// https://github.com/stimpy77/namespace.js
(function() {
  function namespace(nss, obj) {
    var g = (function () { return this ? this : window; }).call(this);
    var ns = nss.split('.');
    for (var i = 0, n = ns.length; i < n; i++) {
      var x = ns[i];
      var exist = (x in g === true);
      var isns = i == ns.length - 1 && obj !== undefined && obj !== null;
      if (!exist || isns) {
          if (isns) {
              if (typeof(obj) === 'function') {
                  var ctx = isns ? g[x] : {};
                  obj = obj.call(ctx) || ctx;
                  for (var p in ctx) { // merge
                      if (ctx.hasOwnProperty(p) && !obj.hasOwnProperty(p)) obj[p]=ctx[p];
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
  if (typeof(exports) === "undefined") {
    ((function () { return this ? this : window; }).call(this)).namespace = namespace;
  } else {exports.namespace = namespace;}  
}());
