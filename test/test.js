/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isValid = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-nonnegative-integer-array', function tests() {

	it( 'should export a function', function test() {
		expect( isValid ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool = isValid( [3,1,0,2] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[Math.PI],
			[1,-2,3],
			[1,'2',3]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isValid( value );
		}
	});

});
