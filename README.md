namespace.js
============

by Jon Davis

*Very* small and simple function that auto-generates and establishes a deeply nested Javascript namespace without clobbering an existing match.

Example:

    namespace('a.b.c');
    a.b.c.d = {  // does not throw an error saying "'a' does not exist"
        x: 'y'
    };

For more information, check out my blog post:

http://bit.ly/UGlH70