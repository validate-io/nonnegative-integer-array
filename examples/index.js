'use strict';

var isValid = require( './../lib' );

console.log( isValid( [3,1,0,2] ) );
// returns true

console.log( isValid( [] ) );
// returns false

console.log( isValid( [3.14] ) );
// returns false

console.log( isValid( [0,-1] ) );
// returns false
