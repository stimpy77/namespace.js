namespace.js
============

by Jon Davis

Small and simple function that auto-generates and establishes a deeply nested Javascript namespace without clobbering an existing match. 

The goal is coding brevity and elegance.

Example:

    namespace('a.b.c');
    a.b.c.d = {  // Does not throw an error saying "'a' does not exist"
        x: 'y'   // .. nor for that matter a.b, or a.b.c.
    };
    
Example 2:

    x = {};
    x.y = {};
    x.y.z = 'dog';
    namespace('x.y.z');
    alert(x.y.z); // alerts 'dog'; namespace(..) did not clobber anything

It returns the specified namespace as the namespace object, and it also supports object assignment during namespace declaration.

    var ns = namespace('myapp.util', {
        add : function(p1,p2) { return p1+p2; }
    });
    alert(myapp.util.add(2,2)); // alerts '4'
    alert(ns.add(3,4)); // alerts '7'

You can also use a revealing module pattern. The context ("this") is the new namespace. Whatever is modified in the context returned is merged with the closure's output. 

    var nsimpl = namespace('a.b.impl', function() {
        var x = 1+2;
        this.y = x+2;
        return {
            x : x
        };
    });
    log(JSON.stringify({a: a})); // outputs {"a":{"b":{"impl":{"x":3,"y":5}}}}


You can wrap the context to a container namespace.

    var ab_context = namespace('a.b');
    var nsimpl = namespace.call(ab_context, 'impl', function() {
        var x = 1+2
        return {
            x : x,
            y : x+2
        };
    });
    log(JSON.stringify({a: a})); // outputs {"a":{"b":{"impl":{"x":3,"y":5}}}}

For more information on the origin of this, check out my blog post:

http://bit.ly/UGlH70
