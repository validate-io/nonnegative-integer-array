/**
*
*	VALIDATE: nonnegative-integer-array
*
*
*	DESCRIPTION:
*		- Validates if a value is a nonnegative integer array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );


// IS NONNEGATIVE INTEGER ARRAY //

/**
* FUNCTION: isNonNegativeIntegerArray( value )
*	Validates if a value is a nonnegative integer array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a nonnegative integer array
*/
function isNonNegativeIntegerArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isNonNegativeInteger( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isNonNegativeIntegerArray()


// EXPORTS //

module.exports = isNonNegativeIntegerArray;
