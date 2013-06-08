// Version: 1.2
// https://github.com/stimpy77/namespace.js

function namespace(nss, obj) {
  var g = function () { return this ? this : window; }();
  var isWinJS = !(!(g['WinJS'])) && !(!(WinJS.Namespace));
  var ns = nss.split('.');
  for (var i = 0, n = ns.length; i < n; i++) {
    var x = ns[i];
    var exist = (x in g === true);

    if (!exist) {
        if (i == ns.length - 1 && obj !== undefined && obj !== null) {
          g[x] = obj;
        } else {
          g[x] = {};
        }
    }
    g = g[x];
  }
  return g;
}
