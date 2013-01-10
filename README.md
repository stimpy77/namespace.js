namespace.js
============

by Jon Davis

Small and simple function that auto-generates and establishes a deeply nested Javascript namespace without clobbering an existing match. 

Works independently, but will also use WinJS's namespacing if WinJS is detected (this function becomes an alias/wrapper for *WinJS.Namespace.define()/defineWithParent()*).

Example:

    namespace('a.b.c');
    a.b.c.d = {  // Does not throw an error saying "'a' does not exist"
        x: 'y'   // .. nor for that matter a.b, or a.b.c.
    };
    
    x = {};
    x.y = {};
    x.y.z = 'dog';
    namespace('x.y.z');
    alert(x.y.z); // alerts 'dog'; namespace(..) did not clobber anything

It also supports object assignment to nested namespaces.

    var ns = namespace('myapp.util', {
        add : function(p1,p2) { return p1+p2; }
    });
    alert(myapp.util.add(2,2)); // alerts '4'
    alert(ns.add(3,4)); // alerts '12

The goal is coding brevity and elegance.

For more information, check out my blog post:

http://bit.ly/UGlH70
