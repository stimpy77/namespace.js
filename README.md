namespace.js
============

by Jon Davis

Small and simple function that auto-generates and establishes a deeply nested Javascript namespace without clobbering an existing match. Also natively uses WinJS's namespacing (this function becomes an alias of *WinJS.Namespace.define*) if WinJS is detected.

Example:

    namespace('a.b.c');
    a.b.c.d = {  // Does not throw an error saying "'a' does not exist"
        x: 'y'   // .. nor for that matter a.b, or a.b.c.
    };
    
    x = {};
    x.y = {};
    x.y.z = 'dog';
    namespace('x.y.z');
    alert(x.y.z); // namespace(..) did not clobber anything

For more information, check out my blog post:

http://bit.ly/UGlH70
